import { FC, useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface FloatingLogo {
  id: number
  x: number
  y: number
  size: number
  blur: number
  opacity: number
  rotation: number
  animationDelay: number
  animationDuration: number
}

interface FloatingLogosBackgroundProps {
  count?: number
  mobileCount?: number
  className?: string
}

/**
 * Floating blurred logos background component
 * Creates a glassmorphic effect with randomly placed, blurred logos
 * Responsive: fewer/smaller logos on mobile for performance
 */
export const FloatingLogosBackground: FC<FloatingLogosBackgroundProps> = ({
  count = 15,
  mobileCount = 6,
  className = '',
}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const actualCount = isMobile ? mobileCount : count

  // Generate random positions for logos (memoized to prevent re-renders)
  const logos = useMemo<FloatingLogo[]>(() => {
    // Size ranges: smaller on mobile
    const minSize = isMobile ? 60 : 100
    const maxSize = isMobile ? 120 : 300

    return Array.from({ length: actualCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      blur: isMobile ? 6 + Math.random() * 10 : 4 + Math.random() * 12,
      opacity: isMobile ? 0.06 + Math.random() * 0.08 : 0.08 + Math.random() * 0.12,
      rotation: Math.random() * 360,
      animationDelay: Math.random() * 10,
      animationDuration: 20 + Math.random() * 20, // 20-40s
    }))
  }, [actualCount, isMobile])

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {logos.map((logo) => (
        <motion.div
          key={logo.id}
          className="absolute"
          style={{
            left: `${logo.x}%`,
            top: `${logo.y}%`,
            width: logo.size,
            height: logo.size,
            transform: `translate(-50%, -50%) rotate(${logo.rotation}deg)`,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
            rotate: [logo.rotation, logo.rotation + 5, logo.rotation, logo.rotation - 5, logo.rotation],
          }}
          transition={{
            duration: logo.animationDuration,
            delay: logo.animationDelay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain"
            style={{
              filter: `blur(${logo.blur}px)`,
              opacity: logo.opacity,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
