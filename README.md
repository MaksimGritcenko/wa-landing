# Premium Web Agency Landing Page

A high-end, tech-noir themed landing page with **cutting-edge interactive effects** built with React, TypeScript, Tailwind CSS, Three.js, and Framer Motion.

**🌟 Features "Floating Minimalism"** design aesthetic with:

- ✨ Mouse-following glass effects
- 🎪 3D tilt on hover
- 🧲 Magnetic button interactions
- 💫 Liquid motion animations
- 🌌 Three.js particle background
- 📱 Fully responsive & accessible

**Live**: https://helpandgo.net (pending deployment)
**Dev**: http://localhost:5173/

## Design Philosophy

- **Tech-noir Dark Theme**: Obsidian color palette with cyan and purple accents
- **Floating Minimalism**: NO box-shadows, NO left borders - uses glassmorphism for depth
- **Liquid Motion**: Animations with cubic-bezier easing for viscous fluid feel
- **3D Network Background**: Interactive Three.js particle system with connecting nodes

## Features

### Hero Section

- 🌌 Animated 3D network background with 25 floating particles
- ✨ Kinetic typography with cycling keywords (blur-in/blur-out)
- 🎨 Gradient overlay for optimal readability
- ⬇️ Smooth scroll indicator

### Services Grid

- 🎯 2x2 responsive grid layout
- 💫 **Mouse-following glass effect** (light tracks cursor)
- 🎪 **3D tilt on hover** (subtle perspective shift)
- 🌊 Animated border-glow (traveling gradient)
- 📐 Scale animations with spring physics
- 🎈 Micro-bounce icons on card hover

### Stack Deep-Dive

- 📊 Technical expertise matrix table
- 🎬 Staggered row animations on scroll
- 🏷️ Technology badges with hover effects
- 🌟 **Mouse-following effect on table card**
- 💼 Additional skills showcase

### Contact Form

- 🎭 Floating labels with smooth animations
- 📏 Center-out underline expansion on focus
- 🧲 **Magnetic button** (pulls toward cursor within 100px)
- ✅ Client-side validation
- 💎 **Glass effect on form card**

### Premium Interactive Effects

- ✨ **Mouse-Following Glass Effect**: Radial gradient light follows cursor on all cards
- 🎪 **3D Tilt Effect**: Service cards tilt based on mouse position
- 🧲 **Magnetic Interactions**: Submit button pulls toward nearby cursor
- 🌊 **Liquid Motion**: All animations use cubic-bezier easing for viscous feel
- ⚡ **60fps Performance**: GPU-accelerated transforms and optimized rendering

See **INTERACTIVE-EFFECTS.md** for detailed documentation of all effects.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: Heroicons (inline SVG)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The app will be available at `http://localhost:5173/`

Hot module replacement is enabled - changes will reflect immediately.

## Project Structure

```
src/
├── components/
│   ├── hero/              # Hero section with Three.js background
│   ├── services/          # Services grid with animated cards
│   ├── stack/             # Technology stack section
│   ├── contact/           # Contact form with animations
│   └── ui/                # Reusable UI components
├── config/                # Configuration files (services, stack, theme)
├── lib/                   # Utilities and animation variants
├── hooks/                 # Custom React hooks
├── App.tsx                # Main app component
└── main.tsx               # App entry point
```

## Design Constraints

### Critical Rules

1. **NO box-shadows anywhere** - Enforced globally with `box-shadow: none !important`
2. **NO left borders** - Use bottom borders or full borders with 0.5px width
3. **Glassmorphism** - Use `backdrop-blur` and subtle borders for depth
4. **Liquid easing** - All animations use `cubic-bezier(0.4, 0.0, 0.2, 1)`

### Color Palette

**Obsidian Grays:**

- 900: `#020617` (Page background)
- 800: `#0f172a` (Section backgrounds)
- 700: `#1e293b` (Card backgrounds)
- 500: `#475569` (Borders)
- 300: `#94a3b8` (Secondary text)
- 100: `#e2e8f0` (Primary text)

**Accent Colors:**

