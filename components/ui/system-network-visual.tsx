'use client';

import { useState, useEffect } from 'react';
import { Layout, Shield, Server, Cpu, Database, Activity } from 'lucide-react';

const nodes = [
  { id: 'fe', label: 'Frontend UI', tech: 'React / Next.js', icon: Layout },
  { id: 'gw', label: 'API Gateway', tech: 'OAuth2 / Rate Limit', icon: Shield },
  { id: 'srv', label: 'Microservices', tech: 'Java 17 / Spring Boot', icon: Server },
  { id: 'kafka', label: 'Event Stream', tech: 'Apache Kafka', icon: Cpu },
  { id: 'db', label: 'Data & Cache', tech: 'PostgreSQL / Redis', icon: Database },
];

export function SystemNetworkVisual() {
  const [activeNode, setActiveNode] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl border border-border bg-gradient-to-b from-white to-surface p-6 shadow-card transition-all hover:shadow-card-hover">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-light text-orange-primary">
            <Activity className="h-4 w-4 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">System Architecture Flow</h3>
            <p className="text-[0.7rem] text-slate-500">Live distributed telemetry simulator</p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[0.68rem] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          System Healthy
        </div>
      </div>

      {/* Interactive Architecture Flow Diagram */}
      <div className="relative min-h-[200px] w-full py-2">
        {/* SVG Connection Lines */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none stroke-slate-200" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Connectors */}
          <path d="M 10% 50% L 30% 50% L 50% 50% L 70% 50% L 90% 50%" strokeWidth="2" strokeDasharray="4 4" fill="none" />

          {/* Active Pulsing Flow Lines */}
          {isClient && (
            <path
              d="M 10% 50% L 90% 50%"
              stroke="url(#orangeGradient)"
              strokeWidth="3"
              fill="none"
              className="animate-data-flow"
              strokeDasharray="8 8"
            />
          )}
        </svg>

        {/* Nodes Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeNode === index;
            return (
              <div
                key={node.id}
                onClick={() => setActiveNode(index)}
                className={`group cursor-pointer rounded-xl border p-3.5 transition-all duration-300 ${
                  isActive
                    ? 'border-orange-primary bg-orange-light shadow-orange-soft transform -translate-y-1'
                    : 'border-border bg-white hover:border-orange-border hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                      isActive ? 'bg-orange-primary text-white' : 'bg-slate-100 text-slate-600 group-hover:text-orange-primary'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[0.65rem] font-mono text-slate-400">0{index + 1}</span>
                </div>

                <h4 className={`text-xs font-bold transition-colors ${isActive ? 'text-charcoal' : 'text-slate-800'}`}>
                  {node.label}
                </h4>
                <p className="mt-0.5 text-[0.65rem] font-medium text-slate-500 line-clamp-1">{node.tech}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Node Detail Card */}
      <div className="mt-4 rounded-xl border border-orange-border bg-orange-light/60 p-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-orange-primary animate-pulse" />
          <span className="text-xs font-semibold text-charcoal">
            Active Layer: <strong className="text-orange-primary">{nodes[activeNode].label}</strong> ({nodes[activeNode].tech})
          </span>
        </div>
        <span className="text-[0.68rem] font-mono text-slate-500 hidden sm:inline">Event-driven telemetry</span>
      </div>
    </div>
  );
}
