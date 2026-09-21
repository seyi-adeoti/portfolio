'use client';

import { useState } from 'react';
import { Layers, ArrowRight, CheckCircle, Activity, Server, Cpu, Database, Shield, Cloud } from 'lucide-react';
import { architectureSteps } from '../../lib/data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../ui/scroll-reveal';

export function ArchitectureSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="architecture" className="section-divider relative bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start gap-2">
            <span className="section-label">
              <Layers className="h-3.5 w-3.5" />
              Engineering Artifact
            </span>
            <h2 className="section-heading mt-2">
              How I Build Production Systems
            </h2>
            <p className="section-subtitle">
              End-to-end architectural flow demonstrating how client state, API security, domain microservices, asynchronous events, and cloud data stores connect reliably.
            </p>
          </div>
        </ScrollReveal>

        {/* Architecture Pipeline Stepper */}
        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {architectureSteps.map((item, index) => {
            const isActive = activeStep === index;
            return (
              <StaggerItem key={item.step}>
                <div
                  onClick={() => setActiveStep(index)}
                  className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    isActive
                      ? 'border-orange-primary bg-orange-light/50 shadow-orange-soft transform -translate-y-1'
                      : 'border-border bg-white hover:border-orange-border hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                        isActive ? 'bg-orange-primary text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      STEP {item.step}
                    </span>
                    {isActive && (
                      <span className="flex items-center gap-1 text-[0.68rem] font-bold text-orange-primary">
                        <Activity className="h-3.5 w-3.5 animate-pulse" />
                        Active Stream
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                  <p className="mt-1 text-xs font-bold text-orange-primary">{item.tech}</p>
                  <p className="mt-3 text-xs leading-6 text-slate-600">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Flow Visualization Footer Box */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-subtle">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-primary text-white shadow-orange">
                <Activity className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <h4 className="text-base font-bold text-charcoal">Data Flow Pipeline Status</h4>
                <p className="text-xs text-slate-600">
                  Step {architectureSteps[activeStep].step}: <strong className="text-orange-primary">{architectureSteps[activeStep].title}</strong> — {architectureSteps[activeStep].tech}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold text-slate-600">
              <span className="rounded-md border border-border bg-white px-3 py-1.5">Client UI</span>
              <ArrowRight className="h-3.5 w-3.5 text-orange-primary" />
              <span className="rounded-md border border-border bg-white px-3 py-1.5">Gateway</span>
              <ArrowRight className="h-3.5 w-3.5 text-orange-primary" />
              <span className="rounded-md border border-border bg-white px-3 py-1.5">Microservices</span>
              <ArrowRight className="h-3.5 w-3.5 text-orange-primary" />
              <span className="rounded-md border border-border bg-white px-3 py-1.5">Kafka</span>
              <ArrowRight className="h-3.5 w-3.5 text-orange-primary" />
              <span className="rounded-md border border-border bg-white px-3 py-1.5">PostgreSQL / AWS</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
