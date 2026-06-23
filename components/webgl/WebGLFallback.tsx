"use client"

import { useReducedMotion } from "@/lib/use-reduced-motion"

interface WebGLFallbackProps {
  showLoadingHint?: boolean
}

export default function WebGLFallback({ showLoadingHint = false }: WebGLFallbackProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div
      className="relative flex h-full min-h-[280px] w-full items-center justify-center overflow-hidden rounded-2xl border border-gray-800/60 bg-[#0a0d14] md:min-h-[480px]"
      role="img"
      aria-label="NodeNest modular edge computing device"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.1)_0%,transparent_70%)]" />

      <div
        className={`device-float relative flex flex-col items-center gap-1 ${reducedMotion ? "" : ""}`}
        style={reducedMotion ? undefined : { animation: "device-float 4s ease-in-out infinite" }}
      >
        <div className="h-3 w-36 rounded-sm border border-teal-500/25 bg-gradient-to-b from-[#2a2d35] to-[#1a1d24] shadow-lg shadow-teal-500/10" />

        <div className="relative -mt-0.5">
          <div className="relative h-14 w-32 rounded-md border border-gray-700/60 bg-gradient-to-b from-[#252830] to-[#1c1f28]">
            <div className="absolute left-2 top-2 h-1 w-8 rounded-full bg-cyan-400/70 shadow-[0_0_10px_rgba(34,211,238,0.45)]" />
            <div className="absolute bottom-2 left-2 right-2 flex gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-0.5 flex-1 rounded-full bg-gray-800" />
              ))}
            </div>
          </div>
          <div className="relative -mt-1 h-12 w-32 rounded-md border border-gray-700/60 bg-gradient-to-b from-[#2a2d35] to-[#1e2129]">
            <div className="absolute left-2 top-2 h-1 w-6 rounded-full bg-teal-400/60 shadow-[0_0_8px_rgba(45,212,191,0.35)]" />
          </div>
          <div className="relative -mt-1 h-10 w-32 rounded-md border border-gray-700/60 bg-gradient-to-b from-[#30343e] to-[#22252e]">
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
              <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
            </div>
          </div>
        </div>

        <div className="mt-1 h-2 w-20 rounded-sm bg-[#151820]" />
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/55 via-transparent to-transparent" />

      {showLoadingHint && (
        <p className="pointer-events-none absolute bottom-4 left-0 right-0 text-center text-xs text-gray-600">
          Loading 3D preview…
        </p>
      )}
    </div>
  )
}