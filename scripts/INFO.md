# What the Audit Script Does (Simple Explanation)

## 📥 **Step 1: Import Websites**
```bash
npm run import
```
- Reads `data/input-sites.csv` file
- Takes website URLs you want to analyze
- Saves them to `data/sites.json` (local database)
- Marks them as "pending" for audit

---

## 🔍 **Step 2: Run Audits**
```bash
npm start
```

For each website, it does:

### **A. Validate the Website**
- ✅ Checks if the website is online
- ✅ Follows redirects (http → https)
- ✅ Confirms it gets a valid response (200 status)

### **B. Download the HTML**
- 📄 Fetches the website's homepage HTML
- ⏱️ Measures how long it takes to load

### **C. SEO Audit** (Checks search engine optimization)
- Looks for `<title>` tag (page title)
- Looks for `<meta description>` tag
- Counts H1 headings (should be exactly 1)
- Finds images without `alt` attributes
- **Scores it:** 0-100 (100 = perfect SEO)

### **D. UX Audit** (Checks user experience)
- Looks for call-to-action buttons (CTA)
- Looks for contact forms or mailto: links
- Looks for social proof (reviews, testimonials)
- **Scores it:** 0-100 (100 = great UX)

### **E. Performance Audit**
- Measures load time in seconds
- Fast (< 1s) = 100 score
- Slow (> 5s) = 30 score
- **Scores it:** 0-100 (100 = fast)

### **F. Extract Contact Info**
- Searches for email addresses in HTML
- Finds `mailto:` links
- Extracts phone numbers
- Finds social media links (Facebook, LinkedIn, etc.)

### **G. Calculate Lead Score** (Is this a good opportunity?)
Gives points for problems found:
- Performance < 60? → +3 points
- SEO < 70? → +2 points
- No CTA button? → +3 points
- No contact form? → +2 points
- Slow load time? → +3 points
- Missing meta description? → +2 points

**Total score ≥ 7 = "Qualified Lead"** (worth reaching out to)

### **H. Generate Outreach Messages**
For qualified leads (score ≥ 7):
- Creates personalized email subject
- Writes email body with top 3 issues found
- Creates LinkedIn message variation
- Uses business language (not technical jargon)

### **I. Save Everything**
- `data/sites.json` - Website info & status
- `data/audits.json` - Full audit results
- `data/leads.json` - Qualified leads only (score ≥ 7)
- `data/outreach.json` - Generated messages

---

## 📊 **Step 3: Export Results**
```bash
npm run export
```
- Reads all audited sites from JSON files
- Creates a CSV file (`data/qualified-leads.csv`)
- Each row = 1 website with:
  - Domain name
  - Category & location
  - Lead score
  - Performance/SEO/UX scores
  - Top 3 issues found
  - Email addresses found
  - Phone numbers found
  - Pre-written outreach email
  - Pre-written LinkedIn message
- Shows summary in terminal

---

## 🎯 **What You Get**

### Example Output:

| Domain | Score | Top Issues | Email | Outreach Message |
|--------|-------|------------|-------|------------------|
| example.com | 9 | No CTA, Slow load (5.2s), No contact form | info@example.com | "Hi, I noticed example.com takes 5.2s to load..." |
| dentist.com | 7 | Missing H1, No meta description | contact@dentist.com | "Hi, your site is missing key SEO elements..." |

---

## 🔒 **What It Does NOT Do**

❌ Does NOT send any emails automatically
❌ Does NOT store data in external database
❌ Does NOT upload data anywhere
❌ Does NOT modify the target websites
❌ Does NOT hack or break into websites
❌ Does NOT scrape private data

---

## 💡 **Real-World Example**

**Input:** You add `slowwebsite.com` to CSV

**The script:**
1. ✅ Visits slowwebsite.com
2. 📊 Finds: Load time = 6.2s, No H1, No CTA
3. 🎯 Calculates score = 8 points (qualified lead)
4. 📧 Generates: "Your site takes 6.2s to load on mobile - most visitors leave after 3 seconds..."
5. 💾 Saves to CSV with email: sales@slowwebsite.com

**You then:**
- Open the CSV
- Review the findings
- Manually send the personalized email
- Book a call with the business owner

---

## 📁 **File Structure**

```
scripts/
├── src/
│   ├── index.js           # Main audit pipeline
│   ├── import-csv.js      # Import websites from CSV
│   ├── export.js          # Export results to CSV
│   ├── auditor.js         # Website audit engine
│   ├── scorer.js          # Lead scoring logic
│   ├── outreach.js        # Message generator
│   ├── database.js        # JSON file manager
│   └── config.js          # Settings & thresholds
├── data/
│   ├── input-sites.csv    # Your target websites (INPUT)
│   ├── sites.json         # All websites (auto-generated)
│   ├── audits.json        # Audit results (auto-generated)
│   ├── leads.json         # Qualified leads (auto-generated)
│   ├── outreach.json      # Generated messages (auto-generated)
│   └── qualified-leads.csv # Final export (OUTPUT)
├── package.json           # Dependencies
├── README.md              # Installation & usage
├── STRATEGY.md            # Outreach strategy guide
└── INFO.md                # This file
```

---

## 🚀 **Quick Start**

### 1. Install
```bash
cd scripts
npm install
```

