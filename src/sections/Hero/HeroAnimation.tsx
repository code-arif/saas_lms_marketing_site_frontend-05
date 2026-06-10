import { motion } from 'framer-motion'
import { BookOpen, Users, Zap, TrendingUp } from 'lucide-react'

const floatingElements = [
  {
    icon: BookOpen,
    color: 'from-purple-500 to-purple-600',
    delay: 0,
    x: '10%',
    y: '15%',
    duration: 6,
  },
  {
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    delay: 0.5,
    x: '85%',
    y: '20%',
    duration: 7,
  },
  {
    icon: Zap,
    color: 'from-amber-500 to-amber-600',
    delay: 1,
    x: '8%',
    y: '65%',
    duration: 5,
  },
  {
    icon: TrendingUp,
    color: 'from-emerald-500 to-emerald-600',
    delay: 0.3,
    x: '88%',
    y: '70%',
    duration: 8,
  },
]

export function HeroAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((item) => (
        <motion.div
          key={item.delay}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 1, 0],
            scale: [0, 1, 1, 1, 0],
            y: [0, -30, 0, -30, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl shadow-purple-500/20`}>
            <item.icon className="w-6 h-6 md:w-8 h-8 text-white" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
