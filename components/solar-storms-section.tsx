"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SolarStormsSection() {
  const [activeTab, setActiveTab] = useState("cme")

  const stormTypes = {
    cme: {
      title: "Eyecciones de Masa Coronal (CME)",
      description:
        "Las CME son enormes explosiones de plasma y campo magnético del Sol. Pueden contener miles de millones de toneladas de material solar y viajar a velocidades de hasta 3,000 km/s.",
      effects: [
        "Pueden causar tormentas geomagnéticas intensas",
        "Afectan satélites y sistemas de comunicación",
        "Crean auroras espectaculares en latitudes altas",
        "Pueden inducir corrientes en redes eléctricas",
      ],
      image: "/coronal-mass-ejection-from-sun.jpg",
    },
    flares: {
      title: "Llamaradas Solares",
      description:
        "Las llamaradas solares son explosiones repentinas de energía electromagnética. Son clasificadas por su intensidad en clases A, B, C, M y X, siendo X las más poderosas.",
      effects: [
        "Viajan a la velocidad de la luz",
        "Pueden interrumpir comunicaciones de radio",
        "Afectan la ionosfera terrestre",
        "Duran desde minutos hasta horas",
      ],
      image: "/solar-flare-eruption.jpg",
    },
    particles: {
      title: "Partículas Energéticas Solares",
      description:
        "Son protones y electrones acelerados a velocidades cercanas a la luz por eventos solares. Representan un peligro para astronautas y tecnología espacial.",
      effects: [
        "Pueden dañar componentes electrónicos",
        "Riesgo de radiación para astronautas",
        "Afectan instrumentos científicos",
        "Pueden penetrar naves espaciales",
      ],
      image: "/solar-energetic-particles-space.jpg",
    },
  }

  return (
    <section id="solar-storms" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">Tormentas Solares</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            El Sol es una estrella dinámica que constantemente libera energía y materia al espacio. Estos eventos pueden
            tener efectos dramáticos en nuestro planeta.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="cme">CME</TabsTrigger>
            <TabsTrigger value="flares">Llamaradas</TabsTrigger>
            <TabsTrigger value="particles">Partículas</TabsTrigger>
          </TabsList>

          {Object.entries(stormTypes).map(([key, storm]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-balance">{storm.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{storm.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold">Efectos principales:</h4>
                    <ul className="space-y-2">
                      {storm.effects.map((effect, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-pretty">{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Card className="overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={storm.image || "/placeholder.svg"}
                        alt={storm.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-balance">¿Sabías que...?</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                La tormenta solar más intensa registrada ocurrió en 1859, conocida como el Evento Carrington. Fue tan
                poderosa que las auroras se vieron hasta el Caribe y los sistemas telegráficos fallaron en todo el
                mundo. Si ocurriera hoy, podría causar daños por billones de dólares.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
