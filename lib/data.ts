import { ArrowUpRight, Bolt, Layers, ServerCog, ShieldCheck, Sparkles, Truck, Users } from 'lucide-react';

export const navItems = [
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export const heroBadges = ['React', 'TypeScript', 'Next.js', 'Angular', 'Java', 'Spring Boot', 'AWS'];

export const metrics = [
  { value: '100K+', label: 'Users Served' },
  { value: '35%', label: 'Performance Improvement' },
  { value: '5+', label: 'Years Experience' },
  { value: '90%', label: 'Test Coverage' },
  { value: '15+', label: 'API Integrations' },
];

export const proofPoints = [
  {
    title: 'CI/CD & quality gates',
    description: 'Automated pipelines with linting, test suites, deploy previews, and production-safe rollouts.',
    icon: ServerCog,
  },
  {
    title: 'Security & compliance',
    description: 'Secure architecture review, SSO, encryption, and audit-ready delivery for enterprise systems.',
    icon: ShieldCheck,
  },
  {
    title: 'Performance at scale',
    description: 'Performance-first engineering for high-traffic platforms with observability and load optimization.',
    icon: Bolt,
  },
  {
    title: 'Cross-team delivery',
    description: 'Aligned product, design, and ops with engineering standards for dependable launch execution.',
    icon: Users,
  },
];

export const processSteps = [
  {
    title: 'Discovery & alignment',
    description: 'Align product outcomes, risk tolerance, and business value before choosing the architecture path.',
    icon: Layers,
  },
  {
    title: 'Architecture & planning',
    description: 'Define service boundaries, frontend patterns, and quality guardrails for scalable delivery.',
    icon: ServerCog,
  },
  {
    title: 'Build & validation',
    description: 'Ship iteratively with strong testing, code reviews, and performance verification at each milestone.',
    icon: ShieldCheck,
  },
  {
    title: 'Operate & improve',
    description: 'Embed observability, CI/CD, and feedback loops to keep systems resilient under real usage.',
    icon: Bolt,
  },
];

export const whyHireMe = [
  {
    title: 'Enterprise-scale execution',
    text: 'Delivering production systems with robust performance, compliance, and operational reliability.',
  },
  {
    title: 'Leadership beyond code',
    text: 'Leading architecture decisions, mentoring engineers, and coordinating cross-functional delivery.',
  },
  {
    title: 'Local and global readiness',
    text: 'Experienced with local market delivery and distributed teams, open to relocation, visa sponsorship, and hybrid workflows.',
  },
];

export const lookingFor = [
  'Local and international senior engineering roles',
  'Relocation & visa sponsorship',
  'Remote / hybrid collaboration',
  'Product-led enterprise teams',
];

export const caseStudies = [
  {
    title: 'Enterprise Banking Platform',
    subtitle: 'Driving secure, scalable banking experiences for 100K+ users',
    problem:
      'The client needed a resilient digital banking platform with high performance, multi-tenancy, and regulatory compliance for enterprise banking customers.',
    architecture:
      'Modular frontend built on Next.js and React, a Spring Boot backend separated into payment, account, and notification domains, and AWS infrastructure orchestrated with EKS, VPCs, and managed databases.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'AWS', 'Kubernetes', 'Redis'],
    decisions:
      'I prioritized secure API boundaries, progressive hydration for fast first paint, strict contract testing, and feature flag rollout for critical payment workflows.',
    impact:
      'Delivered a platform that reduced page response time by 35%, supported over 100,000 active users, and maintained <1% production incident rate after launch.',
    lessons:
      'Building for banking at scale demands strong architectural discipline and collaboration between frontend, backend, QA, and security teams.',
    icon: ShieldCheck,
  },
  {
    title: 'Logistics Management Platform',
    subtitle: 'Scaling real-time tracking, workflows, and operations for fleet management',
    problem:
      'A logistics operator required a resilient web system to monitor shipments, coordinate routes, and provide live updates across distributed teams.',
    architecture:
      'The solution combined a React dashboard, a real-time API layer with WebSockets, a microservices domain model on Spring Boot, and containerized deployments for service isolation.',
    technologies: ['React', 'TypeScript', 'WebSockets', 'Spring Boot', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
    decisions:
      'I led the API design for event-driven state synchronization, introduced typed message contracts, and optimized route display performance for high-volume tracking dashboards.',
    impact:
      'Enabled 24/7 operational visibility, accelerated task resolution, and reduced route latency by 40% in peak hours.',
    lessons:
      'Real-time logistics requires close alignment between product operations and engineering standards to keep the system dependable under load.',
    icon: Truck,
  },
  {
    title: 'Enterprise Design System',
    subtitle: 'Delivering a reusable design system for cross-team product velocity',
    problem:
      'Multiple product teams needed consistent UI components, accessible patterns, and shared documentation to accelerate feature delivery.',
    architecture:
      'A component library built with React, Storybook-driven documentation, standardized tokens, and a release process that integrated with CI/CD pipelines for automated package publication.',
    technologies: ['React', 'Storybook', 'TypeScript', 'Tailwind CSS', 'Cypress', 'Jest', 'Nx'],
    decisions:
      'I enforced strict accessibility rules, created composable primitives, and built a validation layer for design tokens that prevented inconsistent styling across teams.',
    impact:
      'Cut onboarding time for new product engineers by 50% and improved cross-team consistency in interfaces across multiple enterprise applications.',
    lessons:
      'A strong design system is a long-term investment that compounds through faster delivery, fewer regressions, and better brand trust.',
    icon: Sparkles,
  },
];

export const clientOutcomes = [
  {
    title: 'Trusted logistics marketplace',
    subtitle: 'Short-term startup delivery in Hungary',
    description:
      'Built a fast-launch order-to-rider matching app for a logistic startup, using trusted driver verification, document submission, and proof-of-address checks.',
    impact:
      'Helped the startup achieve a reliable delivery flow that matched orders to verified riders and improved operational trust from the first rollout.',
    technologies: ['React', 'TypeScript', 'Realtime APIs', 'Driver verification', 'Logistics workflows'],
  },
  {
    title: 'Loan application and approval workflow',
    subtitle: 'Sterling financial delivery',
    description:
      'Delivered a loan application platform with intake, inputter handoff, and approval flow to support faster decision-making and better branch coordination.',
    impact:
      'Streamlined loan operations and improved approval visibility while preserving compliance controls and auditability.',
    technologies: ['React', 'Spring Boot', 'Workflow automation', 'Loan origination', 'Branch operations'],
  },
  {
    title: 'Branch account opening and card portal',
    subtitle: 'Alternative bank channel platform',
    description:
      'Built an account opening channel used across branches and a card portal system that tracked cards, supported branch operations, and integrated with takaful insurance workflows.',
    impact:
      'Unified account onboarding and card management for all branches, making branch channels more consistent and easier to operate.',
    technologies: ['React', 'Branch integration', 'Card operations', 'Account onboarding', 'Insurance integration'],
  },
];

export const architectureHighlights = [
  {
    title: 'Frontend Architecture',
    description:
      'Component-driven pages with server rendering, progressive loading, and strong typing to keep large surfaces maintainable.',
  },
  {
    title: 'Design Systems',
    description:
      'Reusable token-based components, accessible patterns, and documentation flows that align engineering and product teams.',
  },
  {
    title: 'State Management',
    description:
      'Centralized state through typed stores, API-driven cache layers, and local UI state kept isolated for performance.',
  },
  {
    title: 'Microservices',
    description:
      'Domain-oriented services with clear contracts, containerized deployments, and scalable event-driven communication.',
  },
  {
    title: 'CI/CD',
    description:
      'Fast pipelines with quality gates, automated tests, deploy previews, and release controls for enterprise delivery.',
  },
  {
    title: 'Cloud Infrastructure',
    description:
      'AWS deployments with EKS, managed databases, secure networking, and observability built into the release lifecycle.',
  },
];

export const leadershipItems = [
  {
    title: 'Engineering Leadership',
    text: 'I lead cross-functional teams through architecture reviews, roadmap planning, and delivery execution for high-stakes platforms.',
  },
  {
    title: 'Mentoring & Coaching',
    text: 'I support engineers with code reviews, paired design sessions, and career growth conversations that improve team velocity.',
  },
  {
    title: 'Architecture Decisions',
    text: 'I drive scalable technical decisions that align engineering tradeoffs with business outcomes, security, and reliability.',
  },
  {
    title: 'Cross-functional Collaboration',
    text: 'I partner with product, design, operations, and security to ensure successful launches and sustainable platforms.',
  },
];

export const githubProjects = [
  {
    title: 'FinCore',
    description: 'Enterprise fintech platform with secure payment workflows and high-throughput architecture.',
    highlights: ['React', 'Spring Boot', 'PostgreSQL', 'AWS', 'Kubernetes'],
  },
  {
    title: 'Enterprise Design System',
    description: 'Shared component library with Storybook, design tokens, and accessibility-first patterns.',
    highlights: ['React', 'Storybook', 'TypeScript', 'Tailwind CSS', 'Testing'],
  },
  {
    title: 'Microservices Demo',
    description: 'Spring Boot services containerized with Docker, integrated with Redis and API gateways.',
    highlights: ['Spring Boot', 'Docker', 'Redis', 'Microservices', 'CI/CD'],
  },
];

export const testimonials = [
  {
    quote:
      'Adeoti takes ownership of complex systems and elevates engineering standards while keeping delivery practical.',
    author: 'Head of Engineering, Global FinTech',
  },
  {
    quote:
      'He builds for scale and reliability, with strong communication across product, design, and operations.',
    author: 'Product Director, Logistics Platform',
  },
];

export const contactLinks = [
  { label: 'Email', value: 'oluwaseyiadeoti825@gmail.com', href: 'mailto:oluwaseyiadeoti825@gmail.com' },
  { label: 'GitHub', value: 'github.com/seyi-adeoti', href: 'https://github.com/seyi-adeoti' },
];
