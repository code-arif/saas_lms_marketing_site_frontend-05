import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { HeroAnimation } from './HeroAnimation'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Animated floating elements */}
      <HeroAnimation />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
          Enterprise Multi-Tenant LMS Platform
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]"
        >
          Launch Your{' '}
          <span className="gradient-text">Online Learning</span>{' '}
          Business in Minutes
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          The all-in-one multi-tenant SaaS platform that lets you launch your own branded online learning marketplace. No coding required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/register"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-secondary rounded-xl hover:bg-accent transition-all duration-200 border border-border"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </button>
        </motion.div>

        {/* Trusted by text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-sm text-muted-foreground"
        >
          Trusted by 50+ learning businesses worldwide
        </motion.p>

        {/* Hero mockup/placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl border border-border/50 bg-gradient-to-b from-background to-muted/50 shadow-2xl overflow-hidden aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-purple-500/30">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <p className="text-muted-foreground text-sm">Platform Dashboard Preview</p>
              </div>
            </div>
            {/* Decorative grid lines */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
              <div className="w-full h-full" style={{
                backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
