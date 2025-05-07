"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { DollarSign, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function ProductGallery() {
  const { t } = useLanguage()

  return (
    <section id="products" className="bg-[#0c0f1a] py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t("products.title")}</h2>
          <p className="mx-auto max-w-2xl text-gray-400">{t("products.description")}</p>
        </motion.div>

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
                src="/images/NodeNest_device_standard.png"
                alt="NodeNest Standard Device"
                width={400}
                height={400}
                className="h-auto max-w-full rounded-lg"
                unoptimized
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-white">{t("products.standard.title")}</h3>
              <p className="text-gray-400">{t("products.standard.subtitle")}</p>
              <div className="mt-4 flex items-center justify-center text-2xl font-bold text-teal-500">
                <DollarSign className="h-6 w-6" />
                <span>{t("products.standard.price")}</span>
                <span className="ml-1 text-sm font-normal text-gray-400">{t("products.standard.priceLabel")}</span>
              </div>
              <ul className="mt-4 space-y-2 text-left">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-teal-500" />
                  <span className="text-gray-300">{t("products.standard.features.processing")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-teal-500" />
                  <span className="text-gray-300">{t("products.standard.features.nodes")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-teal-500" />
                  <span className="text-gray-300">{t("products.standard.features.energy")}</span>
                </li>
              </ul>
              <Button className="mt-6 w-full bg-teal-500 text-black hover:bg-teal-600">
                {t("products.standard.button")}
              </Button>
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
                src="/images/NodeNest_stack.png"
                alt="NodeNest Stack"
                width={400}
                height={400}
                className="h-auto max-w-full rounded-lg"
                unoptimized
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-white">{t("products.plus.title")}</h3>
              <p className="text-gray-400">{t("products.plus.subtitle")}</p>
              <div className="mt-4 flex items-center justify-center text-2xl font-bold text-teal-500">
                <DollarSign className="h-6 w-6" />
                <span>{t("products.plus.price")}</span>
                <span className="ml-1 text-sm font-normal text-gray-400">{t("products.plus.priceLabel")}</span>
              </div>
              <ul className="mt-4 space-y-2 text-left">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-teal-500" />
                  <span className="text-gray-300">{t("products.plus.features.processing")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-teal-500" />
                  <span className="text-gray-300">{t("products.plus.features.nodes")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-teal-500" />
                  <span className="text-gray-300">{t("products.plus.features.cooling")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-teal-500" />
                  <span className="text-gray-300">{t("products.plus.features.colors")}</span>
                </li>
              </ul>
              <Button className="mt-6 w-full bg-teal-500 text-black hover:bg-teal-600">
                {t("products.plus.button")}
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-xl bg-black p-6"
        >
          <div className="mb-4 flex items-center justify-center">
            <Image
              src="/images/NodeNest_device_plus_edition3.png"
              alt="NodeNest Color Variants"
              width={1000}
              height={400}
              className="h-auto max-w-full rounded-lg"
              unoptimized
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium text-white">{t("products.plusEdition.title")}</h3>
            <p className="text-gray-400">{t("products.plusEdition.subtitle")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
