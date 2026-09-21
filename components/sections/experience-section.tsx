'use client';

import { Briefcase, Calendar, MapPin, Building2, ChevronRight, CheckCircle2 } from 'lucide-react';
import { experience } from '../../lib/data';
import { ScrollReveal } from '../ui/scroll-reveal';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-divider relative bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start gap-2">
            <span className="section-label">
              <Briefcase className="h-3.5 w-3.5" />
              Career History
            </span>
            <h2 className="section-heading mt-2">
              Engineering Leadership & Production Experience
            </h2>
            <p className="section-subtitle">
              A record of engineering impact across enterprise banking, real-time logistics, performance optimization, and distributed systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Premium Vertical Timeline */}
        <div className="relative mt-16 space-y-12">
          {/* Vertical Center Line */}
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

          {experience.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={item.company + item.period} delay={index * 0.1}>
                <div className={`relative flex flex-col gap-6 md:flex-row md:items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node Badge */}
                  <div className="absolute left-6 top-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-orange-primary text-white shadow-orange md:left-1/2">
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className="premium-card p-6 sm:p-8 hover:border-orange-border">
                      {/* Company Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-orange-primary">
                            {item.company}
                          </span>
                          <h3 className="text-lg font-extrabold text-charcoal sm:text-xl mt-0.5">
                            {item.role}
                          </h3>
                        </div>

                        <div className="flex flex-col items-start sm:items-end text-xs text-slate-500 gap-1">
                          <span className="flex items-center gap-1 font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                            <Calendar className="h-3.5 w-3.5 text-orange-primary" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1 text-[0.7rem]">
                            <MapPin className="h-3 w-3 text-slate-400" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="mt-4">
                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                        <p className="mt-1 text-xs text-slate-600 leading-6">{item.subtitle}</p>
                      </div>

                      {/* Bullet Highlights */}
                      {item.bulletPoints && item.bulletPoints.length > 0 && (
                        <div className="mt-5 space-y-2">
                          {item.bulletPoints.map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                              <ChevronRight className="h-3.5 w-3.5 text-orange-primary flex-shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technical Pillars (Problem, Architecture, Impact) */}
                      <div className="mt-6 grid gap-4 sm:grid-cols-3 border-t border-border pt-4">
                        <div>
                          <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">Problem</p>
                          <p className="text-xs text-slate-600 mt-1 line-clamp-3">{item.problem}</p>
                        </div>
                        <div>
                          <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">Architecture</p>
                          <p className="text-xs text-slate-600 mt-1 line-clamp-3">{item.architecture}</p>
                        </div>
                        <div>
                          <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">Impact</p>
                          <p className="text-xs text-slate-600 mt-1 line-clamp-3">{item.impact}</p>
                        </div>
                      </div>

                      {/* Tech Tags */}
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border bg-slate-50 px-2.5 py-1 text-[0.68rem] font-semibold text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
