/**
 * Website Auditor
 * Runs performance, SEO, and UX audits on websites
 */

import axios from 'axios';
import * as cheerio from 'cheerio';
import { config } from './config.js';

export class WebsiteAuditor {
  constructor() {
    this.timeout = config.audit.timeout;
  }

  /**
   * Normalize domain URL
   */
  normalizeDomain(domain) {
    let url = domain.trim().toLowerCase();
    if (!url.startsWith('http')) {
      url = 'https://' + url;
    }
    return url;
  }

  /**
   * Check if website is reachable
   */
  async validateDomain(domain) {
    const url = this.normalizeDomain(domain);

    try {
      const response = await axios.get(url, {
        timeout: this.timeout,
        maxRedirects: 5,
        validateStatus: (status) => status >= 200 && status < 400,
      });

      return {
        valid: true,
        url: response.request.res.responseUrl || url,
        status: response.status,
      };
    } catch (error) {
      return {
        valid: false,
        error: error.message,
      };
    }
  }

  /**
   * Fetch and parse HTML
   */
  async fetchHtml(url) {
    try {
      const response = await axios.get(url, {
        timeout: this.timeout,
        headers: {
          'User-Agent': config.audit.userAgent,
        },
      });

      return {
        html: response.data,
        loadTime: response.headers['x-response-time'] || 0,
      };
    } catch (error) {
      throw new Error(`Failed to fetch HTML: ${error.message}`);
    }
  }

  /**
   * Run SEO audit
   */
  async auditSeo(url, html) {
    const $ = cheerio.load(html);
    const issues = [];
    let score = 100;

    // Check title
    const title = $('title').text();
    if (!title || title.length < 10) {
      issues.push('Missing or too short <title> tag');
      score -= 15;
    }

    // Check meta description
    const metaDesc = $('meta[name="description"]').attr('content');
    if (!metaDesc || metaDesc.length < 50) {
      issues.push('Missing or too short meta description');
      score -= 15;
    }

    // Check H1
    const h1Count = $('h1').length;
    if (h1Count === 0) {
      issues.push('No H1 tag found');
      score -= 20;
    } else if (h1Count > 1) {
      issues.push('Multiple H1 tags found');
      score -= 10;
    }

    // Check images without alt
    const imagesWithoutAlt = $('img:not([alt])').length;
    if (imagesWithoutAlt > 0) {
      issues.push(`${imagesWithoutAlt} images missing alt attributes`);
      score -= Math.min(imagesWithoutAlt * 5, 20);
    }

    // Check for sitemap and robots.txt (we'll note to check manually)
    issues.push('Remember to check sitemap.xml and robots.txt manually');

    return {
      score: Math.max(score, 0),
      issues,
      details: {
        title,
        metaDescription: metaDesc,
        h1Count,
        imagesWithoutAlt,
      },
    };
  }

  /**
   * Run UX/Conversion audit
   */
  async auditUx(url, html) {
    const $ = cheerio.load(html);
    const issues = [];
    let score = 100;

    // Check for CTA
    const ctaSelectors = ['button', '[role="button"]', 'a.cta', 'a.btn', '.button'];
    const ctaCount = $(ctaSelectors.join(',')).length;
    const hasCta = ctaCount > 0;

    if (!hasCta) {
      issues.push('No clear call-to-action buttons found');
      score -= 30;
    }

    // Check for contact form
    const hasForm = $('form').length > 0;
    const hasContactLink = $('a[href*="contact"]').length > 0 || $('a[href^="mailto:"]').length > 0;

    if (!hasForm && !hasContactLink) {
      issues.push('No contact form or contact method found');
      score -= 25;
    }

    // Check for social proof
    const hasSocialProof =
      $('*:contains("review")').length > 0 ||
      $('*:contains("testimonial")').length > 0 ||
      $('*:contains("customer")').length > 0;

    if (!hasSocialProof) {
      issues.push('No visible social proof or testimonials');
      score -= 15;
    }

    // Check for large images
    const images = $('img[src]');
    const largeImages = [];
    images.each((i, elem) => {
      const src = $(elem).attr('src');
      if (src && !src.includes('data:image')) {
        // Note: We can't actually check file size without downloading
        // This is a placeholder for manual review
      }
    });

    return {
      score: Math.max(score, 0),
      issues,
      details: {
        hasCta,
        ctaCount,
        hasContactForm: hasForm,
        hasContactLink,
        hasSocialProof,
      },
    };
  }

