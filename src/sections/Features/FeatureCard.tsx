import { motion } from 'framer-motion'
import {
  Brain, Building2, Play, ChartBar, Palette, Shield,
  ClipboardCheck, Award, CalendarClock, Video,
  MessageSquare, Trophy, CreditCard, Smartphone,
  Sparkles, Globe, type LucideIcon
} from 'lucide-react'
import type { Feature } from '@/types/global.types'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  Brain, Building2, Play, ChartBar, Palette, Shield,
  ClipboardCheck, Award, CalendarClock, Video,
  MessageSquare, Trophy, CreditCard, Smartphone,
  Sparkles, Globe,
}

interface FeatureCardProps {
  feature: Feature
  index?: number
  variant?: 'default' | 'compact'
}

export function FeatureCard({ feature, index = 0, variant = 'default' }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] || Brain

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={cn(
        'group relative p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-300',
        'hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5'
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/10 to-indigo-600/10 flex items-center justify-center mb-4 group-hover:from-purple-600/20 group-hover:to-indigo-600/20 transition-all duration-300">
          <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {feature.title}
        </h3>
        <p className={cn(
          'text-muted-foreground leading-relaxed',
          variant === 'compact' ? 'text-sm' : 'text-base'
        )}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}
