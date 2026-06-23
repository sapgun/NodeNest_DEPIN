"use client"

import { Activity, Box } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"
import DashboardMetricCard from "../DashboardMetricCard"

const nodes = [
  { id: "Node-01", network: "Ethereum", sync: 100, uptime: "99.8%", status: "running" as const },
  { id: "Node-02", network: "Solana", sync: 100, uptime: "99.5%", status: "running" as const },
  { id: "Node-03", network: "Polygon", sync: 87, uptime: "98.2%", status: "syncing" as const },
  { id: "Node-04", network: "Arbitrum", sync: 100, uptime: "99.9%", status: "running" as const },
]

export default function NodesPanel() {
  const { t } = useLanguage()

  const runningCount = nodes.filter((n) => n.status === "running").length

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white md:text-2xl">{t("dashboard.ui.nodes.title")}</h3>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <DashboardMetricCard label={t("dashboard.ui.overview.activeNodes")} value={String(nodes.length)} />
        <DashboardMetricCard label={t("dashboard.ui.nodes.running")} value={String(runningCount)} />
        <DashboardMetricCard label={t("dashboard.ui.overview.uptime")} value="99.6%" />
        <DashboardMetricCard label={t("dashboard.ui.overview.totalTasks")} value="468" />
      </div>

      <div className="rounded-xl border border-gray-800 bg-[#141820] p-4">
        <div className="mb-4 flex items-center gap-2">
          <Activity className="h-4 w-4 text-teal-400" />
          <h4 className="text-sm font-medium text-white">{t("dashboard.ui.nodes.title")}</h4>
        </div>

        <div className="space-y-4">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="flex flex-col gap-3 rounded-lg border border-gray-800 bg-[#0c0f1a] p-4 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-3 sm:w-36">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/10">
                  <Box className="h-5 w-5 text-teal-400" />
                </div>
                <span className="font-medium text-white">{node.id}</span>
              </div>

              <div className="flex-1 text-sm text-gray-400">
                <span className="text-gray-500">{t("dashboard.ui.nodes.network")}: </span>
                {node.network}
              </div>

              <div className="flex flex-1 flex-col gap-1 sm:max-w-[140px]">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{t("dashboard.ui.nodes.sync")}</span>
                  <span>{node.sync}%</span>
                </div>
                <Progress value={node.sync} className="h-1.5 bg-gray-800 [&>div]:bg-teal-500" />
              </div>

              <div className="text-sm text-gray-400 sm:w-20 sm:text-center">
                {node.uptime}
              </div>

              <Badge
                className={
                  node.status === "running"
                    ? "border-teal-500/30 bg-teal-500/10 text-teal-400 hover:bg-teal-500/10"
                    : "border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/10"
                }
              >
                {node.status === "running"
                  ? t("dashboard.ui.nodes.running")
                  : t("dashboard.ui.nodes.syncing")}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}