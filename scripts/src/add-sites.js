#!/usr/bin/env node

/**
 * Add Sites Script
 * Import sites from CSV or add manually
 */

import fs from 'fs/promises';
import { parse } from 'csv-parse/sync';
import chalk from 'chalk';
import ora from 'ora';
import { db } from './database.js';
import { config } from './config.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function importFromCsv(filePath) {
  const spinner = ora('Reading CSV file...').start();

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    spinner.succeed(`Found ${records.length} sites in CSV`);

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
    console.log(chalk.yellow(`  Skipped: ${skipped}`));
    console.log();
  } catch (error) {
    spinner.fail(`Failed to import: ${error.message}`);
    throw error;
  }
}

async function addManually() {
  console.log(chalk.bold.cyan('\n📝 Add Website Manually\n'));

  const domain = await question('Domain (e.g., example.com): ');
  const category = await question('Category (e.g., SaaS, Healthcare, Legal): ');
  const location = await question('Location (optional): ');

  const result = await db.addSite({
    domain: domain.trim(),
    category: category.trim() || 'Unknown',
    location: location.trim() || '',
    source: 'manual',
  });

  if (result.success) {
    console.log(chalk.green(`\n✓ ${result.message}\n`));
  } else {
    console.log(chalk.red(`\n✗ ${result.message}\n`));
  }
}

async function createSampleCsv() {
  const sampleData = `domain,category,location,source
example.com,SaaS,San Francisco,manual
dentist-site.com,Healthcare,New York,google_maps
lawfirm.com,Legal,Chicago,directory
fitness-gym.com,Fitness,Los Angeles,manual
restaurant.com,Food & Beverage,Austin,google_maps`;

  await fs.writeFile(config.paths.inputCsv, sampleData, 'utf-8');
  console.log(chalk.green(`\n✓ Sample CSV created at: ${config.paths.inputCsv}\n`));
  console.log(chalk.gray('Edit this file and run again to import your sites.\n'));
}

async function main() {
  console.log(chalk.bold.cyan('\n🌐 Website Import Tool\n'));
  console.log('1. Import from CSV');
  console.log('2. Add website manually');
  console.log('3. Create sample CSV template');
  console.log('4. Exit\n');

  const choice = await question('Choose an option (1-4): ');

  switch (choice.trim()) {
    case '1':
      try {
        await fs.access(config.paths.inputCsv);
        await importFromCsv(config.paths.inputCsv);
      } catch (error) {
        console.log(chalk.red(`\n✗ CSV file not found at: ${config.paths.inputCsv}`));
        console.log(chalk.gray('Run option 3 to create a sample template.\n'));
      }
      break;

    case '2':
      await addManually();
      break;

    case '3':
      await createSampleCsv();
      break;

    case '4':
      console.log(chalk.gray('Goodbye!\n'));
      break;

    default:
      console.log(chalk.red('Invalid option\n'));
  }

  rl.close();
}

main().catch(error => {
  console.error(chalk.red('Error:'), error);
  rl.close();
  process.exit(1);
});
