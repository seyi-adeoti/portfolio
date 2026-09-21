'use client';

import { useState } from 'react';
import { Cpu, Info } from 'lucide-react';
import { techStackCategories } from '../../lib/data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../ui/scroll-reveal';

export function TechStackSection() {
  const [activeItem, setActiveItem] = useState<{ name: string; usage: string } | null>(null);

  return (
    <section id="skills" className="section-divider relative bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start gap-2">
            <span className="section-label">
              <Cpu className="h-3.5 w-3.5" />
              Technical Stack & Domain Expertise
            </span>
            <h2 className="section-heading mt-2">
              Categorized Engineering Capabilities
            </h2>
            <p className="section-subtitle">
              Hover over any technology item to see how I apply it across frontend platforms, microservices, messaging, and cloud deployments.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Grid */}
        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStackCategories.map((group) => (
            <StaggerItem key={group.category}>
              <div className="premium-card p-6 h-full flex flex-col justify-between hover:border-orange-border">
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                    <h3 className="text-base font-bold text-charcoal">{group.category}</h3>
                    <span className="text-[0.68rem] font-mono text-slate-400">{group.items.length} Techs</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4">{group.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      const isSelected = activeItem?.name === item.name;
                      return (
                        <div
                          key={item.name}
                          onMouseEnter={() => setActiveItem(item)}
                          onMouseLeave={() => setActiveItem(null)}
                          onClick={() => setActiveItem(isSelected ? null : item)}
                          className={`cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                            isSelected
                              ? 'border-orange-primary bg-orange-primary text-white shadow-orange'
                              : 'border-border bg-white text-slate-700 hover:border-orange-border hover:bg-orange-light hover:text-orange-primary'
                          }`}
                        >
                          {item.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Hover Context Box */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 rounded-xl border border-orange-border bg-white p-5 shadow-subtle min-h-[72px] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-light text-orange-primary flex-shrink-0">
                <Info className="h-4 w-4" />
              </div>
              <div>
                {activeItem ? (
                  <>
                    <h4 className="text-xs font-bold text-charcoal">
                      How I use <span className="text-orange-primary">{activeItem.name}</span> in production:
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">{activeItem.usage}</p>
                  </>
                ) : (
                  <>
                    <h4 className="text-xs font-bold text-charcoal">Hover over a technology tag above</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Explore detailed production usage context for each skill in my technical stack.
                    </p>
                  </>
                )}
              </div>
            </div>

            {activeItem && (
              <span className="hidden sm:inline-block rounded-full bg-orange-light px-3 py-1 text-[0.68rem] font-bold text-orange-primary">
                Active Tech Context
              </span>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
