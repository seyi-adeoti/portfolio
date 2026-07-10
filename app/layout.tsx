import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Adeoti Oluwaseyi Olajuwon — Full stack Engineer',
  description:
    'Full stack Engineer building enterprise fintech and logistics platforms with React, TypeScript, Next.js, Java, Spring Boot, AWS, and microservices.',
  metadataBase: new URL('https://adeoti.dev'),
  openGraph: {
    title: 'Adeoti Oluwaseyi Olajuwon — Full stack Engineer',
    description:
      'Full stack Engineer building enterprise fintech and logistics platforms with React, TypeScript, Next.js, Java, Spring Boot, AWS, and microservices.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adeoti Oluwaseyi Olajuwon — Full stack Engineer',
    description:
      'Full stack Engineer building enterprise fintech and logistics platforms with React, TypeScript, Next.js, Java, Spring Boot, AWS, and microservices.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
