"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Satellite, Wifi, Zap, Plane, Radio, Shield } from "lucide-react"

export function ImpactSection() {
  const impacts = [
    {
      icon: Satellite,
      title: "Satélites",
      description: "Las tormentas solares pueden dañar componentes electrónicos y alterar órbitas satelitales.",
      severity: "high",
    },
    {
      icon: Wifi,
      title: "Comunicaciones",
      description: "Interrupciones en señales de radio, GPS y comunicaciones satelitales.",
      severity: "high",
    },
    {
      icon: Zap,
      title: "Redes Eléctricas",
      description: "Corrientes inducidas pueden sobrecargar transformadores y causar apagones.",
      severity: "critical",
    },
    {
      icon: Plane,
      title: "Aviación",
      description: "Afecta comunicaciones y navegación en rutas polares, aumenta exposición a radiación.",
      severity: "medium",
    },
    {
      icon: Radio,
      title: "Radio HF",
      description: "Degradación o pérdida total de comunicaciones de radio de alta frecuencia.",
      severity: "medium",
    },
    {
      icon: Shield,
      title: "Astronautas",
      description: "Riesgo de exposición a radiación para tripulaciones en el espacio.",
      severity: "critical",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "from-destructive to-destructive/50"
      case "high":
        return "from-accent to-accent/50"
      case "medium":
        return "from-chart-4 to-chart-4/50"
      default:
        return "from-primary to-primary/50"
    }
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">Impacto en la Tecnología</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            El clima espacial afecta muchos aspectos de nuestra vida moderna y tecnología
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impacts.map((impact, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
            >
              <CardContent className="p-6 space-y-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getSeverityColor(impact.severity)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <impact.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-balance">{impact.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-balance">Monitoreo y Predicción</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                La NASA y otras agencias espaciales monitorean constantemente el Sol y el clima espacial. Utilizan
                satélites como el Solar Dynamics Observatory (SDO) y el Solar and Heliospheric Observatory (SOHO) para
                detectar tormentas solares y proporcionar alertas tempranas, permitiendo a operadores de satélites,
                redes eléctricas y aerolíneas tomar medidas preventivas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-chart-4/10 border-accent/20">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-balance">Protección y Mitigación</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Los ingenieros diseñan satélites con blindaje contra radiación y sistemas redundantes. Las redes
                eléctricas implementan protocolos de emergencia. Los astronautas pueden refugiarse en áreas protegidas
                de la Estación Espacial Internacional durante eventos solares intensos. La investigación continua nos
                ayuda a mejorar nuestras defensas contra el clima espacial.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
