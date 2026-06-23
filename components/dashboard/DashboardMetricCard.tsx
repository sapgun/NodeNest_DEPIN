"use client"

import { cn } from "@/lib/utils"

interface DashboardMetricCardProps {
  label: string
  value: string
  subValue?: string
  className?: string
}

export default function DashboardMetricCard({ label, value, subValue, className }: DashboardMetricCardProps) {
  return (
    <div className={cn("rounded-xl border border-gray-800 bg-[#141820] p-4", className)}>
      <p className="mb-1 text-xs text-gray-500">{label}</p>
      <p className="text-2xl font-semibold text-white md:text-3xl">{value}</p>
      {subValue && <p className="mt-1 text-sm text-teal-400">{subValue}</p>}
    </div>
  )
}