import { Inter } from 'next/font/google';

import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CustomDomainReady Example',
  description: 'Example of using CustomDomainReady in a Next.js website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
