"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

export function VideoSection() {
  const videos = [
    {
      id: "oOXVZo7KikE",
      title: "Space Weather: Storms from the Sun",
      description: "Descubre cómo las tormentas solares afectan la Tierra en este video educativo de NASA.",
      thumbnail: "/nasa-space-weather-video-thumbnail.jpg",
    },
    {
      id: "demo1",
      title: "Eyecciones de Masa Coronal",
      description: "Visualización científica de cómo las CME viajan desde el Sol hasta la Tierra.",
      thumbnail: "/coronal-mass-ejection-visualization.jpg",
    },
    {
      id: "demo2",
      title: "Auroras desde el Espacio",
      description: "Vista espectacular de las auroras boreales capturadas desde la Estación Espacial Internacional.",
      thumbnail: "/aurora-from-space-station.jpg",
    },
  ]

  return (
    <section id="videos" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">Videos Educativos</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Explora el clima espacial a través de visualizaciones científicas y contenido educativo de NASA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  {index === 0 ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <>
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-background/60 flex items-center justify-center group-hover:bg-background/40 transition-colors duration-300">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-balance">{video.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-balance">Recursos Adicionales</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Para más información sobre el clima espacial, visita el Centro de Visualización Científica de NASA
                Goddard y explora sus extensas colecciones de animaciones y visualizaciones de datos científicos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
