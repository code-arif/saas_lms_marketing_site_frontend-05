import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { groupedFeatures } from '@/constants/features'
import { FeatureCard } from '@/sections/Features/FeatureCard'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { CTASection } from '@/sections/CTA/CTASection'

const categoryInfo: Record<string, { title: string; description: string }> = {
  student: {
    title: 'For Students',
    description: 'Engaging learning experience with mobile support, community features, and gamification to keep students motivated.',
  },
  instructor: {
    title: 'For Instructors',
    description: 'Powerful tools for creating, managing, and delivering courses with AI assistance and rich assessment options.',
  },
  business: {
    title: 'For Businesses',
    description: 'Scale your learning business with multi-tenant architecture, white-label branding, and comprehensive analytics.',
  },
  ai: {
    title: 'AI Features',
    description: 'Cutting-edge AI capabilities that enhance every aspect of the learning experience, from content creation to tutoring.',
  },
  security: {
    title: 'Security',
    description: 'Enterprise-grade security with end-to-end encryption, SOC 2 compliance, and complete data isolation.',
  },
}

export function FeaturesPage() {
  return (
    <main className="pt-24 lg:pt-32">
      {/* Page header */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
                All{' '}
                <span className="gradient-text">Features</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Everything you need to build, scale, and manage a world-class online learning platform.
              </p>
            </div>
          </AnimatedSection>

          {/* Grouped features */}
          <div className="space-y-20">
            {Object.entries(groupedFeatures).map(([key, group]) => {
              const info = categoryInfo[key] || { title: group.title, description: '' }
              return (
                <AnimatedSection key={key}>
                  <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      {info.title}
                    </h2>
                    {info.description && (
                      <p className="text-muted-foreground max-w-2xl">
                        {info.description}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.features.map((feature, index) => (
                      <FeatureCard
                        key={feature.id}
                        feature={feature}
                        index={index}
                        variant="compact"
                      />
                    ))}
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
