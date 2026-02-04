# SEO Launch Checklist

Quick reference checklist before launching your site. Check off items as you complete them.

## 🚀 Pre-Launch (Critical)

### 1. Update URLs & Contact Info
- [ ] Replace `https://yourwebsite.com/` with your domain in `index.html` (15+ instances)
- [ ] Update email: `contact@yourwebsite.com` → your email (3 instances)
- [ ] Update phone: `+1-XXX-XXX-XXXX` → your phone (2 instances)
- [ ] Update Twitter handle: `@yourhandle` → your handle (2 instances)
- [ ] Add your GitHub URL in JSON-LD `sameAs` array
- [ ] Add your LinkedIn URL in JSON-LD `sameAs` array
- [ ] Update sitemap.xml URLs (5 instances)
- [ ] Update robots.txt sitemap URL (1 instance)

### 2. Create & Upload Images
- [ ] favicon.ico (48x48 pixels, multiple sizes embedded)
- [ ] favicon-16x16.png
- [ ] favicon-32x32.png
- [ ] apple-touch-icon.png (180x180 pixels)
- [ ] android-chrome-192x192.png
- [ ] android-chrome-512x512.png
- [ ] og-image.jpg (1200x630 pixels, < 500KB)
- [ ] twitter-image.jpg (1200x675 pixels, < 500KB)
- [ ] logo.png (500x500+ pixels, transparent background)
- [ ] safari-pinned-tab.svg (monochrome SVG)

**Tool**: Use https://realfavicongenerator.net/ for quick generation

### 3. Verify SEO Files
- [ ] `/public/robots.txt` is accessible
- [ ] `/public/sitemap.xml` is accessible
- [ ] `/public/manifest.json` is accessible
- [ ] All image paths in index.html are correct
- [ ] No broken links in sitemap.xml

### 4. Test Structured Data
- [ ] Test at https://validator.schema.org/
- [ ] Test at https://search.google.com/test/rich-results
- [ ] Fix any schema validation errors

### 5. Social Media Preview
- [ ] Test Facebook preview: https://developers.facebook.com/tools/debug/
- [ ] Test Twitter preview: https://cards-dev.twitter.com/validator
- [ ] Test LinkedIn preview: https://www.linkedin.com/post-inspector/
- [ ] Verify images display correctly on all platforms

## 📊 Launch Day

### 1. Search Engine Submission
- [ ] Submit to Google Search Console
  - Verify ownership
  - Submit sitemap.xml
  - Request indexing
- [ ] Submit to Bing Webmaster Tools
  - Verify ownership
  - Submit sitemap.xml

### 2. Analytics Setup
- [ ] Install Google Analytics or Plausible
- [ ] Verify tracking code works
- [ ] Set up conversion goals
- [ ] Enable e-commerce tracking (if applicable)

### 3. Performance Testing
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Test on mobile devices (iOS & Android)
- [ ] Test page load speed: https://pagespeed.web.dev/
- [ ] Verify Core Web Vitals pass

### 4. Security & Trust
- [ ] SSL certificate installed (HTTPS)
- [ ] Force HTTPS redirect
- [ ] Add security headers (CSP, HSTS)
- [ ] Create privacy policy page
- [ ] Create terms of service page
- [ ] Add cookie consent banner (if using cookies)

## 📈 Post-Launch (Week 1)

### 1. Monitoring
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor indexing status
- [ ] Check Analytics for traffic
- [ ] Test all forms and CTAs work

### 2. Initial Optimization
- [ ] Fix any errors found in Search Console
- [ ] Optimize images based on actual performance
- [ ] Adjust meta descriptions based on CTR
- [ ] Add internal links to new content

### 3. Content & Backlinks
- [ ] Share site on social media
- [ ] Submit to relevant directories
- [ ] Reach out for guest posting opportunities
- [ ] Create first blog post (if applicable)

## 🎯 Ongoing (Monthly)

### Content Strategy
- [ ] Publish 2-4 blog posts per month
- [ ] Update existing content
- [ ] Create case studies
- [ ] Add client testimonials

### SEO Monitoring
- [ ] Review Google Search Console reports
- [ ] Track keyword rankings
- [ ] Monitor competitor rankings
- [ ] Analyze traffic sources
- [ ] Check and fix broken links

### Performance
- [ ] Monthly Lighthouse audit
- [ ] Review Core Web Vitals
- [ ] Optimize slow-loading pages
- [ ] Update sitemap.xml with new pages

## 🔍 Quick Verification Commands

```bash
# Check if robots.txt is accessible
curl https://yourwebsite.com/robots.txt

# Check if sitemap.xml is accessible
curl https://yourwebsite.com/sitemap.xml

# Check if site is indexed by Google
# Google search: site:yourwebsite.com

# Check page speed
# Visit: https://pagespeed.web.dev/?url=https://yourwebsite.com
```

## 📱 Mobile Checklist

- [ ] Responsive on all screen sizes (320px to 1920px+)
- [ ] Touch targets minimum 48x48px
- [ ] Text readable without zooming (16px+ font)
- [ ] No horizontal scrolling
- [ ] Forms easy to fill on mobile
- [ ] Three.js scene performs well on mobile (30fps+)
- [ ] PWA installable on Android/iOS

## 🎨 Content Quality Checklist

- [ ] Each page has 300+ words of unique content
- [ ] Target keywords appear naturally in content
- [ ] Headings use proper hierarchy (H1 → H2 → H3)
- [ ] All images have descriptive alt text
- [ ] Links use descriptive anchor text (not "click here")
- [ ] Content addresses user search intent
- [ ] No duplicate content
- [ ] Grammar and spelling checked

## ✅ Final Pre-Launch Verification

Run through this one more time before going live:

1. [ ] All placeholder text replaced
2. [ ] All images optimized and uploaded
3. [ ] All links work (no 404s)
4. [ ] Contact form sends emails correctly
5. [ ] Analytics tracking works
6. [ ] Site loads fast (< 3 seconds)
7. [ ] Mobile responsive verified
8. [ ] SSL certificate active
9. [ ] Favicon displays correctly
10. [ ] Social previews look good

---

## 🆘 Need Help?

Refer to **SEO-GUIDE.md** for detailed explanations and strategies.

**Last Updated**: 2026-02-03
