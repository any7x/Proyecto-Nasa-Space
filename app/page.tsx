import { HeroSection } from "@/components/hero-section"
import { SpaceWeatherSection } from "@/components/space-weather-section"
import { SolarStormsSection } from "@/components/solar-storms-section"
import { SolarSystemMap } from "@/components/solar-system-map"
import { InteractiveGallery } from "@/components/interactive-gallery"
import { VideoSection } from "@/components/video-section"
import { ImpactSection } from "@/components/impact-section"
import { CanadaSpaceWeatherSection } from "@/components/canada-space-weather-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SpaceBackground } from "@/components/space-background"
import { AccordionSection } from "@/components/accordion-section"
import { SpacePhenomenaDropdown } from "@/components/space-phenomena-dropdown"

export default function Home() {
  const spaceWeatherFAQ = [
    {
      title: "¿Qué es el Clima Espacial?",
      content:
        "El clima espacial se refiere a las condiciones ambientales en el espacio influenciadas por el Sol y el viento solar. Incluye fenómenos como erupciones solares, eyecciones de masa coronal y tormentas geomagnéticas que pueden afectar la magnetosfera, ionosfera y termosfera de la Tierra.",
      icon: "🌞",
    },
    {
      title: "¿Cómo Afectan las Tormentas Solares a la Tierra?",
      content:
        "Las tormentas solares pueden interrumpir operaciones satelitales, navegación GPS, comunicaciones de radio y redes eléctricas. También crean hermosas auroras en latitudes altas. Las partículas cargadas del Sol interactúan con el campo magnético terrestre, causando perturbaciones geomagnéticas.",
      icon: "⚡",
    },
    {
      title: "¿Qué son las Eyecciones de Masa Coronal?",
      content:
        "Las Eyecciones de Masa Coronal (CME) son explosiones masivas de viento solar y campos magnéticos que se elevan sobre la corona solar o se liberan al espacio. Cuando se dirigen hacia la Tierra, pueden causar tormentas geomagnéticas significativas y espectaculares auroras.",
      icon: "💫",
    },
    {
      title: "¿Podemos Predecir el Clima Espacial?",
      content:
        "¡Sí! Organizaciones como NASA, NOAA y la Agencia Espacial Canadiense monitorean el Sol las 24 horas usando satélites y observatorios terrestres. Pueden predecir tormentas solares y emitir alertas para proteger infraestructura crítica y astronautas en el espacio.",
      icon: "🛰️",
    },
  ]

  const spaceWeatherPhenomena = [
    {
      title: "Erupciones Solares",
      content:
        "Las erupciones solares son explosiones intensas de radiación electromagnética en la atmósfera del Sol. Pueden durar desde minutos hasta horas y liberar tanta energía como mil millones de bombas de hidrógeno. Las erupciones clase X son las más poderosas y pueden causar apagones de radio en todo el lado iluminado de la Tierra.",
      icon: "☀️",
    },
    {
      title: "Viento Solar",
      content:
        "El viento solar es un flujo constante de partículas cargadas que emana del Sol a velocidades de hasta 900 km/s. Cuando estas partículas interactúan con el campo magnético de la Tierra, pueden causar auroras boreales y australes, así como interferencias en sistemas de comunicación.",
      icon: "🌊",
    },
    {
      title: "Tormentas Geomagnéticas",
      content:
        "Las tormentas geomagnéticas ocurren cuando el viento solar causa cambios importantes en el campo magnético terrestre. Pueden durar desde horas hasta días y afectar satélites, sistemas de navegación GPS, redes eléctricas y comunicaciones de radio. La escala G va de G1 (menor) a G5 (extrema).",
      icon: "🧲",
    },
    {
      title: "Radiación Solar",
      content:
        "Los eventos de radiación solar ocurren cuando partículas emitidas por el Sol se aceleran a velocidades cercanas a la luz. Estas partículas de alta energía pueden ser peligrosas para astronautas y pasajeros de vuelos polares, además de dañar componentes electrónicos en satélites.",
      icon: "☢️",
    },
  ]

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <SpaceBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />

        <SpacePhenomenaDropdown />

        <SpaceWeatherSection />
        <SolarStormsSection />

        <AccordionSection title="Preguntas Frecuentes sobre Clima Espacial" items={spaceWeatherFAQ} />

        <SolarSystemMap />
        <InteractiveGallery />
        <VideoSection />
        <ImpactSection />
        <CanadaSpaceWeatherSection />
        <Footer />
      </div>
    </main>
  )
}
