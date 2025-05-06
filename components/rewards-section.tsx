"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Coins, DollarSign, LineChart, Wallet } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function RewardsSection() {
  return (
    <section id="rewards" className="bg-black py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Rewards & Earnings</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Earn passive income by running blockchain nodes on your NodeNest device
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl border border-gray-800 bg-[#0c0f1a] shadow-xl"
          >
            <Image
              src="/images/NodeNest_dashboard5.png"
              alt="NodeNest Rewards Dashboard"
              width={600}
              height={600}
              className="w-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-gray-800 bg-[#0c0f1a] text-white">
                <CardHeader className="pb-2">
                  <CardDescription className="text-gray-400">NodeNest Balance</CardDescription>
                  <CardTitle className="text-2xl">2,980 NNT</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-teal-400">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    <span className="text-sm">+7.2% from last week</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-gray-800 bg-[#0c0f1a] text-white">
                <CardHeader className="pb-2">
                  <CardDescription className="text-gray-400">72h Earnings</CardDescription>
                  <CardTitle className="text-2xl">105.24 NNT</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-teal-400">
                    <DollarSign className="mr-1 h-4 w-4" />
                    <span className="text-sm">≈ $315 at current rates</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-gray-800 bg-[#0c0f1a] text-white">
                <CardHeader className="pb-2">
                  <CardDescription className="text-gray-400">Active Nodes</CardDescription>
                  <CardTitle className="text-2xl">4 Nodes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-teal-400">
                    <Wallet className="mr-1 h-4 w-4" />
                    <span className="text-sm">All nodes running optimally</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-gray-800 bg-[#0c0f1a] text-white">
                <CardHeader className="pb-2">
                  <CardDescription className="text-gray-400">ROI Estimate</CardDescription>
                  <CardTitle className="text-2xl">4.2 months</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-teal-400">
                    <Coins className="mr-1 h-4 w-4" />
                    <span className="text-sm">Based on current rates</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-xl border border-gray-800 bg-[#0c0f1a] p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-medium text-white">Recent Activity</h3>
            <div className="flex items-center text-sm text-gray-400">
              <LineChart className="mr-1 h-4 w-4" />
              <span>Last 24 hours</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <table className="w-full text-left">
              <thead className="bg-gray-900 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Details</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0c0f1a]">
                  <td className="px-4 py-3 text-sm">Cycle reward</td>
                  <td className="px-4 py-3 text-sm">Node-04</td>
                  <td className="px-4 py-3 text-right text-sm text-teal-400">+0.32 NNT</td>
                </tr>
                <tr className="bg-[#0c0f1a]">
                  <td className="px-4 py-3 text-sm">Cycle reward</td>
                  <td className="px-4 py-3 text-sm">Node-01</td>
                  <td className="px-4 py-3 text-right text-sm text-teal-400">+0.96 NNT</td>
                </tr>
                <tr className="bg-[#0c0f1a]">
                  <td className="px-4 py-3 text-sm">Cycle reward</td>
                  <td className="px-4 py-3 text-sm">Node-01</td>
                  <td className="px-4 py-3 text-right text-sm text-teal-400">+0.96 NNT</td>
                </tr>
                <tr className="bg-[#0c0f1a]">
                  <td className="px-4 py-3 text-sm">Cycle reward</td>
                  <td className="px-4 py-3 text-sm">Node-01</td>
                  <td className="px-4 py-3 text-right text-sm text-teal-400">+0.36 NNT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
