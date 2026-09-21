'use client';

import { ShieldCheck, Building2, Lock, Wallet, FileCheck, Server } from 'lucide-react';
import { fintechHighlights } from '../../lib/data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../ui/scroll-reveal';

export function FintechSection() {
  return (
    <section id="fintech" className="section-divider relative bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start gap-2">
            <span className="section-label">
              <ShieldCheck className="h-3.5 w-3.5" />
              Fintech & Banking Credibility
            </span>
            <h2 className="section-heading mt-2">
              Engineering for Financial Infrastructure
            </h2>
            <p className="section-subtitle">
              Building mission-critical software for regulated banking environments requires strict security, zero data loss, fault tolerance, and absolute regulatory auditability.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Grid */}
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fintechHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="premium-card p-6 h-full flex flex-col justify-between hover:border-orange-border">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-light text-orange-primary mb-5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-charcoal">{item.title}</h3>
                    <p className="mt-3 text-xs leading-6 text-slate-600">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Highlight Banner */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 rounded-2xl border border-orange-border bg-gradient-to-r from-orange-light via-white to-orange-light/40 p-8 sm:p-10 shadow-subtle flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-primary mb-2">
                <FileCheck className="h-4 w-4" />
                <span>CBN-Regulated Banking Experience</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal sm:text-2xl">
                Multi-Level Approval & Loan Origination Workflows
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-7">
                At Sterling Bank, I designed and led frontend engineering for core loan origination systems — featuring strict inputter/checker handoffs, credit score intake validation, and multi-tiered manager approval chains with full regulatory audit trails.
              </p>
            </div>

            <div className="flex-shrink-0 flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-border shadow-subtle">
              <Server className="h-5 w-5 text-orange-primary" />
              <div>
                <p className="text-xs font-bold text-charcoal">100,000+ Active Users</p>
                <p className="text-[0.68rem] text-slate-500">Branch & Retail Operations</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
