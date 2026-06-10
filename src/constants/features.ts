import type { Feature } from '@/types/global.types'

export const features: Feature[] = [
  {
    id: 'ai-powered-learning',
    icon: 'Brain',
    title: 'AI-Powered Learning',
    description: 'Leverage cutting-edge AI to personalize learning paths, generate quizzes, and provide intelligent tutoring for every student.',
    category: 'ai',
  },
  {
    id: 'multi-tenant-architecture',
    icon: 'Building2',
    title: 'Multi-Tenant Architecture',
    description: 'Each tenant gets an isolated database with custom domains, branding, and full control over their learning environment.',
    category: 'business',
  },
  {
    id: 'video-streaming',
    icon: 'Play',
    title: 'Video Streaming',
    description: 'Stream courses with adaptive bitrate HLS, encrypted content protection, and automatic thumbnail generation.',
    category: 'course',
  },
  {
    id: 'advanced-analytics',
    icon: 'ChartBar',
    title: 'Advanced Analytics',
    description: 'Get deep insights into student progress, course engagement, revenue metrics, and AI usage with beautiful dashboards.',
    category: 'business',
  },
  {
    id: 'white-label-ready',
    icon: 'Palette',
    title: 'White-Label Ready',
    description: 'Customize everything — logos, colors, fonts, domain. Your students see your brand, not ours.',
    category: 'business',
  },
  {
    id: 'secure-scalable',
    icon: 'Shield',
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security with 99.9% uptime SLA, end-to-end encryption, and automatic scaling to millions of users.',
    category: 'security',
  },
  {
    id: 'quiz-assessment',
    icon: 'ClipboardCheck',
    title: 'Quizzes & Assessments',
    description: 'Create rich assessments with multiple question types, auto-grading, and detailed performance analytics.',
    category: 'course',
  },
  {
    id: 'certificate-engine',
    icon: 'Award',
    title: 'Certificate Engine',
    description: 'Auto-generate branded certificates on course completion with unique verification codes and PDF downloads.',
    category: 'course',
  },
  {
    id: 'drip-content',
    icon: 'CalendarClock',
    title: 'Drip Content Scheduling',
    description: 'Schedule lesson releases based on time intervals or prerequisite completion to guide student progression.',
    category: 'course',
  },
  {
    id: 'live-classes',
    icon: 'Video',
    title: 'Live Virtual Classes',
    description: 'Host real-time interactive classes with screen sharing, whiteboard, polls, and breakout rooms.',
    category: 'course',
  },
  {
    id: 'community-forums',
    icon: 'MessageSquare',
    title: 'Community & Forums',
    description: 'Built-in discussion forums, per-lesson comments, and community features to keep students engaged.',
    category: 'student',
  },
  {
    id: 'gamification',
    icon: 'Trophy',
    title: 'Gamification System',
    description: 'Boost engagement with points, badges, leaderboards, and achievement rewards throughout the learning journey.',
    category: 'student',
  },
  {
    id: 'payment-gateways',
    icon: 'CreditCard',
    title: 'Multi-Gateway Payments',
    description: 'Accept payments via Stripe, PayPal, or SSLCommerz with subscription billing, coupons, and invoicing.',
    category: 'business',
  },
  {
    id: 'mobile-friendly',
    icon: 'Smartphone',
    title: 'Mobile-First Experience',
    description: 'Fully responsive design with PWA support so students can learn on any device, anywhere.',
    category: 'student',
  },
  {
    id: 'ai-content-gen',
    icon: 'Sparkles',
    title: 'AI Content Generation',
    description: 'Generate full course outlines, lessons, assignments, and flashcards with a single click using advanced AI.',
    category: 'ai',
  },
  {
    id: 'api-integrations',
    icon: 'Globe',
    title: 'API & Integrations',
    description: 'RESTful API with webhooks, SCORM support, and integrations with popular tools like Zapier and Slack.',
    category: 'business',
  },
]

export const featureCategories = [
  { id: 'all', label: 'All Features' },
  { id: 'course', label: 'For Courses' },
  { id: 'student', label: 'For Students' },
  { id: 'business', label: 'For Businesses' },
  { id: 'ai', label: 'AI Features' },
  { id: 'security', label: 'Security' },
] as const

export const groupedFeatures: Record<string, { title: string; features: Feature[] }> = {
  student: {
    title: 'For Students',
    features: features.filter((f) => f.category === 'student'),
  },
  instructor: {
    title: 'For Instructors',
    features: features.filter((f) => f.category === 'course'),
  },
  business: {
    title: 'For Businesses',
    features: features.filter((f) => f.category === 'business'),
  },
  ai: {
    title: 'AI Features',
    features: features.filter((f) => f.category === 'ai'),
  },
  security: {
    title: 'Security',
    features: features.filter((f) => f.category === 'security'),
  },
}
