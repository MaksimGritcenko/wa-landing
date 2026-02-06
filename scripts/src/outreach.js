/**
 * Outreach Message Generator
 */

import { config } from './config.js';

export class OutreachGenerator {
  /**
   * Generate personalized outreach message
   */
  generateMessage(site, auditResult, scoringResult, contacts) {
    const businessName = this.extractBusinessName(site.domain);
    const topIssues = scoringResult.topIssues || [];

    // Format issues as bullet points
    const issuesText = topIssues
      .map((issue, index) => `${index + 1}. ${issue}`)
      .join('\n');

    // Generate email
    const email = {
      subject: this.generateSubject(businessName, site.domain),
      body: this.generateEmailBody(businessName, site.domain, issuesText, contacts.emails[0]),
    };

    // Generate LinkedIn message
    const linkedIn = {
      message: this.generateLinkedInMessage(businessName, site.domain, topIssues[0]),
    };

    return {
      email,
      linkedIn,
      generatedAt: new Date().toISOString(),
    };
  }

  /**
   * Generate email subject
   */
  generateSubject(businessName, domain) {
    const templates = [
      `Quick question about ${businessName}'s website`,
      `${businessName} - website performance insight`,
      `Noticed something about ${domain}`,
      `${businessName}'s website could be performing better`,
    ];

    // Pick a random template
    return templates[Math.floor(Math.random() * templates.length)];
  }

  /**
   * Generate email body
   */
  generateEmailBody(businessName, domain, issuesText, email) {
    const name = email ? this.guessNameFromEmail(email) : 'there';

    let body = `Hi ${name},

I was checking out ${domain} and noticed a few things that might be costing you conversions:

${issuesText}

These are quick wins that could improve your user experience and revenue.

Would you be open to a free 15-minute audit call? I can walk you through specific fixes and share a detailed report.

Best regards,
[Your Name]
[Your Company]`;

    return body;
  }

  /**
   * Generate LinkedIn message
   */
  generateLinkedInMessage(businessName, domain, topIssue) {
    return `Hi! I was reviewing ${domain} and noticed ${topIssue.toLowerCase()}. Would you be open to a quick chat about improving your site's performance?`;
  }

  /**
   * Extract business name from domain
   */
  extractBusinessName(domain) {
    // Remove TLD and common prefixes
    let name = domain
      .replace(/^(https?:\/\/)?(www\.)?/, '')
      .replace(/\.(com|net|org|io|co|ai|dev)$/, '')
      .replace(/[-_]/g, ' ');

    // Capitalize first letter of each word
    name = name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return name;
  }

  /**
   * Guess name from email address
   */
  guessNameFromEmail(email) {
    if (!email) return 'there';

    const localPart = email.split('@')[0];

    // Common patterns: firstname.lastname, firstname_lastname, firstnamelastname
    if (localPart.includes('.')) {
      const parts = localPart.split('.');
      return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    }

    if (localPart.includes('_')) {
      const parts = localPart.split('_');
      return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    }

    // Skip generic emails
    const genericEmails = ['info', 'contact', 'hello', 'support', 'admin'];
    if (genericEmails.includes(localPart.toLowerCase())) {
      return 'there';
    }

    return localPart.charAt(0).toUpperCase() + localPart.slice(1);
  }
}
