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
        surface: '#000000',
        'surface-raised': '#0a0a0a',
        border: '#2a2a37',
        muted: '#94a3b8',
        accent: '#5eead4',
        'accent-soft': '#1f5f6b',
      },
      boxShadow: {
        glow: '0 0 30px rgba(94, 234, 212, 0.1)',
        'glow-lg': '0 0 60px rgba(94, 234, 212, 0.15)',
        'glow-accent': '0 0 40px rgba(94, 234, 212, 0.2)',
        glass: '0 20px 80px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        sans: ['var(--font-geom)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
        'float-delayed': 'float-delayed 25s ease-in-out infinite',
        'float-slow': 'float-slow 30s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-25px, 25px) scale(0.95)' },
          '66%': { transform: 'translate(35px, -15px) scale(1.05)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -20px) scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
