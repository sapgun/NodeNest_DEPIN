"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Coins, DollarSign, LineChart, Wallet } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function RewardsSection() {
  const { t } = useLanguage()

  // 보상 관련 번역 키 추가
  const rewardsTranslations = {
    title: t("rewards.title"),
    description: t("rewards.description"),
    balance: {
      label: t("rewards.balance.label"),
      value: "2,980 NNT",
      growth: t("rewards.balance.growth"),
    },
    earnings: {
      label: t("rewards.earnings.label"),
      value: "105.24 NNT",
      approx: t("rewards.earnings.approx"),
    },
    nodes: {
      label: t("rewards.nodes.label"),
      value: t("rewards.nodes.value"),
      status: t("rewards.nodes.status"),
    },
    roi: {
      label: t("rewards.roi.label"),
      value: t("rewards.roi.value"),
      timeframe: t("rewards.roi.timeframe"),
    },
    activity: {
      title: t("rewards.activity.title"),
      period: t("rewards.activity.period"),
      table: {
        type: t("rewards.activity.table.type"),
        details: t("rewards.activity.table.details"),
        amount: t("rewards.activity.table.amount"),
      },
    },
  }

  return (
    <section id="rewards" className="bg-black py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{rewardsTranslations.title}</h2>
          <p className="mx-auto max-w-2xl text-gray-400">{rewardsTranslations.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl border border-gray-800 bg-[#0c0f1a] shadow-xl"
          >
            <Image
              src="/images/NodeNest_dashboard5.png"
              alt="NodeNest Rewards Dashboard"
              width={600}
              height={600}
              className="w-full"
              unoptimized
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-gray-800 bg-[#0c0f1a] text-white">
                <CardHeader className="pb-2">
                  <CardDescription className="text-gray-400">{rewardsTranslations.balance.label}</CardDescription>
                  <CardTitle className="text-2xl">{rewardsTranslations.balance.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-teal-400">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    <span className="text-sm">{rewardsTranslations.balance.growth}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-gray-800 bg-[#0c0f1a] text-white">
                <CardHeader className="pb-2">
                  <CardDescription className="text-gray-400">{rewardsTranslations.earnings.label}</CardDescription>
                  <CardTitle className="text-2xl">{rewardsTranslations.earnings.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-teal-400">
                    <DollarSign className="mr-1 h-4 w-4" />
                    <span className="text-sm">{rewardsTranslations.earnings.approx}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-gray-800 bg-[#0c0f1a] text-white">
                <CardHeader className="pb-2">
                  <CardDescription className="text-gray-400">{rewardsTranslations.nodes.label}</CardDescription>
                  <CardTitle className="text-2xl">{rewardsTranslations.nodes.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-teal-400">
                    <Wallet className="mr-1 h-4 w-4" />
                    <span className="text-sm">{rewardsTranslations.nodes.status}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-gray-800 bg-[#0c0f1a] text-white">
                <CardHeader className="pb-2">
                  <CardDescription className="text-gray-400">{rewardsTranslations.roi.label}</CardDescription>
                  <CardTitle className="text-2xl">{rewardsTranslations.roi.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-teal-400">
                    <Coins className="mr-1 h-4 w-4" />
                    <span className="text-sm">{rewardsTranslations.roi.timeframe}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-xl border border-gray-800 bg-[#0c0f1a] p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-medium text-white">{rewardsTranslations.activity.title}</h3>
            <div className="flex items-center text-sm text-gray-400">
              <LineChart className="mr-1 h-4 w-4" />
              <span>{rewardsTranslations.activity.period}</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <table className="w-full text-left">
              <thead className="bg-gray-900 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">{rewardsTranslations.activity.table.type}</th>
                  <th className="px-4 py-3">{rewardsTranslations.activity.table.details}</th>
                  <th className="px-4 py-3 text-right">{rewardsTranslations.activity.table.amount}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0c0f1a]">
                  <td className="px-4 py-3 text-sm">{t("rewards.activity.entries.reward")}</td>
                  <td className="px-4 py-3 text-sm">Node-04</td>
                  <td className="px-4 py-3 text-right text-sm text-teal-400">+0.32 NNT</td>
                </tr>
                <tr className="bg-[#0c0f1a]">
                  <td className="px-4 py-3 text-sm">{t("rewards.activity.entries.reward")}</td>
                  <td className="px-4 py-3 text-sm">Node-01</td>
                  <td className="px-4 py-3 text-right text-sm text-teal-400">+0.96 NNT</td>
                </tr>
                <tr className="bg-[#0c0f1a]">
                  <td className="px-4 py-3 text-sm">{t("rewards.activity.entries.reward")}</td>
                  <td className="px-4 py-3 text-sm">Node-01</td>
                  <td className="px-4 py-3 text-right text-sm text-teal-400">+0.96 NNT</td>
                </tr>
                <tr className="bg-[#0c0f1a]">
                  <td className="px-4 py-3 text-sm">{t("rewards.activity.entries.reward")}</td>
                  <td className="px-4 py-3 text-sm">Node-01</td>
                  <td className="px-4 py-3 text-right text-sm text-teal-400">+0.36 NNT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
