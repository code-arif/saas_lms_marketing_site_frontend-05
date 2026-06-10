import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { PricingPlan } from '@/types/global.types'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  plan: PricingPlan
  isYearly: boolean
  index?: number
}

export function PricingCard({ plan, isYearly, index = 0 }: PricingCardProps) {
  const price = isYearly ? plan.price_yearly : plan.price_monthly
  const period = isYearly ? '/year' : '/month'
  const savings = isYearly
    ? Math.round((1 - plan.price_yearly / (plan.price_monthly * 12)) * 100)
    : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'relative group',
        plan.highlighted && 'lg:-mt-4 lg:mb-4'
      )}
    >
      <div
        className={cn(
          'relative p-6 lg:p-8 rounded-2xl border-2 transition-all duration-300',
          plan.highlighted
            ? 'border-primary bg-gradient-to-b from-primary/5 to-background shadow-xl shadow-primary/10'
            : 'border-border/50 bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5'
        )}
      >
        {/* Badge */}
        {plan.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-xs font-semibold text-white shadow-lg">
              {plan.badge}
            </div>
          </div>
        )}

        {/* Plan name & description */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
          <p className="text-sm text-muted-foreground">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="text-center mb-6">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold text-foreground">${price}</span>
            <span className="text-sm text-muted-foreground">{period}</span>
          </div>
          {isYearly && savings > 0 && (
            <p className="mt-1 text-xs font-medium text-emerald-500">
              Save {savings}% with annual billing
            </p>
          )}
        </div>

        {/* CTA */}
        <Link
          to={plan.cta_link}
          className={cn(
            'block w-full py-3 px-6 text-center text-sm font-semibold rounded-xl transition-all duration-200 mb-6',
            plan.highlighted
              ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30'
              : 'text-foreground bg-secondary hover:bg-accent border border-border'
          )}
        >
          {plan.cta_text}
        </Link>

        {/* Features */}
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
