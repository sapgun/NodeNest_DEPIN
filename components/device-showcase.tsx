"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function DeviceShowcase() {
  const { t } = useLanguage()

  const devices = [
    { name: t("devices.colors.graphite"), color: t("devices.colorDescriptions.graphite") },
    { name: t("devices.colors.silver"), color: t("devices.colorDescriptions.silver") },
    { name: t("devices.colors.mint"), color: t("devices.colorDescriptions.mint") },
    { name: t("devices.colors.cobalt"), color: t("devices.colorDescriptions.cobalt") },
  ]

  return (
    <section id="devices" className="bg-[#0c0f1a] py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-white md:text-4xl"
          >
            {t("devices.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-gray-400"
          >
            {t("devices.description")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 overflow-hidden rounded-xl"
        >
          <div className="flex items-center justify-center">
            <Image
              src="/images/NodeNest_device1.png"
              alt="NodeNest devices in different colors"
              width={1000}
              height={400}
              className="rounded-xl"
              unoptimized
            />
          </div>
        </motion.div>

        <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg bg-gray-900 p-6 text-center"
            >
              <div className="text-xl font-medium text-teal-400">{device.name}</div>
              <div className="text-sm text-gray-400">{device.color}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl bg-black p-6"
          >
            <div className="mb-4 flex items-center justify-center">
              <Image
                src="/images/NodeNest_device3.png"
                alt="NodeNest devices in different colors"
                width={400}
                height={400}
                className="h-auto max-w-full rounded-lg"
                unoptimized
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-white">{t("devices.standard.title")}</h3>
              <p className="text-gray-400">{t("devices.standard.description")}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-xl bg-black p-6"
          >
            <div className="mb-4 flex items-center justify-center">
              <Image
                src="/images/NodeNest_device_plus_edition2.png"
                alt="NodeNest devices in multiple colors"
                width={400}
                height={400}
                className="h-auto max-w-full rounded-lg"
                unoptimized
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-white">{t("devices.plus.title")}</h3>
              <p className="text-gray-400">{t("devices.plus.description")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
