"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useSound } from "@/hooks/use-sound"

interface AccordionItem {
  title: string
  content: string
  icon?: string
}

interface AccordionSectionProps {
  title: string
  items: AccordionItem[]
}

export function AccordionSection({ title, items }: AccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { playWhoosh } = useSound()

  const toggleAccordion = (index: number) => {
    playWhoosh()
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {item.icon && <span className="text-3xl">{item.icon}</span>}
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">{item.content}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
