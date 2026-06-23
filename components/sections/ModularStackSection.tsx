"use client"

import { motion } from "framer-motion"
import { Cpu, HardDrive, Network } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import ProductGalleryEnhanced from "@/components/product-gallery-enhanced"

const stackModules = [
  {
    icon: Cpu,
    key: "processing",
    titleKey: "products.standard.features.processing",
    descKey: "products.standard.features.nodes",
  },
  {
    icon: HardDrive,
    key: "storage",
    titleKey: "products.plus.features.cooling",
    descKey: "products.standard.features.energy",
  },
  {
    icon: Network,
    key: "network",
    titleKey: "dashboard.features.multichain.title",
    descKey: "dashboard.features.multichain.description",
  },
]

export default function ModularStackSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  return (
    <>
      <section id="modular-stack" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {t("modularStack.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              {t("modularStack.description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stackModules.map((mod, index) => (
              <motion.div
                key={mod.key}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={reducedMotion ? {} : { borderColor: "rgba(20, 184, 166, 0.4)" }}
                className="rounded-xl border border-gray-800 bg-[#0c0f1a] p-6 transition-colors"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                  <mod.icon className="h-6 w-6 text-teal-400" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">{t(mod.titleKey)}</h3>
                <p className="text-sm text-gray-400">{t(mod.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductGalleryEnhanced />
    </>
  )
}