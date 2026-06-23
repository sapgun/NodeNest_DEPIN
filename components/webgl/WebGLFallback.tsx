"use client"

import { useReducedMotion } from "@/lib/use-reduced-motion"

export default function WebGLFallback() {
  const reducedMotion = useReducedMotion()

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0a0d14]"
      role="img"
      aria-label="NodeNest modular edge computing device"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08)_0%,transparent_70%)]" />

      <div className={`relative flex flex-col items-center gap-1 ${reducedMotion ? "" : "animate-pulse"}`}>
        {/* Base chassis */}
        <div className="h-3 w-36 rounded-sm border border-teal-500/20 bg-gradient-to-b from-[#2a2d35] to-[#1a1d24] shadow-lg shadow-teal-500/5" />

        {/* Stacked modules */}
        <div className="relative -mt-0.5">
          <div className="h-14 w-32 rounded-md border border-gray-700/60 bg-gradient-to-b from-[#252830] to-[#1c1f28]">
            <div className="absolute left-2 top-2 h-1 w-8 rounded-full bg-cyan-400/60 shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
            <div className="absolute bottom-2 left-2 right-2 flex gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-0.5 flex-1 rounded-full bg-gray-800" />
              ))}
            </div>
          </div>
          <div className="relative -mt-1 h-12 w-32 rounded-md border border-gray-700/60 bg-gradient-to-b from-[#2a2d35] to-[#1e2129]">
            <div className="absolute left-2 top-2 h-1 w-6 rounded-full bg-teal-400/50 shadow-[0_0_6px_rgba(45,212,191,0.3)]" />
          </div>
          <div className="relative -mt-1 h-10 w-32 rounded-md border border-gray-700/60 bg-gradient-to-b from-[#30343e] to-[#22252e]">
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
              <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
            </div>
          </div>
        </div>

        {/* Stand */}
        <div className="mt-1 h-2 w-20 rounded-sm bg-[#151820]" />
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>
  )
}