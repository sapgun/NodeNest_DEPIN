"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useReducedMotion } from "@/lib/use-reduced-motion"

export default function CTASection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  return (
    <section id="newsletter" className="bg-black py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-[#0c0f1a] to-[#1a1d2c] p-8 shadow-xl"
        >
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/20">
              <Bell className="h-8 w-8 text-teal-400" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">{t("newsletter.title")}</h2>
            <p className="text-gray-400">{t("newsletter.description")}</p>
          </motion.div>

          <motion.form
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <Input
                type="email"
                placeholder={t("newsletter.placeholder")}
                aria-label={t("newsletter.placeholder")}
                className="border-gray-700 bg-[#0c0f1a] pl-10 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <motion.div whileHover={reducedMotion ? {} : { scale: 1.02 }} whileTap={reducedMotion ? {} : { scale: 0.98 }}>
              <Button type="submit" className="w-full bg-teal-500 text-black hover:bg-teal-600 sm:w-auto">
                {t("newsletter.button")}
              </Button>
            </motion.div>
          </motion.form>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-center text-xs text-gray-500"
          >
            {t("newsletter.terms")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}