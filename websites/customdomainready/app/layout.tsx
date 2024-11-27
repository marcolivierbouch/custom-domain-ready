import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'CustomDomainReady - Add custom domain support to your SaaS in minutes',
  description:
    'Ship custom domain support in less than a day. Totally free — Host your custom domain solution in your Vercel account.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
