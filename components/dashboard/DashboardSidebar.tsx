"use client"

import { Clock, HelpCircle, LayoutDashboard, Network, Settings, Wallet } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export type DashboardView = "overview" | "rewards" | "nodes"

interface DashboardSidebarProps {
  activeView: DashboardView
}

const navItems: { view?: DashboardView; icon: typeof LayoutDashboard; labelKey: string }[] = [
  { view: "overview", icon: LayoutDashboard, labelKey: "dashboard.ui.sidebar.dashboard" },
  { view: "rewards", icon: Wallet, labelKey: "dashboard.ui.sidebar.rewards" },
  { icon: Clock, labelKey: "dashboard.ui.sidebar.scheduler" },
  { view: "nodes", icon: Network, labelKey: "dashboard.ui.sidebar.nodes" },
  { icon: Settings, labelKey: "dashboard.ui.sidebar.settings" },
  { icon: HelpCircle, labelKey: "dashboard.ui.sidebar.help" },
]

export default function DashboardSidebar({ activeView }: DashboardSidebarProps) {
  const { t } = useLanguage()

  return (
    <aside className="flex w-full shrink-0 flex-row gap-2 border-b border-gray-800 bg-[#0a0d14] p-3 md:w-44 md:flex-col md:border-b-0 md:border-r md:gap-1 md:p-4">
      <div className="mb-0 flex items-center gap-2 px-1 md:mb-6">
        <Image
          src="/images/NodeNest_logo.png"
          alt="NodeNest"
          width={28}
          height={28}
          className="h-7 w-7"
          unoptimized
        />
        <span className="hidden font-semibold text-white md:inline">NodeNest</span>
      </div>

      <nav className="flex flex-1 gap-1 overflow-x-auto md:flex-col md:overflow-visible">
        {navItems.map((item) => {
          const isActive = item.view === activeView
          const Icon = item.icon

          return (
            <div
              key={item.labelKey}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm whitespace-nowrap transition-colors",
                isActive
                  ? "bg-[#1a1d2c] text-white"
                  : "text-gray-500",
                !item.view && "opacity-50",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline md:inline">{t(item.labelKey)}</span>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}