import { FC, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { kineticTextVariants } from '@/lib/animations'

const keywords = ['Scalable', 'Robust', 'High-Performance', 'Resilient', 'Secure']

/**
 * Cycling keywords with blur-in/blur-out animation
 * Creates a "kinetic" effect for emphasis
 */
export const KineticTypography: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-16 sm:h-20 md:h-32 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={keywords[currentIndex]}
          variants={kineticTextVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute text-3xl sm:text-4xl md:text-7xl lg:text-display-lg font-bold gradient-text"
        >
          {keywords[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
