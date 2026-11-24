'use client';

import { useState } from 'react';
import { Layers, Activity } from 'lucide-react';
import { architectureSteps } from '../../lib/data';

export function ArchitectureSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="architecture" className="section-divider bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Heading (NO tracked-out eyebrow labels!) */}
        <div className="flex flex-col items-start">
          <h2 className="section-heading">
            System Architecture & Execution Model
          </h2>
          <p className="section-subtitle">
            End-to-end architectural stack cross-section demonstrating how client state, API security, domain microservices, asynchronous events, and cloud data stores connect reliably.
          </p>
        </div>

        {/* Labeled Stack / Column Diagram (NO 01–06 NUMBERING) */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {architectureSteps.map((item, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={item.title}
                onClick={() => setActiveStep(index)}
                className={`group cursor-pointer rounded-sm border p-6 transition-colors duration-150 ${
                  isActive
                    ? 'border-[#B8860B] bg-[#F4EFE0] shadow-ledger'
                    : 'border-[#D8D3C8] bg-white hover:border-[#B8860B]/60 hover:bg-[#FAF8F5]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-[0.75rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                      isActive ? 'bg-[#8C6608] text-white' : 'bg-[#EFECE6] text-[#1A2332]'
                    }`}
                  >
                    {item.title}
                  </span>
                  {isActive && (
                    <span className="flex items-center gap-1 font-mono text-[0.75rem] font-bold text-[#8C6608]">
                      <Activity className="h-3 w-3" />
                      SELECTED LAYER
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1A2332]">{item.title}</h3>
                <p className="mt-1 font-mono text-xs font-semibold text-[#8C6608]">{item.tech}</p>
                <p className="mt-3 text-xs leading-6 text-[#4A5568]">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* System Pipeline Status Footer Panel (NO ARROW GLYPHS →) */}
        <div className="mt-8 rounded-sm border border-[#D8D3C8] bg-[#FAF8F5] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#8C6608] text-white">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-[#1A2332]">System Flow Pipeline Status</h4>
              <p className="font-mono text-xs text-[#4A5568] mt-0.5">
                Active Layer: <strong className="text-[#8C6608]">{architectureSteps[activeStep].title}</strong> — {architectureSteps[activeStep].tech}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#1A2332]">
            <span className="rounded-sm border border-[#D8D3C8] bg-white px-2.5 py-1">Client UI</span>
            <span className="text-[#8C6608] font-bold">/</span>
            <span className="rounded-sm border border-[#D8D3C8] bg-white px-2.5 py-1">API Gateway</span>
            <span className="text-[#8C6608] font-bold">/</span>
            <span className="rounded-sm border border-[#D8D3C8] bg-white px-2.5 py-1">Microservices</span>
            <span className="text-[#8C6608] font-bold">/</span>
            <span className="rounded-sm border border-[#D8D3C8] bg-white px-2.5 py-1">Apache Kafka</span>
            <span className="text-[#8C6608] font-bold">/</span>
            <span className="rounded-sm border border-[#D8D3C8] bg-white px-2.5 py-1">PostgreSQL & AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

