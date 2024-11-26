"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2 } from 'lucide-react'

interface DomainConfig {
  id: string
  sourceDomain: string
  slug: string
  destinationPath: string
}

export default function CustomDomainConfig() {
  const [configs, setConfigs] = useState<DomainConfig[]>([])
  const [newConfig, setNewConfig] = useState<Omit<DomainConfig, "id">>({
    sourceDomain: "",
    slug: "",
    destinationPath: "",
  })

  const addConfig = () => {
    if (newConfig.sourceDomain && newConfig.slug && newConfig.destinationPath) {
      setConfigs([...configs, { ...newConfig, id: Date.now().toString() }])
      setNewConfig({ sourceDomain: "", slug: "", destinationPath: "" })
    }
  }

  const removeConfig = (id: string) => {
    setConfigs(configs.filter((config) => config.id !== id))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Custom Domain Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="sourceDomain">Source Domain</Label>
              <Input
                id="sourceDomain"
                value={newConfig.sourceDomain}
                onChange={(e) =>
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
                onChange={(e) =>
                  setNewConfig({ ...newConfig, slug: e.target.value })
                }
                placeholder="blog"
              />
            </div>
            <div>
              <Label htmlFor="destinationPath">Destination Path</Label>
              <Input
                id="destinationPath"
                value={newConfig.destinationPath}
                onChange={(e) =>
                  setNewConfig({ ...newConfig, destinationPath: e.target.value })
                }
                placeholder="/posts"
              />
            </div>
          </div>
          <Button onClick={addConfig}>Add Configuration</Button>
        </form>

        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold">Current Configurations</h3>
          {configs.map((config) => (
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
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeConfig(config.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

