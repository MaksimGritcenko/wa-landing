# Interactive Effects Guide

Premium interactive effects implemented in the landing page for a high-end, tech-noir user experience.

## 🎨 Overview

All effects follow the "Floating Minimalism" design philosophy:
- ✅ NO box-shadows (enforced globally)
- ✅ Liquid motion (cubic-bezier easing)
- ✅ Glassmorphism for depth
- ✅ Subtle, premium interactions

## 🌟 Implemented Effects

### 1. Mouse-Following Glass Effect (GlassCard)

**Location**: All `<GlassCard>` components
**File**: `src/components/ui/GlassCard.tsx`

**What it does:**
- Tracks mouse position relative to the card
- Creates a radial gradient "light" that follows the cursor
- Uses cyan accent color (#06b6d4)
- Appears on hover with smooth fade-in
- Resets to center when mouse leaves

**Usage:**
```tsx
// Enabled by default
<GlassCard>Content</GlassCard>

// Disable if needed
<GlassCard enableMouseEffect={false}>Content</GlassCard>
```

**CSS Effect:**
```css
radial-gradient(
  600px circle at X% Y%,
  rgba(6, 182, 212, 0.15),
  transparent 40%
)
```

**Performance**: Smooth 60fps, uses CSS transforms only

---

### 2. 3D Tilt Effect (Service Cards)

**Location**: Service grid cards
**File**: `src/hooks/useMouseTilt.ts`, `src/components/services/ServiceNode.tsx`

**What it does:**
- Creates subtle 3D perspective tilt based on mouse position
- Max 5° rotation on both X and Y axes
- Slight scale (1.02x) on hover
- Smooth liquid easing (400ms transition)
- Resets to flat when mouse leaves

**How it works:**
1. Tracks mouse position relative to card center
2. Calculates rotation angles based on distance from center
3. Applies CSS 3D transforms with perspective

**Usage:**
```tsx
const { tiltStyle, handleMouseMove, handleMouseLeave } = useMouseTilt(cardRef, {
  maxTilt: 5,      // Max degrees of rotation
  scale: 1.02,     // Scale on hover
  speed: 300,      // Transition speed (ms)
})
```

**CSS Transform:**
```css
transform: perspective(1000px)
           rotateX(Xdeg)
           rotateY(Ydeg)
           scale(1.02);
```

---

### 3. Border Glow Animation

**Location**: Service cards, hover states
**File**: `src/components/ui/BorderGlow.tsx`

**What it does:**
- Animated gradient travels around card perimeter on hover
- Uses cyan accent color
- 3-second linear animation loop
- Only visible on hover (opacity transition)

**Usage:**
```tsx
<BorderGlow glowColor="cyan">
  <YourContent />
</BorderGlow>

// Available colors: cyan, purple, emerald
```

**CSS Effect:**
```css
background: linear-gradient(90deg, transparent, cyan, transparent);
background-size: 200% 100%;
animation: border-glow 3s linear infinite;
```

---

### 4. Kinetic Typography (Hero)

**Location**: Hero section keyword cycling
**File**: `src/components/hero/KineticTypography.tsx`

**What it does:**
- Cycles through keywords: Scalable, Robust, High-Performance, Resilient, Secure
- Blur-in and blur-out transitions
- 3-second intervals
- Smooth opacity + filter animations

**Animation Sequence:**
1. **Exit**: Blur out (10px) + fade + move up
2. **Enter**: Blur in (0px) + fade in + move to position
3. **Wait**: 3 seconds
4. **Repeat**: Next keyword

**Framer Motion Variants:**
```tsx
initial: { opacity: 0, filter: 'blur(10px)', y: 20 }
animate: { opacity: 1, filter: 'blur(0px)', y: 0 }
exit: { opacity: 0, filter: 'blur(10px)', y: -20 }
```

---

### 5. Magnetic Button (Contact Form)

**Location**: Submit button in contact form
**File**: `src/components/contact/MagneticButton.tsx`, `src/hooks/useMousePosition.ts`

**What it does:**
- Button "pulls" toward cursor when within 100px radius
- Uses spring physics for organic movement
- Movement factor: 30% of distance
- Smooth spring animation

**Physics Settings:**
```tsx
{
  type: 'spring',
  stiffness: 150,  // Resistance to movement
  damping: 15,     // Slowdown factor
  mass: 0.1        // Weight (lighter = more responsive)
}
```

**Movement Calculation:**
```tsx
if (distance < 100px) {
  x = mouseX * 0.3
  y = mouseY * 0.3
}
```

---

### 6. Floating Input Labels (Forms)

**Location**: Contact form inputs
**File**: `src/components/contact/FloatingInput.tsx`

**What it does:**
- Label floats up and shrinks on focus/input
- Underline expands from center (scaleX animation)
- Color changes: gray → cyan on focus
- Smooth 200-300ms transitions

**Animation Sequence:**
1. **Idle**: Label at input position, gray color
2. **Focus**: Label moves up 24px, shrinks to 0.875rem, turns cyan
3. **Typing**: Underline expands from center (scaleX: 0 → 1)
4. **Blur**: If empty, label returns to idle

---

### 7. Shimmer Effect (Optional)

**Location**: Can be added to any element
**File**: `src/index.css` (`.glass-effect-shimmer`)

**What it does:**
- Subtle light sweep across element
- 3-second animation loop
- Adds premium "active" feeling
- Currently not used (available for future)

**Usage:**
```tsx
<div className="glass-effect-shimmer">
  Content with shimmer
</div>
```

---

### 8. Three.js Network Background (Hero)

**Location**: Hero section background
**File**: `src/components/hero/NetworkWebBackground.tsx`

**What it does:**
- 25 floating particles in 3D space
- Particles connected with lines when distance < 2.5 units
- Continuous floating motion (Perlin noise simulation)
- Line opacity based on distance
- Cyan-purple color gradient

**Performance Optimizations:**
- `frameloop="demand"` - Only renders when needed
- `dpr={[1, 2]}` - Caps device pixel ratio
- Particle count reduced on mobile (potential)
- Efficient geometry updates

**Movement Logic:**
```tsx
// Each frame
position += velocity
if (position > boundary) {
  velocity *= -1  // Bounce back
}
```

---

### 9. Scroll-Triggered Animations

**Location**: All major sections
**File**: Various components using `fadeInUpVariants`, `staggerContainerVariants`

**What it does:**
- Elements fade in and move up when scrolled into view
- Staggered animations for multiple items (0.1-0.15s delay)
- Uses IntersectionObserver via Framer Motion
- `once: true` - Animate only once

**Variants:**
```tsx
fadeInUpVariants: {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, duration: 0.6s }
}

staggerContainerVariants: {
  visible: {
    staggerChildren: 0.15,
    delayChildren: 0.1
  }
}
```

---

### 10. Micro-Bounce Icons (Service Cards)

**Location**: Icons inside service cards
**File**: `src/components/services/NodeIcon.tsx`

**What it does:**
- Icon bounces up 4px on card hover
- Spring physics for organic feel
- Quick response (stiffness: 400)

**Spring Settings:**
```tsx
{
  type: 'spring',
  stiffness: 400,
  damping: 10
}
```

---

## 🎮 Interaction Matrix

| Component | Mouse Follow | 3D Tilt | Border Glow | Scale | Other |
|-----------|-------------|---------|-------------|-------|-------|
| Service Cards | ✅ Yes | ✅ Yes | ✅ Yes | ✅ 1.02x | Icon bounce |
| Contact Form Card | ✅ Yes | ❌ No | ❌ No | ❌ No | - |
| Stack Table Card | ✅ Yes | ❌ No | ❌ No | ❌ No | - |
| Submit Button | ❌ No | ❌ No | ❌ No | ✅ 1.05x | Magnetic pull |
| Additional Skills | ❌ No | ❌ No | ❌ No | ✅ 1.05x | - |
| Hero Text | ❌ No | ❌ No | ❌ No | ❌ No | Kinetic cycling |

---

## ⚡ Performance Considerations

### Optimized for 60fps

All effects use:
- CSS transforms (GPU-accelerated)
- `will-change` hints (where needed)
- Debounced mouse tracking
- Efficient React state updates

### CPU-Friendly

- No heavy calculations in render
- Mouse position throttled
- Three.js scene optimized
- Lazy animation triggers

### Mobile Optimizations

Potential optimizations for mobile (can be added):
```tsx
const isMobile = window.innerWidth < 768

<GlassCard enableMouseEffect={!isMobile}>
  {/* Disable advanced effects on mobile */}
</GlassCard>
```

---

## 🎨 Customization

### Adjust Mouse Effect Intensity

In `GlassCard.tsx`:
```tsx
// Stronger effect
background: `radial-gradient(
  800px circle at X% Y%,     // Larger radius
  rgba(6, 182, 212, 0.25),   // More opacity
  transparent 40%
)`

// Subtler effect
background: `radial-gradient(
  400px circle at X% Y%,     // Smaller radius
  rgba(6, 182, 212, 0.08),   // Less opacity
  transparent 40%
)`
```

### Adjust Tilt Strength

In `useMouseTilt.ts`:
```tsx
// More dramatic tilt
useMouseTilt(ref, {
  maxTilt: 15,    // Increase degrees
  scale: 1.05,    // Larger scale
  speed: 200      // Faster response
})

// Subtler tilt
useMouseTilt(ref, {
  maxTilt: 3,     // Decrease degrees
  scale: 1.01,    // Smaller scale
  speed: 600      // Slower response
})
```

### Change Magnetic Button Range

In `MagneticButton.tsx`:
```tsx
const isNear = distance < 150  // Larger activation radius
const movementFactor = 0.5     // Stronger pull (50%)
```

---

## 🧪 Testing Effects

### Visual Testing Checklist

- [ ] Mouse light follows cursor smoothly on service cards
- [ ] Cards tilt naturally when mouse moves
- [ ] Border glow animates continuously on hover
- [ ] Submit button pulls toward cursor within 100px
- [ ] Input labels float smoothly on focus
- [ ] Kinetic text cycles every 3 seconds
- [ ] Three.js background runs at 60fps
- [ ] All animations respect `prefers-reduced-motion`

### Performance Testing

```bash
# Run Lighthouse audit
npm run build
npm run preview
# Open Chrome DevTools → Lighthouse
```

**Target Metrics:**
- Performance: > 90
- Animation FPS: 60
- Interaction latency: < 100ms

---

## 🔧 Troubleshooting

### Effect Not Working

1. **Check element has ref**: `<div ref={cardRef}>`
2. **Verify CSS**: Ensure no conflicting styles
3. **Check overflow**: Parent needs `overflow: visible` for 3D transforms
4. **Browser DevTools**: Inspect computed styles

### Performance Issues

1. **Reduce particle count** in Three.js (from 25 to 15)
2. **Disable effects on mobile**:
   ```tsx
   enableMouseEffect={!isMobile}
   ```
3. **Throttle mouse events**:
   ```tsx
   const throttledMouseMove = throttle(handleMouseMove, 16)
   ```

### Effects Too Subtle

1. **Increase opacity** in radial gradients
2. **Increase maxTilt** in tilt hook
3. **Increase scale** values
4. **Adjust transition speeds**

---

## 📚 Related Files

- `src/components/ui/GlassCard.tsx` - Mouse-following glass effect
- `src/hooks/useMouseTilt.ts` - 3D tilt hook
- `src/hooks/useMousePosition.ts` - Magnetic button hook
- `src/lib/animations.ts` - Framer Motion variants
- `src/index.css` - Custom CSS utilities
- `tailwind.config.js` - Animation keyframes

---

## 🎯 Future Enhancements

Potential additions:
- [ ] Parallax scrolling for sections
- [ ] Cursor trail effect
- [ ] Morphing SVG shapes
- [ ] Sound effects on hover (optional)
- [ ] Advanced particle systems
- [ ] Text scramble effect
- [ ] Liquid button morphing

---

**Domain**: https://helpandgo.net
**Last Updated**: 2026-02-03
**Performance**: All effects optimized for 60fps
