"use client"

import { Box } from "lucide-react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import DashboardMetricCard from "../DashboardMetricCard"

const earningsData = [
  { month: "Aug", value: 68 },
  { month: "Sep", value: 68 },
  { month: "Oct", value: 95 },
  { month: "Nov", value: 90 },
  { month: "Dec", value: 110 },
  { month: "Jan", value: 138 },
]

const monthlySparkline = [
  { i: 0, v: 12 },
  { i: 1, v: 18 },
  { i: 2, v: 28 },
  { i: 3, v: 35 },
  { i: 4, v: 32 },
]

const nodeRows = [
  { name: "Status", col2: "Online", col3: null, isStatus: true },
  { name: "Edge Node", col2: "156", col3: "156" },
  { name: "Edge Node", col2: "152", col3: "152" },
  { name: "Edge Node", col2: "160", col3: "33%" },
]

export default function OverviewPanel() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white md:text-2xl">{t("dashboard.ui.sidebar.dashboard")}</h3>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <DashboardMetricCard label={t("dashboard.ui.overview.activeNodes")} value="3" />
        <DashboardMetricCard label={t("dashboard.ui.overview.totalTasks")} value="468" />
        <DashboardMetricCard label={t("dashboard.ui.overview.monthEarnings")} value="153.25 NEST" />
        <DashboardMetricCard label={t("dashboard.ui.overview.uptime")} value="99.9%" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-800 bg-[#141820] p-4">
          <h4 className="mb-4 text-sm font-medium text-white">{t("dashboard.ui.overview.nodeOverview")}</h4>
          <div className="space-y-3">
            {nodeRows.map((row, i) => (
              <div key={i} className="flex items-center gap-3 border-b border-gray-800/60 pb-3 last:border-0 last:pb-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                  <Box className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="flex-1 text-sm text-gray-300">{row.name}</span>
                {row.isStatus ? (
                  <Badge className="border-gray-700 bg-[#1a1d2c] text-white hover:bg-[#1a1d2c]">
                    {t("dashboard.ui.overview.online")}
                  </Badge>
                ) : (
                  <>
                    <span className="w-12 text-right text-sm text-gray-400">{row.col2}</span>
                    <span className="w-12 text-right text-sm text-gray-500">{row.col3}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-[#141820] p-4">
          <div className="mb-4 flex items-baseline justify-between">
            <h4 className="text-sm font-medium text-white">{t("dashboard.ui.overview.earnings")}</h4>
            <span className="text-2xl font-semibold text-white">212 NEST</span>
          </div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={earningsData}>
                <defs>
                  <linearGradient id="earningsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} domain={[30, 150]} />
                <Tooltip
                  contentStyle={{ background: "#141820", border: "1px solid #374151", borderRadius: 8 }}
                  labelStyle={{ color: "#9ca3af" }}
                  itemStyle={{ color: "#2dd4bf" }}
                />
                <Area type="monotone" dataKey="value" stroke="#2dd4bf" fill="url(#earningsGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-xs text-gray-500">{t("dashboard.ui.overview.monthlyRewards")}</p>
            <div className="h-10">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlySparkline}>
                  <Line type="monotone" dataKey="v" stroke="#2dd4bf" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}