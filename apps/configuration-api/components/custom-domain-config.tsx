'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, RefreshCw } from 'lucide-react';
import { getDomainResponse } from '@customdomainready/sdk';

interface DomainConfig {
  id: string;
  sourceDomain: string;
  slug: string;
  destinationPath: string;
}

export default function CustomDomainConfig() {
  const [configs, setConfigs] = useState<DomainConfig[]>([]);
  const [newConfig, setNewConfig] = useState<Omit<DomainConfig, 'id'>>({
    sourceDomain: '',
    slug: '',
    destinationPath: '',
  });
  const fetchConfigs = async () => {
    try {
      const response = await fetch('/api/assign');
      const data = await response.json();
      setConfigs(
        data.response.map((domain: any) => ({
          id: domain.id,
          sourceDomain: domain.sourceDomain,
          slug: domain.slug,
          destinationPath: domain.destinationPath,
        })),
      );
    } catch (error) {
      console.error('Failed to fetch domain configurations:', error);
    }
  };

  useEffect(() => {
    fetchConfigs();
  }, []);

  const handleAddDomainAndAlias = async () => {
    try {
      const domainExists = configs.some(
        config => config.sourceDomain === newConfig.sourceDomain,
      );

      if (!domainExists) {
        const domainResponse = await fetch('/api/domain', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ domain: newConfig.sourceDomain }),
        });

        if (!domainResponse.ok) {
          throw new Error('Failed to add domain');
        }

        const response = await domainResponse.json();
        alert(JSON.stringify(response));
      }

      const aliasResponse = await fetch('/api/assign', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          domain: newConfig.sourceDomain,
          slug: newConfig.slug,
          destination: newConfig.destinationPath,
        }),
      });

      if (!aliasResponse.ok) {
        throw new Error('Failed to create alias');
      }

      const newAlias = await aliasResponse.json();
      setConfigs(prevConfigs => [...prevConfigs, newAlias]);

      setNewConfig({
        sourceDomain: '',
        slug: '',
        destinationPath: '',
      });
    } catch (error) {
      console.error('Error adding domain and alias:', error);
    }
  };

  const removeConfig = async (
    sourceDomain: string,
    slug: string,
    destination: string,
  ) => {
    try {
      const response = await fetch('/api/assign', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          domain: sourceDomain,
          slug: slug,
          destination: destination,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to remove config');
      }

      fetchConfigs();
    } catch (error) {
      console.error('Error removing config:', error);
    }
  };

  const refreshDomainStatus = async (sourceDomain: string) => {
    try {
      const response = await fetch(
        `/api/domain/${sourceDomain.replace(/^https?:\/\//, '')}/verify`,
      );
      const data = await response.json();
      alert(`Domain Status: ${data.status}`);
    } catch (error) {
      console.error('Failed to verify domain status:', error);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Custom Domain Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={e => e.preventDefault()} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="sourceDomain">Source Domain</Label>
              <Input
                id="sourceDomain"
                value={newConfig.sourceDomain}
                onChange={e =>
                  setNewConfig({ ...newConfig, sourceDomain: e.target.value })
                }
                placeholder="example.com"
              />
            </div>
            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={newConfig.slug}
                onChange={e =>
                  setNewConfig({ ...newConfig, slug: e.target.value })
                }
                placeholder="/blog"
              />
            </div>
            <div>
              <Label htmlFor="destinationPath">Destination Path</Label>
              <Input
                id="destinationPath"
                value={newConfig.destinationPath}
                onChange={e =>
                  setNewConfig({
                    ...newConfig,
                    destinationPath: e.target.value,
                  })
                }
                placeholder="https://www.mywebsite.com/posts"
              />
            </div>
          </div>
          <Button onClick={handleAddDomainAndAlias}>Add Configuration</Button>
        </form>

        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold">Current Configurations</h3>
          {configs.map(config => (
            <Card key={config.id}>
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <p>
                    <strong>Source:</strong> {config.sourceDomain}/{config.slug}
                  </p>
                  <p>
                    <strong>Destination:</strong> {config.destinationPath}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() =>
                      removeConfig(
                        config.sourceDomain,
                        config.slug,
                        config.destinationPath,
                      )
                    }
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => refreshDomainStatus(config.sourceDomain)}
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
