"use client"

import { useRef, type ReactNode } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import type { Group } from "three"

interface ScrollCameraRigProps {
  reducedMotion?: boolean
  children: ReactNode
}

export default function ScrollCameraRig({ reducedMotion = false, children }: ScrollCameraRigProps) {
  const groupRef = useRef<Group>(null)
  const { pointer } = useThree()

  useFrame(() => {
    if (!groupRef.current || reducedMotion) return
    groupRef.current.position.x = pointer.x * 0.08
    groupRef.current.position.y = pointer.y * 0.04
  })

  return <group ref={groupRef}>{children}</group>
}