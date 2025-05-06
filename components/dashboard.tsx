"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  return (
    <section id="dashboard" className="bg-black py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Real-Time Dashboard</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Monitor your node performance, rewards, and network activity in real-time
          </p>
        </motion.div>

        <Tabs defaultValue="overview" className="mx-auto max-w-5xl">
          <TabsList className="mx-auto mb-8 grid w-[400px] grid-cols-3">
            <TabsTrigger value="overview" className="data-[state=active]:bg-teal-500 data-[state=active]:text-black">
              Overview
            </TabsTrigger>
            <TabsTrigger value="rewards" className="data-[state=active]:bg-teal-500 data-[state=active]:text-black">
              Rewards
            </TabsTrigger>
            <TabsTrigger value="nodes" className="data-[state=active]:bg-teal-500 data-[state=active]:text-black">
              Nodes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-xl border border-gray-800 bg-[#0c0f1a] shadow-xl"
            >
              <Image
                src="/images/NodeNest_dashboard5_2.png"
                alt="NodeNest Dashboard Overview"
                width={1200}
                height={800}
                className="w-full"
                unoptimized
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="rewards">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-xl border border-gray-800 bg-[#0c0f1a] shadow-xl"
            >
              <Image
                src="/images/NodeNest_dashboard4.png"
                alt="NodeNest Rewards Dashboard"
                width={1200}
                height={800}
                className="w-full"
                unoptimized
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="nodes">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-xl border border-gray-800 bg-[#0c0f1a] shadow-xl"
            >
              <Image
                src="/images/NodeNest_dashboard1.png"
                alt="NodeNest Nodes Dashboard"
                width={1200}
                height={800}
                className="w-full"
                unoptimized
              />
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-[#1a1d2c] p-6"
          >
            <h3 className="mb-2 text-lg font-medium text-gray-300">Real-time Monitoring</h3>
            <p className="text-gray-400">Track node performance, rewards, and network activity as it happens</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl bg-[#1a1d2c] p-6"
          >
            <h3 className="mb-2 text-lg font-medium text-gray-300">Multi-chain Support</h3>
            <p className="text-gray-400">Run nodes for multiple blockchains simultaneously from one interface</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl bg-[#1a1d2c] p-6"
          >
            <h3 className="mb-2 text-lg font-medium text-gray-300">Automated Updates</h3>
            <p className="text-gray-400">
              Software updates are automatically applied to keep your nodes running smoothly
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
