import { features } from '@/constants/features'
import { FeatureCard } from './FeatureCard'
import { AnimatedSection } from '@/components/common/AnimatedSection'

const mainFeatures = features.slice(0, 6)

export function FeaturesSection() {
  return (
    <section className="relative py-16 lg:py-24" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Everything You Need to Run{' '}
              <span className="gradient-text">a Successful LMS Business</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From AI-powered learning to white-label branding, we provide all the tools to launch and scale your online education platform.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainFeatures.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