- Cyan: `#06b6d4` (Primary CTA, highlights)
- Purple: `#a855f7` (Secondary highlights)
- Emerald: `#10b981` (Success states)

## Animation Strategy

- **Hero**: Continuous Three.js animation (60fps target)
- **Services**: On-hover only (scale + border-glow)
- **Stack**: On-scroll with stagger
- **Form**: On-focus (underline + label float)
- **Button**: On-proximity (magnetic within 100px)

All animations respect `prefers-reduced-motion` media query (can be implemented with custom hook).

## Customization

### Update Services

Edit `src/config/services.ts` to modify the 4 service offerings.

### Update Technology Stack

Edit `src/config/stack.ts` to modify the technical expertise matrix.

### Modify Theme

Edit `tailwind.config.js` to adjust colors, spacing, or add new utilities.

### Customize Animations

Edit `src/lib/animations.ts` to modify Framer Motion variants.

## Performance Optimization

### Current Optimizations

- React Three Fiber with `frameloop="demand"`
- Device pixel ratio capped at 2x
- Lazy loading for heavy components (can be added)
- Tree-shaking for Framer Motion
- Tailwind CSS purging for minimal bundle size

### Target Metrics

- First Load JS: < 200KB
- Largest Contentful Paint: < 2.5s
- Three.js FPS: 60fps desktop, 30fps mobile
- Lighthouse Performance: > 90

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Form Submission

The contact form currently logs to console. To enable real form submissions:

1. **EmailJS** (Recommended for simple setup)
2. **Backend API** (Custom Node.js/Python endpoint)
3. **Third-party service** (Formspree, Netlify Forms)

Update `src/components/contact/ContactForm.tsx` with your chosen method.

## Deployment

### Vercel (Recommended)

```bash
npm run build
npx vercel --prod
```

### Netlify

```bash
npm run build
# Deploy the `dist` folder
```

### Static Hosting

Build and serve the `dist` folder on any static host (GitHub Pages, AWS S3, etc.).

## License

This project is private and proprietary.

## SEO Optimization

This landing page is fully optimized for search engines with:

### Implemented Features

- ✅ **Comprehensive Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards
- ✅ **Structured Data (JSON-LD)**: Organization, WebSite, and ProfessionalService schemas
- ✅ **Technical SEO**: robots.txt, sitemap.xml, canonical URLs
- ✅ **PWA Support**: Web app manifest for mobile optimization
- ✅ **Performance**: Optimized build with code splitting and CSS purging
- ✅ **Social Media**: Rich previews for Facebook, Twitter, LinkedIn

### ✅ Completed SEO Configuration

All SEO files have been configured for **https://helpandgo.net**:

- ✅ All URLs updated (index.html, sitemap.xml, robots.txt)
- ✅ Email updated to info@helpandgo.net
- ✅ Structured data (JSON-LD) configured
- ✅ Meta tags, Open Graph, Twitter Cards ready

### 🎯 Action Items (Before Launch)

1. **Create and upload images** to `/public/`:

   - favicon.ico, favicon-16x16.png, favicon-32x32.png
   - og-image.jpg (1200x630, < 500KB)
   - twitter-image.jpg (1200x675, < 500KB)
   - apple-touch-icon.png, android-chrome-\*.png
   - logo.png
   - **See IMAGE-GENERATION-GUIDE.md** for step-by-step instructions

2. **Update remaining placeholders** in `index.html`:

   - Phone: `+1-XXX-XXX-XXXX`
   - Twitter: `@yourhandle`
   - GitHub & LinkedIn URLs

3. **Submit to search engines**:

   - Google Search Console (submit sitemap)
   - Bing Webmaster Tools

4. **Add analytics**: Google Analytics or Plausible

5. **Test structured data**:
   - https://validator.schema.org/
   - https://search.google.com/test/rich-results

**Quick References:**

- **SEO-SUMMARY.md** - What's configured and what's left
- **SEO-CHECKLIST.md** - Complete pre-launch checklist
- **SEO-GUIDE.md** - Full optimization strategy
- **IMAGE-GENERATION-GUIDE.md** - How to create all images

### SEO Performance Targets

- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## Credits

Built with modern web technologies:

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
