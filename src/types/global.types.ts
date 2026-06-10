export interface Feature {
  id: string
  icon: string
  title: string
  description: string
  category: string
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  price_monthly: number
  price_yearly: number
  badge?: string
  highlighted: boolean
  features: string[]
  cta_text: string
  cta_link: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  quote: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface StatItem {
  id: string
  value: string
  label: string
  suffix?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
}

export interface NavLink {
  label: string
  href: string
}
