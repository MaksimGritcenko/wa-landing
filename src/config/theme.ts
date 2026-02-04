/**
 * Theme configuration - Obsidian color palette and design tokens
 */

export const colors = {
  obsidian: {
    50: '#f8fafc',
    100: '#e2e8f0',
    200: '#cbd5e1',
    300: '#94a3b8',
    400: '#64748b',
    500: '#475569',
    600: '#334155',
    700: '#1e293b',
    800: '#0f172a',
    900: '#020617',
    950: '#000000',
  },
  accent: {
    cyan: '#06b6d4',
    purple: '#a855f7',
    emerald: '#10b981',
  },
} as const

export const spacing = {
  sectionPadding: 'py-20 md:py-32',
  containerWidth: 'max-w-7xl mx-auto px-6 md:px-8',
} as const

export const typography = {
  heading: 'font-bold tracking-tight',
  body: 'font-normal leading-relaxed',
  mono: 'font-mono text-sm',
} as const
