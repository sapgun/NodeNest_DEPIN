"use client"

import { Github, Globe, Twitter, DiscIcon as Discord, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"
import { scrollToSection } from "@/lib/scroll-to"

const productLinks = [
  { key: "features", href: "#architecture" },
  { key: "pricing", href: "#products" },
  { key: "roadmap", href: "/community" },
  { key: "documentation", href: "https://github.com/sapgun/NodeNest_DEPIN", external: true },
] as const

const communityLinks = [
  { key: "discord", href: "#newsletter" },
  { key: "forum", href: "/community" },
  { key: "governance", href: "/community" },
  { key: "events", href: "/community" },
] as const

const companyLinks = [
  { key: "about", href: "#hero" },
  { key: "careers", href: "#newsletter" },
  { key: "blog", href: "/community" },
  { key: "contact", href: "#newsletter" },
] as const

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 bg-black py-12 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <Image
                src="/images/NodeNest_logo.png"
                alt="NodeNest Logo"
                width={180}
                height={60}
                className="h-auto w-auto max-w-[180px]"
                unoptimized
              />
            </div>
            <p className="mt-4 max-w-xs">{t("footer.tagline")}</p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="/community"
                className="text-gray-400 transition-colors hover:text-teal-400"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#newsletter"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#newsletter")
                }}
                className="text-gray-400 transition-colors hover:text-teal-400"
                aria-label="Discord"
              >
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                href="https://github.com/sapgun/NodeNest_DEPIN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-teal-400"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link href="/" className="text-gray-400 transition-colors hover:text-teal-400" aria-label="Website">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">{t("footer.product.title")}</h3>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item.key}>
                  {"external" in item ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-teal-400"
                    >
                      {t(`footer.product.${item.key}`)}
                    </Link>
                  ) : item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }}
                      className="transition-colors hover:text-teal-400"
                    >
                      {t(`footer.product.${item.key}`)}
                    </a>
                  ) : (
                    <Link href={item.href} className="transition-colors hover:text-teal-400">
                      {t(`footer.product.${item.key}`)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">{t("footer.community.title")}</h3>
            <ul className="space-y-2">
              {communityLinks.map((item) =>
                item.href.startsWith("#") ? (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }}
                      className="transition-colors hover:text-teal-400"
                    >
                      {t(`footer.community.${item.key}`)}
                    </a>
                  </li>
                ) : (
                  <li key={item.key}>
                    <Link href={item.href} className="transition-colors hover:text-teal-400">
                      {t(`footer.community.${item.key}`)}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">{t("footer.company.title")}</h3>
            <ul className="space-y-2">
              {companyLinks.map((item) =>
                item.href.startsWith("#") ? (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }}
                      className="transition-colors hover:text-teal-400"
                    >
                      {t(`footer.company.${item.key}`)}
                    </a>
                  </li>
                ) : (
                  <li key={item.key}>
                    <Link href={item.href} className="transition-colors hover:text-teal-400">
                      {t(`footer.company.${item.key}`)}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="max-w-md">
              <h3 className="mb-4 text-sm font-semibold uppercase text-white">{t("footer.newsletter.title")}</h3>
              <p className="mb-4 text-sm">{t("footer.newsletter.description")}</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="email"
                    placeholder={t("footer.newsletter.placeholder")}
                    className="border-gray-700 bg-[#0c0f1a] pl-10 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500"
                    aria-label={t("footer.newsletter.placeholder")}
                  />
                </div>
                <Button
                  className="bg-teal-500 text-black hover:bg-teal-600"
                  onClick={() => scrollToSection("#newsletter")}
                >
                  {t("footer.newsletter.button")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {currentYear} NodeNest. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
