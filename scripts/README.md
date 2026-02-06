# Website Audit & Outreach Pipeline

Automated pipeline to discover, audit, and qualify potential client websites using local JSON/CSV storage.

## Features

- 🔍 Website discovery and validation
- ⚡ Performance audits (Lighthouse)
- 📊 SEO and accessibility scoring
- 🎯 Lead scoring system
- 📧 Contact extraction
- ✉️ Personalized outreach message generation
- 📁 Export to CSV for manual review

## Installation

```bash
cd scripts
npm install
```

## Usage

### 1. Add Websites to Audit

Create or edit `data/input-sites.csv` with your target websites:

```csv
domain,category,location,source
example.com,SaaS,San Francisco,manual
dentist-site.com,Healthcare,New York,google_maps
lawfirm.com,Legal,Chicago,directory
```

Or add sites programmatically:

```bash
npm run add-sites
```

### 2. Run the Audit Pipeline

```bash
npm start
```

This will:
- Validate all domains
- Run performance audits
- Check SEO issues
- Score each site
- Extract contact information
- Generate outreach messages

### 3. Export Results

```bash
npm run export
```

Generates `data/qualified-leads.csv` with:
- Domain and business info
- Lead score
- Key issues found
- Contact email
- Personalized outreach message

## Data Structure

All data is stored in JSON files under `data/`:

- `sites.json` - All discovered websites
- `audits.json` - Audit results and scores
- `leads.json` - Qualified leads with contact info
- `outreach.json` - Generated outreach messages

## Configuration

Edit `src/config.js` to adjust:

- Lead scoring thresholds
- Audit criteria
- Outreach message templates
- API keys (optional)

## Lead Scoring

Sites are scored based on:
- Performance score < 60 → +3 points
- Accessibility < 70 → +2 points
- SEO score < 70 → +2 points
- Missing CTA → +3 points
- No contact form → +2 points
- Slow load time → +3 points

**Qualification threshold:** Score ≥ 7 points

## Outreach Strategy

The pipeline generates evidence-based outreach:

❌ **Generic**: "Hey, we build modern websites"

✅ **Personalized**: "Your site loads in 5.2s on mobile and has no clear conversion path — here's how we'd fix it."

## Weekly Iteration

1. Add new domains to `input-sites.csv`
2. Run `npm start`
3. Review `qualified-leads.csv`
4. Send outreach messages manually
5. Track replies and refine approach

## Notes

- Never auto-send emails blindly
- Always manually review before outreach
- Respect robots.txt and rate limits
- Use responsibly and ethically
