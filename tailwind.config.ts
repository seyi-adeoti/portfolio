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
        paper: {
          DEFAULT: '#F7F5F0',
          card: '#FAF8F5',
          subtle: '#EFECE6',
          border: '#D8D3C8',
          line: '#E2DDD3',
        },
        ink: {
          DEFAULT: '#1A2332',
          muted: '#4A5568',
          subtle: '#5A6678',
        },
        brass: {
          DEFAULT: '#B8860B',
          hover: '#996F08',
          light: '#F4EFE0',
          border: '#D4AF37',
          muted: '#8C6608',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Garamond', 'serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Courier New', 'monospace'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        hairline: '0 0 0 1px #D8D3C8',
        ledger: '0 2px 8px rgba(26, 35, 50, 0.04)',
        stamp: '0 2px 10px rgba(184, 134, 11, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;


