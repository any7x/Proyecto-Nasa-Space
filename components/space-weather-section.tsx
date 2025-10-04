"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Zap, Radio, Shield } from "lucide-react"

export function SpaceWeatherSection() {
  const features = [
    {
      icon: Cloud,
      title: "Eyecciones de Masa Coronal",
      description: "Enormes burbujas de radiación y partículas del Sol que pueden tardar días en llegar a la Tierra.",
      color: "from-primary to-primary/50",
    },
    {
      icon: Zap,
      title: "Llamaradas Solares",
      description: "Explosiones intensas de radiación electromagnética que viajan a la velocidad de la luz.",
      color: "from-accent to-accent/50",
    },
    {
      icon: Radio,
      title: "Partículas Energéticas",
      description: "Protones y electrones acelerados que pueden penetrar satélites y naves espaciales.",
      color: "from-secondary to-secondary/50",
    },
    {
      icon: Shield,
      title: "Campo Magnético Terrestre",
      description: "Nuestro escudo protector que desvía la mayoría de las partículas solares peligrosas.",
      color: "from-chart-4 to-chart-4/50",
    },
  ]

  return (
    <section id="space-weather" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">¿Qué es el Clima Espacial?</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            El clima espacial se refiere a las condiciones cambiantes en el espacio que pueden afectar la Tierra y
            nuestra tecnología. Es causado principalmente por la actividad del Sol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-balance">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-balance">Impacto en la Tierra</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                El clima espacial puede interrumpir las comunicaciones por satélite, afectar los sistemas de navegación
                GPS, causar apagones eléctricos y crear hermosas auroras boreales. La NASA monitorea constantemente
                estas condiciones para proteger nuestra tecnología y a los astronautas en el espacio.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
