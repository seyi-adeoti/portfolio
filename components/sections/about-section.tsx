'use client';

import { CheckCircle2, Code2, Cpu } from 'lucide-react';
import { stats } from '../../lib/data';

export function AboutSection() {
  return (
    <section id="about" className="section-divider bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Document Header (NO tracked-out all-caps eyebrow labels!) */}
        <div className="flex flex-col items-start">
          <h2 className="section-heading">
            Engineering Profile & System Metrics
          </h2>
          <p className="section-subtitle">
            Senior engineer with over 6 years of hands-on experience designing, shipping, and maintaining production systems across banking, logistics, and multi-module enterprise products.
          </p>
        </div>

        {/* Ledger Summary Statement (Tabular Metrics Grid) — NOT SaaS Rounded Cards */}
        <div className="mt-10 rounded-sm border border-[#D8D3C8] bg-[#FAF8F5] p-6 shadow-ledger">
          <div className="border-b border-[#D8D3C8] pb-3 mb-6 flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C6608]">
              Key Performance & System Indicators
            </span>
            <span className="font-mono text-[0.75rem] text-[#5A6678]">
              REFERENCE SUMMARY
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D8D3C8]">
            {stats.map((stat, idx) => (
              <div key={stat.label} className={`${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}>
                <div className="font-mono text-3xl font-bold tracking-tight text-[#1A2332]">
                  {stat.value}
                </div>
                <h3 className="mt-1.5 font-serif text-sm font-bold text-[#1A2332]">{stat.label}</h3>
                <p className="mt-1 font-mono text-[0.75rem] text-[#5A6678]">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy Cards (Hairline Document Style) */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-[#D8D3C8] bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-4 border-b border-[#E2DDD3] pb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#F4EFE0] text-[#8C6608]">
                <Code2 className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A2332]">
                Frontend Architecture & Engineering Polish
              </h3>
            </div>
            <p className="text-xs leading-6 text-[#4A5568]">
              Specialized in React.js, Next.js, Angular, and TypeScript. I craft highly responsive, accessible web applications with strict type safety, normalized state management (Zustand, Redux, RxJS), and modular design systems that scale seamlessly across engineering teams.
            </p>
            <ul className="mt-5 space-y-2.5 font-mono text-xs text-[#1A2332]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#8C6608]" />
                <span>Sub-second page loads & bundle splitting</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#8C6608]" />
                <span>Storybook documented component design systems</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#8C6608]" />
                <span>WCAG 2.1 AA web accessibility standards</span>
              </li>
            </ul>
          </div>

          <div className="rounded-sm border border-[#D8D3C8] bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-4 border-b border-[#E2DDD3] pb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#F4EFE0] text-[#8C6608]">
                <Cpu className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A2332]">
                Distributed Systems & Backend Services
              </h3>
            </div>
            <p className="text-xs leading-6 text-[#4A5568]">
              Experienced in building Java 17 / Spring Boot microservices and event-driven architectures with Apache Kafka. I design idempotent REST APIs, event stream processors, and ACID-compliant relational schemas with PostgreSQL and Redis caching.
            </p>
            <ul className="mt-5 space-y-2.5 font-mono text-xs text-[#1A2332]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#8C6608]" />
                <span>Apache Kafka asynchronous event streaming</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#8C6608]" />
                <span>Idempotent transactional payment processing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#8C6608]" />
                <span>Microservices orchestration with Docker & AWS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

