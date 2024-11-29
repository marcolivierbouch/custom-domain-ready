'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Github, Moon, Sun } from 'lucide-react'
import DynamicBackground from '@/components/dynamic-background'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/Footer'
import { UserFlow } from '@/components/UserFlow'
import { KeyBenefits } from '@/components/key-benefits'
import { Testimonials } from '@/components/testimonials'
import Link from 'next/link'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <DynamicBackground />
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md' : ''
        }`}>
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Custom Domain Ready</h2>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Get Started</Button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 pt-60 pb-32 text-center">
        <div className="flex justify-center mb-8">
          <Link href="https://github.com/marcolivierbouch/custom-domain-ready" passHref>
            <Button
              variant="outline"
              className="animate-border rounded-md bg-white bg-gradient-to-r from-primary to-primary bg-[length:400%_400%] p-0.5 transition-all"
            >
              <span className="flex items-center space-x-2 bg-white dark:bg-gray-900 rounded-md px-4 py-2">
                <Github className="w-5 h-5" />
                <span>Star us on Github!</span>
              </span>
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-gray-800 dark:text-gray-100">
          Ship custom domain support<br /><span className="text-gray-600 dark:text-gray-400">in less than a day</span>
        </h1>
        <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300">
          Totally free — Host your custom domain solution in your Vercel account
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="https://github.com/marcolivierbouch/custom-domain-ready" passHref>
            <Button variant={"outline"} size="lg"> Add custom domains to your SaaS </Button>
          </Link>
        </div>
      </div>
      <KeyBenefits/>
      <UserFlow />
      <Testimonials/>
      <Footer />
    </main>
  )
}

