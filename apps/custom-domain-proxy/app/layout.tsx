import './global.css';

export const metadata = {
  title: 'Custom Domain Ready',
  description:
    'Ship custom domain support for your SaaS in less than a day for free',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
