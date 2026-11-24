'use client';

import { useState } from 'react';
import { Layout, Shield, Server, Cpu, Database, Check } from 'lucide-react';

const stackLayers = [
  {
    id: 'client',
    title: 'Client Layer',
    tech: 'React.js / Next.js / Angular / TypeScript',
    icon: Layout,
    details: 'Component-driven frontend architecture, normalized Zustand state, WCAG 2.1 accessibility, sub-second bundle splitting.',
  },
  {
    id: 'gateway',
    title: 'API Gateway',
    tech: 'OAuth2 / JWT / Rate Limiting',
    icon: Shield,
    details: 'Bank-grade security perimeter, request validation, OWASP XSS/CSRF mitigations, token rotation.',
  },
  {
    id: 'backend',
    title: 'Backend Microservices',
    tech: 'Java 17 / Spring Boot',
    icon: Server,
    details: 'Domain-driven microservices processing financial logic, transactional accounting, idempotency controls.',
  },
  {
    id: 'streaming',
    title: 'Event Streaming',
    tech: 'Apache Kafka / WebSockets',
    icon: Cpu,
    details: 'Asynchronous event bus, topic partitioning, high-throughput event sourcing, real-time telemetry streaming.',
  },
  {
    id: 'data',
    title: 'Data & Cache Engine',
    tech: 'PostgreSQL / Redis',
    icon: Database,
    details: 'ACID-compliant relational transactions, immutable audit logs, low-latency Redis balance and session caching.',
  },
];

export function SystemNetworkVisual() {
  const [selectedLayer, setSelectedLayer] = useState(0);

  return (
    <div className="w-full rounded-sm border border-[#D8D3C8] bg-[#FAF8F5] p-5 sm:p-6 shadow-ledger">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8D3C8] pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#B8860B]" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1A2332]">
              Financial System Architecture
            </h3>
          </div>
          <p className="font-serif text-xs text-[#5A6678] italic mt-0.5">
            Layered Cross-Section & Transaction Flow
          </p>
        </div>

        <div className="rounded-sm border border-[#B8860B]/30 bg-[#F4EFE0] px-2.5 py-1 font-mono text-[0.75rem] font-semibold text-[#8C6608]">
          REFERENCE ARCHITECTURE
        </div>
      </div>

      {/* Labeled Stack Diagram (Layered Cross-Section) — NO 01-06 NUMBERING */}
      <div className="space-y-2">
        {stackLayers.map((layer, index) => {
          const Icon = layer.icon;
          const isSelected = selectedLayer === index;

          return (
            <div
              key={layer.id}
              onClick={() => setSelectedLayer(index)}
              className={`group cursor-pointer rounded-sm border p-3.5 transition-all duration-150 ${
                isSelected
                  ? 'border-[#B8860B] bg-[#F4EFE0]'
                  : 'border-[#D8D3C8] bg-white hover:border-[#B8860B]/60 hover:bg-[#F7F5F0]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-sm transition-colors ${
                      isSelected ? 'bg-[#8C6608] text-white' : 'bg-[#EFECE6] text-[#1A2332] group-hover:text-[#8C6608]'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>

                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1A2332]">
                      {layer.title}
                    </h4>
                    <p className="font-mono text-[0.75rem] text-[#5A6678]">
                      {layer.tech}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[0.75rem] text-[#5A6678] uppercase tracking-wider hidden sm:inline">
                    {layer.id.toUpperCase()}
                  </span>
                  {isSelected && <Check className="h-4 w-4 text-[#8C6608]" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Layer Cross-Section Inspection Box */}
      <div className="mt-4 rounded-sm border border-[#D8D3C8] bg-white p-3.5">
        <div className="flex items-center justify-between border-b border-[#E2DDD3] pb-2 mb-2">
          <span className="font-mono text-[0.75rem] font-bold uppercase tracking-wider text-[#8C6608]">
            Layer Inspection: {stackLayers[selectedLayer].title}
          </span>
          <span className="font-mono text-[0.75rem] text-[#5A6678]">
            {stackLayers[selectedLayer].tech}
          </span>
        </div>
        <p className="text-xs leading-5 text-[#4A5568]">
          {stackLayers[selectedLayer].details}
        </p>
      </div>
    </div>
  );
}

