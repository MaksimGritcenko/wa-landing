/**
 * Lead Scoring System
 */

import { config } from './config.js';

export class LeadScorer {
  /**
   * Calculate lead score based on audit results
   */
  calculateScore(auditResult) {
    let score = 0;
    const issues = [];
    const { seo, ux, performance } = auditResult;
    const { weights, scoring } = config;

    // Performance scoring
    if (performance.score < scoring.performanceThreshold) {
      score += weights.lowPerformance;
      issues.push({
        type: 'lowPerformance',
        severity: 'high',
        message: `Performance score: ${performance.score}/100`,
        loadTime: performance.loadTime,
      });
    }

    // SEO scoring
    if (seo.score < scoring.seoThreshold) {
      score += weights.lowSeo;
      issues.push({
        type: 'lowSeo',
        severity: 'medium',
        message: `SEO score: ${seo.score}/100`,
        details: seo.issues,
      });
    }

    // Check for missing meta description
    if (seo.issues.some(issue => issue.includes('meta description'))) {
      score += weights.noMetaDescription;
      issues.push({
        type: 'noMetaDescription',
        severity: 'medium',
        message: 'Missing meta descriptions hurt search visibility',
      });
    }

    // Check for H1 issues
    if (seo.issues.some(issue => issue.includes('H1'))) {
      score += weights.missingH1;
      issues.push({
        type: 'missingH1',
        severity: 'medium',
        message: 'Poor heading structure affects SEO',
      });
    }

    // UX scoring
    if (!ux.details.hasCta) {
      score += weights.noCta;
      issues.push({
        type: 'noCta',
        severity: 'high',
        message: 'No clear call-to-action above the fold',
      });
    }

    if (!ux.details.hasContactForm && !ux.details.hasContactLink) {
      score += weights.noContactForm;
      issues.push({
        type: 'noContactForm',
        severity: 'high',
        message: 'No easy way for customers to contact you',
      });
    }

    // Load time scoring
    const loadTime = parseFloat(performance.loadTime);
    if (loadTime > 3) {
      score += weights.slowLoadTime;
      issues.push({
        type: 'slowLoadTime',
        severity: 'high',
        message: `Slow load time (${loadTime}s) drives visitors away`,
        loadTime: loadTime.toFixed(2),
      });
    }

    return {
      score,
      issues,
      qualified: score >= scoring.qualificationScore,
      summary: this.generateSummary(score, issues),
    };
  }

  /**
   * Generate human-readable summary
   */
  generateSummary(score, issues) {
    if (score < 5) {
      return 'Low priority - minor improvements needed';
    } else if (score < 10) {
      return 'Medium priority - significant improvement potential';
    } else {
      return 'High priority - major issues affecting conversions';
    }
  }

  /**
   * Get top 3 most critical issues for outreach
   */
  getTopIssues(scoringResult, limit = 3) {
    const severityOrder = { high: 3, medium: 2, low: 1 };

    return scoringResult.issues
      .sort((a, b) => severityOrder[b.severity] - severityOrder[a.severity])
      .slice(0, limit)
      .map(issue => this.formatIssueForOutreach(issue));
  }

  /**
   * Format issue in business language
   */
  formatIssueForOutreach(issue) {
    const descriptions = config.issueDescriptions;

    switch (issue.type) {
      case 'lowPerformance':
      case 'slowLoadTime':
        return descriptions.lowPerformance.replace('{{loadTime}}', issue.loadTime || '5+');

      case 'lowSeo':
        return descriptions.lowSeo;

      case 'noCta':
        return descriptions.noCta;

      case 'noContactForm':
        return descriptions.noContactForm;

      case 'noMetaDescription':
        return descriptions.noMetaDescription;

      case 'missingH1':
        return descriptions.missingH1;

      default:
        return issue.message;
    }
  }
}
