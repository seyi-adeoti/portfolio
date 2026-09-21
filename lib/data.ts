import { Bolt, Github, Layers, Linkedin, Mail, ServerCog, ShieldCheck, Sparkles, Truck, Users, Wallet, FileText, Building2, CreditCard, Lock, Cpu, Server, Database, Cloud } from 'lucide-react';

// ─── HERO CONTENT ────────────────────────────────────────────────────────────

export const heroData = {
  name: 'Seyi Adeoti',
  headline: 'Senior Full-Stack Engineer building scalable digital products and financial systems.',
  subtitle:
    'Senior Full-Stack & Frontend Engineer with 6+ years of experience building high-performance web applications, resilient backend microservices, and distributed financial platforms using React, Next.js, TypeScript, Java/Spring Boot, Kafka, and AWS.',
  badges: ['React.js', 'Next.js', 'TypeScript', 'Java 17', 'Spring Boot', 'Kafka', 'AWS', 'PostgreSQL', 'Docker'],
  location: 'Lagos, Nigeria (WAT / GMT+1)',
  visaStatus: 'Passport holder · Open to visa sponsorship & global relocation / remote',
};

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Fintech', href: '#fintech' },
  { label: 'Tech Stack', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Contact', href: '#contact' },
];

// ─── STATS & PROFILE ─────────────────────────────────────────────────────────

export const stats = [
  { value: '6+', label: 'Years Engineering Experience', note: 'Full-stack & Frontend Architecture' },
  { value: '100K+', label: 'Active Users Impacted', note: 'Sterling Bank Enterprise Platforms' },
  { value: 'CBN', label: 'Regulated Banking Systems', note: 'Strict Compliance & OWASP Security' },
  { value: 'Dual Core', label: 'React / Next.js & Java', note: 'Frontend & Event-driven Systems' },
];

// ─── WORK EXPERIENCE ───────────────────────────────────────────────────────────

