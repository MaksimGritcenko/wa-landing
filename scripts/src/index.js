#!/usr/bin/env node

/**
 * Main Pipeline Script
 * Runs the complete audit and lead generation pipeline
 */

import chalk from 'chalk';
import ora from 'ora';
import { db } from './database.js';
import { WebsiteAuditor } from './auditor.js';
import { LeadScorer } from './scorer.js';
import { OutreachGenerator } from './outreach.js';

class Pipeline {
  constructor() {
    this.auditor = new WebsiteAuditor();
    this.scorer = new LeadScorer();
    this.outreach = new OutreachGenerator();
  }

  async run() {
    console.log(chalk.bold.cyan('\n🚀 Starting Website Audit Pipeline\n'));

    // Step 1: Load sites
    const spinner = ora('Loading websites...').start();
    const sites = await db.getSites();

    if (sites.length === 0) {
      spinner.fail('No websites found. Add sites first using npm run add-sites');
      return;
    }

    spinner.succeed(`Loaded ${sites.length} websites`);

    // Step 2: Filter pending sites
    const pendingSites = sites.filter(s => s.status === 'pending' || s.status === 'validated');
    console.log(chalk.gray(`Found ${pendingSites.length} sites to audit\n`));

    // Step 3: Run audits
    let processed = 0;
    let qualified = 0;

    for (const site of pendingSites) {
      const siteSpinner = ora(`Auditing ${site.domain}...`).start();

      try {
        // Run audit
        const auditResult = await this.auditor.runFullAudit(site.domain);

        if (!auditResult.success) {
          siteSpinner.fail(`Failed: ${site.domain} - ${auditResult.error}`);
          await db.updateSite(site.id, { status: 'failed', error: auditResult.error });
          continue;
        }

        // Save audit
        await db.saveAudit(site.id, auditResult);

        // Calculate score
        const scoringResult = this.scorer.calculateScore(auditResult);
        const topIssues = this.scorer.getTopIssues(scoringResult);

        // Save lead if qualified
        if (scoringResult.qualified) {
          await db.saveLead({
            siteId: site.id,
            domain: site.domain,
            score: scoringResult.score,
            issues: scoringResult.issues,
            topIssues,
            summary: scoringResult.summary,
            contacts: auditResult.contacts,
          });

          // Generate outreach message
          const message = this.outreach.generateMessage(
            site,
            auditResult,
            { ...scoringResult, topIssues },
            auditResult.contacts
          );

          await db.saveOutreachMessage(site.id, message);

          qualified++;
          siteSpinner.succeed(
            chalk.green(`${site.domain} - QUALIFIED (Score: ${scoringResult.score})`)
          );
        } else {
          siteSpinner.warn(
            chalk.yellow(`${site.domain} - Not qualified (Score: ${scoringResult.score})`)
          );
        }

        // Update site status
        await db.updateSite(site.id, {
          status: 'audited',
          lastAuditAt: new Date().toISOString(),
        });

        processed++;
      } catch (error) {
        siteSpinner.fail(`Error: ${site.domain} - ${error.message}`);
        await db.updateSite(site.id, { status: 'error', error: error.message });
      }

      // Rate limiting: wait 1 second between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Summary
    console.log(chalk.bold.green(`\n✅ Pipeline Complete!\n`));
    console.log(chalk.white(`  Processed: ${processed} sites`));
    console.log(chalk.green(`  Qualified: ${qualified} leads`));
    console.log(chalk.gray(`  Failed: ${sites.filter(s => s.status === 'failed').length} sites\n`));

    if (qualified > 0) {
      console.log(chalk.cyan('📊 Run "npm run export" to export qualified leads to CSV\n'));
    }
  }
}

// Run pipeline
const pipeline = new Pipeline();
pipeline.run().catch(error => {
  console.error(chalk.red('\n❌ Pipeline failed:'), error);
  process.exit(1);
});
