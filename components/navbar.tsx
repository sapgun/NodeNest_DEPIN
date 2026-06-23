"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { languages, useLanguage } from "@/contexts/language-context"
import { scrollToSection } from "@/lib/scroll-to"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const { currentLanguage, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Only run client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { name: t("navigation.home"), href: "#hero" },
    { name: t("navigation.architecture"), href: "#architecture" },
    { name: t("navigation.products"), href: "#products" },
    { name: t("navigation.dashboard"), href: "#dashboard" },
    { name: t("navigation.devices"), href: "#devices" },
    { name: t("navigation.rewards"), href: "#rewards" },
    { name: t("navigation.howItWorks"), href: "#how-it-works" },
  ]

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    scrollToSection(href)
  }

  const handleWaitlistClick = () => {
    setMobileMenuOpen(false)
    scrollToSection("#newsletter")
  }

  const changeLanguage = (languageCode: string) => {
    try {
      setLanguage(languageCode)
    } catch (error) {
      console.error("Error changing language:", error)
    }
  }

  // Prevent hydration errors by not rendering dropdown until client-side
  if (!mounted) {
    return (
      <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur-sm">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/NodeNest_logo.png"
                alt="NodeNest Logo"
                width={150}
                height={40}
                className="h-auto w-auto max-w-[150px]"
                priority
                unoptimized
              />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:gap-x-8">
            {navLinks.map((link) => (
              <span key={link.name} className="text-sm text-gray-300">
                {link.name}
              </span>
            ))}
          </div>
          <div className="hidden md:flex md:items-center md:gap-x-4">
            <Button
              className="bg-teal-500 text-black"
              onClick={() => scrollToSection("#newsletter")}
            >
              {t("navigation.joinWaitlist")}
            </Button>
          </div>
          <div className="flex md:hidden">
            <Button variant="ghost" size="sm" className="text-gray-300">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/NodeNest_logo.png"
              alt="NodeNest Logo"
              width={150}
              height={40}
              className="h-auto w-auto max-w-[150px]"
              priority
              unoptimized
            />
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:gap-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-sm text-gray-300 transition-colors hover:text-teal-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex md:items-center md:gap-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-300 hover:text-white">
                <Globe className="h-4 w-4" />
                <span>{currentLanguage.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-900 text-gray-300">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onSelect={() => changeLanguage(language.code)}
                  className={`cursor-pointer hover:bg-gray-800 hover:text-white ${
                    currentLanguage.code === language.code ? "text-teal-400" : ""
                  }`}
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            className="bg-teal-500 text-black hover:bg-teal-600"
            onClick={handleWaitlistClick}
          >
            {t("navigation.joinWaitlist")}
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-300 hover:text-white">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-900 text-gray-300">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onSelect={() => changeLanguage(language.code)}
                  className={`cursor-pointer hover:bg-gray-800 hover:text-white ${
                    currentLanguage.code === language.code ? "text-teal-400" : ""
                  }`}
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-gray-800 bg-black px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="block rounded-md px-3 py-2 text-base text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4">
              <div className="flex items-center px-3 py-2 text-base text-gray-300">
                <Globe className="mr-2 h-5 w-5" />
                <span>
                  {t("navigation.language")}: {currentLanguage.name}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 pl-10">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`rounded-md px-3 py-1 text-left text-sm hover:bg-gray-800 hover:text-white ${
                      currentLanguage.code === language.code ? "text-teal-400" : "text-gray-300"
                    }`}
                  >
                    {language.name}
                  </button>
                ))}
              </div>
              <Button
                className="w-full bg-teal-500 text-black hover:bg-teal-600"
                onClick={handleWaitlistClick}
              >
                {t("navigation.joinWaitlist")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
