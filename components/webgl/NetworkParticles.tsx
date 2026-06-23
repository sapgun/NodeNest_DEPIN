"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import type { Points } from "three"

interface NetworkParticlesProps {
  count?: number
  reducedMotion?: boolean
}

export default function NetworkParticles({ count = 120, reducedMotion = false }: NetworkParticlesProps) {
  const pointsRef = useRef<Points>(null)

  const { positions, connections } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const conn: number[] = []

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 2.2 + Math.random() * 1.5

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6 + 0.3
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3]
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 1.2 && conn.length < count * 6) {
          conn.push(i, j)
        }
      }
    }

    return { positions: pos, connections: conn }
  }, [count])

  const linePositions = useMemo(() => {
    const pairCount = connections.length / 2
    const arr = new Float32Array(pairCount * 2 * 3)
    for (let i = 0; i < connections.length; i += 2) {
      const a = connections[i]
      const b = connections[i + 1]
      const offset = (i / 2) * 6
      arr[offset] = positions[a * 3]
      arr[offset + 1] = positions[a * 3 + 1]
      arr[offset + 2] = positions[a * 3 + 2]
      arr[offset + 3] = positions[b * 3]
      arr[offset + 4] = positions[b * 3 + 1]
      arr[offset + 5] = positions[b * 3 + 2]
    }
    return arr
  }, [connections, positions])

  useFrame((_, delta) => {
    if (!pointsRef.current || reducedMotion) return
    pointsRef.current.rotation.y += delta * 0.04
  })

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} color="#22d3ee" transparent opacity={0.7} sizeAttenuation />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#14b8a6" transparent opacity={0.12} />
      </lineSegments>
    </group>
  )
}