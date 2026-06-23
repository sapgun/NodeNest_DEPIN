"use client"

import { useState, useEffect, useCallback, Component, type ReactNode } from "react"
import dynamic from "next/dynamic"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import { useWebGLSupport } from "@/lib/use-webgl-support"
import { usePreferLightweightExperience } from "@/lib/use-connection-quality"
import WebGLFallback from "./WebGLFallback"

const NodeNestScene = dynamic(() => import("./NodeNestScene"), {
  ssr: false,
  loading: () => <WebGLFallback showLoadingHint />,
})

const SCENE_LOAD_TIMEOUT_MS = 12000

interface ErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
  onError?: () => void
}

interface ErrorBoundaryState {
  hasError: boolean
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch() {
    this.props.onError?.()
  }

  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return isMobile
}

function FallbackContainer({ children }: { children: ReactNode }) {
  return <div className="relative h-[280px] w-full md:h-[480px]">{children}</div>
}

export default function NodeNestHeroCanvas() {
  const reducedMotion = useReducedMotion()
  const webglSupported = useWebGLSupport()
  const preferLightweight = usePreferLightweightExperience()
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)
  const [sceneTimedOut, setSceneTimedOut] = useState(false)
  const [sceneErrored, setSceneErrored] = useState(false)
  const [sceneReady, setSceneReady] = useState(false)

  const useFallback = preferLightweight || reducedMotion || webglSupported === false || sceneTimedOut || sceneErrored

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || useFallback || sceneReady) return

    const timer = window.setTimeout(() => setSceneTimedOut(true), SCENE_LOAD_TIMEOUT_MS)
    return () => window.clearTimeout(timer)
  }, [mounted, useFallback, sceneReady])

  const handleSceneReady = useCallback(() => {
    setSceneReady(true)
    setSceneTimedOut(false)
  }, [])

  const handleSceneError = useCallback(() => {
    setSceneErrored(true)
  }, [])

  if (!mounted || webglSupported === null) {
    return (
      <FallbackContainer>
        <WebGLFallback showLoadingHint />
      </FallbackContainer>
    )
  }

  if (useFallback) {
    return (
      <FallbackContainer>
        <WebGLFallback />
      </FallbackContainer>
    )
  }

  return (
    <div
      className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-[#0a0d14] md:h-[480px]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.06)_0%,transparent_70%)]" />

      <WebGLErrorBoundary fallback={<WebGLFallback />} onError={handleSceneError}>
        <NodeNestScene
          reducedMotion={reducedMotion}
          isMobile={isMobile}
          onReady={handleSceneReady}
          onError={handleSceneError}
        />
      </WebGLErrorBoundary>
    </div>
  )
}