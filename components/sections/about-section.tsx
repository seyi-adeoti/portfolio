'use client';

import { CheckCircle2, ShieldCheck, Cpu, Code2, Users2, Award } from 'lucide-react';
import { stats } from '../../lib/data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../ui/scroll-reveal';

export function AboutSection() {
  return (
    <section id="about" className="section-divider relative bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start gap-2">
            <span className="section-label">
              <Award className="h-3.5 w-3.5" />
              Engineering Profile
            </span>
            <h2 className="section-heading mt-2">
              Building resilient software for complex domain demands.
            </h2>
            <p className="section-subtitle">
              Senior engineer with over 6 years of hands-on experience designing, shipping, and maintaining production systems across banking, logistics, and multi-module enterprise products.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="premium-card p-6 flex flex-col justify-between h-full group hover:border-orange-border">
                <div>
                  <span className="text-4xl font-extrabold text-orange-primary tracking-tight group-hover:scale-105 transition-transform inline-block">
                    {stat.value}
                  </span>
                  <h3 className="mt-2 text-sm font-bold text-charcoal">{stat.label}</h3>
                  <p className="mt-1 text-xs text-slate-500">{stat.note}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Engineering Philosophy Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ScrollReveal delay={0.2}>
            <div className="premium-card p-8 bg-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-light text-orange-primary mb-5">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-charcoal">Frontend Architecture & Engineering Polish</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Specialized in React.js, Next.js, and TypeScript. I craft highly responsive, accessible web applications with strict type safety, normalized state management (Zustand, Redux), and modular design systems that scale seamlessly across engineering teams.
              </p>
              <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-primary" />
                  <span>Sub-second page loads & bundle splitting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-primary" />
                  <span>Storybook documented component design systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-primary" />
                  <span>WCAG 2.1 AA web accessibility standards</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="premium-card p-8 bg-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-light text-orange-primary mb-5">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-charcoal">Distributed Systems & Backend Services</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Experienced in building Java 17 / Spring Boot microservices and event-driven architectures with Apache Kafka. I design idempotent REST APIs, event stream processors, and ACID-compliant relational schemas with PostgreSQL and Redis caching.
              </p>
              <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-primary" />
                  <span>Apache Kafka asynchronous event streaming</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-primary" />
                  <span>Idempotent transactional GL payment ledgers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-primary" />
                  <span>Microservices orchestration with Docker & AWS</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
