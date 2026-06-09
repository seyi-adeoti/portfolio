'use client';

import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { LinkButton } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Section } from '../components/ui/section';
import { SectionHeading } from '../components/ui/heading';
import { Tag } from '../components/ui/tag';
import {
  architectureHighlights,
  caseStudies,
  contactLinks,
  githubProjects,
  heroBadges,
  leadershipItems,
  lookingFor,
  metrics,
  navItems,
  processSteps,
  proofPoints,
  testimonials,
  whyHireMe,
} from '../lib/data';

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[380px] bg-gradient-to-b from-slate-900 to-transparent opacity-90" />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8">
        <header className="sticky top-0 z-30 mb-12 rounded-3xl border border-white/10 bg-surface/80 backdrop-blur-xl px-6 py-4 shadow-glow sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-accent/30 bg-white/5 px-3 py-1 font-medium text-accent">Senior Frontend Engineer</span>
              <span>Open to international relocation & visa sponsorship</span>
            </div>
            <nav className="hidden items-center gap-4 text-sm text-slate-300 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <Section id="hero" className="grid gap-10 pb-20 pt-4 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.7 }}>
            <p className="text-sm uppercase tracking-[0.32em] text-accent/80">Senior Frontend Engineer</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Building scalable fintech and enterprise platforms used by 100,000+ users.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              I deliver secure, high-performance experiences across banking, logistics, and platform engineering. My work spans React, TypeScript, Next.js, Java, Spring Boot, AWS,
              Docker, Kubernetes, and enterprise-grade systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroBadges.map((badge) => (
                <Tag key={badge}>{badge}</Tag>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <LinkButton href="#case-studies" className="btn-primary shadow-glow">
                View Engineering Case Studies
              </LinkButton>
              <LinkButton href="/resume.pdf" target="_blank">
                Download Resume
              </LinkButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Featured impact</p>
                <p className="mt-2 text-3xl font-semibold text-white">Enterprise scale, security, and delivery</p>
              </div>
              <div className="rounded-2xl bg-slate-900/70 px-4 py-2 text-sm text-slate-200">Global teams</div>
            </div>
            <div className="grid gap-4 text-sm leading-7 text-slate-300">
              <p>
                I help international teams define architecture, launch secure fintech flows, and build reliable logistics systems while maintaining exceptional engineering quality.
              </p>
              <p>
                My approach balances product speed with long-term maintainability, operational maturity, and measurable business value.
              </p>
            </div>
          </motion.div>
        </Section>

        <Section id="metrics" className="space-y-8">
          <SectionHeading>Impact metrics</SectionHeading>
          <p className="section-subtitle">
            These are the measurable outcomes from enterprise and fintech work that signal scale, resilience, and engineering maturity.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {metrics.map((metric) => (
              <Card key={metric.label} className="p-6">
                <p className="text-4xl font-semibold text-white">{metric.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="proof-points" className="space-y-10">
          <div className="space-y-3">
            <SectionHeading>Engineering proof points</SectionHeading>
            <p className="section-subtitle">
              Evidence of the technical practices and platform maturity that support enterprise delivery.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {proofPoints.map((point) => (
              <motion.div key={point.title} whileHover={{ y: -4 }} className="transition">
                <Card className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-accent/10 text-accent">
                    <point.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{point.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="case-studies" className="space-y-10">
          <div className="space-y-3">
            <div className="rounded-full bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.26em] text-accent">Engineering case studies</div>
            <SectionHeading>Detailed delivery stories for enterprise systems</SectionHeading>
            <p className="section-subtitle">
              Each case study explains the problem, architecture, tradeoffs, and the business impact behind the work.
            </p>
          </div>
          <div className="grid gap-6 xl:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <Card key={caseStudy.title} className="space-y-6 p-6">
                <div className="flex items-center gap-3 text-accent">
                  <caseStudy.icon className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em]">Case study</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{caseStudy.title}</h3>
                  <p className="text-sm text-slate-400">{caseStudy.subtitle}</p>
                </div>
                <div className="space-y-4 text-sm text-slate-300">
                  <div>
                    <p className="font-semibold text-white">Problem</p>
                    <p className="mt-2">{caseStudy.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Architecture</p>
                    <p className="mt-2">{caseStudy.architecture}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Impact</p>
                    <p className="mt-2">{caseStudy.impact}</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">
                  <p className="font-semibold text-white">Engineering decisions</p>
                  <p className="mt-2">{caseStudy.decisions}</p>
                  <p className="mt-4 text-slate-400">
                    Lessons learned: {caseStudy.lessons}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech) => (
                    <Tag key={tech} className="bg-white/5 text-slate-300">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="architecture" className="space-y-10">
          <div className="space-y-3">
            <SectionHeading>Architecture showcase</SectionHeading>
            <p className="section-subtitle">
              A clear view of the patterns, infrastructure, and systems that power large enterprise products.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {architectureHighlights.map((item) => (
              <Card key={item.title} className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{item.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="process" className="space-y-10">
          <div className="space-y-3">
            <SectionHeading>How I work</SectionHeading>
            <p className="section-subtitle">
              A practical delivery rhythm for enterprise engineering, from discovery through operations.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <motion.div key={step.title} whileHover={{ y: -4 }} className="transition">
                <Card className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-accent">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="leadership" className="space-y-10">
          <div className="space-y-3">
            <SectionHeading>Technical leadership</SectionHeading>
            <p className="section-subtitle">
              I operate beyond code: growing teams, reviewing architecture, and aligning engineering outcomes with business needs.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {leadershipItems.map((item) => (
              <Card key={item.title} className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="github" className="space-y-10">
          <div className="space-y-3">
            <SectionHeading>GitHub showcase</SectionHeading>
            <p className="section-subtitle">
              Flagship repositories that demonstrate enterprise fintech architecture, shared component systems, and service-oriented engineering practices.
            </p>
          </div>
          <div className="grid gap-5 xl:grid-cols-3">
            {githubProjects.map((project) => (
              <Card key={project.title} className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{project.description}</p>
                  </div>
                  <Github className="h-6 w-6 text-accent" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="testimonials" className="space-y-10">
          <div className="space-y-3">
            <SectionHeading>Testimonials</SectionHeading>
            <p className="section-subtitle">
              Trusted feedback from senior stakeholders and product partners on delivery, quality, and leadership.
            </p>
          </div>
          <div className="grid gap-5 xl:grid-cols-2">
            {testimonials.map((item) => (
              <Card key={item.author} className="space-y-4 p-8">
                <p className="text-lg leading-8 text-slate-100">“{item.quote}”</p>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.author}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="opportunities" className="space-y-8">
          <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-slate-950/80 to-slate-900/80 p-8 shadow-glow">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-accent">Available for international opportunities</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">Open to relocation, visa sponsorship, remote, and hybrid roles.</h3>
              </div>
              <LinkButton href="#contact">Let’s talk</LinkButton>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {lookingFor.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="why-hire" className="space-y-10">
          <div className="space-y-3">
            <SectionHeading>Why hire me?</SectionHeading>
            <p className="section-subtitle">
              This is the leadership, delivery, and relocation-ready capability that makes a senior engineering hire worth the commitment.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {whyHireMe.map((item) => (
              <Card key={item.title} className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" className="space-y-8">
          <div className="space-y-3">
            <SectionHeading>Contact</SectionHeading>
            <p className="section-subtitle">
              Interested in building scalable software together? Connect over email or LinkedIn and let’s shape the next enterprise platform.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactLinks.map((item) => (
              <Card key={item.label} className="flex flex-col justify-between p-6">
                <div className="flex items-center gap-3 text-accent">
                  {item.label === 'Email' ? <Mail className="h-5 w-5" /> : item.label === 'LinkedIn' ? <Linkedin className="h-5 w-5" /> : <Github className="h-5 w-5" />}
                  <span className="font-semibold text-white">{item.label}</span>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-slate-300">{item.value}</p>
                  <LinkButton href={item.href} target="_blank" className="w-fit text-sm">
                    Reach out <ArrowUpRight className="ml-2 h-4 w-4" />
                  </LinkButton>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
