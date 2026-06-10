import { motion } from 'framer-motion'
import { UserPlus, Palette, Rocket } from 'lucide-react'
import { AnimatedSection } from '@/components/common/AnimatedSection'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your account and choose a plan that fits your needs. No credit card required for the 14-day free trial.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Customize',
    description: 'Brand your platform with your logo, colors, and custom domain. Set up your courses and invite instructors.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch',
    description: 'Invite students, enroll them in courses, and start delivering world-class learning experiences.',
    color: 'from-purple-600 to-indigo-600',
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Get Started in{' '}
              <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Launch your online learning platform in minutes, not months. Here is how it works.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-purple-500/20 via-indigo-500/40 to-purple-500/20">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1, transformOrigin: 'left' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number badge */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl shadow-purple-500/20`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-sm font-bold gradient-text">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
