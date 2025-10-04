"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface Planet {
  name: string
  gradient: string
  size: number
  orbitRadius: number
  orbitDuration: number
  description: string
  facts: string[]
  distance: string
  diameter: string
  temperature: string
  rings?: boolean
}

const planets: Planet[] = [
  {
    name: "Mercurio",
    gradient: "bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600",
    size: 8,
    orbitRadius: 60,
    orbitDuration: 4,
    description: "El planeta más cercano al Sol y el más pequeño del sistema solar.",
    facts: [
      "Un día en Mercurio dura 59 días terrestres",
      "Temperaturas extremas: de -173°C a 427°C",
      "No tiene atmósfera significativa",
      "Superficie llena de cráteres como la Luna",
    ],
    distance: "57.9 millones de km del Sol",
    diameter: "4,879 km",
    temperature: "-173°C a 427°C",
  },
  {
    name: "Venus",
    gradient: "bg-gradient-to-br from-yellow-200 via-orange-300 to-amber-400",
    size: 14,
    orbitRadius: 90,
    orbitDuration: 6,
    description: "El planeta más caliente del sistema solar con una atmósfera densa de CO₂.",
    facts: [
      "Gira en dirección opuesta a la mayoría de planetas",
      "Un día en Venus dura más que un año venusiano",
      "Presión atmosférica 90 veces mayor que la Tierra",
      "Lluvia de ácido sulfúrico en su atmósfera",
    ],
    distance: "108.2 millones de km del Sol",
    diameter: "12,104 km",
    temperature: "462°C promedio",
  },
  {
    name: "Tierra",
    gradient: "bg-gradient-to-br from-blue-400 via-blue-500 to-green-600",
    size: 16,
    orbitRadius: 120,
    orbitDuration: 8,
    description: "Nuestro hogar, el único planeta conocido con vida.",
    facts: [
      "70% de su superficie está cubierta de agua",
      "Atmósfera protectora con 78% nitrógeno y 21% oxígeno",
      "Campo magnético que nos protege del viento solar",
      "Única luna natural: La Luna",
    ],
    distance: "149.6 millones de km del Sol",
    diameter: "12,742 km",
    temperature: "15°C promedio",
  },
  {
    name: "Marte",
    gradient: "bg-gradient-to-br from-red-400 via-red-600 to-orange-800",
    size: 12,
    orbitRadius: 150,
    orbitDuration: 10,
    description: "El planeta rojo, objetivo de futuras misiones tripuladas.",
    facts: [
      "Tiene el volcán más grande del sistema solar: Monte Olimpo",
      "Dos pequeñas lunas: Fobos y Deimos",
      "Evidencia de agua líquida en el pasado",
      "Tormentas de polvo que pueden cubrir todo el planeta",
    ],
    distance: "227.9 millones de km del Sol",
    diameter: "6,779 km",
    temperature: "-63°C promedio",
  },
  {
    name: "Júpiter",
    gradient: "bg-gradient-to-br from-orange-300 via-amber-500 to-orange-700",
    size: 32,
    orbitRadius: 200,
    orbitDuration: 14,
    description: "El gigante gaseoso más grande del sistema solar.",
    facts: [
      "Podría contener más de 1,300 Tierras en su volumen",
      "La Gran Mancha Roja es una tormenta de 300 años",
      "Tiene al menos 79 lunas conocidas",
      "Su campo magnético es 20,000 veces más fuerte que el de la Tierra",
    ],
    distance: "778.5 millones de km del Sol",
    diameter: "139,820 km",
    temperature: "-108°C promedio",
  },
  {
    name: "Saturno",
    gradient: "bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600",
    size: 28,
    orbitRadius: 250,
    orbitDuration: 18,
    description: "Famoso por sus espectaculares anillos de hielo y roca.",
    facts: [
      "Sus anillos tienen 282,000 km de diámetro pero solo 10 metros de grosor",
      "Tiene más de 80 lunas conocidas",
      "Es el planeta menos denso, flotaría en agua",
      "Vientos de hasta 1,800 km/h en su atmósfera",
    ],
    distance: "1,434 millones de km del Sol",
    diameter: "116,460 km",
    temperature: "-138°C promedio",
    rings: true,
  },
  {
    name: "Urano",
    gradient: "bg-gradient-to-br from-cyan-300 via-cyan-400 to-teal-500",
    size: 20,
    orbitRadius: 290,
    orbitDuration: 22,
    description: "El gigante de hielo que gira de lado.",
    facts: [
      "Su eje de rotación está inclinado 98 grados",
      "Tiene 13 anillos tenues",
      "27 lunas conocidas, nombradas por personajes de Shakespeare",
      "Color azul-verde debido al metano en su atmósfera",
    ],
    distance: "2,871 millones de km del Sol",
    diameter: "50,724 km",
    temperature: "-195°C promedio",
    rings: true,
  },
  {
    name: "Neptuno",
    gradient: "bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-800",
    size: 19,
    orbitRadius: 330,
    orbitDuration: 26,
    description: "El planeta más lejano, con los vientos más rápidos del sistema solar.",
    facts: [
      "Vientos de hasta 2,100 km/h, los más rápidos del sistema solar",
      "Tiene 14 lunas conocidas, la más grande es Tritón",
      "Un año en Neptuno dura 165 años terrestres",
      "Fue descubierto mediante cálculos matemáticos antes de ser observado",
    ],
    distance: "4,495 millones de km del Sol",
    diameter: "49,244 km",
    temperature: "-200°C promedio",
  },
]

