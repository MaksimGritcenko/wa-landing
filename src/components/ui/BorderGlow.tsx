import { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BorderGlowProps {
  children: ReactNode
  className?: string
}

/**
 * Animated border glow wrapper
 * Creates a traveling gradient border effect on hover
 */
export const BorderGlow: FC<BorderGlowProps> = ({
  children,
  className,
}) => {

  return (
    <div className={cn('relative group overflow-hidden rounded-lg', className)}>
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
