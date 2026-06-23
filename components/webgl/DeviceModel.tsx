"use client"

import { useRef, useState, useEffect, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, useGLTF } from "@react-three/drei"
import type { Group } from "three"

const GLB_PATH = "/models/nodenest-device.glb"

function useGlbExists(): boolean {
  const [exists, setExists] = useState(false)

  useEffect(() => {
    fetch(GLB_PATH, { method: "HEAD" })
      .then((res) => setExists(res.ok))
      .catch(() => setExists(false))
  }, [])

  return exists
}

function ProceduralDevice({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null)
  const targetRotation = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return

    const { pointer } = state
    targetRotation.current.y = pointer.x * 0.35
    targetRotation.current.x = pointer.y * 0.12

    groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05
  })

  const bodyMaterial = { color: "#1a1d24", metalness: 0.75, roughness: 0.35 }
  const moduleMaterial = { color: "#252830", metalness: 0.7, roughness: 0.4 }
  const accentEmissive = { color: "#22d3ee", emissive: "#22d3ee", emissiveIntensity: 0.8 }

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      {/* TODO: Replace this procedural placeholder with /public/models/nodenest-device.glb after final Blender model export. */}

      {/* Base stand */}
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[1.6, 0.08, 1.0]} />
        <meshStandardMaterial {...bodyMaterial} />
      </mesh>

      {/* Bottom module — compute */}
      <mesh position={[0, -0.35, 0]}>
        <boxGeometry args={[1.5, 0.28, 0.9]} />
        <meshStandardMaterial {...moduleMaterial} />
      </mesh>
      {/* Vent slits */}
      {[-0.3, -0.15, 0, 0.15, 0.3].map((x, i) => (
        <mesh key={`vent-b-${i}`} position={[x, -0.35, 0.46]}>
          <boxGeometry args={[0.08, 0.2, 0.02]} />
          <meshStandardMaterial color="#111318" metalness={0.5} roughness={0.6} />
        </mesh>
      ))}

      {/* Middle module — storage */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[1.5, 0.28, 0.9]} />
        <meshStandardMaterial color="#2a2d35" metalness={0.7} roughness={0.38} />
      </mesh>
      {/* LED strip */}
      <mesh position={[-0.55, -0.05, 0.42]}>
        <boxGeometry args={[0.35, 0.03, 0.02]} />
        <meshStandardMaterial {...accentEmissive} />
      </mesh>

      {/* Top module — network */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[1.5, 0.28, 0.9]} />
        <meshStandardMaterial color="#30343e" metalness={0.72} roughness={0.36} />
      </mesh>
      {/* Top accent LED */}
      <mesh position={[0.5, 0.25, 0.42]}>
        <boxGeometry args={[0.2, 0.03, 0.02]} />
        <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={0.6} />
      </mesh>

      {/* Port cluster */}
      {[-0.15, 0, 0.15].map((x, i) => (
        <mesh key={`port-${i}`} position={[x, 0.05, 0.48]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.06, 12]} />
          <meshStandardMaterial color="#0d1117" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}

      {/* Side bevel accents */}
      <mesh position={[0.76, 0, 0]}>
        <boxGeometry args={[0.04, 0.7, 0.7]} />
        <meshStandardMaterial color="#1e2129" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[-0.76, 0, 0]}>
        <boxGeometry args={[0.04, 0.7, 0.7]} />
        <meshStandardMaterial color="#1e2129" metalness={0.8} roughness={0.3} />
      </mesh>
    </group>
  )
}

function GlbDevice({ reducedMotion }: { reducedMotion: boolean }) {
  const { scene } = useGLTF(GLB_PATH)
  const groupRef = useRef<Group>(null)
  const cloned = useMemo(() => scene.clone(), [scene])

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return
    const { pointer } = state
    const targetY = pointer.x * 0.35
    const targetX = pointer.y * 0.12
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05
  })

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={1.2}>
      <primitive object={cloned} />
    </group>
  )
}

export default function DeviceModel({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const glbExists = useGlbExists()

  const content = glbExists ? (
    <GlbDevice reducedMotion={reducedMotion} />
  ) : (
    <ProceduralDevice reducedMotion={reducedMotion} />
  )

  if (reducedMotion) {
    return content
  }

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      {content}
    </Float>
  )
}