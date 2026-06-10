import { testimonials } from '@/constants/testimonials'
import { TestimonialCard } from './TestimonialCard'
import { AnimatedSection } from '@/components/common/AnimatedSection'

const featuredTestimonials = testimonials.slice(0, 3)

export function TestimonialsSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Trusted by{' '}
              <span className="gradient-text">Learning Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See why companies of all sizes choose our platform to power their online learning initiatives.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Trusted logos row */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 pt-12 border-t border-border">
            <p className="text-center text-sm text-muted-foreground mb-8">
              Trusted by innovative learning businesses
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-50">
              {['EduPrime', 'TechSkills', 'LearnForward', 'GrowthMindset', 'Digital Learning'].map((name) => (
                <div
                  key={name}
                  className="text-lg font-bold text-muted-foreground/60 select-none"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
