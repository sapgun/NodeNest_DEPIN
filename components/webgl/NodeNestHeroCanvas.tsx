"use client"

import { useState, useEffect, Component, type ReactNode } from "react"
import dynamic from "next/dynamic"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import { useWebGLSupport } from "@/lib/use-webgl-support"
import WebGLFallback from "./WebGLFallback"

const NodeNestScene = dynamic(() => import("./NodeNestScene"), {
  ssr: false,
  loading: () => <WebGLFallback />,
})

interface ErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
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

export default function NodeNestHeroCanvas() {
  const reducedMotion = useReducedMotion()
  const webglSupported = useWebGLSupport()
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || webglSupported === null) {
    return (
      <div className="relative h-[280px] w-full md:h-[480px]">
        <WebGLFallback />
      </div>
    )
  }

  if (!webglSupported) {
    return (
      <div className="relative h-[280px] w-full md:h-[480px]">
        <WebGLFallback />
      </div>
    )
  }

  return (
    <div
      className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-[#0a0d14] md:h-[480px]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.06)_0%,transparent_70%)] rounded-2xl" />

      <WebGLErrorBoundary fallback={<WebGLFallback />}>
        <NodeNestScene reducedMotion={reducedMotion} isMobile={isMobile} />
      </WebGLErrorBoundary>
    </div>
  )
}