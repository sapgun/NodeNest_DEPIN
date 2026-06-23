"use client"

import { ChevronDown } from "lucide-react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { useLanguage } from "@/contexts/language-context"
import DashboardMetricCard from "../DashboardMetricCard"

const earningsHistory = [
  { date: "Feb 1", value: 10 },
  { date: "Feb 4", value: 18 },
  { date: "Feb 7", value: 14 },
  { date: "Feb 8", value: 22 },
  { date: "Feb 11", value: 16 },
  { date: "Feb 15", value: 35 },
  { date: "Feb 18", value: 20 },
  { date: "Feb 22", value: 42 },
]

const activityRows = [
  { node: "Node-04", amount: "+0.32 NNT" },
  { node: "Node-01", amount: "+0.96 NNT" },
  { node: "Node-01", amount: "+0.96 NNT" },
  { node: "Node-01", amount: "+0.36 NNT" },
]

interface RewardsPanelProps {
  compact?: boolean
}

export default function RewardsPanel({ compact = false }: RewardsPanelProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      {!compact && (
        <h3 className="text-xl font-bold text-white md:text-2xl">{t("dashboard.ui.rewards.title")}</h3>
      )}

      <div className={compact ? "grid grid-cols-1 gap-3" : "grid grid-cols-1 gap-3 sm:grid-cols-3"}>
        <DashboardMetricCard label={t("rewards.balance.label")} value="2,980 NNT" />
        <DashboardMetricCard
          label={t("rewards.earnings.label")}
          value="105.24"
          subValue={t("rewards.balance.growth")}
        />
        <DashboardMetricCard label={t("rewards.nodes.label")} value="4" />
      </div>

      <div className="rounded-xl border border-gray-800 bg-[#141820] p-4">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-sm font-medium text-white">{t("dashboard.ui.rewards.earningsHistory")}</h4>
          <button
            type="button"
            className="flex items-center gap-1 rounded-full border border-gray-700 bg-[#0c0f1a] px-3 py-1 text-xs text-gray-400"
            aria-label={t("dashboard.ui.rewards.period1M")}
          >
            {t("dashboard.ui.rewards.period1M")}
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
        <div className={compact ? "h-32" : "h-48"}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={earningsHistory}>
              <defs>
                <linearGradient id="historyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" tick={{ fill: "#6b7280", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6b7280", fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 60]} />
              <Tooltip
                contentStyle={{ background: "#141820", border: "1px solid #374151", borderRadius: 8 }}
                labelStyle={{ color: "#9ca3af" }}
                itemStyle={{ color: "#2dd4bf" }}
              />
              <Area type="monotone" dataKey="value" stroke="#2dd4bf" fill="url(#historyGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-xl border border-gray-800 bg-[#141820] p-4">
        <h4 className="mb-4 text-sm font-medium text-white">{t("dashboard.ui.rewards.activity")}</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-xs uppercase text-gray-500">
                <th className="pb-2 pr-4">{t("rewards.activity.table.type")}</th>
                <th className="pb-2 pr-4">{t("rewards.activity.table.details")}</th>
                <th className="pb-2 text-right">{t("rewards.activity.table.amount")}</th>
              </tr>
            </thead>
            <tbody>
              {activityRows.map((row, i) => (
                <tr key={i} className="border-b border-gray-800/60 last:border-0">
                  <td className="py-2.5 text-gray-300">{t("rewards.activity.entries.reward")}</td>
                  <td className="py-2.5 text-gray-400">{row.node}</td>
                  <td className="py-2.5 text-right text-teal-400">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}