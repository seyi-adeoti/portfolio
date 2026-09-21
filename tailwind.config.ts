import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#FAFAFA',
        'surface-card': '#FFFFFF',
        'surface-hover': '#F8F9FA',
        border: '#EAEAEA',
        'border-strong': '#E2E8F0',
        charcoal: '#111111',
        'charcoal-muted': '#444444',
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        orange: {
          primary: '#FF6B00',
          hover: '#E56000',
          light: '#FFF1E6',
          border: '#FFD6B8',
          glow: 'rgba(255, 107, 0, 0.15)',
        },
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)',
        card: '0 4px 20px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(255, 107, 0, 0.08)',
        orange: '0 4px 20px rgba(255, 107, 0, 0.25)',
        'orange-soft': '0 8px 30px rgba(255, 107, 0, 0.12)',
        nav: '0 4px 20px rgba(0, 0, 0, 0.03)',
      },
      fontFamily: {
        sans: ['var(--font-geom)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'data-flow': 'dataFlow 3s linear infinite',
      },
      keyframes: {
        dataFlow: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