export function SolarSystemMap() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null)

  return (
    <section id="solar-system" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Sistema Solar</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Explora Nuestro Sistema Solar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Haz clic en cada planeta para descubrir información fascinante sobre nuestros vecinos cósmicos
          </p>
        </div>

        {/* Sistema Solar Interactivo */}
        <div className="relative w-full max-w-4xl mx-auto aspect-square mb-12">
          {/* Sol en el centro */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 animate-pulse-glow shadow-[0_0_60px_rgba(251,191,36,0.6)]" />
          </div>

          {/* Órbitas y Planetas */}
          {planets.map((planet, index) => (
            <div key={planet.name}>
              {/* Órbita */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/30"
                style={{
                  width: `${planet.orbitRadius * 2}px`,
                  height: `${planet.orbitRadius * 2}px`,
                }}
              />

              {/* Planeta */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  animation: `orbit ${planet.orbitDuration}s linear infinite`,
                  width: `${planet.orbitRadius * 2}px`,
                  height: `${planet.orbitRadius * 2}px`,
                }}
              >
                <button
                  onClick={() => setSelectedPlanet(planet)}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-transform hover:scale-125 focus:scale-125 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                  aria-label={`Ver información de ${planet.name}`}
                >
                  <div className="relative">
                    <div
                      className={`${planet.gradient} rounded-full shadow-lg group-hover:shadow-2xl transition-all relative overflow-hidden`}
                      style={{
                        width: `${planet.size}px`,
                        height: `${planet.size}px`,
                        boxShadow: `0 0 ${planet.size / 2}px rgba(0,0,0,0.5), inset -${planet.size / 4}px -${planet.size / 4}px ${planet.size / 2}px rgba(0,0,0,0.3)`,
                      }}
                    >
                      {/* Efecto de brillo */}
                      <div
                        className="absolute top-0 left-0 w-1/3 h-1/3 rounded-full bg-white/30 blur-sm"
                        style={{
                          transform: "translate(25%, 25%)",
                        }}
                      />
                    </div>

                    {planet.rings && (
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-current rounded-full pointer-events-none"
                        style={{
                          width: `${planet.size * 2}px`,
                          height: `${planet.size * 0.4}px`,
                          opacity: 0.6,
                          borderColor: planet.name === "Saturno" ? "#d4af37" : "#5eead4",
                        }}
                      />
                    )}
                  </div>

                  <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-card px-2 py-1 rounded border border-border">
                    {planet.name}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Panel de Información del Planeta */}
        {selectedPlanet && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur border-border/50 shadow-2xl">
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative flex-shrink-0">
                      <div
                        className={`${selectedPlanet.gradient} rounded-full shadow-2xl relative overflow-hidden`}
                        style={{
                          width: `${selectedPlanet.size * 3}px`,
                          height: `${selectedPlanet.size * 3}px`,
                          boxShadow: `0 0 ${selectedPlanet.size}px rgba(0,0,0,0.5), inset -${selectedPlanet.size / 2}px -${selectedPlanet.size / 2}px ${selectedPlanet.size}px rgba(0,0,0,0.3)`,
                        }}
                      >
                        <div
                          className="absolute top-0 left-0 w-1/3 h-1/3 rounded-full bg-white/30 blur-sm"
                          style={{
                            transform: "translate(25%, 25%)",
                          }}
                        />
                      </div>
                      {selectedPlanet.rings && (
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-current rounded-full pointer-events-none"
                          style={{
                            width: `${selectedPlanet.size * 5}px`,
                            height: `${selectedPlanet.size * 1.2}px`,
                            opacity: 0.6,
                            borderColor: selectedPlanet.name === "Saturno" ? "#d4af37" : "#5eead4",
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{selectedPlanet.name}</h3>
                      <p className="text-muted-foreground mt-1">{selectedPlanet.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPlanet(null)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Distancia</p>
                    <p className="font-semibold">{selectedPlanet.distance}</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Diámetro</p>
                    <p className="font-semibold">{selectedPlanet.diameter}</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Temperatura</p>
                    <p className="font-semibold">{selectedPlanet.temperature}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Datos Fascinantes</h4>
                  <ul className="space-y-3">
                    {selectedPlanet.facts.map((fact, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Leyenda de Planetas */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {planets.map((planet) => (
            <button
              key={planet.name}
              onClick={() => setSelectedPlanet(planet)}
              className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-muted rounded-lg border border-border transition-colors group"
            >
              <div className="relative">
                <div
                  className={`${planet.gradient} rounded-full group-hover:scale-110 transition-transform shadow-md`}
                  style={{
                    width: "16px",
                    height: "16px",
                    boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.3)",
                  }}
                />
                {planet.rings && (
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-current rounded-full pointer-events-none"
                    style={{
                      width: "24px",
                      height: "8px",
                      opacity: 0.5,
                      borderColor: planet.name === "Saturno" ? "#d4af37" : "#5eead4",
                    }}
                  />
                )}
              </div>
              <span className="text-sm font-medium">{planet.name}</span>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