export const experience = [
  {
    company: 'Sterling Bank Plc / Altbank',
    role: 'Senior Frontend Engineer',
    location: 'Lagos, Nigeria',
    period: 'Jul 2023 – Present (Full-Time)',
    teamSize: 'Leading frontend team',
    title: 'Enterprise Banking Platform & Branch Operations',
    subtitle:
      'Architected and own the frontend of enterprise banking products serving 100,000+ users, built with React.js, TypeScript, and Next.js.',
    problem:
      'Sterling needed modern, reliable web applications for loan origination, branch account opening, and card management — serving operations across all branches with strict compliance and auditability requirements.',
    architecture:
      'React-based frontends with component-driven architecture, integrated with backend services. Implemented security standards including JWT, OAuth2, and XSS/CSRF protection across financial data surfaces, aligned with OWASP guidance.',
    impact:
      'Reduced transaction page load times through code splitting, lazy loading, and bundle optimization. Delivered a loan application workflow with intake, inputter handoff, and multi-level approval, integrated with backend services.',
    bulletPoints: [
      'Led frontend engineering for core enterprise banking products serving 100,000+ branch and retail users.',
      'Designed and shipped loan origination workflows featuring multi-level approvals, audit trails, and inputter handoffs.',
      'Implemented bank-grade security standards including OAuth2, JWT, and OWASP-compliant XSS/CSRF mitigations.',
      'Optimized application bundles via dynamic imports and state normalization, drastically improving initial page load times.',
      'Collaborated closely across backend, QA, DevOps, and compliance teams in a CBN-regulated environment.',
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Docker', 'REST APIs'],
    icon: Building2,
  },
  {
    company: 'Tripvalue',
    role: 'Engineering Team Lead',
    location: 'Lagos, Nigeria',
    period: 'Dec 2021 – Dec 2022 (Full-Time)',
    teamSize: 'Led a team of 6 engineers',
    title: 'Real-Time Logistics Management Platform',
    subtitle:
      'Led a cross-functional team of 6 engineers building a full-stack logistics management platform covering real-time tracking, inventory, and route optimization.',
    problem:
      'The company needed a resilient platform to monitor shipments, coordinate routes, and provide live updates across distributed operations teams — with reliable performance serving 50,000+ daily requests.',
    architecture:
      'Built a real-time fleet tracking dashboard using React, WebSockets, and microservices. Defined technical architecture, service boundaries, and delivery roadmap; ran sprint planning and architecture reviews.',
    impact:
      'Reduced route resolution latency by 40% at peak load. Established coding standards, PR review culture, and agile rituals that improved team delivery velocity.',
    bulletPoints: [
      'Led 6 cross-functional engineers in building a real-time fleet tracking & logistics control dashboard.',
      'Implemented WebSocket streaming for low-latency live location telemetry and automated shipment alerts.',
      'Reduced route resolution latency by 40% under peak load conditions.',
      'Established PR review standards, automated CI/CD workflows, and sprint planning rituals.',
    ],
    technologies: ['React', 'TypeScript', 'WebSockets', 'Spring Boot', 'REST APIs', 'PostgreSQL'],
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
    bulletPoints: [
      'Engineered high-conversion landing applications and responsive product interfaces.',
      'Implemented client-side performance optimizations, image delivery pipelines, and code splitting.',
      'Integrated A/B testing infrastructure for data-informed UI iterations.',
    ],
    technologies: ['React.js', 'TypeScript', 'Webpack', 'Sass', 'HTML5/CSS3'],
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
    bulletPoints: [
      'Created and maintained a company-wide React component library with Storybook documentation.',
      'Integrated 15+ external microservices and payment gateways with resilient retry logic.',
      'Elevated accessibility across products to achieve WCAG 2.1 AA compliance.',
    ],
    technologies: ['React.js', 'Redux', 'TypeScript', 'REST APIs', 'Jest', 'Storybook'],
    icon: Layers,
  },
  {
    company: 'Remote Client',
    role: 'Frontend Engineer (Contract)',
    location: 'Budapest, Hungary (Remote)',
    period: 'Jan 2020 – Apr 2020 (Contract)',
    teamSize: 'Contract engagement',
    title: 'Logistics Marketplace & Driver Verification',
    subtitle:
      'Built a fast-launch order-to-rider matching application for a logistics startup, including driver verification and document submission workflows.',
    problem:
      'A Hungarian logistics startup needed a marketplace application to match orders with verified riders, including driver verification, document submission, and proof-of-address checks — delivered under tight timelines.',
    architecture:
      'Delivered a real-time order-matching flow with responsive design for field operations, integrated with backend APIs for document and address verification.',
    impact:
      'Delivered a reliable matching flow that connected orders to verified riders. Improved operational trust from first rollout.',
    bulletPoints: [
      'Delivered a fast order-to-rider matching web application under strict time-to-market constraints.',
      'Built document submission and identity verification flows for driver onboarding.',
    ],
    technologies: ['React.js', 'TypeScript', 'Real-time APIs', 'Responsive Design'],
    icon: Truck,
  },
];

// ─── FINTECH CREDIBILITY HIGHLIGHTS ──────────────────────────────────────────

export const fintechHighlights = [
  {
    title: 'Enterprise Banking Platforms',
    description:
      'Engineered production web portals for core branch banking, loan origination, and customer management serving 100,000+ active users at Sterling Bank.',
    icon: Building2,
  },
  {
    title: 'Regulated Compliance & Audit Trails',
    description:
      'Built systems adhering to Central Bank of Nigeria (CBN) regulations, identity verification tiers (KYC/AML), and immutable audit logs.',
    icon: ShieldCheck,
  },
  {
    title: 'Bank-Grade OWASP Security',
    description:
      'Implemented robust authentication and security patterns, including OAuth2, JWT token rotation, CSRF defense, and XSS sanitization.',
    icon: Lock,
  },
  {
    title: 'Event-Driven Financial Workflows',
    description:
      'Architected event-driven microservices using Java 17, Spring Boot, and Apache Kafka for asynchronous ledger processing and payment orchestration.',
    icon: Wallet,
  },
];

// ─── TECH STACK WITH USAGE TOOLTIPS ──────────────────────────────────────────

export const techStackCategories = [
  {
    category: 'Frontend Architecture',
    description: 'Building high-performance, accessible, stateful web applications.',
    items: [
      { name: 'React.js', usage: '6+ years building complex interactive dashboards and component systems.' },
      { name: 'Next.js', usage: 'SSG/SSR web apps with server components, route handlers, and SEO optimization.' },
      { name: 'TypeScript', usage: 'Strict type safety across frontend components and backend API interfaces.' },
      { name: 'JavaScript (ES6+)', usage: 'Deep knowledge of async event loops, DOM APIs, and modern JS features.' },
      { name: 'Tailwind CSS', usage: 'Designing scalable design systems with custom tokens and light/dark styling.' },
      { name: 'State (Zustand/Redux)', usage: 'Managing complex concurrent state, caching, and optimistic updates.' },
    ],
  },
  {
    category: 'Backend & Microservices',
    description: 'Designing resilient server architectures and API gateways.',
    items: [
      { name: 'Java 17', usage: 'Object-oriented backend services, concurrency control, and clean architecture.' },
      { name: 'Spring Boot', usage: 'Production microservices, RESTful APIs, Security, and JPA/Hibernate.' },
      { name: 'Node.js', usage: 'Fast API services, WebSocket servers, and serverless backend handlers.' },
      { name: 'RESTful APIs', usage: 'Swagger/OpenAPI documented endpoints with strict request validation.' },
    ],
  },
  {
    category: 'Distributed Systems & Messaging',
    description: 'Event-driven architectures for high-throughput real-time processing.',
    items: [
      { name: 'Apache Kafka', usage: 'Event streaming pipelines, topic partitioning, and consumer group orchestration.' },
      { name: 'WebSockets', usage: 'Bi-directional real-time telemetry, notification channels, and fleet tracking.' },
      { name: 'Event-Driven Arch', usage: 'Decoupled domain events, compensating transactions, and idempotent consumers.' },
      { name: 'System Design', usage: 'Designing high-availability systems with failover, caching, and rate limiting.' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    description: 'Automating deployment pipelines and cloud infrastructure.',
    items: [
      { name: 'AWS (EC2, RDS, EKS)', usage: 'Deploying containerized services, managing managed PostgreSQL, and S3 assets.' },
      { name: 'Docker', usage: 'Containerizing multi-stage builds for frontend and backend production workloads.' },
      { name: 'Kubernetes', usage: 'Service orchestration, ingress routing, and health probe management.' },
      { name: 'CI/CD Pipelines', usage: 'Automating unit tests, linting, security scans, and seamless deployments.' },
    ],
  },
  {
    category: 'Databases & Caching',
    description: 'Data modeling, relational indexing, and low-latency key-value stores.',
    items: [
      { name: 'PostgreSQL', usage: 'Relational database schema design, indexing strategies, and transactional integrity.' },
      { name: 'Redis', usage: 'Distributed session caching, API rate limiting, and pub/sub messaging.' },
      { name: 'MySQL', usage: 'Relational data modeling, query optimization, and transaction management.' },
    ],
  },
  {
    category: 'Security & Compliance',
    description: 'Protecting financial data surfaces and complying with regulatory standards.',
    items: [
      { name: 'OWASP Security', usage: 'Hardening web apps against XSS, SQLi, CSRF, and data exposure.' },
      { name: 'OAuth2 & JWT', usage: 'Stateless session authentication with refresh token rotation and RBAC.' },
      { name: 'CBN Compliance', usage: 'Engineering banking workflows conforming to national banking authority rules.' },
    ],
  },
];

// ─── FEATURED PROJECTS & CASE STUDIES ────────────────────────────────────────

export const projects = [
  {
    title: 'CBN-Compliant Wallet System',
    category: 'Full-Stack Fintech',
    subtitle: 'Production-grade financial system implementation',
    featured: true,
    description:
      'Digital wallet engine built to demonstrate regulated financial architecture. Features identity verification tiers (KYC), anti-money laundering (AML) detection rules, a double-entry general ledger for immutable accounting, and Kafka-based event processing for interbank transfer simulation.',
    highlights: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Docker'],
    github: 'https://github.com/seyi-adeoti',
    live: false,
    architectureDetails: 'Spring Boot microservice consuming Kafka events to commit double-entry ledger entries idempotently into PostgreSQL.',
  },
  {
    title: 'Distributed Payment Orchestration',
    category: 'Systems Design',
    subtitle: 'Resilient event-driven settlement system',
    featured: true,
    description:
      'Event-driven payment orchestrator designed to handle service failures gracefully. Features saga pattern workflow execution, compensating transaction rollbacks, eventual consistency, idempotent API gateways, and real-time reconciliation across isolated domain services.',
    highlights: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Apache Kafka', 'Kubernetes'],
    github: 'https://github.com/seyi-adeoti/distributed-payment-system',
    live: false,
    architectureDetails: 'Saga orchestrator executing distributed transaction steps with Kafka topics and automatic compensation on failure.',
  },
  {
    title: 'Lekture — Ed-Tech Marketplace',
    category: 'Web Application',
    subtitle: 'Full-stack educational platform',
    featured: false,
    description:
      'Full-stack marketplace connecting students and instructors. Features real-time matching with WebSocket notifications, server-rendered course discovery, and integrated video streaming with responsive role-based dashboards.',
    highlights: ['React', 'TypeScript', 'Next.js', 'WebSockets', 'Tailwind CSS'],
    href: 'https://lekture-fe.vercel.app/',
    github: 'https://github.com/seyi-adeoti/lekture',
    live: true,
  },
];

// ─── ARCHITECTURE PIPELINE ("How I Build") ───────────────────────────────────

export const architectureSteps = [
  {
    step: '01',
    title: 'Client Layer',
    tech: 'React.js / Next.js / TypeScript',
    description: 'Component-driven, responsive UI with normalized state management, strict type boundaries, and accessibility.',
  },
  {
    step: '02',
    title: 'API Gateway',
    tech: 'REST / GraphQL / Auth Layer',
    description: 'Rate limiting, OAuth2/JWT validation, payload sanitization, and request routing to backend services.',
  },
  {
    step: '03',
    title: 'Backend Services',
    tech: 'Java 17 / Spring Boot / Node.js',
    description: 'Domain-driven microservices processing business logic, transaction boundaries, and auditing.',
  },
  {
    step: '04',
    title: 'Event Streaming',
    tech: 'Apache Kafka / WebSockets',
    description: 'Asynchronous event bus handling high-throughput messaging, event sourcing, and real-time client updates.',
  },
  {
    step: '05',
    title: 'Data & Cache Layer',
    tech: 'PostgreSQL / Redis',
    description: 'ACID-compliant relational database transactions paired with low-latency Redis cache for session & balance lookups.',
  },
  {
    step: '06',
    title: 'Cloud Infrastructure',
    tech: 'AWS (EKS, EC2, RDS) / Docker',
    description: 'Containerized Kubernetes deployments with automated CI/CD pipelines and health monitoring.',
  },
];

// ─── CONTACT DETAILS ──────────────────────────────────────────────────────────

export const contactLinks = [
  { label: 'Email', value: 'oluwaseyiadeoti825@gmail.com', href: 'mailto:oluwaseyiadeoti825@gmail.com', icon: Mail },
  { label: 'GitHub', value: 'github.com/seyi-adeoti', href: 'https://github.com/seyi-adeoti', icon: Github },
  { label: 'LinkedIn', value: 'linkedin.com/in/seyi-adeoti', href: 'https://linkedin.com/in/seyi-adeoti', icon: Linkedin },
];