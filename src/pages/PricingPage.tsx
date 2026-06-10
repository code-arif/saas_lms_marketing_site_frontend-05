import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { pricingPlans } from '@/constants/pricing'
import { faqItems } from '@/constants/faq'
import { FAQItem } from '@/sections/FAQ/FAQItem'
import { PricingCard } from '@/sections/Pricing/PricingCard'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { CTASection } from '@/sections/CTA/CTASection'
import { cn } from '@/lib/utils'

const allFeatures = [
  { name: 'Students', basic: '500', pro: '2,000', enterprise: 'Unlimited' },
  { name: 'Instructors', basic: '10', pro: '50', enterprise: 'Unlimited' },
  { name: 'Courses', basic: '50', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Storage', basic: '5GB', pro: '50GB', enterprise: '500GB+' },
  { name: 'AI Requests/Day', basic: '100', pro: '1,000', enterprise: 'Unlimited' },
  { name: 'Video Streaming', basic: 'Standard', pro: 'HLS Adaptive', enterprise: 'HLS Adaptive' },
  { name: 'Custom Domain', basic: '—', pro: '✓', enterprise: '✓' },
  { name: 'White-Label', basic: '—', pro: '—', enterprise: '✓' },
  { name: 'API Access', basic: '—', pro: '✓', enterprise: '✓' },
  { name: 'SCORM Support', basic: '—', pro: '—', enterprise: '✓' },
  { name: 'Priority Support', basic: '—', pro: 'Email & Chat', enterprise: '24/7 Dedicated' },
]

export function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <main className="pt-24 lg:pt-32">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <AnimatedSection>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Choose Your{' '}
            <span className="gradient-text">Plan</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All plans include a 14-day free trial. No credit card required. Upgrade or cancel anytime.
          </p>
        </AnimatedSection>

        {/* Toggle */}
        <AnimatedSection delay={0.1}>
          <div className="flex items-center justify-center gap-4 mt-8 mb-12">
            <span className={cn('text-sm font-medium transition-colors', !isYearly ? 'text-foreground' : 'text-muted-foreground')}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-muted-foreground/20 transition-colors duration-200"
              role="switch"
              aria-checked={isYearly}
              aria-label="Toggle billing period"
            >
              <div className={cn(
                'absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white dark:bg-foreground shadow-md transition-transform duration-200',
                isYearly && 'translate-x-7'
              )} />
            </button>
            <span className={cn('text-sm font-medium transition-colors', isYearly ? 'text-foreground' : 'text-muted-foreground')}>
              Yearly
              <span className="ml-1.5 text-xs text-emerald-500 font-semibold">Save up to 17%</span>
            </span>
          </div>
        </AnimatedSection>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-20">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} index={index} />
          ))}
        </div>
      </div>

      {/* Feature comparison table */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-center mb-12">
              Feature{' '}
              <span className="gradient-text">Comparison</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Feature</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Basic</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-primary">Pro</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature) => (
                    <tr key={feature.name} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-4 text-sm font-medium text-foreground">{feature.name}</td>
                      <td className="text-center py-4 px-4 text-sm text-muted-foreground">{feature.basic}</td>
                      <td className="text-center py-4 px-4 text-sm font-medium text-primary">{feature.pro}</td>
                      <td className="text-center py-4 px-4 text-sm text-muted-foreground">{feature.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-center mb-12">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-border/50 bg-card p-6 lg:p-8">
              {faqItems.slice(0, 6).map((item, index) => (
                <FAQItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  )
}
