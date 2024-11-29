import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-background text-foreground mt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            &copy; 2024 CustomDomainReady. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <Link
                href="https://github.com/marcolivierbouch/custom-domain-ready"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