### 2. Add websites to `data/input-sites.csv`
```csv
domain,category,location,source
example.com,SaaS,California,manual
dentist.com,Healthcare,New York,google
```

### 3. Import websites
```bash
npm run import
```

### 4. Run audits
```bash
npm start
```

### 5. Export results
```bash
npm run export
```

### 6. Open `data/qualified-leads.csv`
Review the findings and send outreach emails manually!

---

## 🎨 **Customization**

### Adjust Lead Scoring

Edit `src/config.js`:

```javascript
scoring: {
  performanceThreshold: 60,    // Lower = more leads
  accessibilityThreshold: 70,
  seoThreshold: 70,
  qualificationScore: 7,       // Minimum score to qualify
}
```

### Change Issue Weights

```javascript
weights: {
  lowPerformance: 3,    // How many points for slow site
  lowSeo: 2,           // How many points for bad SEO
  noCta: 3,            // How many points for no CTA
  // etc...
}
```

### Customize Email Templates

Edit the templates in `src/config.js`:

```javascript
templates: {
  emailSubject: 'Quick question about {{businessName}}\'s website',
  emailBody: `Hi {{name}}, I noticed...`,
  linkedInMessage: `Hi {{name}}, ...`,
}
```

---

## 📊 **Lead Scoring Breakdown**

### How Scores Work

| Issue | Points | Why It Matters |
|-------|--------|----------------|
| Performance < 60 | +3 | Slow sites lose 40% of visitors |
| SEO < 70 | +2 | Missing out on organic traffic |
| No CTA | +3 | Visitors don't know what to do |
| No Contact Form | +2 | Losing conversion opportunities |
| Slow Load (>3s) | +3 | Mobile users leave quickly |
| No Meta Description | +2 | Poor Google search appearance |
| Missing H1 | +2 | Search engines can't understand content |

**Qualification:** Score ≥ 7 means website has serious issues worth fixing

---

## 🔄 **Weekly Workflow**

### Week 1
1. Research 50-100 potential client websites
2. Add to `input-sites.csv`
3. Run `npm run import`
4. Run `npm start` (audits all sites)
5. Run `npm run export`
6. Review qualified leads in CSV
7. Send 10-20 personalized emails

### Week 2
1. Follow up with non-responders
2. Add 50-100 new websites
3. Repeat process
4. Track which industries respond best

### Week 3-4
- Refine lead scoring based on responses
- Update email templates based on what works
- Focus on high-converting industries
- Build case studies from closed deals

---

## 📈 **Expected Results**

### Conservative Estimates

**Per 100 websites audited:**
- 30-40 qualified leads (score ≥ 7)
- 15-20 with valid email addresses
- 2-4 positive email responses
- 1-2 discovery calls booked
- 0.5-1 deals closed per month

**Monthly (400 sites audited):**
- 120-160 qualified leads
- 60-80 emails sent
- 8-16 positive responses
- 4-8 calls booked
- 2-4 deals closed

---

## 🛡️ **Privacy & Ethics**

### What's Ethical
✅ Analyzing publicly available websites
✅ Reading public HTML/CSS
✅ Finding public contact information
✅ Offering genuine value
✅ Respecting opt-outs

### What's NOT Ethical
❌ Auto-sending spam emails
❌ Scraping private data
❌ Ignoring unsubscribe requests
❌ Over-promising results
❌ Aggressive follow-ups

**Golden Rule:** Only reach out if you can genuinely help them improve their website.

---

## 🔧 **Troubleshooting**

### "No websites found"
→ Run `npm run import` first to load CSV

### "Failed to fetch HTML"
→ Website might be blocking bots or offline
→ Check if URL is correct (with https://)

### "No qualified leads"
→ Lower `qualificationScore` in `config.js`
→ Or target worse-performing websites

### "No email addresses found"
→ Many sites hide emails behind contact forms
→ Use LinkedIn or manual research for contacts

### Scripts folder visible on GitHub
→ It's safe! GitHub Pages only serves `/dist` folder
→ Audit data (`.json` files) is already gitignored

---

## 💰 **ROI Example**

### Investment
- Time: 2-3 hours/week
- Cost: $0 (free tools)

### Results (after 3 months)
- Sites audited: 1,200
- Qualified leads: 360
- Emails sent: 180
- Calls booked: 18
- Deals closed: 6
- Avg deal: $5,000
- **Total revenue: $30,000**

**ROI: Infinite** (no cost, pure time investment)

---

## 🎯 **Summary in One Sentence**

**The script automatically finds websites with problems (slow, poor SEO, no contact forms), scores how bad the problems are, extracts contact info, and writes personalized outreach emails for you - all saved in a CSV for manual review.**

---

## 📚 **Additional Resources**

- **README.md** - Installation & basic usage
- **STRATEGY.md** - Complete outreach strategy guide
- **script.md** - Original technical specification
- **src/config.js** - All customizable settings

---

## 🤝 **Support**

For questions or issues:
1. Check the README.md first
2. Review STRATEGY.md for outreach tips
3. Adjust settings in src/config.js
4. Test with 1-2 sites first before bulk auditing

---

**Built with:** Node.js, Cheerio, Axios, CSV Parser
**Storage:** Local JSON files (no database needed)
**Privacy:** All data stays on your machine
**License:** Use responsibly and ethically
