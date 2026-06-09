import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#111111',
        surface2: '#16161b',
        border: '#2a2a37',
        muted: '#9ca3af',
        accent: '#5eead4',
        accentSoft: '#1f5f6b'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(0, 0, 0, 0.28)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
