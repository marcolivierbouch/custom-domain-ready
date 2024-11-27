import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from '@/components/ParticleBackground';
import { UserFlow } from '@/components/UserFlow';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <ParticleBackground />
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br  via-black to-black" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_0%)]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-white text-xl font-semibold">
          CustomDomainReady
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {/* <Link href="/documentation" className="text-gray-300 hover:text-white transition-colors">
            Documentation
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/company" className="text-gray-300 hover:text-white transition-colors">
            Company
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
            Blog
          </Link> */}
          <Button variant="outline" className="text-white" asChild>
            <Link href="https://github.com/marcolivierbouch/custom-domain-ready">
              Get CustomDomainReady
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-20 container mx-auto px-4 pt-20 pb-32 text-center">
        <Button variant="outline" size="sm" className="mb-8 bg-white" asChild>
          <Link
            href="https://github.com/marcolivierbouch/custom-domain-ready"
            className="flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            Star us on Github!
          </Link>
        </Button>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
          Ship custom domain support
          <span className="block text-gray-400 mt-2">in less than a day</span>
        </h1>

        <p className="text-gray-400 text-xl mb-12">
          Totally free — Host your custom domain solution in your Vercel account
        </p>

        <Button size="lg" className="text-lg px-8 border bg-white" asChild>
          <Link href="https://github.com/marcolivierbouch/custom-domain-ready">
            Add custom domains to your SaaS
          </Link>
        </Button>
      </main>

      {/* User Flow Section */}
      <UserFlow />

      {/* Footer */}
      <Footer />
    </div>
  );
}
