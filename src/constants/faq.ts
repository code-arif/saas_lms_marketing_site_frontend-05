import type { FAQItem } from '@/types/global.types'

export const faqItems: FAQItem[] = [
  {
    id: 'what-is',
    question: 'What is this platform?',
    answer: 'We are a comprehensive multi-tenant SaaS LMS (Learning Management System) that enables businesses to launch and scale their own branded online learning platforms. Think of it as Shopify for online education — we handle all the technical infrastructure so you can focus on creating and selling courses.',
  },
  {
    id: 'multi-tenancy',
    question: 'How does multi-tenancy work?',
    answer: 'Multi-tenancy means each customer (tenant) gets their own fully isolated instance of the platform with a separate database, custom domain, and branding. Your students will never know they\'re using a shared platform. You have complete control over your learning environment while we maintain the underlying infrastructure.',
  },
  {
    id: 'custom-domain',
    question: 'Can I use my own domain?',
    answer: 'Absolutely! You can use your own custom domain (e.g., learn.yourcompany.com) with automatic SSL certificate provisioning. On our Pro and Enterprise plans, custom domain setup is included and configured within hours.',
  },
  {
    id: 'payment-methods',
    question: 'What payment methods are supported?',
    answer: 'We support multiple payment gateways including Stripe (international), PayPal (international), and SSLCommerz (Bangladesh). You can accept credit/debit cards, PayPal wallets, and local payment methods. Our subscription billing handles recurring payments, invoices, and automated dunning.',
  },
  {
    id: 'free-trial',
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial on all plans with no credit card required. You get full access to all features during the trial period so you can thoroughly evaluate the platform. If you decide not to continue, your account will simply be deactivated with no charges.',
  },
  {
    id: 'cancel',
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, you\'ll still have access until the end of your current billing period. Your data will be available for export for 30 days after cancellation.',
  },
  {
    id: 'ai-features',
    question: 'What AI features are included?',
    answer: 'Our AI features include: AI Tutor for personalized student assistance, AI Course Generator for creating course outlines, AI Quiz Generator for automatic assessments, AI Lesson Summarizer, AI Flashcard Creator, and AI Analytics for natural language data queries. Usage limits depend on your plan tier (100/day Basic, 1,000/day Pro, unlimited Enterprise).',
  },
  {
    id: 'support',
    question: 'How do I get support?',
    answer: 'We offer tiered support based on your plan. Basic includes email support with 24-hour response time. Pro includes priority email and live chat support. Enterprise customers get 24/7 priority support with a dedicated account manager and guaranteed 1-hour response time for critical issues.',
  },
  {
    id: 'migration',
    question: 'Can I migrate from another LMS?',
    answer: 'Yes! We offer a comprehensive migration service. Our team can help you migrate courses, users, and content from popular LMS platforms like Moodle, Teachable, Thinkific, and Canvas. Enterprise plans include complimentary migration assistance.',
  },
  {
    id: 'security',
    question: 'How secure is this platform?',
    answer: 'Security is our top priority. We implement AES-256 encryption at rest, TLS 1.3 for data in transit, SOC 2 compliant infrastructure, regular penetration testing, and DDoS protection. All tenant data is fully isolated with separate databases. We also offer SSO/SAML authentication for enterprise customers.',
  },
]
