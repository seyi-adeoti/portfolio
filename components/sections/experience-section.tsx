'use client';

import { Calendar, MapPin, Check } from 'lucide-react';
import { experience } from '../../lib/data';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-divider bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Heading (No Tracked-Out Eyebrows!) */}
        <div className="flex flex-col items-start">
          <h2 className="section-heading">
            Career History & Experience
          </h2>
          <p className="section-subtitle">
            Itemized engineering record across enterprise banking, real-time logistics, performance optimization, and distributed systems.
          </p>
        </div>

        {/* Financial Ledger Line-Items Container */}
        <div className="mt-10 space-y-6">
          {experience.map((item) => {
            return (
              <div
                key={item.company + item.period}
                className="rounded-sm border border-[#D8D3C8] bg-[#FAF8F5] p-6 sm:p-8 shadow-ledger transition-colors duration-150 hover:border-[#B8860B]"
              >
                {/* Ledger Item Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#D8D3C8] pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C6608]">
                        {item.company}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#1A2332]">
                      {item.role}
                    </h3>
                    <p className="font-serif text-sm italic text-[#4A5568]">
                      {item.title}
                    </p>
                  </div>

                  {/* Monospace Date & Location */}
                  <div className="flex flex-wrap md:flex-col md:items-end gap-2 font-mono text-xs text-[#5A6678]">
                    <div className="inline-flex items-center gap-1.5 rounded-sm border border-[#D8D3C8] bg-white px-2.5 py-1 text-[#1A2332]">
                      <Calendar className="h-3.5 w-3.5 text-[#8C6608]" />
                      <span>{item.period}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-[0.75rem]">
                      <MapPin className="h-3 w-3 text-[#5A6678]" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Subtitle Description */}
                <p className="mt-4 text-xs leading-6 text-[#4A5568]">
                  {item.subtitle}
                </p>

                {/* DEBIT / CREDIT DUAL COLUMN LEDGER PAIRING */}
                <div className="mt-6 grid gap-6 md:grid-cols-2 border-y border-[#D8D3C8] py-5 bg-white/60 px-4 -mx-4 sm:mx-0 sm:px-5 rounded-sm">
                  {/* Left Column: DEBIT // PROBLEM */}
                  <div className="border-b md:border-b-0 md:border-r border-[#D8D3C8] pb-4 md:pb-0 md:pr-6">
                    <div className="flex items-center gap-2 font-mono text-[0.75rem] font-bold uppercase tracking-wider text-[#4A5568] mb-2">
                      <span className="flex h-2 w-2 rounded-full bg-[#1A2332]" />
                      PROBLEM // SYSTEM CONSTRAINT
                    </div>
                    <p className="text-xs leading-6 text-[#1A2332]">
                      {item.problem}
                    </p>
                  </div>

                  {/* Right Column: CREDIT // IMPACT */}
                  <div className="md:pl-2">
                    <div className="flex items-center gap-2 font-mono text-[0.75rem] font-bold uppercase tracking-wider text-[#8C6608] mb-2">
                      <span className="flex h-2 w-2 rounded-full bg-[#B8860B]" />
                      IMPACT // DELIVERED VALUE
                    </div>
                    <p className="text-xs leading-6 text-[#1A2332]">
                      {item.impact}
                    </p>
                  </div>
                </div>

                {/* Architecture Summary Block */}
                <div className="mt-5 rounded-sm border border-[#E2DDD3] bg-white p-3.5 font-mono text-xs">
                  <span className="font-bold uppercase text-[#8C6608]">Architecture Pattern: </span>
                  <span className="text-[#4A5568]">{item.architecture}</span>
                </div>

                {/* Itemized Audit Highlights */}
                {item.bulletPoints && item.bulletPoints.length > 0 && (
                  <div className="mt-5 space-y-2">
                    <span className="font-mono text-[0.75rem] font-bold uppercase tracking-wider text-[#5A6678] block mb-2">
                      Itemized Execution Points
                    </span>
                    {item.bulletPoints.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#1A2332]">
                        <Check className="h-3.5 w-3.5 text-[#8C6608] flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Tags (Monospace Hairline Tags) */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#E2DDD3]">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-[#D8D3C8] bg-white px-2.5 py-1 font-mono text-[0.75rem] text-[#1A2332]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

