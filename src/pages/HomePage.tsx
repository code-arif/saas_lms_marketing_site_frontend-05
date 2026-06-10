import { HeroSection } from '@/sections/Hero/HeroSection'
import { StatsSection } from '@/sections/Stats/StatsSection'
import { FeaturesSection } from '@/sections/Features/FeaturesSection'
import { HowItWorksSection } from '@/sections/HowItWorks/HowItWorksSection'
import { TestimonialsSection } from '@/sections/Testimonials/TestimonialsSection'
import { PricingSection } from '@/sections/Pricing/PricingSection'
import { FAQSection } from '@/sections/FAQ/FAQSection'
import { CTASection } from '@/sections/CTA/CTASection'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
