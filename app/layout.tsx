import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geom = localFont({
  src: '../public/fonts/geom-latin-wght-normal.woff2',
  display: 'swap',
  variable: '--font-geom',
  weight: '300 900',
});

export const metadata: Metadata = {
  title: 'Seyi Adeoti — Senior Full-Stack Engineer | React, Next.js, TypeScript & Java',
  description:
    'Senior Full-Stack Engineer specializing in React, Next.js, TypeScript, Java, Spring Boot, Kafka and scalable fintech systems.',
  metadataBase: new URL('https://seyi-adeoti.netlify.app'),
  openGraph: {
    title: 'Seyi Adeoti — Senior Full-Stack Engineer | React, Next.js, TypeScript & Java',
    description:
      'Senior Full-Stack Engineer specializing in React, Next.js, TypeScript, Java, Spring Boot, Kafka and scalable fintech systems.',
    type: 'website',
    url: 'https://seyi-adeoti.netlify.app',
    siteName: 'Seyi Adeoti Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seyi Adeoti — Senior Full-Stack Engineer',
    description:
      'Senior Full-Stack Engineer specializing in React, Next.js, TypeScript, Java, Spring Boot, Kafka and scalable fintech systems.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geom.variable} scroll-smooth`}>
      <body className="bg-white text-charcoal font-sans antialiased selection:bg-orange-light selection:text-charcoal">
        {children}
      </body>
    </html>
  );
}

