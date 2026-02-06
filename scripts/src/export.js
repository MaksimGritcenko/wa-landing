#!/usr/bin/env node

/**
 * Export Script
 * Export qualified leads to CSV
 */

import fs from 'fs/promises';
import { createObjectCsvWriter } from 'csv-writer';
import chalk from 'chalk';
import ora from 'ora';
import { db } from './database.js';
import { config } from './config.js';

async function exportToCsv() {
  const spinner = ora('Loading audited sites...').start();

  try {
    // Get ALL audited sites (not just qualified leads)
    const sites = await db.getSites();
    const audits = await db.getAudits();
    const leads = await db.getLeads();
    const messages = await db.getOutreachMessages();

    // Get all audited sites
    const auditedSites = sites
      .filter(s => s.status === 'audited')
      .map(site => {
        const audit = audits.find(a => a.siteId === site.id);
        const lead = leads.find(l => l.siteId === site.id);
        const message = messages.find(m => m.siteId === site.id);

        // Calculate score from lead or audit
        let score = lead?.score || 0;

        // If not a lead, calculate basic score from audit
        if (!lead && audit) {
          if (audit.performance.score < 60) score += 3;
          if (audit.seo.score < 70) score += 2;
          if (audit.ux.score < 70) score += 2;
        }

        return {
          siteId: site.id,
          domain: site.domain,
          category: site.category,
          location: site.location,
          score,
          summary: lead?.summary || 'No issues found - site performing well',
          issues: lead?.issues || [],
          topIssues: lead?.topIssues || [],
          contacts: lead?.contacts || audit?.contacts || {},
          site,
          audit,
          message,
        };
      });

    if (auditedSites.length === 0) {
      spinner.warn('No audited sites found');
      console.log(chalk.gray('Run the audit pipeline first: npm start\n'));
      return;
    }

    spinner.succeed(`Found ${auditedSites.length} audited sites`);

    // Prepare CSV data
    const csvData = auditedSites.map(lead => ({
      domain: lead.domain,
      category: lead.site?.category || 'Unknown',
      location: lead.site?.location || '',
      leadScore: lead.score,
      summary: lead.summary,
      performanceScore: lead.audit?.performance?.score || 0,
      seoScore: lead.audit?.seo?.score || 0,
      uxScore: lead.audit?.ux?.score || 0,
      loadTime: lead.audit?.performance?.loadTime || 0,
      topIssue1: lead.topIssues?.[0] || '',
      topIssue2: lead.topIssues?.[1] || '',
      topIssue3: lead.topIssues?.[2] || '',
      emails: lead.contacts?.emails?.join('; ') || '',
      phones: lead.contacts?.phones?.join('; ') || '',
      emailSubject: lead.message?.email?.subject || '',
      emailBody: lead.message?.email?.body || '',
      linkedInMessage: lead.message?.linkedIn?.message || '',
      auditedAt: lead.audit?.auditedAt || '',
    }));

    // Create CSV writer
    const csvWriter = createObjectCsvWriter({
      path: config.paths.outputCsv,
      header: [
        { id: 'domain', title: 'Domain' },
        { id: 'category', title: 'Category' },
        { id: 'location', title: 'Location' },
        { id: 'leadScore', title: 'Lead Score' },
        { id: 'summary', title: 'Summary' },
        { id: 'performanceScore', title: 'Performance Score' },
        { id: 'seoScore', title: 'SEO Score' },
        { id: 'uxScore', title: 'UX Score' },
        { id: 'loadTime', title: 'Load Time (s)' },
        { id: 'topIssue1', title: 'Top Issue 1' },
        { id: 'topIssue2', title: 'Top Issue 2' },
        { id: 'topIssue3', title: 'Top Issue 3' },
        { id: 'emails', title: 'Email Addresses' },
        { id: 'phones', title: 'Phone Numbers' },
        { id: 'emailSubject', title: 'Email Subject' },
        { id: 'emailBody', title: 'Email Body' },
        { id: 'linkedInMessage', title: 'LinkedIn Message' },
        { id: 'auditedAt', title: 'Audited At' },
      ],
    });

    const writeSpinner = ora('Writing CSV file...').start();
    await csvWriter.writeRecords(csvData);
    writeSpinner.succeed(chalk.green(`CSV exported to: ${config.paths.outputCsv}`));

    // Print summary
    console.log(chalk.bold.cyan('\n📊 Export Summary:\n'));
    console.log(chalk.white(`  Total sites: ${auditedSites.length}`));
    console.log(chalk.green(`  Qualified leads (score ≥ 7): ${auditedSites.filter(l => l.score >= 7).length}`));
    console.log(chalk.cyan(`  Good sites (score < 7): ${auditedSites.filter(l => l.score < 7).length}`));
    console.log(chalk.green(`  With email: ${auditedSites.filter(l => l.contacts?.emails?.length > 0).length}`));
    console.log(chalk.yellow(`  Without email: ${auditedSites.filter(l => !l.contacts?.emails?.length).length}`));

    const avgScore = (auditedSites.reduce((sum, l) => sum + l.score, 0) / auditedSites.length).toFixed(1);
    console.log(chalk.white(`  Average score: ${avgScore}`));
    console.log();

    // Show all sites sorted by score
    const sortedSites = [...auditedSites].sort((a, b) => b.score - a.score);
    console.log(chalk.bold.cyan('📋 All Sites (sorted by score):\n'));
    sortedSites.forEach((lead, index) => {
      const scoreColor = lead.score >= 7 ? chalk.red : chalk.green;
      console.log(chalk.white(`${index + 1}. ${lead.domain}`));
      console.log(scoreColor(`   Score: ${lead.score}`) + chalk.gray(` | ${lead.summary}`));
      console.log(chalk.gray(`   Email: ${lead.contacts?.emails?.[0] || 'Not found'}`));
      console.log();
    });
  } catch (error) {
    spinner.fail(`Export failed: ${error.message}`);
    throw error;
  }
}

exportToCsv().catch(error => {
  console.error(chalk.red('Error:'), error);
  process.exit(1);
});
