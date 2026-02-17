import Link from 'next/link';

const benefits = [
  {
    title: 'Totally Free',
    description:
      'Host your custom domain solution in your Vercel account at no cost.',
  },
  {
    title: 'Boost Revenue',
    description:
      'Add custom domains to your SaaS, allowing you to charge customers more.',
  },
  {
    title: 'Easy Integration',
    description: 'Ship custom domain support in less than a day.',
  },
];

const features = [
  {
    title: 'Infrastructure',
    items: [
      'Built-in CDN',
      'Built-in DDoS protection',
      'Automatic failover and redundancy',
      '99.999% uptime guarantee',
    ],
  },
  {
    title: 'Security',
    items: [
      'Automatic SSL/TLS certificates',
      'WAF (Web Application Firewall)',
    ],
  },
  {
    title: 'Developer Tools',
    items: ['Fully automated DNS configuration'],
  },
];

const flowSteps = [
  {
    icon: '⚙',
    title: 'Configure Custom Domain',
    description:
      'User sets up their custom domain using the Configuration API webapp.',
  },
  {
    icon: '🖥',
    title: 'Update Vercel Settings',
    description:
      'The system updates Vercel domains and Edge Config with the new domain information.',
  },
  {
    icon: '🌐',
    title: 'User Visits New Domain',
    description:
      'When a user enters the new domain in their browser, the request is sent to CustomDomainReady.',
  },
  {
    icon: '👤',
    title: 'Custom Domain Proxy',
    description:
      'Our proxy service intercepts the request and determines the correct destination.',
  },
  {
    icon: '📋',
    title: 'User Desired destination',
    description:
      'The request is rewritten and redirected to the appropriate website on Vercel.',
  },
];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 0z" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Custom Domain Ready</h2>
          <Link
            href="https://github.com/marcolivierbouch/custom-domain-ready"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white hover:bg-gray-50"
          >
            Get Started
          </Link>
        </div>
      </header>

      <section className="pt-40 pb-20 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Link
              href="https://github.com/marcolivierbouch/custom-domain-ready"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800"
            >
              <StarIcon />
              Star us on Github!
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Ship custom domain support
            <br />
            <span className="text-gray-600">in less than a day</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Totally free — Host your custom domain solution in your Vercel
            account
          </p>
          <div className="mt-8">
            <Link
              href="https://github.com/marcolivierbouch/custom-domain-ready"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3 text-base font-medium rounded-md border border-gray-300 bg-white hover:bg-gray-50"
            >
              Add custom domains to your SaaS
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Use CustomDomainReady?
          </h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex gap-4">
                <span className="text-gray-900 font-bold">✓</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to scale
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border p-6 shadow-sm"
              >
                <h3 className="font-semibold text-lg mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex gap-2 text-gray-600">
                      <span className="text-gray-900">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {flowSteps.map((step) => (
              <div
                key={step.title}
                className="bg-white rounded-xl border p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl mb-4">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="max-w-md mx-auto bg-white rounded-xl border p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-sm">
                MO
              </div>
              <div>
                <h3 className="font-semibold">Marc-Olivier Bouchard</h3>
                <p className="text-sm text-gray-600">
                  Founder, OpenAssistantGPT
                </p>
              </div>
            </div>
            <p className="text-gray-600">
              CustomDomainReady has been a game-changer for our SaaS
              OpenAssistantGPT. We implemented custom domains in just hours, and
              our customers love it!
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-20 py-12 bg-white border-t">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
            &copy; 2024 CustomDomainReady. All rights reserved.
          </p>
          <Link
            href="https://github.com/marcolivierbouch/custom-domain-ready"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </Link>
        </div>
      </footer>
    </main>
  );
}
