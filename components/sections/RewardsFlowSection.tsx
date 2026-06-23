"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, CheckCircle2, Coins, Cpu, Database, DollarSign, LineChart, Network, Wallet } from "lucide-react"
import NodeNestDashboard from "@/components/dashboard/NodeNestDashboard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { useReducedMotion } from "@/lib/use-reduced-motion"

export default function RewardsFlowSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  const steps = [
    { icon: Cpu, titleKey: "howItWorks.steps.setup.title", descKey: "howItWorks.steps.setup.description" },
    { icon: Network, titleKey: "howItWorks.steps.networks.title", descKey: "howItWorks.steps.networks.description" },
    { icon: Database, titleKey: "howItWorks.steps.nodes.title", descKey: "howItWorks.steps.nodes.description" },
    { icon: Wallet, titleKey: "howItWorks.steps.rewards.title", descKey: "howItWorks.steps.rewards.description" },
  ]

  const rewardCards = [
    { labelKey: "rewards.balance.label", value: "2,980 NNT", subKey: "rewards.balance.growth", icon: ArrowUpRight },
    { labelKey: "rewards.earnings.label", value: "105.24 NNT", subKey: "rewards.earnings.approx", icon: DollarSign },
    { labelKey: "rewards.nodes.label", valueKey: "rewards.nodes.value", subKey: "rewards.nodes.status", icon: Wallet },
    { labelKey: "rewards.roi.label", valueKey: "rewards.roi.value", subKey: "rewards.roi.timeframe", icon: Coins },
  ]

  return (
    <>
      <section id="rewards" className="bg-black py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t("rewards.title")}</h2>
            <p className="mx-auto max-w-2xl text-gray-400">{t("rewards.description")}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <NodeNestDashboard view="rewards" compact />
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {rewardCards.map((card, index) => (
                <motion.div
                  key={card.labelKey}
                  initial={reducedMotion ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={reducedMotion ? {} : { scale: 1.01 }}
                >
                  <Card className="border-gray-800 bg-[#0c0f1a] text-white">
                    <CardHeader className="pb-2">
                      <CardDescription className="text-gray-400">{t(card.labelKey)}</CardDescription>
                      <CardTitle className="text-2xl">
                        {"value" in card && card.value ? card.value : t(card.valueKey!)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-teal-400">
                        <card.icon className="mr-1 h-4 w-4" />
                        <span className="text-sm">{t(card.subKey)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 rounded-xl border border-gray-800 bg-[#0c0f1a] p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-medium text-white">{t("rewards.activity.title")}</h3>
              <div className="flex items-center text-sm text-gray-400">
                <LineChart className="mr-1 h-4 w-4" />
                <span>{t("rewards.activity.period")}</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-800">
              <table className="w-full text-left">
                <thead className="bg-gray-900 text-xs uppercase text-gray-500">
                  <tr>
                    <th className="px-4 py-3">{t("rewards.activity.table.type")}</th>
                    <th className="px-4 py-3">{t("rewards.activity.table.details")}</th>
                    <th className="px-4 py-3 text-right">{t("rewards.activity.table.amount")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {["+0.32 NNT", "+0.96 NNT", "+0.96 NNT", "+0.36 NNT"].map((amount, i) => (
                    <tr key={i} className="bg-[#0c0f1a]">
                      <td className="px-4 py-3 text-sm">{t("rewards.activity.entries.reward")}</td>
                      <td className="px-4 py-3 text-sm">{i === 0 ? "Node-04" : "Node-01"}</td>
                      <td className="px-4 py-3 text-right text-sm text-teal-400">{amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#0c0f1a] py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t("howItWorks.title")}</h2>
            <p className="mx-auto max-w-2xl text-gray-400">{t("howItWorks.description")}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="order-2 space-y-10 md:order-1">
              {steps.map((step, index) => (
                <motion.div
                  key={step.titleKey}
                  initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-500">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-medium text-white">{t(step.titleKey)}</h3>
                    <p className="text-gray-400">{t(step.descKey)}</p>
                    {index < steps.length - 1 && (
                      <div className="mt-4 flex items-center text-teal-400">
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        <span className="text-sm">
                          {t("howItWorks.step")} {index + 1} {t("howItWorks.of")} {steps.length}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <div className="overflow-hidden rounded-xl border border-gray-800 bg-black p-6 shadow-xl">
                <Image
                  src="/images/NodeNest_device_plus_edition3.png"
                  alt="NodeNest Devices"
                  width={600}
                  height={800}
                  className="w-full rounded-lg"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}