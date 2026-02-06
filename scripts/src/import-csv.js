#!/usr/bin/env node

/**
 * Auto-import CSV Script (Non-interactive)
 */

import fs from 'fs/promises';
import { parse } from 'csv-parse/sync';
import chalk from 'chalk';
import { db } from './database.js';
import { config } from './config.js';

async function importFromCsv() {
  console.log(chalk.bold.cyan('\n📥 Importing sites from CSV...\n'));

  try {
    const fileContent = await fs.readFile(config.paths.inputCsv, 'utf-8');
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    console.log(chalk.gray(`Found ${records.length} sites in CSV\n`));

    let added = 0;
    let skipped = 0;

    for (const record of records) {
      const result = await db.addSite({
        domain: record.domain,
        category: record.category || 'Unknown',
        location: record.location || '',
        source: record.source || 'csv_import',
      });

      if (result.success) {
        added++;
        console.log(chalk.green(`✓ Added: ${record.domain}`));
      } else {
        skipped++;
        console.log(chalk.yellow(`⊘ Skipped: ${record.domain} (${result.message})`));
      }
    }

    console.log(chalk.bold.cyan(`\n📊 Import Summary:`));
    console.log(chalk.green(`  Added: ${added}`));
    console.log(chalk.yellow(`  Skipped: ${skipped}\n`));

    if (added > 0) {
      console.log(chalk.cyan('✨ Run "npm start" to audit these websites\n'));
    }
  } catch (error) {
    console.error(chalk.red(`\n✗ Failed to import: ${error.message}\n`));
    process.exit(1);
  }
}

importFromCsv();
