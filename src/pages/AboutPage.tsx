import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Target, Shield, Users, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { CTASection } from '@/sections/CTA/CTASection'
import type { TeamMember } from '@/types/global.types'

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Rodriguez',
    role: 'CEO & Co-Founder',
    bio: 'Former EdTech executive with 15+ years of experience in online learning platforms.',
    avatar: 'AR',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'CTO & Co-Founder',
    bio: 'Full-stack architect who has built platforms serving millions of users at scale.',
    avatar: 'SC',
  },
  {
    id: '3',
    name: 'David Kim',
    role: 'Head of Product',
    bio: 'Product leader passionate about creating intuitive learning experiences.',
    avatar: 'DK',
  },
  {
    id: '4',
    name: 'Emily Watson',
    role: 'Head of AI',
    bio: 'AI researcher and engineer specializing in educational technology applications.',
    avatar: 'EW',
  },
  {
    id: '5',
    name: 'Michael Okafor',
    role: 'VP of Engineering',
    bio: 'Engineering leader focused on building scalable and resilient systems.',
    avatar: 'MO',
  },
  {
    id: '6',
    name: 'Lisa Thompson',
    role: 'Head of Customer Success',
    bio: 'Dedicated to ensuring every customer achieves their learning business goals.',
    avatar: 'LT',
  },
]

const whyChooseUs = [
  {
    icon: Target,
    title: 'Purpose-Built for Scale',
    description: 'Our architecture is designed from the ground up for multi-tenant SaaS, not adapted from a single-tenant LMS.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security First',
    description: 'SOC 2 compliant infrastructure, end-to-end encryption, and complete tenant data isolation built-in.',
  },
  {
    icon: Users,
    title: 'Customer-Obsessed Support',
    description: 'Dedicated account managers, 24/7 support, and a customer success team that truly cares about your success.',
  },
  {
    icon: Zap,
    title: 'AI-Native Platform',
    description: 'Unlike legacy LMS platforms, we are built with AI at the core — not bolted on as an afterthought.',
  },
]

export function AboutPage() {
  return (
    <main className="pt-24 lg:pt-32">
      {/* Page header - Mission */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                  Our Mission:{' '}
                  <span className="gradient-text">Empower Every Learning Business</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe that anyone should be able to launch and scale an online learning business without needing a team of engineers. Our platform makes enterprise-grade LMS technology accessible to businesses of all sizes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2024, we have grown to power over 50 learning businesses serving 10,000+ students worldwide. Our team is distributed across 12 countries, united by a shared passion for education technology.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-border/50 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
                    backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} />
                  <div className="relative z-10 text-center px-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-foreground">Empowering learning businesses worldwide</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Why Choose{' '}
                <span className="gradient-text">Us</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We are different from other LMS platforms. Here is why.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/10 to-indigo-600/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Meet Our{' '}
                <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We are a passionate team of engineers, designers, and educators building the future of online learning.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xl font-bold text-white mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
