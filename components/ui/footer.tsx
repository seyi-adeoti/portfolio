import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { label: 'Email', href: 'mailto:oluwaseyiadeoti825@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/seyi-adeoti', icon: Github },
  // { label: 'LinkedIn', href: 'https://linkedin.com/in/seyi-adeoti', icon: Linkedin },
];

const footerNav = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent font-bold text-sm">
                AO
              </div>
              <span className="text-sm font-semibold text-white">Adeoti Seyi</span>
            </div>
            <p className="max-w-xs text-sm leading-7 text-slate-500">
              Full stack engineer building enterprise fintech and logistics platforms with modern architecture.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {footerNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-slate-400 transition hover:text-white"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Adeoti Oluwaseyi. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
