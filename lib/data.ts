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
    company: 'Sterling Bank Plc / Altbank',
    role: 'Senior Frontend Engineer',
    location: 'Lagos, Nigeria',
    period: 'Jul 2023 – Present (Full-Time)', 
    teamSize: 'Leading frontend team',
    title: 'Banking Platform & Branch Operations',
    subtitle:
      'Architected and own the frontend of enterprise banking products serving 100,000+ users, built with React.js, TypeScript, and Next.js.',
    problem:
      'Sterling needed modern, reliable web applications for loan origination, branch account opening, and card management — serving operations across all branches with strict compliance and auditability requirements.',
    architecture:
      'React-based frontends with component-driven architecture, integrated with backend services. Implemented security standards including JWT, OAuth2, and XSS/CSRF protection across financial data surfaces, aligned with OWASP guidance.',
    impact:
      'Reduced transaction page load times through code splitting, lazy loading, and bundle optimization. Delivered a loan application workflow with intake, inputter handoff, and multi-level approval, integrated with backend services.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Docker'],
    icon: Building2,
  },

  {
    company: 'Tripvalue',
    role: 'Engineering Team Lead',
    location: 'Lagos, Nigeria',
    period: 'Dec 2021 – Dec 2022 (Full-Time)',
    teamSize: 'Led a team of 6 engineers',
    title: 'Logistics Management Platform',
    subtitle:
      'Led a cross-functional team of 6 engineers building a full-stack logistics management platform covering real-time tracking, inventory, and route optimization.',
    problem:
      'The company needed a resilient platform to monitor shipments, coordinate routes, and provide live updates across distributed operations teams — with reliable performance serving 50,000+ daily requests.',
    architecture:
      'Built a real-time fleet tracking dashboard using React, WebSockets, and microservices. Defined technical architecture, service boundaries, and delivery roadmap; ran sprint planning and architecture reviews.',
    impact:
      'Reduced route resolution latency by 40% at peak load. Established coding standards, PR review culture, and agile rituals that improved team delivery velocity.',
    technologies: ['React', 'TypeScript', 'WebSockets', 'Spring Boot', 'REST APIs'],
    icon: Truck,
  },
  {
    company: 'Aglow Digitals',
    role: 'Frontend Developer (Part-Time)',
    location: 'Lagos, Nigeria',
    period: 'Oct 2021 – Dec 2022 (Part-Time)',
    teamSize: 'Frontend Engineering',
    title: 'Website Performance & Conversion Optimization',
    subtitle:
      'Improved website performance through React optimization, modern build tooling, and asset delivery improvements, alongside a full-time engineering role.',
    problem:
      'The company needed responsive interfaces across devices and better website performance to improve user experience and conversion rates.',
    architecture:
      'Built responsive interfaces and implemented A/B testing infrastructure enabling data-driven decisions across marketing and product teams.',
    impact:
      'Contributed to improved UX and conversion rates by enhancing website performance and cross-device responsiveness.',
    technologies: ['React.js', 'TypeScript', 'Webpack', 'Sass'],
    icon: Sparkles,
  },
  {
    company: 'Aid Me',
    role: 'Frontend Developer',
    location: 'Lagos, Nigeria',
    period: 'Feb 2020 – Nov 2021 (Full-Time)',
    teamSize: 'Frontend team',
    title: 'Component Library & Multi-module Applications',
    subtitle:
      'Built and maintained a reusable component library with Storybook documentation, cutting development time across 4+ product teams.',
    problem:
      'The organization required a unified frontend architecture for complex multi-module applications, handling concurrent user state and integration with numerous third-party APIs while maintaining accessibility standards.',
    architecture:
      'Implemented frontend architecture handling concurrent user state with Redux and Context API. Integrated 15+ third-party APIs including payment processors, analytics platforms, and notification services, with error handling and retry logic.',
    impact:
      'Improved WCAG 2.1 AA accessibility scores across products, reducing audit risk and broadening user reach. Improved rendering performance through virtual DOM optimization and memoization strategies.',
    technologies: ['React.js', 'Redux', 'TypeScript', 'REST APIs', 'Jest', 'Storybook', 'HTML5/CSS3'],
    icon: Layers,
  },
  {
    company: 'Remote client',
    role: 'Frontend Engineer (Contract)',
    location: 'Budapest, Hungary (Remote)',
    period: 'Jan 2020 – Apr 2020 (Contract)',
    teamSize: 'Contract engagement',
    title: 'Logistics Marketplace',
    subtitle:
      'Built a fast-launch order-to-rider matching application for a logistics startup, including driver verification and document submission workflows.',
    problem:
      'A Hungarian logistics startup needed a marketplace application to match orders with verified riders, including driver verification, document submission, and proof-of-address checks — delivered under tight timelines.',
    architecture:
      'Delivered a real-time order-matching flow with responsive design for field operations, integrated with backend APIs for document and address verification.',
    impact:
      'Delivered a reliable matching flow that connected orders to verified riders. Improved operational trust from first rollout.',
    technologies: ['React.js', 'TypeScript', 'Real-time APIs', 'Responsive Design'],
    icon: Truck,
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