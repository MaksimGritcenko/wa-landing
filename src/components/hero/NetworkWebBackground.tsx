import { FC, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

interface Node {
  position: THREE.Vector3
  velocity: THREE.Vector3
}

/**
 * Animated network nodes with connecting lines
 */
const NetworkScene: FC = () => {
  const { viewport } = useThree()
  const nodesRef = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.LineSegments>(null!)

  // Generate random nodes with positions and velocities
  const nodes = useMemo(() => {
    const nodeCount = 25
    const nodes: Node[] = []

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * viewport.width * 1.5,
          (Math.random() - 0.5) * viewport.height * 1.5,
          (Math.random() - 0.5) * 5
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.005
        ),
      })
    }

    return nodes
  }, [viewport])

  // Create geometries
  const { nodeGeometry } = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(nodes.length * 3)

    nodes.forEach((node, i) => {
      positions[i * 3] = node.position.x
      positions[i * 3 + 1] = node.position.y
      positions[i * 3 + 2] = node.position.z
    })

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    return { nodeGeometry: geometry, nodePositions: positions }
  }, [nodes])

  // Animate nodes and update connections
  useFrame(() => {
    if (!nodesRef.current || !linesRef.current) return

    const positions = nodesRef.current.geometry.attributes.position.array as Float32Array
    const linePositions: number[] = []
    const lineColors: number[] = []
    const maxDistance = 2.5

    // Update node positions
    nodes.forEach((node, i) => {
      // Update position with velocity (floating motion)
      node.position.add(node.velocity)

      // Boundary check - wrap around
      const halfWidth = viewport.width * 0.75
      const halfHeight = viewport.height * 0.75

      if (Math.abs(node.position.x) > halfWidth) {
        node.velocity.x *= -1
      }
      if (Math.abs(node.position.y) > halfHeight) {
        node.velocity.y *= -1
      }
      if (Math.abs(node.position.z) > 2.5) {
        node.velocity.z *= -1
      }

      positions[i * 3] = node.position.x
      positions[i * 3 + 1] = node.position.y
      positions[i * 3 + 2] = node.position.z
    })

    // Create connections between nearby nodes
    nodes.forEach((node1, i) => {
      nodes.forEach((node2, j) => {
        if (i >= j) return

        const distance = node1.position.distanceTo(node2.position)

        if (distance < maxDistance) {
          // Add line positions
          linePositions.push(node1.position.x, node1.position.y, node1.position.z)
          linePositions.push(node2.position.x, node2.position.y, node2.position.z)

          // Color based on distance (closer = brighter)
          const opacity = 1 - distance / maxDistance

          // Cyan-purple gradient
          const cyanColor = new THREE.Color(0x06b6d4)
          const purpleColor = new THREE.Color(0xa855f7)
          const color = cyanColor.lerp(purpleColor, distance / maxDistance)

          lineColors.push(color.r, color.g, color.b, opacity)
          lineColors.push(color.r, color.g, color.b, opacity)
        }
      })
    })

    // Update geometries
    nodesRef.current.geometry.attributes.position.needsUpdate = true

    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    )
    lineGeometry.setAttribute(
      'color',
      new THREE.Float32BufferAttribute(lineColors, 4)
    )

    linesRef.current.geometry.dispose()
    linesRef.current.geometry = lineGeometry
  })

  return (
    <>
      {/* Node points */}
      <points ref={nodesRef}>
        <bufferGeometry attach="geometry" {...nodeGeometry} />
        <pointsMaterial
          attach="material"
          color={0x06b6d4}
          size={0.08}
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </>
  )
}

/**
 * Three.js canvas with animated network background
 */
export const NetworkWebBackground: FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <color attach="background" args={['#020617']} />
        <NetworkScene />
      </Canvas>
    </div>
  )
}
