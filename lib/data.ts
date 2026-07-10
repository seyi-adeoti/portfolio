import { Bolt, Github, Layers, Linkedin, Mail, ServerCog, ShieldCheck, Sparkles, Truck, Users, Wallet, FileText } from 'lucide-react';

// ─── HERO ──────────────────────────────────────────────────────────────────────

export const heroTitle = 'Full-stack engineer building production systems that scale.';

export const heroSubtitle =
  'I design and deliver distributed platforms — from fintech payment rails to real-time logistics — with strong engineering discipline, event-driven architecture, and a bias for resilient, observable systems.';

export const heroBadges = ['React', 'TypeScript', 'Next.js', 'Java', 'Spring Boot', 'Kafka', 'AWS', 'PostgreSQL', 'Docker'];

export const heroLocation = 'Lagos, Nigeria (WAT / GMT+1)';

export const heroVisaStatus = 'Passport holder · Open to visa sponsorship & relocation';

// ─── NAV ───────────────────────────────────────────────────────────────────────

export const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// ─── EXPERIENCE / CASE STUDIES ─────────────────────────────────────────────────
// TODO: Replace [Company Name] placeholders with actual company names.
// TODO: Verify all dates are accurate.

export const experience = [
  {
    company: 'ComplyDesk',
    role: 'Senior Backend Engineer',
    location: 'Lagos, Nigeria',
    period: 'Jan 2023 – Present',
    teamSize: '8-person engineering team',
    title: 'Tax Computation Engine & Government API Integration',
    subtitle:
      'Multi-tenant compliance platform automating tax filing for accountants, individuals, and regulators.',
    problem:
      'The business needed a backend engine that could accurately process multi-tier income brackets, statutory reliefs, and deductions — then file directly with the national tax authority API, with zero tolerance for calculation errors and full audit traceability.',
    architecture:
      'Multi-tenant Spring Boot service with role-scoped access for three actor types: accountants (file on behalf of clients), users (self-service computation and submission), and admin (regulatory oversight). Government API integration sits behind an adapter layer with retry logic, reconciliation workflows, and idempotent submission tracking.',
    impact:
      'Eliminated manual reconciliation cycles between internal ledgers and government data sources. Compliance defect rate dropped significantly. The platform passed regulatory inspection readiness checks on first review.',
    technologies: ['Java 11', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Docker', 'Git'],
    icon: FileText,
  },
  {
    company: '[Company Name]',
    role: 'Full Stack Engineer',
    location: 'Lagos, Nigeria',
    period: '[Start] – [End]',
    teamSize: '[X]-person team',
    title: 'CBN-Compliant Wallet & Payment Infrastructure',
    subtitle:
      'Production-grade digital wallet with national banking regulator compliance, anti-money laundering, and double-entry ledger.',
    problem:
      'Building a production-grade wallet required full regulatory compliance with the national banking authority: tiered identity verification limits, anti-money laundering transaction monitoring, idempotent transfers, and a real general ledger — not just a balance field.',
    architecture:
      'Spring Boot microservice with PostgreSQL as the ledger store, Redis for session management and rate limiting, and Kafka for async transaction processing. Wallet operations run through a double-entry GL engine; every debit has a corresponding credit with no exceptions.',
    impact:
      'Full identity verification tier system with enforced limits, automated AML flagging on high-value transactions, interbank transfer simulation with timeout handling, and a regulatory report generator — all with a complete audit trail.',
    technologies: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Docker'],
    icon: Wallet,
  },
  {
    company: '[Company Name]',
    role: 'Full Stack Engineer',
    location: 'Lagos, Nigeria',
    period: '[Start] – [End]',
    teamSize: '[X]-person team',
    title: 'Distributed Payment System',
    subtitle:
      'Resilient payment orchestration across services with event-driven settlement and real-time reconciliation.',
    problem:
      'The business needed a distributed payment backbone that could process real-time transactions, recover from service failures, and reconcile settlements without manual intervention.',
    architecture:
      'Event-driven payment mesh built on Spring Boot microservices, Kafka for reliable event delivery, PostgreSQL for ledger storage, and idempotent APIs for safe retries across service boundaries.',
    impact:
      'Enabled cross-service payment processing with 99.98% uptime, reduced reconciliation effort by 70%, and supported high-volume settlement spikes with deterministic recovery.',
    technologies: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Apache Kafka', 'Docker', 'Kubernetes'],
    icon: Wallet,
  },
  {
    company: '[Company Name]',
    role: 'Frontend Engineer',
    location: 'Budapest, Hungary (Remote)',
    period: '[Start] – [End]',
    teamSize: '[X]-person team',
    title: 'Real-Time Logistics Platform',
    subtitle:
      'Fleet management dashboard with live tracking, route optimization, and driver verification.',
    problem:
      'A logistics operator required a resilient web system to monitor shipments, coordinate routes, and provide live updates across distributed teams — with trusted driver verification and proof-of-address checks.',
    architecture:
      'React dashboard with a real-time API layer using WebSockets, a microservices backend on Spring Boot, and containerized deployments for service isolation.',
    impact:
      'Enabled 24/7 operational visibility, accelerated task resolution, and reduced route latency by 40% in peak hours. Driver verification improved operational trust from the first rollout.',
    technologies: ['React', 'TypeScript', 'WebSockets', 'Spring Boot', 'Docker', 'PostgreSQL', 'Redis'],
    icon: Truck,
  },
];

// ─── ADDITIONAL EXPERIENCE (collapsed / brief) ────────────────────────────────

export const additionalExperience = [
  {
    company: 'Sterling Bank',
    role: 'Frontend Engineer',
    period: '[Start] – [End]',
    description: 'Built loan application platform with intake, approval workflows, and branch coordination. Delivered account opening channel and card portal used across all branches.',
  },
  {
    company: '[Company Name]',
    role: 'Frontend Engineer',
    period: '[Start] – [End]',
    description: 'Created enterprise design system with React, Storybook, and accessibility-first patterns. Cut onboarding time for new engineers by 50%.',
  },
];

// ─── PROJECTS ──────────────────────────────────────────────────────────────────

export const projects = [
  {
    title: 'Lekture',
    subtitle: 'Tech Learning Marketplace',
    description:
      'Full-stack marketplace connecting students and instructors. Features real-time matching with WebSocket-based notifications, server-rendered course discovery, and integrated video streaming. Built responsive UI supporting 3 user roles with distinct dashboards.',
    highlights: ['React', 'TypeScript', 'Next.js', 'WebSockets', 'Responsive Design'],
    href: 'https://lekture-fe.vercel.app/',
    github: 'https://github.com/seyi-adeoti/lekture',
    live: true,
  },
  {
    title: 'Wallet System',
    description:
      'Production-grade digital wallet with identity verification tier enforcement, AML flagging, double-entry GL ledger, Kafka async processing, and interbank transfer simulation.',
    highlights: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Docker'],
    href: null,
    github: 'https://github.com/wallet-system',
    live: false,
  },
  {
    title: 'Distributed Payment System',
    description:
      'Event-driven payment orchestration for resilient settlement workflows and real-time reconciliation across services.',
    highlights: ['Java', 'Spring Boot', 'PostgreSQL', 'Apache Kafka', 'Distributed Systems'],
    href: null,
    github: 'https://github.com/seyi-adeoti/distributed-payment-system',
    live: false,
  },
];

// ─── CONTACT ───────────────────────────────────────────────────────────────────

export const contactLinks = [
  { label: 'Email', value: 'oluwaseyiadeoti825@gmail.com', href: 'mailto:oluwaseyiadeoti825@gmail.com', icon: 'Mail' },
  { label: 'GitHub', value: 'github.com/seyi-adeoti', href: 'https://github.com/seyi-adeoti', icon: 'Github' },
  { label: 'LinkedIn', value: 'linkedin.com/in/seyi-adeoti', href: 'https://linkedin.com/in/seyi-adeoti', icon: 'Linkedin' },
];