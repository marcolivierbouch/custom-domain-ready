import { Providers } from './providers';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Domain Ready',
  description:
    'Ship custom domain support for your SaaS in less than a day for free',
  openGraph: {
    title: 'Custom Domain Ready',
    description:
      'Ship custom domain support for your SaaS in less than a day for free',
    url: 'https://customdomainready.com',
    siteName: 'Custom Domain Ready',
    //images: [
    //  {
    //    url: 'https://yourdomain.com/og-image.png',
    //    width: 800,
    //    height: 600,
    //    alt: 'Custom Domain Ready',
    //  },
    //],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Domain Ready',
    description:
      'Ship custom domain support for your SaaS in less than a day for free',
    //images: ['https://yourdomain.com/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
