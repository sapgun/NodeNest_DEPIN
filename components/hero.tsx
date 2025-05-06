"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,rgba(0,0,0,0)_70%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Omnichain Node Nesting Begins
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 text-lg text-gray-400"
            >
              Run decentralized nodes on modular edge hardware. Earn rewards while supporting blockchain networks with
              our energy-efficient devices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start"
            >
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                Pre-order Now
              </Button>
              <Button variant="outline" size="lg" className="border-teal-500 text-teal-500">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <Image
              src="/images/NodeNest_promo_image.png"
              alt="NodeNest Promo"
              width={600}
              height={600}
              className="w-full rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
