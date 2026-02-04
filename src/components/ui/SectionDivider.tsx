import { FC } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionDividerProps {
  className?: string
}

/**
 * Thin section divider with subtle expand animation
 * Uses 0.5px border-bottom with low opacity (NO shadows, NO left borders)
 * Animates from center when scrolled into view
 */
export const SectionDivider: FC<SectionDividerProps> = ({ className }) => {
  return (
    <div className={cn('w-full overflow-hidden', className)}>
      <motion.div
        className="w-full border-b-0.5 border-obsidian-800/50"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      />
    </div>
  )
}
