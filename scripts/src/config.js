/**
 * Pipeline Configuration
 */

export const config = {
  // Lead scoring thresholds
  scoring: {
    performanceThreshold: 60,
    accessibilityThreshold: 70,
    seoThreshold: 70,
    qualificationScore: 7, // Minimum score to qualify as a lead
  },

  // Scoring weights
  weights: {
    lowPerformance: 3,
    lowAccessibility: 2,
    lowSeo: 2,
    noCta: 3,
    noContactForm: 2,
    slowLoadTime: 3,
    outdatedTech: 3,
    noMetaDescription: 2,
    missingH1: 2,
  },

  // Audit settings
  audit: {
    timeout: 30000, // 30 seconds
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    maxRetries: 3,
  },

  // Data file paths
  paths: {
    sites: './data/sites.json',
    audits: './data/audits.json',
    leads: './data/leads.json',
    outreach: './data/outreach.json',
    inputCsv: './data/input-sites.csv',
    outputCsv: './data/qualified-leads.csv',
  },

  // Outreach templates
  templates: {
    emailSubject: 'Quick question about {{businessName}}\'s website',

    emailBody: `Hi {{name}},

I was checking out {{domain}} and noticed a few things that might be costing you conversions:

{{issues}}

These are quick wins that could improve your user experience and revenue.

Would you be open to a free 15-minute audit call? I can walk you through specific fixes.

Best,
[Your Name]`,

    linkedInMessage: `Hi {{name}}, I noticed {{domain}} has some performance issues that might be hurting conversions. Would you be open to a quick chat about it?`,
  },

  // Issue descriptions (business language, not technical jargon)
  issueDescriptions: {
    lowPerformance: 'Your site takes {{loadTime}}s to load on mobile - most visitors leave after 3 seconds',
    lowAccessibility: 'Accessibility issues could be limiting your audience reach',
    lowSeo: 'SEO gaps are making it harder for customers to find you on Google',
    noCta: 'No clear call-to-action above the fold - visitors don\'t know what to do next',
    noContactForm: 'Missing contact form makes it hard for customers to reach you',
    slowLoadTime: 'Slow page speed is driving potential customers away',
    outdatedTech: 'Outdated technology could have security risks',
    noMetaDescription: 'Missing meta descriptions hurt your Google search appearance',
    missingH1: 'Poor page structure makes it harder for search engines to understand your content',
  },
};
