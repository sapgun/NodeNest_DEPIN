"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import NodeNestHeroCanvas from "@/components/webgl/NodeNestHeroCanvas"

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function HeroSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  const motionProps = reducedMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {}

  return (
    <section
      id="hero"
      aria-label="NodeNest hero"
      className="relative overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,rgba(0,0,0,0)_70%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mb-10 text-lg text-gray-400"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start"
            >
              <motion.div whileHover={reducedMotion ? {} : { scale: 1.02 }} whileTap={reducedMotion ? {} : { scale: 0.98 }}>
                <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                  {t("hero.preOrder")}
                </Button>
              </motion.div>
              <motion.div whileHover={reducedMotion ? {} : { scale: 1.02 }} whileTap={reducedMotion ? {} : { scale: 0.98 }}>
                <Button variant="outline" size="lg" className="border-teal-500 text-teal-500">
                  {t("hero.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            {...motionProps}
            initial={reducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
            animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <NodeNestHeroCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  )
}