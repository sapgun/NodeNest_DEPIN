import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NodeNest - Web3 Modular Edge Computing Device",
  description:
    "Modular DePIN edge hardware for running blockchain nodes. Join the waitlist for early builder access.",
  openGraph: {
    title: "NodeNest - Modular Edge Node Infrastructure",
    description:
      "Stack compute, storage, and network modules. Run Solana, Ethereum, and more at the edge.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
