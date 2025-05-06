import { Github, Globe, Twitter, DiscIcon as Discord } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
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
            <p className="mt-4 max-w-xs">Web3 modular edge computing device for blockchain node execution</p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Governance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-teal-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} NodeNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
