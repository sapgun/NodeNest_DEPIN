"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NodeNestDashboard from "@/components/dashboard/NodeNestDashboard"
import { useLanguage } from "@/contexts/language-context"
import { useReducedMotion } from "@/lib/use-reduced-motion"

export default function NetworkLayerSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  const features = [
    { titleKey: "dashboard.features.monitoring.title", descKey: "dashboard.features.monitoring.description" },
    { titleKey: "dashboard.features.multichain.title", descKey: "dashboard.features.multichain.description" },
    { titleKey: "dashboard.features.updates.title", descKey: "dashboard.features.updates.description" },
  ]

  return (
    <section id="dashboard" className="bg-black py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t("dashboard.title")}</h2>
          <p className="mx-auto max-w-2xl text-gray-400">{t("dashboard.description")}</p>
        </motion.div>

        <Tabs defaultValue="overview" className="mx-auto max-w-5xl">
          <TabsList className="mx-auto mb-8 grid w-full max-w-[400px] grid-cols-3">
            <TabsTrigger value="overview" className="data-[state=active]:bg-teal-500 data-[state=active]:text-black">
              {t("dashboard.tabs.overview")}
            </TabsTrigger>
            <TabsTrigger value="rewards" className="data-[state=active]:bg-teal-500 data-[state=active]:text-black">
              {t("dashboard.tabs.rewards")}
            </TabsTrigger>
            <TabsTrigger value="nodes" className="data-[state=active]:bg-teal-500 data-[state=active]:text-black">
              {t("dashboard.tabs.nodes")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <NodeNestDashboard view="overview" />
            </motion.div>
          </TabsContent>

          <TabsContent value="rewards">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <NodeNestDashboard view="rewards" />
            </motion.div>
          </TabsContent>

          <TabsContent value="nodes">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <NodeNestDashboard view="nodes" />
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={reducedMotion ? {} : { borderColor: "rgba(20, 184, 166, 0.3)" }}
              className="rounded-xl border border-transparent bg-[#1a1d2c] p-6 transition-colors"
            >
              <h3 className="mb-2 text-lg font-medium text-gray-300">{t(feature.titleKey)}</h3>
              <p className="text-gray-400">{t(feature.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}