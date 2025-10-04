"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Zap, Wind, Magnet, Radiation } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useSound } from "@/hooks/use-sound"
import Image from "next/image"

interface PhenomenonItem {
  title: string
  description: string
  details: string
  icon: React.ReactNode
  imageUrl: string
  imageAlt: string
}

export function SpacePhenomenaDropdown() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { playWhoosh } = useSound()

  const phenomena: PhenomenonItem[] = [
    {
      title: "Erupciones Solares",
      description: "Explosiones intensas de radiación electromagnética en la atmósfera del Sol",
      details:
        "Las erupciones solares son explosiones intensas de radiación electromagnética en la atmósfera del Sol. Pueden durar desde minutos hasta horas y liberan tanta energía como mil millones de bombas de hidrógeno. Las erupciones clase X son las más poderosas y pueden causar apagones de radio en todo el lado iluminado de la Tierra. Estas erupciones ocurren cuando la energía magnética acumulada en la atmósfera solar se libera repentinamente.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      imageUrl: "/solar-flare-eruption-from-sun-surface-with-bright-.jpg",
      imageAlt: "Erupción solar con plasma brillante",
    },
    {
      title: "Viento Solar",
      description: "Flujo constante de partículas cargadas que emana del Sol",
      details:
        "El viento solar es un flujo constante de partículas cargadas (principalmente electrones y protones) que emana del Sol a velocidades de hasta 900 km/s. Este flujo de plasma llena todo el sistema solar y crea la heliosfera. Cuando estas partículas interactúan con el campo magnético de la Tierra, pueden causar auroras boreales y australes, así como interferencias en sistemas de comunicación y satélites.",
      icon: <Wind className="w-8 h-8 text-cyan-400" />,
      imageUrl: "/solar-wind-particles-streaming-from-sun-towards-ea.jpg",
      imageAlt: "Viento solar fluyendo desde el Sol",
    },
    {
      title: "Tormentas Geomagnéticas",
      description: "Perturbaciones en el campo magnético terrestre causadas por el viento solar",
      details:
        "Las tormentas geomagnéticas ocurren cuando el viento solar causa cambios importantes en el campo magnético terrestre. Pueden durar desde horas hasta días y afectar satélites, sistemas de navegación GPS, redes eléctricas y comunicaciones de radio. La escala G va de G1 (menor) a G5 (extrema). Durante tormentas severas, las auroras pueden verse en latitudes mucho más bajas de lo normal.",
      icon: <Magnet className="w-8 h-8 text-purple-400" />,
      imageUrl: "/earth-magnetic-field-with-aurora-borealis-and-geom.jpg",
      imageAlt: "Tormenta geomagnética con auroras",
    },
    {
      title: "Radiación Solar",
      description: "Partículas de alta energía aceleradas por eventos solares",
      details:
        "Los eventos de radiación solar ocurren cuando partículas emitidas por el Sol se aceleran a velocidades cercanas a la luz durante erupciones solares o eyecciones de masa coronal. Estas partículas de alta energía pueden ser peligrosas para astronautas y pasajeros de vuelos polares, además de dañar componentes electrónicos en satélites. La escala S va de S1 (menor) a S5 (extrema).",
      icon: <Radiation className="w-8 h-8 text-red-400" />,
      imageUrl: "/solar-radiation-particles-and-cosmic-rays-in-space.jpg",
      imageAlt: "Radiación solar y partículas cósmicas",
    },
  ]

  const toggleDropdown = (index: number) => {
    playWhoosh()
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="phenomena" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Fenómenos del Clima Espacial
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
          Explora los fascinantes fenómenos que ocurren en el espacio y cómo afectan nuestro planeta
        </p>

        <div className="grid gap-6">
          {phenomena.map((phenomenon, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/50 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-primary/5 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {phenomenon.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{phenomenon.title}</h3>
                    <p className="text-muted-foreground text-sm">{phenomenon.description}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 space-y-4">
                  <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-primary/20">
                    <Image
                      src={phenomenon.imageUrl || "/placeholder.svg"}
                      alt={phenomenon.imageAlt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">{phenomenon.details}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
