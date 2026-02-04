import { FC, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Service } from '@/config/services'
import { GlassCard } from '@/components/ui/GlassCard'
import { BorderGlow } from '@/components/ui/BorderGlow'
import { NodeIcon } from './NodeIcon'
import { serviceNodeVariants } from '@/lib/animations'
import { useMouseTilt } from '@/hooks/useMouseTilt'

interface ServiceNodeProps {
  service: Service
}

/**
 * Individual service card with hover animations
 * Scale + border-glow + 3D tilt + mouse-following light on hover
 */
export const ServiceNode: FC<ServiceNodeProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const { tiltStyle, handleMouseMove, handleMouseLeave } = useMouseTilt(cardRef, {
    maxTilt: 5,
    scale: 1.02,
    speed: 100,
  })

  return (
    <BorderGlow glowColor="cyan">
      <motion.div
        ref={cardRef}
        variants={serviceNodeVariants}
        initial="initial"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setIsHovered(false)
          handleMouseLeave()
        }}
        style={isHovered ? tiltStyle : {}}
        className="h-full"
      >
        <GlassCard className="p-5 sm:p-6 md:p-8 h-full flex flex-col" enableMouseEffect={true}>
          {/* Icon */}
          <div className="mb-6">
            <NodeIcon icon={service.icon} isHovered={isHovered} />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-obsidian-100 mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-obsidian-300 text-sm md:text-base mb-6 flex-grow">
            {service.description}
          </p>

          {/* Features list */}
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-obsidian-400"
              >
                <svg
                  className="w-4 h-4 mt-0.5 text-accent-cyan flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>
    </BorderGlow>
  )
}
