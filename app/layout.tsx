import type { Metadata } from 'next';
import { Newsreader, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Seyi Adeoti — Senior Full-Stack Engineer | Fintech & Distributed Systems',
  description:
    'Senior Full-Stack Engineer specializing in React, Next.js, Angular, TypeScript, Java, Spring Boot, Kafka, and distributed financial systems.',
  metadataBase: new URL('https://seyi-adeoti.netlify.app'),
  openGraph: {
    title: 'Seyi Adeoti — Senior Full-Stack Engineer | Fintech & Distributed Systems',
    description:
      'Senior Full-Stack Engineer specializing in React, Next.js, Angular, TypeScript, Java, Spring Boot, Kafka, and distributed financial systems.',
    type: 'website',
    url: 'https://seyi-adeoti.netlify.app',
    siteName: 'Seyi Adeoti Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seyi Adeoti — Senior Full-Stack Engineer | Fintech & Distributed Systems',
    description:
      'Senior Full-Stack Engineer specializing in React, Next.js, Angular, TypeScript, Java, Spring Boot, Kafka, and distributed financial systems.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jetbrainsMono.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#F7F5F0] text-[#1A2332] font-sans antialiased selection:bg-[#B8860B]/20 selection:text-[#1A2332]">
        {children}
      </body>
    </html>
  );
}


