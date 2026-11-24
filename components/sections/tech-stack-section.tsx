'use client';

import { useState } from 'react';
import { Info } from 'lucide-react';
import { techStackCategories } from '../../lib/data';

export function TechStackSection() {
  const [activeItem, setActiveItem] = useState<{ name: string; usage: string } | null>(null);

  return (
    <section id="skills" className="section-divider bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Heading (NO tracked-out eyebrow labels!) */}
        <div className="flex flex-col items-start">
          <h2 className="section-heading">
            Technical Stack & Domain Expertise
          </h2>
          <p className="section-subtitle">
            Select or hover over any technology item to review production application context across frontend platforms, microservices, messaging, and cloud deployments.
          </p>
        </div>

        {/* Categories Grid (Document-Dense Ledger Index) */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStackCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-sm border border-[#D8D3C8] bg-[#FAF8F5] p-6 flex flex-col justify-between shadow-ledger"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#D8D3C8] pb-3 mb-3">
                  <h3 className="font-serif text-base font-bold text-[#1A2332]">{group.category}</h3>
                  <span className="font-mono text-[0.75rem] text-[#5A6678]">{group.items.length} Techs</span>
                </div>
                <p className="text-xs text-[#4A5568] mb-4">{group.description}</p>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const isSelected = activeItem?.name === item.name;
                    return (
                      <button
                        key={item.name}
                        onMouseEnter={() => setActiveItem(item)}
                        onMouseLeave={() => setActiveItem(null)}
                        onClick={() => setActiveItem(isSelected ? null : item)}
                        className={`cursor-pointer rounded-sm border px-2.5 py-1 font-mono text-xs transition-all duration-150 ${
                          isSelected
                            ? 'border-[#8C6608] bg-[#8C6608] text-[#FAF8F5] font-bold'
                            : 'border-[#D8D3C8] bg-white text-[#1A2332] hover:border-[#B8860B] hover:bg-[#F4EFE0]'
                        }`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Context Inspection Drawer */}
        <div className="mt-8 rounded-sm border border-[#D8D3C8] bg-white p-5 shadow-sm min-h-[72px] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#F4EFE0] text-[#8C6608] flex-shrink-0">
              <Info className="h-4 w-4" />
            </div>
            <div>
              {activeItem ? (
                <>
                  <h4 className="font-mono text-xs font-bold text-[#1A2332]">
                    Production Usage context for <span className="text-[#8C6608]">{activeItem.name}</span>:
                  </h4>
                  <p className="text-xs text-[#4A5568] mt-0.5">{activeItem.usage}</p>
                </>
              ) : (
                <>
                  <h4 className="font-mono text-xs font-bold text-[#1A2332]">Select or hover over a skill tag above</h4>
                  <p className="text-xs text-[#5A6678] mt-0.5">
                    Review specific production usage details for technologies across Seyi&apos;s stack.
                  </p>
                </>
              )}
            </div>
          </div>

          {activeItem && (
            <span className="hidden sm:inline-block rounded-sm bg-[#F4EFE0] border border-[#B8860B]/40 px-2.5 py-1 font-mono text-[0.75rem] font-bold uppercase text-[#8C6608]">
              Active Skill Record
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

