import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Globe,
  Settings,
  Server,
  User,
  PanelTop,
} from 'lucide-react';

const steps = [
  {
    icon: Settings,
    title: 'Configure Custom Domain',
    description:
      'User sets up their custom domain using the Configuration API webapp.',
  },
  {
    icon: Server,
    title: 'Update Vercel Settings',
    description:
      'The system updates Vercel domains and Edge Config with the new domain information.',
  },
  {
    icon: Globe,
    title: 'User Visits New Domain',
    description:
      'When a user enters the new domain in their browser, the request is sent to CustomDomainReady.',
  },
  {
    icon: User,
    title: 'Custom Domain Proxy',
    description:
      'Our proxy service intercepts the request and determines the correct destination.',
  },
  {
    icon: PanelTop,
    title: 'User Desired destination',
    description:
      'The request is rewritten and redirected to the appropriate website on Vercel.',
  },
];

export function UserFlow() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          How It Works
        </h2>

        <div className="mb-16 overflow-x-auto">
          <div className="inline-flex items-center min-w-[800px] hidden md:flex">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center mx-4">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <step.icon size={40} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground text-center">
                    {step.title}
                  </h3>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="text-muted-foreground ml-10 mx-4" size={32} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground mr-4">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

