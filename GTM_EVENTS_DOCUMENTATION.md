# Google Tag Manager Events Documentation

This document lists all GTM (Google Tag Manager) events implemented in the Help & Go landing page.

## Setup

**GTM Container ID**: G-7ETVF2LQ7Z
**GTM Container ID (noscript)**: GTM-5GCRWHKF

All events are pushed to `window.dataLayer` and can be tracked in Google Analytics 4.

---

## Event Categories

### 1. Navigation Events

#### `navigation_click`
**Triggered when**: User clicks on navigation items in the header
**Location**: Header component
**Data Layer Variables**:
- `event`: "navigation_click"
- `nav_item`: Navigation item label (e.g., "Home", "Services", "Portfolio")
- `nav_destination`: Anchor link (e.g., "#hero", "#services")
- `nav_location`: "header"

**Example**:
```javascript
{
  event: 'navigation_click',
  nav_item: 'Portfolio',
  nav_destination: '#portfolio',
  nav_location: 'header'
}
```

---

### 2. CTA (Call-to-Action) Events

#### `cta_click`
**Triggered when**: User clicks on any CTA button throughout the site
**Locations**:
- Hero section (Get Started button)
- Header (Get Started button - desktop and mobile)
- About section (Let's Talk button)
- Pricing section (Contact us link)

**Data Layer Variables**:
- `event`: "cta_click"
- `button_name`: Button identifier (e.g., "hero_get_started", "get_started", "lets_talk")
- `button_location`: Section where button was clicked (e.g., "hero_section", "header", "about_section")

**Examples**:
```javascript
// Hero section
{
  event: 'cta_click',
  button_name: 'hero_get_started',
  button_location: 'hero_section'
}

// Header
{
  event: 'cta_click',
  button_name: 'get_started',
  button_location: 'header'
}

// Mobile menu
{
  event: 'cta_click',
  button_name: 'get_started',
  button_location: 'mobile_menu'
}

// About section
{
  event: 'cta_click',
  button_name: 'lets_talk',
  button_location: 'about_section'
}

// Pricing section
{
  event: 'cta_click',
  button_name: 'contact_custom_quote',
  button_location: 'pricing_section'
}
```

---

### 3. Form Events

#### `form_submit`
**Triggered when**: Contact form is submitted (success or error)
**Location**: Contact form component
**Data Layer Variables**:
- `event`: "form_submit"
- `form_name`: "contact_form"
- `form_status`: "success" | "error"

**Examples**:
```javascript
// Success
{
  event: 'form_submit',
  form_name: 'contact_form',
  form_status: 'success'
}

// Error
{
  event: 'form_submit',
  form_name: 'contact_form',
  form_status: 'error'
}
```

---

### 4. Portfolio Events

#### `portfolio_click`
**Triggered when**: User clicks on a portfolio project
**Location**: Portfolio section
**Data Layer Variables**:
- `event`: "portfolio_click"
- `project_name`: Title of the project
- `project_category`: Category of the project (e.g., "Web Application", "SaaS Platform")

**Example**:
```javascript
{
  event: 'portfolio_click',
  project_name: 'E-Commerce Platform',
  project_category: 'Web Application'
}
```

---

### 5. Pricing Events

#### `pricing_cta_click`
**Triggered when**: User clicks on a pricing package CTA button
**Location**: Pricing section
**Data Layer Variables**:
- `event`: "pricing_cta_click"
- `package_name`: Name of the package (e.g., "Starter", "Professional", "Enterprise")
- `package_price`: Price of the package (e.g., "$2,999", "Custom")
- `cta_text`: Text on the CTA button (e.g., "Get Started", "Most Popular")

**Example**:
```javascript
{
  event: 'pricing_cta_click',
  package_name: 'Professional',
  package_price: '$7,999',
  cta_text: 'Most Popular'
}
```

---

### 6. Footer Events

#### `footer_link_click`
**Triggered when**: User clicks on footer navigation links
**Location**: Footer component
**Data Layer Variables**:
- `event`: "footer_link_click"
- `link_text`: Text of the link (e.g., "About Us", "Contact")
- `link_destination`: Anchor link destination (e.g., "#about")
- `link_type`: (optional) "modal" if it opens a modal

**Examples**:
```javascript
// Regular navigation link
{
  event: 'footer_link_click',
  link_text: 'About Us',
  link_destination: '#about'
}

// Modal link
{
  event: 'footer_link_click',
  link_text: 'Contact',
  link_type: 'modal'
}
```

---

### 7. Contact Method Events

#### `contact_method_click`
**Triggered when**: User clicks on email or phone links
**Location**: Footer component
**Data Layer Variables**:
- `event`: "contact_method_click"
- `contact_type`: "email" | "phone"
- `contact_value`: Email address or phone number

**Examples**:
```javascript
// Email
{
  event: 'contact_method_click',
  contact_type: 'email',
  contact_value: 'info@helpandgo.net'
}

// Phone
{
  event: 'contact_method_click',
  contact_type: 'phone',
  contact_value: '+1-234-567-890'
}
```

---

### 8. Social Media Events

#### `social_click`
**Triggered when**: User clicks on social media icons
**Location**: Footer component
**Data Layer Variables**:
- `event`: "social_click"
- `social_network`: Name of the social network (e.g., "GitHub", "LinkedIn")
- `link_url`: URL of the social profile

**Example**:
```javascript
{
  event: 'social_click',
  social_network: 'LinkedIn',
  link_url: 'https://linkedin.com'
}
```

---

### 9. Legal Events

#### `legal_link_click`
**Triggered when**: User clicks on legal links (Privacy Policy, Terms of Service, etc.)
**Location**: Footer component
**Data Layer Variables**:
- `event`: "legal_link_click"
- `link_text`: Text of the link (e.g., "Privacy Policy")
- `link_type`: (optional) "modal" if it opens a modal
- `link_destination`: (optional) URL destination

**Examples**:
```javascript
// Modal link
{
  event: 'legal_link_click',
  link_text: 'Privacy Policy',
  link_type: 'modal'
}

// External link
{
  event: 'legal_link_click',
  link_text: 'Cookie Policy',
  link_destination: '#cookies'
}
```

#### `legal_modal_open`
**Triggered when**: Legal modal (Privacy Policy or Terms) is opened
**Location**: Legal modal component
**Data Layer Variables**:
- `event`: "legal_modal_open"
- `modal_type`: "privacy" | "terms"

**Example**:
```javascript
{
  event: 'legal_modal_open',
  modal_type: 'privacy'
}
```

---

### 10. Modal Events

#### `modal_open`
**Triggered when**: Contact form modal is opened
**Location**: Modal component
**Data Layer Variables**:
- `event`: "modal_open"
- `modal_name`: Name/title of the modal (e.g., "Get in Touch", "Contact Form")

**Example**:
```javascript
{
  event: 'modal_open',
  modal_name: 'Get in Touch'
}
```

#### `modal_close`
**Triggered when**: Modal is closed
**Location**: Modal component
**Data Layer Variables**:
- `event`: "modal_close"
- `modal_name`: Name/title of the modal
- `close_method`: "button" | "backdrop" (how the modal was closed)

**Examples**:
```javascript
// Closed via X button
{
  event: 'modal_close',
  modal_name: 'Get in Touch',
  close_method: 'button'
}

// Closed by clicking outside
{
  event: 'modal_close',
  modal_name: 'Get in Touch',
  close_method: 'backdrop'
}
```

---

### 11. Cookie Consent Events

#### `cookie_consent`
**Triggered when**: User accepts or declines cookie consent
**Location**: Cookie consent component
**Data Layer Variables**:
- `event`: "cookie_consent"
- `consent_action`: "accept" | "decline"

**Examples**:
```javascript
// Accept
{
  event: 'cookie_consent',
  consent_action: 'accept'
}

// Decline
{
  event: 'cookie_consent',
  consent_action: 'decline'
}
```

---

### 12. Blog Events

#### `blog_post_click`
**Triggered when**: User clicks on a blog post card
**Location**: Blog section
**Data Layer Variables**:
- `event`: "blog_post_click"
- `post_title`: Title of the blog post
- `post_category`: Category of the post (e.g., "Technology", "Development")

**Example**:
```javascript
{
  event: 'blog_post_click',
  post_title: 'The Future of Web Development in 2026',
  post_category: 'Technology'
}
```

---

## Event Summary

| Event Name | Category | Trigger Count |
|------------|----------|---------------|
| `navigation_click` | Navigation | Multiple (per nav item) |
| `cta_click` | Conversion | 5+ locations |
| `form_submit` | Conversion | 1 form |
| `portfolio_click` | Engagement | 6 projects |
| `pricing_cta_click` | Conversion | 3 packages |
| `footer_link_click` | Navigation | Multiple |
| `contact_method_click` | Engagement | 2 (email, phone) |
| `social_click` | Engagement | 4 networks |
| `legal_link_click` | Compliance | 4+ links |
| `legal_modal_open` | Compliance | 2 modals |
| `modal_open` | Engagement | 1 modal |
| `modal_close` | Engagement | 1 modal |
| `cookie_consent` | Compliance | 1 banner |
| `blog_post_click` | Engagement | 3 posts |

---

## Testing GTM Events

### In Browser Console
```javascript
// View all dataLayer events
console.log(window.dataLayer);

// Monitor new events
window.dataLayer.push = function() {
  console.log('GTM Event:', arguments);
  Array.prototype.push.apply(this, arguments);
};
```

### In Google Tag Manager Preview Mode
1. Open Google Tag Manager
2. Click "Preview" in the top right
3. Enter your website URL
4. Interact with your site and see events fire in real-time

### In Google Analytics 4
1. Go to GA4 Dashboard
2. Navigate to "Realtime" → "Events"
3. Interact with your site and see events appear

---

## Recommended GA4 Custom Events Setup

Create these custom events in GA4 for better tracking:

1. **Conversion Events**:
   - `form_submit` (with `form_status = success`)
   - `cta_click`
   - `pricing_cta_click`

2. **Engagement Events**:
   - `portfolio_click`
   - `blog_post_click`
   - `social_click`

3. **Navigation Events**:
   - `navigation_click`
   - `footer_link_click`

---

## Notes

- All events include proper error handling
- Events are only pushed if `window.dataLayer` exists
- TypeScript types are defined in `src/global.d.ts`
- GTM container loads asynchronously for performance
- Events follow GA4 naming conventions (snake_case)
