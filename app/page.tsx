import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/HeroSection"
import ArchitectureSpecSection from "@/components/sections/ArchitectureSpecSection"
import ModularStackSection from "@/components/sections/ModularStackSection"
import NetworkLayerSection from "@/components/sections/NetworkLayerSection"
import DeviceShowcase from "@/components/device-showcase"
import RewardsFlowSection from "@/components/sections/RewardsFlowSection"
import CTASection from "@/components/sections/CTASection"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <ArchitectureSpecSection />
      <ModularStackSection />
      <NetworkLayerSection />
      <DeviceShowcase />
      <RewardsFlowSection />
      <CTASection />
      <Footer />
    </main>
  )
}