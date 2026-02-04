import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  className?: string
}

/**
 * Simple animated button with hover/tap effects
 */
export const MagneticButton: FC<MagneticButtonProps> = ({
  children,
  type = 'button',
  disabled = false,
  onClick,
  className,
}) => {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
      className={cn(
        `px-8 py-4 rounded-lg font-semibold
         border-0.5 transition-colors duration-300`,
        disabled
          ? 'bg-obsidian-700 text-obsidian-500 border-obsidian-700 cursor-not-allowed'
          : 'bg-accent-cyan text-obsidian-950 border-accent-cyan/20 hover:bg-accent-cyan/90 cursor-pointer',
        className
      )}
    >
      {children}
    </motion.button>
  )
}
