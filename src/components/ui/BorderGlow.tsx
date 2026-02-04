import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BorderGlowProps {
  children: ReactNode
  className?: string
  glowColor?: 'cyan' | 'purple' | 'emerald'
}

/**
 * Animated border glow wrapper
 * Creates a traveling gradient border effect on hover
 */
export const BorderGlow: FC<BorderGlowProps> = ({
  children,
  className,
  glowColor = 'cyan'
}) => {
  const glowColors = {
    cyan: 'from-transparent via-accent-cyan/40 to-transparent',
    purple: 'from-transparent via-accent-purple/40 to-transparent',
    emerald: 'from-transparent via-accent-emerald/40 to-transparent',
  }

  return (
    <div className={cn('relative group overflow-hidden rounded-lg', className)}>
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
