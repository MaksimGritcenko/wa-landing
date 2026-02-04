import { useState, useEffect, RefObject } from 'react'

interface MousePosition {
  x: number
  y: number
  distance: number
}

/**
 * Track mouse position relative to an element
 * Used for magnetic button effect
 */
export function useMousePosition(ref: RefObject<HTMLElement>, _threshold = 100): MousePosition {
  const [position, setPosition] = useState({ x: 0, y: 0, distance: Infinity })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const x = e.clientX - centerX
      const y = e.clientY - centerY
      const distance = Math.sqrt(x * x + y * y)

      setPosition({ x, y, distance })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [ref])

  return position
}
