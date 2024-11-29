import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    items: ['Automatic SSL/TLS certificates', 'WAF (Web Application Firewall)'],
  },
  {
    title: 'Developer Tools',
    items: ['Fully automated DNS configuration'],
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 bg-muted dark:bg-muted">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground dark:text-foreground">
          Everything you need to scale
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background dark:bg-background">
              <CardHeader>
                <CardTitle className="text-foreground dark:text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary dark:text-primary mt-0.5" />
                    <span className="text-muted-foreground dark:text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
