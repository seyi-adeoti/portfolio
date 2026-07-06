import type { Metadata } from 'next';
import './globals.css';

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-white antialiased">
        {children}
      </body>
    </html>
  );
}
