"use client"

import { Suspense, useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { Environment, Preload } from "@react-three/drei"
import DeviceModel from "./DeviceModel"
import NetworkParticles from "./NetworkParticles"
import ScrollCameraRig from "./ScrollCameraRig"

interface NodeNestSceneProps {
  reducedMotion?: boolean
  isMobile?: boolean
  onReady?: () => void
  onError?: () => void
}

function SceneReadyNotifier({
  onReady,
  isMobile,
}: {
  onReady?: () => void
  isMobile?: boolean
}) {
  const invalidate = useThree((state) => state.invalidate)

  useEffect(() => {
    onReady?.()
    if (isMobile) invalidate()
  }, [onReady, isMobile, invalidate])

  return null
}

function SceneContent({ reducedMotion, isMobile }: Pick<NodeNestSceneProps, "reducedMotion" | "isMobile">) {
  const particleCount = isMobile ? 35 : 90

  return (
    <>
      <ambientLight intensity={isMobile ? 0.45 : 0.35} />
      <directionalLight position={[4, 6, 4]} intensity={isMobile ? 0.65 : 0.8} color="#ffffff" />
      <directionalLight position={[-3, 2, -2]} intensity={0.25} color="#14b8a6" />
      {!isMobile && (
        <pointLight position={[0, 2, 3]} intensity={0.5} color="#22d3ee" distance={8} />
      )}

      <ScrollCameraRig reducedMotion={reducedMotion}>
        <DeviceModel reducedMotion={reducedMotion} />
        <NetworkParticles count={particleCount} reducedMotion={reducedMotion} />
      </ScrollCameraRig>

      {!isMobile && <Environment preset="city" />}
      {!isMobile && <Preload all />}
    </>
  )
}

export default function NodeNestScene({
  reducedMotion = false,
  isMobile = false,
  onReady,
  onError,
}: NodeNestSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 6], fov: isMobile ? 44 : 42 }}
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      frameloop={isMobile ? "demand" : "always"}
      performance={{ min: 0.5 }}
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: isMobile ? "low-power" : "high-performance",
      }}
      style={{ background: "transparent" }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", (event) => {
          event.preventDefault()
          onError?.()
        })
      }}
    >
      <Suspense fallback={null}>
        <SceneReadyNotifier onReady={onReady} isMobile={isMobile} />
        <SceneContent reducedMotion={reducedMotion} isMobile={isMobile} />
      </Suspense>
    </Canvas>
  )
}