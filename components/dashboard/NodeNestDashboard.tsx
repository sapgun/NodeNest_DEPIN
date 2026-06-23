"use client"

import type { DashboardView } from "./DashboardSidebar"
import DashboardSidebar from "./DashboardSidebar"
import NodesPanel from "./panels/NodesPanel"
import OverviewPanel from "./panels/OverviewPanel"
import RewardsPanel from "./panels/RewardsPanel"

interface NodeNestDashboardProps {
  view: DashboardView
  compact?: boolean
}

export default function NodeNestDashboard({ view, compact = false }: NodeNestDashboardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#0c0f1a] shadow-xl">
      <div className="flex flex-col md:flex-row">
        {!compact && <DashboardSidebar activeView={view} />}
        <div className="flex-1 p-4 md:p-6">
          {view === "overview" && <OverviewPanel />}
          {view === "rewards" && <RewardsPanel compact={compact} />}
          {view === "nodes" && <NodesPanel />}
        </div>
      </div>
    </div>
  )
}