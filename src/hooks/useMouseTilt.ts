import { useState, useCallback, RefObject } from 'react'

interface TiltState {
  rotateX: number
  rotateY: number
  scale: number
}

interface UseMouseTiltOptions {
  maxTilt?: number
  scale?: number
  speed?: number
}

/**
 * Advanced mouse tilt effect hook
 * Creates 3D tilt based on mouse position
 */
export function useMouseTilt(
  ref: RefObject<HTMLElement>,
  options: UseMouseTiltOptions = {}
) {
  const { maxTilt = 10, scale = 1.02, speed = 400 } = options

  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -maxTilt
      const rotateY = ((x - centerX) / centerX) * maxTilt

      setTilt({
        rotateX,
        rotateY,
        scale,
      })
    },
    [ref, maxTilt, scale]
  )

  const handleMouseLeave = useCallback(() => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    })
  }, [])

  const tiltStyle = {
    transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
    transition: `transform ${speed}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }

  return {
    tilt,
    tiltStyle,
    handleMouseMove,
    handleMouseLeave,
  }
}
