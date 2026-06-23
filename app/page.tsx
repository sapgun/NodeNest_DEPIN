import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/HeroSection"
import ModularStackSection from "@/components/sections/ModularStackSection"
import NetworkLayerSection from "@/components/sections/NetworkLayerSection"
import DeviceShowcase from "@/components/device-showcase"
import RewardsFlowSection from "@/components/sections/RewardsFlowSection"
import CTASection from "@/components/sections/CTASection"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <ModularStackSection />
      <NetworkLayerSection />
      <DeviceShowcase />
      <RewardsFlowSection />
      <CTASection />
      <Footer />
    </main>
  )
}