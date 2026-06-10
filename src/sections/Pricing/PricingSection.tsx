import { useState } from 'react'
import { pricingPlans } from '@/constants/pricing'
import { PricingCard } from './PricingCard'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { cn } from '@/lib/utils'

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="relative py-16 lg:py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Simple, Transparent{' '}
              <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose the perfect plan for your learning business. No hidden fees, no surprises.
            </p>
          </div>
        </AnimatedSection>

        {/* Toggle */}
        <AnimatedSection delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className={cn(
              'text-sm font-medium transition-colors',
              !isYearly ? 'text-foreground' : 'text-muted-foreground'
            )}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-muted-foreground/20 transition-colors duration-200"
              aria-label="Toggle billing period"
            >
              <div className={cn(
                'absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-200',
                isYearly && 'translate-x-7'
              )} />
            </button>
            <span className={cn(
              'text-sm font-medium transition-colors',
              isYearly ? 'text-foreground' : 'text-muted-foreground'
            )}>
              Yearly
              <span className="ml-1.5 text-xs text-emerald-500 font-semibold">Save up to 17%</span>
            </span>
          </div>
        </AnimatedSection>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isYearly={isYearly}
              index={index}
            />
          ))}
        </div>

        {/* Note */}
        <AnimatedSection delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