  /**
   * Simulate performance audit
   * (In production, use actual Lighthouse or PageSpeed Insights API)
   */
  async auditPerformance(url) {
    // For now, we'll use a simple timing check
    const startTime = Date.now();

    try {
      await axios.get(url, {
        timeout: this.timeout,
        headers: {
          'User-Agent': config.audit.userAgent,
        },
      });

      const loadTime = (Date.now() - startTime) / 1000;

      // Simple scoring based on load time
      let score = 100;
      if (loadTime > 5) score = 30;
      else if (loadTime > 3) score = 50;
      else if (loadTime > 2) score = 70;
      else if (loadTime > 1) score = 90;

      return {
        score,
        loadTime: loadTime.toFixed(2),
        issues: loadTime > 3 ? [`Slow load time: ${loadTime.toFixed(2)}s`] : [],
        details: {
          loadTime: loadTime.toFixed(2),
          // In production, add Core Web Vitals here
        },
      };
    } catch (error) {
      return {
        score: 0,
        loadTime: 0,
        issues: ['Failed to measure performance'],
        details: {},
      };
    }
  }

  /**
   * Extract contact information
   */
  async extractContact(url, html) {
    const $ = cheerio.load(html);
    const contacts = {
      emails: [],
      phones: [],
      socialLinks: [],
    };

    // Extract emails
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const mailtoLinks = $('a[href^="mailto:"]');

    mailtoLinks.each((i, elem) => {
      const href = $(elem).attr('href');
      const email = href.replace('mailto:', '').split('?')[0];
      if (email && !contacts.emails.includes(email)) {
        contacts.emails.push(email);
      }
    });

    // Find emails in text
    const bodyText = $('body').text();
    const foundEmails = bodyText.match(emailRegex) || [];
    foundEmails.forEach(email => {
      if (!contacts.emails.includes(email) && !email.includes('example.com')) {
        contacts.emails.push(email);
      }
    });

    // Extract phone numbers (basic)
    const phoneRegex = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    const foundPhones = bodyText.match(phoneRegex) || [];
    contacts.phones = [...new Set(foundPhones)].slice(0, 3);

    // Extract social links
    const socialDomains = ['facebook.com', 'twitter.com', 'linkedin.com', 'instagram.com'];
    $('a[href]').each((i, elem) => {
      const href = $(elem).attr('href');
      if (href && socialDomains.some(domain => href.includes(domain))) {
        contacts.socialLinks.push(href);
      }
    });

    return contacts;
  }

  /**
   * Run complete audit on a website
   */
  async runFullAudit(domain) {
    try {
      console.log(`\n🔍 Auditing: ${domain}`);

      // Step 1: Validate domain
      const validation = await this.validateDomain(domain);
      if (!validation.valid) {
        return {
          success: false,
          error: validation.error,
        };
      }

      const url = validation.url;

      // Step 2: Fetch HTML
      const { html } = await this.fetchHtml(url);

      // Step 3: Run audits in parallel
      const [seoAudit, uxAudit, perfAudit] = await Promise.all([
        this.auditSeo(url, html),
        this.auditUx(url, html),
        this.auditPerformance(url),
      ]);

      // Step 4: Extract contact info
      const contacts = await this.extractContact(url, html);

      return {
        success: true,
        url,
        seo: seoAudit,
        ux: uxAudit,
        performance: perfAudit,
        contacts,
        auditedAt: new Date().toISOString(),
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
}
