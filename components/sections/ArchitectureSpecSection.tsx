"use client"

import { motion } from "framer-motion"
import {
  Activity,
  Box,
  Cpu,
  Database,
  HardDrive,
  Layers,
  Network,
  Server,
  Wallet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import { scrollToSection } from "@/lib/scroll-to"
import Link from "next/link"

const layerIcons = {
  hardware: Box,
  runtime: Server,
  network: Network,
  reward: Wallet,
}

export default function ArchitectureSpecSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  const layers = [
    {
      key: "hardware",
      icon: layerIcons.hardware,
      titleKey: "architecture.layers.hardware.title",
      items: [
        "architecture.layers.hardware.items.edge",
        "architecture.layers.hardware.items.storage",
        "architecture.layers.hardware.items.modular",
      ],
    },
    {
      key: "runtime",
      icon: layerIcons.runtime,
      titleKey: "architecture.layers.runtime.title",
      items: [
        "architecture.layers.runtime.items.docker",
        "architecture.layers.runtime.items.clients",
        "architecture.layers.runtime.items.monitoring",
        "architecture.layers.runtime.items.uptime",
      ],
    },
    {
      key: "network",
      icon: layerIcons.network,
      titleKey: "architecture.layers.network.title",
      items: [
        "architecture.layers.network.items.solana",
        "architecture.layers.network.items.ethereum",
        "architecture.layers.network.items.algorand",
        "architecture.layers.network.items.xrpl",
        "architecture.layers.network.items.avalanche",
      ],
    },
    {
      key: "reward",
      icon: layerIcons.reward,
      titleKey: "architecture.layers.reward.title",
      items: [
        "architecture.layers.reward.items.tracking",
        "architecture.layers.reward.items.uptime",
        "architecture.layers.reward.items.resource",
        "architecture.layers.reward.items.dashboard",
      ],
    },
  ]

  const layerDecor = [
    { icon: Cpu, labelKey: "architecture.layers.hardware.items.edge" },
    { icon: HardDrive, labelKey: "architecture.layers.hardware.items.storage" },
    { icon: Database, labelKey: "architecture.layers.runtime.items.clients" },
    { icon: Activity, labelKey: "architecture.layers.reward.items.uptime" },
  ]

  return (
    <section id="architecture" aria-labelledby="architecture-heading" className="bg-[#0c0f1a] py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-sm text-teal-400">
            <Layers className="h-4 w-4" />
            {t("architecture.badge")}
          </div>
          <h2 id="architecture-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">{t("architecture.title")}</h2>
          <p className="mx-auto max-w-2xl text-gray-400">{t("architecture.description")}</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {layers.map((layer, index) => {
            const Icon = layer.icon
            return (
              <motion.article
                key={layer.key}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={reducedMotion ? {} : { borderColor: "rgba(20, 184, 166, 0.35)" }}
                className="rounded-xl border border-gray-800 bg-black p-6 transition-colors"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10">
                    <Icon className="h-5 w-5 text-teal-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{t(layer.titleKey)}</h3>
                </div>
                <ul className="space-y-2.5">
                  {layer.items.map((itemKey) => (
                    <li key={itemKey} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500/60" aria-hidden="true" />
                      {t(itemKey)}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-6 rounded-xl border border-gray-800 bg-[#141820] px-6 py-4"
          aria-hidden="true"
        >
          {layerDecor.map(({ icon: DecorIcon, labelKey }) => (
            <div key={labelKey} className="flex items-center gap-2 text-xs text-gray-500">
              <DecorIcon className="h-3.5 w-3.5 text-teal-500/50" />
              <span>{t(labelKey)}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          id="build-log"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-800 bg-gradient-to-br from-[#0c0f1a] to-[#1a1d2c] p-8 text-center"
        >
          <h3 className="mb-2 text-xl font-semibold text-white">{t("architecture.buildLog.title")}</h3>
          <p className="mb-6 text-gray-400">{t("architecture.buildLog.description")}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              className="bg-teal-500 text-black hover:bg-teal-600"
              onClick={() => scrollToSection("#newsletter")}
            >
              {t("hero.joinWaitlist")}
            </Button>
            <Button variant="outline" className="border-teal-500 text-teal-500" asChild>
              <Link href="/community">{t("hero.followBuildLog")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}