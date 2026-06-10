import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import type { Testimonial } from '@/types/global.types'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: Testimonial
  index?: number
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 lg:p-8 rounded-2xl border border-border/50 bg-card hover:bg-card/80 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Quote mark */}
      <div className="absolute top-4 right-6 text-4xl text-primary/10 font-serif leading-none select-none">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={`star-${i}`}
            className={cn(
              'w-4 h-4',
              i < testimonial.rating
                ? 'fill-amber-400 text-amber-400'
                : 'fill-muted text-muted'
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-sm font-semibold text-white shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
