import { faqItems } from '@/constants/faq'
import { FAQItem } from './FAQItem'
import { AnimatedSection } from '@/components/common/AnimatedSection'

const displayedFAQs = faqItems.slice(0, 8)

export function FAQSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to know about our platform. Can&apos;t find what you&apos;re looking for? Contact our support team.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl border border-border/50 bg-card p-6 lg:p-8">
            {displayedFAQs.map((item, index) => (
              <FAQItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
