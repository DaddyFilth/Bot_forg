import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { DemosSection } from "@/components/landing/demos-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { OnboardSection } from "@/components/landing/onboard-section"
import { FooterSection } from "@/components/landing/footer-section"
import { ChatWidget } from "@/components/landing/chat-widget"

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DemosSection />
      <PricingSection />
      <TestimonialsSection />
      <OnboardSection />
      <FooterSection />
      <ChatWidget />
    </main>
  )
}
