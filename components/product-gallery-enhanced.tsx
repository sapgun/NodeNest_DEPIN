"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { DollarSign, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import type { ProductImage } from "@/lib/product-images"

export default function ProductGalleryEnhanced() {
  const { t } = useLanguage()
  const [images, setImages] = useState<ProductImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProductImages() {
      try {
        setLoading(true)
        const response = await fetch("/api/product-images")

        if (!response.ok) {
          throw new Error("Failed to fetch product images")
        }

        const data = await response.json()
        setImages(data.images)

        // 첫 번째 이미지를 활성 이미지로 설정
        if (data.images.length > 0) {
          setActiveImage(data.images[0].id)
        }
      } catch (err) {
        console.error("Error fetching product images:", err)
        setError("Failed to load product images")
      } finally {
        setLoading(false)
      }
    }

    fetchProductImages()
  }, [])

  // 카테고리별 이미지 필터링
  const standardImages = images.filter((img) => img.category === "standard")
  const plusImages = images.filter((img) => img.category === "plus")
  const colorImages = images.filter((img) => img.category === "colors")

  // 활성 이미지 찾기
  const activeImageData = images.find((img) => img.id === activeImage)

  if (loading) {
    return (
      <section id="products" className="bg-[#0c0f1a] py-24">
        <div className="container mx-auto px-4">
          <div className="flex h-96 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-teal-500" />
            <span className="ml-2 text-gray-400">Loading product gallery...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="products" className="bg-[#0c0f1a] py-24">
        <div className="container mx-auto px-4">
          <div className="flex h-96 items-center justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </section>
    )
  }

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

        {/* 메인 이미지 갤러리 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 overflow-hidden rounded-xl"
        >
          {activeImageData && (
            <div className="flex items-center justify-center">
              <Image
                src={activeImageData.url || "/placeholder.svg"}
                alt={activeImageData.alt}
                width={1000}
                height={600}
                className="h-auto w-full max-w-4xl rounded-xl transition-all duration-300 ease-in-out"
                unoptimized
              />
            </div>
          )}
        </motion.div>

        {/* 썸네일 갤러리 */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
          {images.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className={`cursor-pointer overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                activeImage === image.id
                  ? "border-teal-500 shadow-lg shadow-teal-500/20"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
              onClick={() => setActiveImage(image.id)}
            >
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                width={120}
                height={120}
                className="h-20 w-20 object-cover"
                unoptimized
              />
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
              {standardImages.length > 0 && (
                <Image
                  src={standardImages[0].url || "/placeholder.svg"}
                  alt={standardImages[0].alt}
                  width={400}
                  height={400}
                  className="h-auto max-w-full rounded-lg"
                  unoptimized
                />
              )}
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
              {plusImages.length > 0 && (
                <Image
                  src={plusImages[0].url || "/placeholder.svg"}
                  alt={plusImages[0].alt}
                  width={400}
                  height={400}
                  className="h-auto max-w-full rounded-lg"
                  unoptimized
                />
              )}
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
            {colorImages.length > 0 && (
              <Image
                src={colorImages[0].url || "/placeholder.svg"}
                alt={colorImages[0].alt}
                width={1000}
                height={400}
                className="h-auto max-w-full rounded-lg"
                unoptimized
              />
            )}
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
