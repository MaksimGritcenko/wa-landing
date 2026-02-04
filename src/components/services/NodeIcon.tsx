import { FC } from 'react'
import { motion } from 'framer-motion'
import { iconBounceVariants } from '@/lib/animations'

interface NodeIconProps {
  icon: 'code' | 'refresh' | 'bug' | 'shield'
  isHovered: boolean
}

/**
 * Service icons with micro-bounce animation on parent hover
 */
export const NodeIcon: FC<NodeIconProps> = ({ icon, isHovered }) => {
  const iconVariant = isHovered ? 'hover' : 'initial'

  const renderIcon = () => {
    switch (icon) {
      case 'code':
        return (
          <svg
            className="w-full h-full"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
        )
      case 'refresh':
        return (
          <svg
            className="w-full h-full"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        )
      case 'bug':
        return (
          <svg
            className="w-full h-full"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )
      case 'shield':
        return (
          <svg
            className="w-full h-full"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        )
    }
  }

  return (
    <motion.div
      variants={iconBounceVariants}
      animate={iconVariant}
      className="w-16 h-16 text-accent-cyan"
    >
      {renderIcon()}
    </motion.div>
  )
}
