"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import ImageUploader from "@/components/image-uploader"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CommunityPage() {
  const { t } = useLanguage()
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const handleUploadComplete = (url: string) => {
    setUploadedImages((prev) => [...prev, url])
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">NodeNest Community</h1>
            <p className="mx-auto max-w-2xl text-gray-400">
              Share your NodeNest setup and join our growing community of node operators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <ImageUploader onUploadComplete={handleUploadComplete} />
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">Community Uploads</h2>

              {uploadedImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {uploadedImages.map((url, index) => (
                    <div key={index} className="overflow-hidden rounded-lg border border-gray-800">
                      <Image
                        src={url || "/placeholder.svg"}
                        alt={`Community upload ${index + 1}`}
                        width={300}
                        height={300}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-40 items-center justify-center rounded-lg border border-gray-800 bg-[#0c0f1a]">
                  <p className="text-gray-400">No images uploaded yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
