"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, Cpu, Database, Network, Wallet } from "lucide-react"

const steps = [
  {
    icon: Cpu,
    title: "Plug & Play Setup",
    description: "Connect your NodeNest device to power and internet. The device automatically configures itself.",
  },
  {
    icon: Network,
    title: "Select Networks",
    description: "Choose which blockchain networks you want to support through the NodeNest dashboard.",
  },
  {
    icon: Database,
    title: "Run Nodes",
    description: "Your device begins validating transactions and supporting the blockchain networks you selected.",
  },
  {
    icon: Wallet,
    title: "Earn Rewards",
    description: "Receive NNT tokens and native chain rewards directly to your wallet for your contribution.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0c0f1a] py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">How It Works</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            NodeNest makes running blockchain nodes simple and profitable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-500">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-medium text-white">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="mt-4 flex items-center text-teal-400">
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        <span className="text-sm">
                          Step {index + 1} of {steps.length}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <div className="overflow-hidden rounded-xl border border-gray-800 bg-black p-6 shadow-xl">
              <Image
                src="/images/NodeNest_device_plus_edition3.png"
                alt="NodeNest Devices"
                width={600}
                height={800}
                className="w-full rounded-lg"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
