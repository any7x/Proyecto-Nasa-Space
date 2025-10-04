"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="container mx-auto max-w-6xl text-center animate-fade-in-up">
        <div className="mb-8 inline-block">
          <span className="text-sm font-mono text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            Real-time Space Weather Monitoring
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-tight">Stellar Stories</h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
          Explore space weather through the eyes of Earthlings. Discover how solar activity shapes our planet and
          technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6 rounded-full" onClick={scrollToContent}>
            Explore Space Weather
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-transparent">
            View Live Data
          </Button>
        </div>

        <button
          onClick={scrollToContent}
          className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to content"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />
    </section>
  )
}
