'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'

// ─── Icons (inline SVG to avoid dependency issues) ───────────────────────────

function SunIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
    </svg>
  )
}

function MoonIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  )
}

function ArrowRightIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  )
}

function ChevronDownIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6"/>
    </svg>
  )
}

function LayersIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
    </svg>
  )
}

function BlocksIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="3" y="3" rx="1"/>
    </svg>
  )
}

function DatabaseIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>
    </svg>
  )
}

function ZapIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
    </svg>
  )
}

function ShieldIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    </svg>
  )
}

function TrendingUpIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
    </svg>
  )
}

function CodeIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  )
}

function PaletteIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  )
}

function FileIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>
    </svg>
  )
}

function SparklesIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
    </svg>
  )
}

function MenuIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  )
}

function XIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  )
}

// ─── Theme Toggle ────────────────────────────────────────────────────────────

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return saved === 'dark' || (!saved && prefersDark)
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const toggle = () => {
    setDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
      {dark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

// ─── Animated Counter ────────────────────────────────────────────────────────

function AnimatedCounter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()
          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}</span>
}

// ─── Section Observer Hook ──────────────────────────────────────────────────

function useSectionObserver(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

// ─── Fade In Hook ────────────────────────────────────────────────────────────

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useFadeIn()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ─── Navigation ──────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'part-a', label: 'Infrastructure' },
  { id: 'part-b', label: 'Components' },
  { id: 'part-c', label: 'Data Engine' },
  { id: 'skill-router', label: 'Skill Router' },
  { id: 'migration', label: 'Migration' },
  { id: 'quality', label: 'Quality' },
]

