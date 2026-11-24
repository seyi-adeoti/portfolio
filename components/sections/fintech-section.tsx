'use client';

import { FileCheck, Server } from 'lucide-react';
import { fintechHighlights } from '../../lib/data';

export function FintechSection() {
  return (
    <section id="fintech" className="section-divider bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Heading (NO tracked-out eyebrow labels!) */}
        <div className="flex flex-col items-start">
          <h2 className="section-heading">
            Engineering for Financial Infrastructure
          </h2>
          <p className="section-subtitle">
            Building mission-critical software for regulated banking environments requires strict security, zero data loss, fault tolerance, and absolute regulatory auditability.
          </p>
        </div>

        {/* Feature Grid (Hairline Paper Document Cards) */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fintechHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-sm border border-[#D8D3C8] bg-[#FAF8F5] p-6 flex flex-col justify-between shadow-ledger hover:border-[#B8860B] transition-colors"
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#F4EFE0] text-[#8C6608] mb-4">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1A2332]">{item.title}</h3>
                  <p className="mt-2.5 text-xs leading-6 text-[#4A5568]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulated Banking Audit Highlight Banner */}
        <div className="mt-10 rounded-sm border border-[#B8860B]/40 bg-[#F4EFE0] p-7 sm:p-9 shadow-ledger flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#8C6608] mb-2">
              <FileCheck className="h-4 w-4" />
              <span>CBN-Regulated Banking Experience</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1A2332] sm:text-2xl">
              Multi-Level Approval & Loan Origination Workflows
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#4A5568] leading-6">
              At Sterling Bank, I designed and led frontend engineering for core loan origination systems — featuring strict inputter/checker handoffs, credit score intake validation, and multi-tiered manager approval chains with full regulatory audit trails.
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3 bg-white px-5 py-4 rounded-sm border border-[#D8D3C8]">
            <Server className="h-5 w-5 text-[#8C6608]" />
            <div className="font-mono">
              <p className="text-xs font-bold text-[#1A2332]">100,000+ Active Users</p>
              <p className="text-[0.75rem] text-[#5A6678]">Branch & Retail Operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

