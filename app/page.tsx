import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustedSection } from "@/components/trusted-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <PortfolioSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PricingSection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
