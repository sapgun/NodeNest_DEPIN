"use client"

import { Suspense, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
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

function SceneReadyNotifier({ onReady }: { onReady?: () => void }) {
  useEffect(() => {
    onReady?.()
  }, [onReady])

  return null
}

function SceneContent({ reducedMotion, isMobile }: Pick<NodeNestSceneProps, "reducedMotion" | "isMobile">) {
  const particleCount = isMobile ? 40 : 100

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 4]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-3, 2, -2]} intensity={0.3} color="#14b8a6" />
      <pointLight position={[0, 2, 3]} intensity={0.5} color="#22d3ee" distance={8} />

      <ScrollCameraRig reducedMotion={reducedMotion}>
        <DeviceModel reducedMotion={reducedMotion} />
        <NetworkParticles count={particleCount} reducedMotion={reducedMotion} />
      </ScrollCameraRig>

      <Environment preset="city" />
      <Preload all />
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
      camera={{ position: [0, 1.2, 6], fov: 42 }}
      dpr={isMobile ? [1, 1] : [1, 1.5]}
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
        <SceneReadyNotifier onReady={onReady} />
        <SceneContent reducedMotion={reducedMotion} isMobile={isMobile} />
      </Suspense>
    </Canvas>
  )
}