function Navigation() {
  const activeSection = useSectionObserver(NAV_ITEMS.map((n) => n.id))
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="inline-flex items-center justify-center size-7 rounded-lg bg-emerald-600 text-white text-xs font-black">
            v8
          </span>
          <span className="hidden sm:inline">UI/UX PRO MAX</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                activeSection === item.id
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t bg-background p-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3 py-2 text-sm rounded-md text-left transition-colors ${
                activeSection === item.id
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-background" />
        <div className="absolute top-0 left-1/4 size-96 rounded-full bg-emerald-200/40 dark:bg-emerald-800/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 size-80 rounded-full bg-teal-200/40 dark:bg-teal-800/20 blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-cyan-200/20 dark:bg-cyan-800/10 blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-32 flex flex-col items-center text-center">
        <FadeIn>
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-emerald-300 dark:border-emerald-700 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
            v8.0 Release — Tripartite Architecture
          </Badge>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
            UI/UX PRO MAX{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              v8.0
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
            The definitive design system architecture — three parts, one protocol, zero compromises.
            Infrastructure. Components. Data. Unified.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Architecture
              <ArrowRightIcon className="size-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('quality')?.scrollIntoView({ behavior: 'smooth' })}>
              Quality Scores
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center size-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                <LayersIcon className="size-4" />
              </span>
              <span><strong className="text-foreground">Part A</strong> Infrastructure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center size-8 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300">
                <BlocksIcon className="size-4" />
              </span>
              <span><strong className="text-foreground">Part B</strong> Components</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center size-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300">
                <DatabaseIcon className="size-4" />
              </span>
              <span><strong className="text-foreground">Part C</strong> Data Engine</span>
            </div>
          </div>
        </FadeIn>

        {/* Quality score preview */}
        <FadeIn delay={500}>
          <div className="mt-16 inline-flex items-center gap-3 rounded-full border bg-background/80 backdrop-blur px-6 py-3 shadow-lg">
            <span className="text-sm text-muted-foreground">Quality Score</span>
            <span className="text-sm line-through text-red-500/70">68</span>
            <ArrowRightIcon className="size-3 text-muted-foreground" />
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">95</span>
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 border-0">+39.7%</Badge>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Architecture Overview ───────────────────────────────────────────────────

function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300">Architecture</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tripartite Design System</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Three specialized layers, connected by the Skill Router&apos;s silent protocol. Each part handles a distinct concern while sharing a unified data backbone.
            </p>
          </div>
        </FadeIn>

        {/* Three-part architecture with connectors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 relative">
          {/* Part A */}
          <FadeIn delay={100}>
            <Card className="relative h-full border-emerald-200 dark:border-emerald-800/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center size-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
                    <LayersIcon />
                  </span>
                  <div>
                    <CardTitle className="text-lg">Part A</CardTitle>
                    <CardDescription>Infrastructure</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Design tokens, CSS primitives, theme system, and data table references. The foundation everything builds upon.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary" className="text-xs">M2 Tokens</Badge>
                  <Badge variant="secondary" className="text-xs">M3 Primitives</Badge>
                  <Badge variant="secondary" className="text-xs">M7 Tables</Badge>
                  <Badge variant="secondary" className="text-xs">M9 Theme</Badge>
                  <Badge variant="secondary" className="text-xs">M11 Refs</Badge>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Part B */}
          <FadeIn delay={200}>
            <Card className="relative h-full border-teal-200 dark:border-teal-800/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center size-10 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400">
                    <BlocksIcon />
                  </span>
                  <div>
                    <CardTitle className="text-lg">Part B</CardTitle>
                    <CardDescription>Components</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  25+ React 19 components, 34 anti-patterns, motion presets, validation checklists, and advanced patterns.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary" className="text-xs">M1 Brief</Badge>
                  <Badge variant="secondary" className="text-xs">M4 Library</Badge>
                  <Badge variant="secondary" className="text-xs">M5 Motion</Badge>
                  <Badge variant="secondary" className="text-xs">M6 Audit</Badge>
                  <Badge variant="secondary" className="text-xs">M8 X-Ref</Badge>
                  <Badge variant="secondary" className="text-xs">M10 Patterns</Badge>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Part C */}
          <FadeIn delay={300}>
            <Card className="relative h-full border-cyan-200 dark:border-cyan-800/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center size-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400">
                    <DatabaseIcon />
                  </span>
                  <div>
                    <CardTitle className="text-lg">Part C</CardTitle>
                    <CardDescription>Data Engine</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  24 CSV files, 1,321+ records across 11 domains, 13 stack files, Python lookup with fuzzy search.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary" className="text-xs">96 Colors</Badge>
                  <Badge variant="secondary" className="text-xs">67 Styles</Badge>
                  <Badge variant="secondary" className="text-xs">56 Fonts</Badge>
                  <Badge variant="secondary" className="text-xs">98 UX Rules</Badge>
                  <Badge variant="secondary" className="text-xs">13 Stacks</Badge>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Connector lines (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-1/3 w-1/3 -translate-y-1/2 pointer-events-none">
            <div className="relative h-px bg-border">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-2 text-xs text-muted-foreground">Skill Router</span>
            </div>
          </div>
        </div>

        {/* Skill Router connector card */}
        <FadeIn delay={400}>
          <div className="mt-8 flex justify-center">
            <Card className="w-full max-w-2xl border-dashed border-2 border-emerald-300 dark:border-emerald-700 bg-emerald-50/50 dark:bg-emerald-950/20">
              <CardContent className="py-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <ZapIcon className="size-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium">Skill Router — Silent Protocol</span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-mono">IDENTIFY</span>
                  <ArrowRightIcon className="size-3" />
                  <span className="px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 font-mono">MATCH</span>
                  <ArrowRightIcon className="size-3" />
                  <span className="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 font-mono">COMMIT</span>
                  <ArrowRightIcon className="size-3" />
                  <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 font-mono">BUILD</span>
                  <ArrowRightIcon className="size-3" />
                  <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 font-mono">CHECK</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Part A: Infrastructure ──────────────────────────────────────────────────

const PART_A_MODULES = [
  {
    id: 'M2',
    title: 'Design Tokens',
    icon: <PaletteIcon />,
    color: 'emerald',
    features: [
      'OKLCH color system with hex-first + @supports',
      '8-point spacing grid',
      'Typography scale with font pairings',
      'Border, shadow, opacity, z-index scales',
      'Responsive breakpoint tokens',
    ],
  },
  {
    id: 'M3',
    title: 'CSS Primitives',
    icon: <CodeIcon />,
    color: 'emerald',
    features: [
      'Container queries (@container)',
      '@starting-style transitions',
      '@layer, @scope, @property',
      'CSS nesting (native)',
      'Scroll-driven animations',
      'View Transitions API',
      'interpolate-size, anchor positioning',
      'content-visibility, text-wrap:balance',
    ],
  },
  {
    id: 'M7',
    title: 'Data Tables',
    icon: <FileIcon />,
    color: 'emerald',
    features: [
      'References to Part C data engine',
      'Structured data lookup tables',
      'Cross-domain references',
      'Domain alias resolution',
    ],
  },
  {
    id: 'M9',
    title: 'Theme System',
    icon: <ShieldIcon />,
    color: 'emerald',
    features: [
      'Light / Dark / System / Manual modes',
      'CSS custom properties architecture',
      'React ThemeProvider component',
      'Tailwind v4 dark mode integration',
      'FOUC prevention strategy',
    ],
  },
]

function PartASection() {
  return (
    <section id="part-a" className="py-20 sm:py-28 bg-emerald-50/50 dark:bg-emerald-950/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 border-0">
              Part A — Infrastructure
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">The Foundation Layer</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Design tokens, CSS primitives, theme system, and data table references. Everything Part B and Part C build upon.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PART_A_MODULES.map((mod, i) => (
            <FadeIn key={mod.id} delay={i * 100}>
              <Card className="h-full hover:shadow-lg transition-all hover:border-emerald-300 dark:hover:border-emerald-700">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center size-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
                      {mod.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs font-mono">{mod.id}</Badge>
                        <CardTitle className="text-lg">{mod.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 rounded-full bg-emerald-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Part B: Components ──────────────────────────────────────────────────────

const COMPONENT_CATEGORIES: Record<string, { label: string; items: string[] }> = {
  layout: {
    label: 'Layout',
    items: ['Accordion', 'Tabs', 'Modal/Dialog', 'ModalStackProvider', 'Drawer/Sheet', 'Navbar'],
  },
  form: {
    label: 'Form',
    items: ['Select', 'PasswordInput', 'RadioGroup', 'Checkbox/Switch', 'Textarea', 'Form RHF+Zod'],
  },
  feedback: {
    label: 'Feedback',
    items: ['Toast', 'Skeleton', 'ErrorBoundary', 'SR Announcer', 'Tooltip'],
  },
  navigation: {
    label: 'Navigation',
    items: ['Breadcrumb', 'CommandPalette', 'Skip Link', 'Pagination'],
  },
  'ai-patterns': {
    label: 'AI Patterns',
    items: ['AI Chat', 'AI Streaming', 'AI Suggestions', 'Cursor Follower'],
  },
  'data-display': {
    label: 'Data Display',
    items: ['DataTable', 'Avatar/Group', 'ImageReveal', 'Focus Trap'],
  },
}

const ANTI_PATTERNS = [
  'Conditional hooks', 'forwardRef in R19', 'useId misuse', 'Contradictory ARIA',
  'Missing key props', 'Prop drilling', 'Side effects in render', 'Stale closures',
  'Memory leaks', 'Z-index wars', 'Non-semantic HTML', 'Missing alt text',
  'Keyboard traps', 'Color-only indicators', 'Missing focus rings', 'Autoplay media',
  'Inaccessible modals', 'Missing skip links', 'Unannotated forms', 'Low contrast text',
  'Missing error boundaries', 'Unhandled promise rejections', 'Flash of unstyled content',
  'Layout shifts', 'Oversized bundles', 'Missing loading states', 'No error messages',
  'Inconsistent spacing', 'Hard-coded colors', 'Missing responsive breakpoints',
  'No dark mode support', 'Missing aria-live', 'Inaccessible animations', 'No reduced motion',
]

function PartBSection() {
  const [activeCategory, setActiveCategory] = useState('layout')
  const [showAntiPatterns, setShowAntiPatterns] = useState(false)

  return (
    <section id="part-b" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 border-0">
              Part B — Components
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">25+ Production Components</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              React 19 ready, fully accessible, with motion presets and validation checklists. Plus 34 documented anti-patterns.
            </p>
          </div>
        </FadeIn>

        {/* Component category tabs */}
        <FadeIn delay={100}>
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1">
              {Object.entries(COMPONENT_CATEGORIES).map(([key, cat]) => (
                <TabsTrigger key={key} value={key} className="text-xs sm:text-sm">
                  {cat.label}
                  <span className="ml-1.5 size-5 inline-flex items-center justify-center rounded-full bg-background/80 text-[10px] font-bold">
                    {cat.items.length}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(COMPONENT_CATEGORIES).map(([key, cat]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.items.map((item, i) => (
                    <Card key={item} className="hover:shadow-md transition-all hover:border-teal-300 dark:hover:border-teal-700">
                      <CardContent className="py-4 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center size-8 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 text-xs font-bold">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm font-medium">{item}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </FadeIn>

        {/* All components as badges */}
        <FadeIn delay={200}>
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">All Components</h3>
            <div className="flex flex-wrap gap-2">
              {Object.values(COMPONENT_CATEGORIES)
                .flatMap((c) => c.items)
                .map((item) => (
                  <Badge key={item} variant="secondary" className="py-1 px-3 text-xs hover:bg-teal-100 dark:hover:bg-teal-900/40 hover:text-teal-800 dark:hover:text-teal-300 transition-colors cursor-default">
                    {item}
                  </Badge>
                ))}
            </div>
          </div>
        </FadeIn>

        <Separator className="my-8" />

        {/* Anti-patterns */}
        <FadeIn delay={300}>
          <div>
            <button
              onClick={() => setShowAntiPatterns(!showAntiPatterns)}
              className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              <ShieldIcon className="size-4" />
              34 Anti-Patterns Documented
              <ChevronDownIcon className={`size-4 transition-transform ${showAntiPatterns ? 'rotate-180' : ''}`} />
            </button>
            {showAntiPatterns && (
              <div className="mt-4 flex flex-wrap gap-2">
                {ANTI_PATTERNS.map((ap, i) => (
                  <Badge key={i} variant="outline" className="text-xs border-rose-200 dark:border-rose-800/50 text-rose-700 dark:text-rose-400">
                    ⚠ {ap}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Part C: Data Engine ─────────────────────────────────────────────────────

const DATA_DOMAINS = [
  { name: 'Colors', count: 96, color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300' },
  { name: 'Styles', count: 67, color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' },
  { name: 'Typography', count: 56, color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' },
  { name: 'UX Guidelines', count: 98, color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300' },
  { name: 'Charts', count: 25, color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300' },
  { name: 'Icons', count: 100, color: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300' },
  { name: 'UI Reasoning', count: 100, color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300' },
  { name: 'Web Interface', count: 30, color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300' },
  { name: 'React Perf', count: 44, color: 'bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300' },
  { name: 'Landing', count: 30, color: 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300' },
  { name: 'Products', count: 95, color: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300' },
]

const TECH_STACKS = [
  'React', 'Vue', 'Svelte', 'Angular', 'Next.js', 'Nuxt',
  'Astro', 'Remix', 'Solid', 'Qwik', 'HTMX', 'Tailwind', 'Laravel',
]

function PartCSection() {
  return (
    <section id="part-c" className="py-20 sm:py-28 bg-cyan-50/50 dark:bg-cyan-950/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 border-0">
              Part C — Data Engine
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Data Lookup Engine</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              24 CSV files, 1,321+ records, 11 core domains, 13 stack files. Python-powered fuzzy + exact search.
            </p>
          </div>
        </FadeIn>

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'CSV Files', value: 24, icon: <FileIcon /> },
            { label: 'Total Records', value: 1321, icon: <DatabaseIcon /> },
            { label: 'Core Domains', value: 11, icon: <BlocksIcon /> },
            { label: 'Stack Files', value: 13, icon: <CodeIcon /> },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="py-6">
                  <span className="inline-flex items-center justify-center size-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 mx-auto mb-3">
                    {stat.icon}
                  </span>
                  <div className="text-3xl font-black text-foreground">
                    <AnimatedCounter target={stat.value} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Domain breakdown */}
        <FadeIn delay={200}>
          <Card>
            <CardHeader>
              <CardTitle>Domain Breakdown</CardTitle>
              <CardDescription>Records per domain across all 11 core areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {DATA_DOMAINS.map((domain) => (
                  <div key={domain.name} className="flex items-center gap-3">
                    <span className="text-sm font-medium w-28 shrink-0">{domain.name}</span>
                    <div className="flex-1">
                      <Progress value={(domain.count / 100) * 100} className="h-2" />
                    </div>
                    <Badge className={`shrink-0 ${domain.color} border-0`}>{domain.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Tech stacks */}
        <FadeIn delay={300}>
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">13 Supported Stacks</h3>
            <div className="flex flex-wrap gap-2">
              {TECH_STACKS.map((stack) => (
                <Badge key={stack} variant="outline" className="py-1.5 px-3 text-xs hover:bg-cyan-100 dark:hover:bg-cyan-900/40 hover:text-cyan-800 dark:hover:text-cyan-300 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors cursor-default">
                  {stack}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Sample data preview */}
        <FadeIn delay={400}>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-base">Sample Data Preview</CardTitle>
              <CardDescription>Python lookup tool — fuzzy + exact search</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border bg-muted/30 p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="text-emerald-600 dark:text-emerald-400">
                  {'>'} python lookup.py --domain colors --query &quot;emerald palette&quot;
                </div>
                <div className="mt-2 text-muted-foreground">
                  {'{'}
                </div>
                <div className="ml-4">
                  <span className="text-cyan-600 dark:text-cyan-400">&quot;domain&quot;</span>: <span className="text-amber-600 dark:text-amber-400">&quot;colors&quot;</span>,
                </div>
                <div className="ml-4">
                  <span className="text-cyan-600 dark:text-cyan-400">&quot;results&quot;</span>: [{'{'}
                </div>
                <div className="ml-8">
                  <span className="text-cyan-600 dark:text-cyan-400">&quot;name&quot;</span>: <span className="text-amber-600 dark:text-amber-400">&quot;Emerald-500&quot;</span>,
                </div>
                <div className="ml-8">
                  <span className="text-cyan-600 dark:text-cyan-400">&quot;oklch&quot;</span>: <span className="text-amber-600 dark:text-amber-400">&quot;oklch(0.696 0.17 162.48)&quot;</span>,
                </div>
                <div className="ml-8">
                  <span className="text-cyan-600 dark:text-cyan-400">&quot;hex&quot;</span>: <span className="text-amber-600 dark:text-amber-400">&quot;#10b981&quot;</span>,
                </div>
                <div className="ml-8">
                  <span className="text-cyan-600 dark:text-cyan-400">&quot;contrast&quot;</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;AA&quot;</span>
                </div>
                <div className="ml-4">
                  {'}'}],
                </div>
                <div className="ml-4">
                  <span className="text-cyan-600 dark:text-cyan-400">&quot;total&quot;</span>: <span className="text-rose-600 dark:text-rose-400">3</span>
                </div>
                <div>{'}'}</div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Skill Router Section ────────────────────────────────────────────────────

const ROUTER_STEPS = [
  {
    id: 'IDENTIFY',
    label: 'Identify',
    desc: '3 diagnostic questions to classify the query intent',
    color: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
  },
  {
    id: 'MATCH',
    label: 'Match',
    desc: 'Map intent to Part A/B/C activation patterns',
    color: 'bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-700',
  },
  {
    id: 'COMMIT',
    label: 'Commit',
    desc: 'Lock in the activation path — no mid-stream pivots',
    color: 'bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700',
  },
  {
    id: 'BUILD',
    label: 'Build',
    desc: 'Execute with full context from committed parts',
    color: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700',
  },
  {
    id: 'CHECK',
    label: 'Check',
    desc: 'Validate output against quality gates and anti-patterns',
    color: 'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-700',
  },
]

const QUERY_TYPES = [
  { type: 'Token/Style', activates: 'A', example: 'What spacing scale does v8 use?' },
  { type: 'Component', activates: 'B', example: 'Build an accessible modal dialog' },
  { type: 'Data Lookup', activates: 'C', example: 'Find emerald palettes with AA contrast' },
  { type: 'Theme', activates: 'A+B', example: 'Set up dark mode with Tailwind v4' },
  { type: 'Pattern', activates: 'A+B+C', example: 'Build a form with validation and animation' },
  { type: 'Anti-pattern', activates: 'B', example: 'Check for conditional hooks violations' },
  { type: 'Migration', activates: 'A+B+C', example: 'Migrate from v7 to v8 tokens' },
  { type: 'Stack-specific', activates: 'C', example: 'Next.js dark mode integration' },
  { type: 'Audit', activates: 'B', example: 'Run accessibility audit on my component' },
  { type: 'Motion', activates: 'B', example: 'Add scroll-triggered animations' },
  { type: 'Full Build', activates: 'A+B+C', example: 'Build a landing page from scratch' },
]

function SkillRouterSection() {
  return (
    <section id="skill-router" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 border-0">
              Skill Router
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Silent Protocol</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Intent-based routing with 3 diagnostic questions. The silent pipeline that connects every query to the right part activation.
            </p>
          </div>
        </FadeIn>

        {/* Pipeline flow */}
        <FadeIn delay={100}>
          <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 mb-12">
            {ROUTER_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="flex-1 relative">
                  <Card className={`h-full border ${step.color} hover:shadow-lg transition-shadow`}>
                    <CardContent className="py-4 text-center">
                      <div className="font-mono font-bold text-xs mb-1">{step.id}</div>
                      <div className="font-semibold text-sm mb-1">{step.label}</div>
                      <div className="text-xs opacity-80">{step.desc}</div>
                    </CardContent>
                  </Card>
                </div>
                {i < ROUTER_STEPS.length - 1 && (
                  <div className="hidden sm:flex items-center px-1">
                    <ArrowRightIcon className="size-5 text-muted-foreground" />
                  </div>
                )}
                {i < ROUTER_STEPS.length - 1 && (
                  <div className="flex sm:hidden items-center justify-center py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-muted-foreground rotate-90">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </FadeIn>

        {/* Query type mapping */}
        <FadeIn delay={200}>
          <Card>
            <CardHeader>
              <CardTitle>11 Query Types → Part Activation Map</CardTitle>
              <CardDescription>How the Skill Router maps queries to Part A/B/C</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Query Type</th>
                      <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Activates</th>
                      <th className="text-left py-2 font-medium text-muted-foreground hidden sm:table-cell">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {QUERY_TYPES.map((qt) => (
                      <tr key={qt.type} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                        <td className="py-2.5 pr-4 font-medium">{qt.type}</td>
                        <td className="py-2.5 pr-4">
                          {qt.activates.split('+').map((part) => (
                            <Badge
                              key={part}
                              variant="outline"
                              className={`mr-1 text-xs ${
                                part === 'A' ? 'border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300' :
                                part === 'B' ? 'border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300' :
                                'border-cyan-300 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300'
                              }`}
                            >
                              {part}
                            </Badge>
                          ))}
                        </td>
                        <td className="py-2.5 text-muted-foreground hidden sm:table-cell">{qt.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Migration Section ───────────────────────────────────────────────────────

const MIGRATION_ITEMS = [
  { feature: 'Anti-patterns', v7: '24 documented', v8: '34 documented', change: '+10 new', positive: true },
  { feature: 'Components', v7: '14 components', v8: '25+ components', change: '+11 new', positive: true },
  { feature: 'Color System', v7: 'RGB fallback', v8: 'OKLCH hex-first + @supports', change: 'Progressive enhancement', positive: true },
  { feature: 'Color Palettes', v7: '48 palettes', v8: '96 palettes', change: '2× data integrity fix', positive: true },
  { feature: 'Font Pairings', v7: '36 fonts', v8: '56 fonts', change: '+20 pairings', positive: true },
  { feature: 'Dark Mode', v7: 'Partial', v8: 'Complete theme system', change: 'Full light/dark/system/manual', positive: true },
  { feature: 'Architecture', v7: 'Monolithic', v8: 'Tripartite (A/B/C)', change: '~49% token reduction', positive: true },
  { feature: '@media Nesting', v7: 'Specificity myth', v8: 'Corrected', change: 'Bug fix', positive: true },
  { feature: 'Quality Score', v7: '68/100', v8: '95/100', change: '+39.7%', positive: true },
  { feature: 'Data Domains', v7: '6 domains', v8: '11 domains', change: '+5 new domains', positive: true },
  { feature: 'Stack Files', v7: '5 stacks', v8: '13 stacks', change: '+8 frameworks', positive: true },
  { feature: 'Skill Router', v7: 'None', v8: 'Silent Protocol (5-step)', change: 'New', positive: true },
]

function MigrationSection() {
  return (
    <section id="migration" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300">
              Migration Guide
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">v7 → v8 Improvements</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Every metric improved. Zero regressions. A complete evolution from monolithic to tripartite.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left py-3 px-4 font-semibold">Feature</th>
                      <th className="text-left py-3 px-4 font-semibold">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-red-400" />
                          v7.0
                        </span>
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-emerald-500" />
                          v8.0
                        </span>
                      </th>
                      <th className="text-left py-3 px-4 font-semibold hidden sm:table-cell">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MIGRATION_ITEMS.map((item) => (
                      <tr key={item.feature} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="py-3 px-4 font-medium">{item.feature}</td>
                        <td className="py-3 px-4 text-muted-foreground">{item.v7}</td>
                        <td className="py-3 px-4 font-medium text-foreground">{item.v8}</td>
                        <td className="py-3 px-4 hidden sm:table-cell">
                          <Badge className={`${item.positive ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'} border-0 text-xs`}>
                            {item.change}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Quality Score Section ───────────────────────────────────────────────────

function QualityScoreSection() {
  const categories = [
    { name: 'Part A: Infrastructure', score: 92, color: 'bg-emerald-500' },
    { name: 'Part B: Components', score: 88, color: 'bg-teal-500' },
    { name: 'Part C: Data Engine', score: 96, color: 'bg-cyan-500' },
  ]

  return (
    <section id="quality" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 border-0">
              Quality Metrics
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Quality Score: 68 → 95</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A 39.7% improvement across all dimensions. Each part independently scored, weighted, and validated.
            </p>
          </div>
        </FadeIn>

        {/* Main score visualization */}
        <FadeIn delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Score circle */}
            <Card className="flex items-center justify-center">
              <CardContent className="py-12 flex flex-col items-center">
                <div className="relative size-48 sm:size-56">
                  <svg viewBox="0 0 200 200" className="size-full -rotate-90">
                    {/* Background circle */}
                    <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="12" className="text-muted/30" />
                    {/* v7 arc */}
                    <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeDasharray={`${68 * 5.34} ${100 * 5.34}`} className="text-red-300 dark:text-red-700" />
                    {/* v8 arc */}
                    <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeDasharray={`${95 * 4.4} ${100 * 4.4}`} className="text-emerald-500" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black">
                      <AnimatedCounter target={95} />
                    </span>
                    <span className="text-sm text-muted-foreground">/ 100</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="size-3 rounded-full bg-red-300 dark:bg-red-700" />
                    <span className="text-muted-foreground">v7: 68</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="size-3 rounded-full bg-emerald-500" />
                    <span className="text-muted-foreground">v8: 95</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Category breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Category Breakdown</CardTitle>
                <CardDescription>Individual part quality scores</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {categories.map((cat, i) => (
                  <FadeIn key={cat.name} delay={200 + i * 100}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{cat.name}</span>
                        <span className="text-2xl font-black">
                          <AnimatedCounter target={cat.score} />
                          <span className="text-sm font-normal text-muted-foreground">/100</span>
                        </span>
                      </div>
                      <div className="relative h-3 rounded-full bg-muted overflow-hidden">
                        <div
                          className={`absolute inset-y-0 left-0 rounded-full ${cat.color} transition-all duration-1000`}
                          style={{ width: `${cat.score}%` }}
                        />
                      </div>
                    </div>
                  </FadeIn>
                ))}

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Weighted Average</span>
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    95
                    <span className="text-sm font-normal text-muted-foreground">/100</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeIn>

        {/* Score comparison cards */}
        <FadeIn delay={300}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="border-red-200 dark:border-red-800/50">
              <CardContent className="py-6 text-center">
                <div className="text-4xl font-black text-red-500/70 line-through">68</div>
                <div className="text-sm text-muted-foreground mt-1">v7.0 Score</div>
                <Badge variant="outline" className="mt-2 border-red-200 dark:border-red-800/50 text-red-600 dark:text-red-400 text-xs">
                  Below threshold
                </Badge>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-950/20">
              <CardContent className="py-6 text-center">
                <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400">95</div>
                <div className="text-sm text-muted-foreground mt-1">v8.0 Score</div>
                <Badge className="mt-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 border-0 text-xs">
                  Production ready
                </Badge>
              </CardContent>
            </Card>
            <Card className="border-teal-200 dark:border-teal-800/50">
              <CardContent className="py-6 text-center">
                <div className="text-4xl font-black text-teal-600 dark:text-teal-400">+27</div>
                <div className="text-sm text-muted-foreground mt-1">Points Improved</div>
                <Badge className="mt-2 bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 border-0 text-xs">
                  +39.7% growth
                </Badge>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center size-6 rounded-md bg-emerald-600 text-white text-[10px] font-black">
            v8
          </span>
          <span className="text-sm font-semibold">UI/UX PRO MAX v8.0</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span>Part A: 92</span>
          <span>·</span>
          <span>Part B: 88</span>
          <span>·</span>
          <span>Part C: 96</span>
          <span>·</span>
          <span>Overall: 95/100</span>
        </div>
        <div className="text-xs text-muted-foreground">
          Tripartite Architecture · Silent Protocol · Zero Compromises
        </div>
      </div>
    </footer>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ArchitectureSection />
        <PartASection />
        <PartBSection />
        <PartCSection />
        <SkillRouterSection />
        <MigrationSection />
        <QualityScoreSection />
      </main>
      <Footer />
    </div>
  )
}
