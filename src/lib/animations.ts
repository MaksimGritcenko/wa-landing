import { Variants } from 'framer-motion'

/**
 * Framer Motion animation variants for consistent liquid motion feel
 * All animations use cubic-bezier easing for viscous fluid feel
 */

// Kinetic typography - cycling keywords with blur effect
export const kineticTextVariants: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(10px)',
    y: 20,
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1], // Liquid easing
    },
  },
  exit: {
    opacity: 0,
    filter: 'blur(10px)',
    y: -20,
    transition: {
      duration: 0.4,
    },
  },
}

// Service node cards - scale + border-glow on hover
export const serviceNodeVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 800,
      damping: 25,
    },
  },
}

// Micro-bounce for icons inside service nodes
export const iconBounceVariants: Variants = {
  initial: {
    y: 0,
  },
  hover: {
    y: -4,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 25,
    },
  },
}

// Stack table container - stagger children
export const stackTableVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Stack table rows - fade in from left
export const stackRowVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
}

// Fade in up for sections on scroll
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
}

// Stagger container for multiple elements
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}
