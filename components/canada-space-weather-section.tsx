"use client"

import { Card } from "@/components/ui/card"
import { AlertTriangle, Zap, Radio, Power } from "lucide-react"

export function CanadaSpaceWeatherSection() {
  const impacts = [
    {
      icon: Power,
      title: "Interrupción de la Red Eléctrica",
      description:
        "En 1989, una tormenta espacial dejó sin electricidad a la red de Hydro Quebec, causando un apagón de nueve horas y pérdidas millonarias.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Radio,
      title: "Daño a Satélites",
      description:
        "En 1994, dos satélites canadienses de comunicaciones, Anik E-1 y E-2, fueron deshabilitados por tormentas espaciales con un costo de cientos de millones de dólares.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Casi Impacto en 2012",
      description:
        "Una explosión solar extremadamente poderosa observada por los satélites STEREO de la NASA no impactó la Tierra. De haberlo hecho, habría causado miles de millones en daños globalmente.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: AlertTriangle,
      title: "El Evento Carrington",
      description:
        "En 1859, una explosión solar masiva golpeó la Tierra cuando el telégrafo era la tecnología líder. Se comportó erráticamente incluso apagado, y las auroras se vieron hasta el Caribe.",
      color: "from-yellow-500 to-red-500",
    },
  ]

  return (
    <section id="forecasting" className="relative py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Pronóstico del Clima Espacial</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Los científicos canadienses trabajan para proporcionar pronósticos del clima espacial que advierten sobre
            cambios en la atmósfera superior de la Tierra, donde la radiación electromagnética y las partículas cargadas
            del espacio interactúan con nuestro planeta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <Card
                key={index}
                className="group p-6 hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${impact.color} flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {impact.title}
                    </h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{impact.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Medidas de Protección</h3>
          <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
            Cuando se pronostica clima espacial severo, las industrias pueden tomar acciones protectoras:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-pretty">
                Las aerolíneas pueden desviar o cancelar vuelos para evitar áreas de alta radiación
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-pretty">
                Las compañías eléctricas pueden ajustar las redes para prevenir daños
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-pretty">
                Los servicios de navegación pueden emitir alertas sobre interrupciones del GPS
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-pretty">Los operadores de satélites pueden poner las naves en modos seguros</p>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground text-pretty">
            La Agencia Espacial Canadiense trabaja con Recursos Naturales de Canadá para mejorar el pronóstico del clima
            espacial a través del{" "}
            <a
              href="https://www.spaceweather.gc.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Centro Canadiense de Pronóstico del Clima Espacial
            </a>
            , un Centro de Alerta Regional del Servicio Internacional del Ambiente Espacial.
          </p>
        </div>
      </div>
    </section>
  )
}
