import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ProductGalleryEnhanced from "@/components/product-gallery-enhanced"
import Dashboard from "@/components/dashboard"
import DeviceShowcase from "@/components/device-showcase"
import RewardsSection from "@/components/rewards-section"
import HowItWorks from "@/components/how-it-works"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ProductGalleryEnhanced />
      <Dashboard />
      <DeviceShowcase />
      <RewardsSection />
      <HowItWorks />
      <Newsletter />
      <Footer />
    </main>
  )
}
