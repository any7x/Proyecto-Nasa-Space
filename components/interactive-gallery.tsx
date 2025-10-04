"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function InteractiveGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/aurora-borealis-northern-lights.jpg",
      title: "Aurora Boreal",
      description:
        "Las auroras son creadas cuando partículas solares chocan con la atmósfera terrestre, creando espectaculares cortinas de luz en los polos.",
    },
    {
      src: "/solar-corona-eclipse.jpg",
      title: "Corona Solar",
      description:
        "La corona solar es la atmósfera exterior del Sol, visible durante los eclipses totales. Alcanza temperaturas de millones de grados.",
    },
    {
      src: "/earth-magnetosphere-protection.jpg",
      title: "Magnetosfera Terrestre",
      description:
        "El campo magnético de la Tierra nos protege del viento solar, desviando partículas cargadas y creando un escudo invisible.",
    },
    {
      src: "/solar-prominence-eruption.jpg",
      title: "Prominencia Solar",
      description:
        "Enormes arcos de plasma que se elevan desde la superficie del Sol, siguiendo las líneas del campo magnético.",
    },
    {
      src: "/satellite-earth-orbit-space.jpg",
      title: "Satélites en Órbita",
      description:
        "Los satélites son vulnerables al clima espacial. Las tormentas solares pueden dañar sus sistemas electrónicos.",
    },
    {
      src: "/sun-surface-solar-activity.jpg",
      title: "Superficie Solar",
      description:
        "La superficie del Sol está en constante movimiento, con manchas solares, fulguraciones y erupciones.",
    },
  ]

  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">Galería Interactiva</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Explora imágenes fascinantes del clima espacial y sus efectos en nuestro planeta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
              onClick={() => setSelectedImage(index)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-balance">{image.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-balance">{images[selectedImage].title}</DialogTitle>
                <DialogDescription className="text-pretty leading-relaxed">
                  {images[selectedImage].description}
                </DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
