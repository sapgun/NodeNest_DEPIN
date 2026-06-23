import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://node-nest-depin.vercel.app"),
  title: "NodeNest - Web3 Modular Edge Computing Device",
  description:
    "Modular DePIN edge hardware for running blockchain nodes. Join the waitlist for early builder access.",
  keywords: [
    "NodeNest",
    "DePIN",
    "edge computing",
    "blockchain nodes",
    "modular hardware",
    "Web3 infrastructure",
  ],
  openGraph: {
    title: "NodeNest - Modular Edge Node Infrastructure",
    description:
      "Stack compute, storage, and network modules. Run Solana, Ethereum, and more at the edge.",
    type: "website",
    url: "https://node-nest-depin.vercel.app",
    siteName: "NodeNest",
    images: [
      {
        url: "/images/NodeNest_promo_image.png",
        width: 1200,
        height: 630,
        alt: "NodeNest modular edge computing device",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NodeNest - Modular Edge Node Infrastructure",
    description:
      "Modular DePIN edge hardware. Join the waitlist for early builder access.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "NodeNest",
  description:
    "Modular DePIN edge hardware for running blockchain nodes at the edge.",
  brand: { "@type": "Brand", name: "NodeNest" },
  category: "Edge Computing Hardware",
  url: "https://node-nest-depin.vercel.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}