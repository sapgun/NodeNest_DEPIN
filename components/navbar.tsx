"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Products", href: "#products" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Devices", href: "#devices" },
  { name: "Rewards", href: "#rewards" },
  { name: "How It Works", href: "#how-it-works" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
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
            />
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:gap-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm text-gray-300 transition-colors hover:text-teal-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex md:items-center md:gap-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Login
          </Button>
          <Button className="bg-teal-500 text-black hover:bg-teal-600">Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
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
                onClick={(e) => scrollToSection(e, link.href)}
                className="block rounded-md px-3 py-2 text-base text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                Login
              </Button>
              <Button className="w-full bg-teal-500 text-black hover:bg-teal-600">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
