import { Bolt, Github, Layers, Linkedin, Mail, ServerCog, ShieldCheck, Sparkles, Truck, Users, Wallet, FileText, Building2, CreditCard } from 'lucide-react';

// ─── HERO ──────────────────────────────────────────────────────────────────────

export const heroTitle = 'Full-stack engineer building production systems that scale.';

export const heroSubtitle =
  'Senior frontend engineer leading a team at Sterling Bank, with deep backend experience in fintech, logistics, and distributed systems. I build reliable software — from regulated banking platforms to real-time operations.';

export const heroBadges = ['React', 'TypeScript', 'Next.js', 'Java', 'Spring Boot', 'Kafka', 'AWS', 'PostgreSQL', 'Docker'];

export const heroLocation = 'Lagos, Nigeria (WAT / GMT+1)';

export const heroVisaStatus = 'Passport holder · Open to visa sponsorship & relocation';

// ─── NAV ───────────────────────────────────────────────────────────────────────

export const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// ─── WORK EXPERIENCE ───────────────────────────────────────────────────────────
// These are REAL roles at REAL companies with accurate titles and dates.

export const experience = [
  {
    company: 'Sterling Bank',
    role: 'Senior Frontend Engineer',
    location: 'Lagos, Nigeria',
    period: '2023 – Present', 
    teamSize: 'Leading frontend team',
    title: 'Banking Platform & Branch Operations',
    subtitle:
      'Leading frontend engineering for enterprise banking applications, while contributing to backend services.',
    problem:
      'Sterling needed modern, reliable web applications for loan origination, branch account opening, and card management — serving operations across all branches with strict compliance and auditability requirements.',
    architecture:
      'React-based frontends with component-driven architecture, integrated with Spring Boot backend services. Built loan application platform with intake, inputter handoff, and approval workflows. Delivered account opening channel and card portal system with insurance integration.',
    impact:
      'Streamlined loan operations and improved approval visibility while preserving compliance controls. Unified account onboarding and card management across all branches, making branch channels more consistent and reliable.',
    technologies: ['React', 'TypeScript', 'Spring Boot', 'REST APIs', 'Workflow Automation'],
    icon: Building2,
  },
  {
    company: 'Trip Value',
    role: 'Engineering Team Lead',
    location: 'Lagos, Nigeria',
    period: '2021 – 2023',
    teamSize: 'Led engineering team',
    title: 'Logistics & Operations Platform',
    subtitle:
      'Led the engineering team building real-time logistics tracking and fleet management systems.',
    problem:
      'The company needed a resilient platform to monitor shipments, coordinate routes, and provide live updates across distributed operations teams — with reliable performance under high-volume conditions.',
    architecture:
      'React dashboard with real-time API layer using WebSockets, microservices backend on Spring Boot, and containerized deployments. Led architecture decisions, code reviews, and delivery execution for the engineering team.',
    impact:
      'Enabled 24/7 operational visibility, accelerated task resolution, and reduced route latency by 40% in peak hours. Grew and mentored the engineering team while maintaining delivery velocity.',
    technologies: ['React', 'TypeScript', 'WebSockets', 'Spring Boot', 'Docker', 'PostgreSQL', 'Redis'],
    icon: Truck,
  },
  {
    company: 'Contract Role',
    role: 'Frontend Engineer (Contract)',
    location: 'Budapest, Hungary (Remote)',
    period: '2020 – 2021',
    teamSize: 'Contract engagement',
    title: 'Logistics Marketplace',
    subtitle:
      'Built a fast-launch order-to-rider matching application for a logistics startup.',
    problem:
      'A Hungarian logistics startup needed a marketplace application to match orders with verified riders, including driver verification, document submission, and proof-of-address checks — delivered under tight timelines.',
    architecture:
      'React-based marketplace with real-time order matching, driver verification workflows, and responsive design for field operations. Integrated with backend APIs for document processing and address verification.',
    impact:
      'Delivered a reliable matching flow that connected orders to verified riders. Improved operational trust from first rollout. Demonstrated ability to deliver remotely for an international client.',
    technologies: ['React', 'TypeScript', 'Real-time APIs', 'Responsive Design'],
    icon: Truck,
  },
  {
    company: 'ComplyDesk',
    role: 'Backend Developer',
    location: 'Lagos, Nigeria',
    period: '2024 – 2026',
    teamSize: 'Engineering team',
    title: 'Tax Computation Engine & Government API Integration',
    subtitle:
      'Built multi-tenant compliance platform automating tax filing for accountants, individuals, and regulators.',
    problem:
      'ComplyDesk needed a backend engine to accurately process multi-tier income brackets, statutory reliefs, and deductions — then file directly with the national tax authority API, with zero tolerance for calculation errors and full audit traceability.',
    architecture:
      'Multi-tenant Spring Boot service with role-scoped access for accountants, end users, and admin. Government API integration behind an adapter layer with retry logic, reconciliation workflows, and idempotent submission tracking.',
    impact:
      'Eliminated manual reconciliation cycles between internal ledgers and government data sources. Compliance defect rate dropped significantly. Platform passed regulatory inspection readiness checks on first review.',
    technologies: ['Java 11', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Docker'],
    icon: FileText,
  },
];

// ─── ADDITIONAL EXPERIENCE ─────────────────────────────────────────────────────

export const additionalExperience: { company: string; role: string; period: string; description: string; }[] = [];

// ─── PROJECTS (Side Projects — Honest Framing) ────────────────────────────────
// These are personal/side projects, clearly labeled as such.

export const projects = [
  {
    title: 'CBN-Compliant Wallet System',
    subtitle: 'Personal Project — Full-stack Fintech',
    description:
      'Production-grade digital wallet built to deepen my understanding of regulated financial systems. Implements national banking authority compliance with identity verification tiers, anti-money laundering flagging, double-entry GL ledger, and Kafka-based async processing. Includes interbank transfer simulation and regulatory report generation.',
    highlights: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Docker'],
    href: null,
    github: 'https://github.com/wallet-system',
    live: false,
  },
  {
    title: 'Distributed Payment System',
    subtitle: 'Personal Project — Systems Design',
    description:
      'Event-driven payment orchestration built to master distributed systems patterns. Features resilient settlement workflows with compensating transactions, eventual consistency, idempotent APIs for safe retries, and real-time reconciliation across service boundaries.',
    highlights: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Apache Kafka', 'Kubernetes'],
    href: null,
    github: 'https://github.com/seyi-adeoti/distributed-payment-system',
    live: false,
  },
  {
    title: 'Lekture',
    subtitle: 'Side Project — Ed-tech Marketplace',
    description:
      'Full-stack marketplace connecting students and instructors. Features real-time matching with WebSocket notifications, server-rendered course discovery, and integrated video streaming. Built responsive UI supporting 3 user roles with distinct dashboards.',
    highlights: ['React', 'TypeScript', 'Next.js', 'WebSockets', 'Responsive Design'],
    href: 'https://lekture-fe.vercel.app/',
    github: 'https://github.com/seyi-adeoti/lekture',
    live: true,
  },
];

// ─── CONTACT ───────────────────────────────────────────────────────────────────

export const contactLinks = [
  { label: 'Email', value: 'oluwaseyiadeoti825@gmail.com', href: 'mailto:oluwaseyiadeoti825@gmail.com', icon: 'Mail' },
  { label: 'GitHub', value: 'github.com/seyi-adeoti', href: 'https://github.com/seyi-adeoti', icon: 'Github' },
  // { label: 'LinkedIn', value: 'linkedin.com/in/seyi-adeoti', href: 'https://linkedin.com/in/seyi-adeoti', icon: 'Linkedin' },
];