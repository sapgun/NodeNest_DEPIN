"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, CheckCircle2, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useReducedMotion } from "@/lib/use-reduced-motion"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function CTASection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!EMAIL_PATTERN.test(email.trim())) {
      setError(t("newsletter.invalidEmail"))
      return
    }

    try {
      localStorage.setItem("nodenest-waitlist-email", email.trim())
    } catch {
      // localStorage may be unavailable in private browsing
    }

    setSubmitted(true)
  }

  return (
    <section id="newsletter" aria-labelledby="waitlist-heading" className="bg-black py-24">
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
            <h2 id="waitlist-heading" className="mb-2 text-2xl font-bold text-white md:text-3xl">{t("newsletter.title")}</h2>
            <p className="text-gray-400">{t("newsletter.description")}</p>
          </motion.div>

          {submitted ? (
            <div
              role="status"
              className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-lg border border-teal-500/30 bg-teal-500/10 px-4 py-3 text-sm text-teal-300"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
              <p>{t("newsletter.success")}</p>
            </div>
          ) : (
            <motion.form
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("newsletter.placeholder")}
                  aria-label={t("newsletter.placeholder")}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? "waitlist-error" : undefined}
                  required
                  className="border-gray-700 bg-[#0c0f1a] pl-10 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <motion.div whileHover={reducedMotion ? {} : { scale: 1.02 }} whileTap={reducedMotion ? {} : { scale: 0.98 }}>
                <Button type="submit" className="w-full bg-teal-500 text-black hover:bg-teal-600 sm:w-auto">
                  {t("newsletter.button")}
                </Button>
              </motion.div>
              {error && (
                <p id="waitlist-error" role="alert" className="w-full text-center text-sm text-red-400 sm:col-span-2">
                  {error}
                </p>
              )}
            </motion.form>
          )}

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