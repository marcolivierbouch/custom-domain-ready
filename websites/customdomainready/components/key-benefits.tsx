import { Check } from 'lucide-react';

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

export function KeyBenefits() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Use CustomDomainReady?
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
