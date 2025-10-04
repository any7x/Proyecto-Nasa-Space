export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-xl font-bold">★</span>
              </div>
              <span className="text-xl font-bold">Historias Estelares</span>
            </div>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Explorando el clima espacial a través de los ojos de los terrícolas
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Recursos NASA</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://science.nasa.gov/heliophysics/focus-areas/space-weather/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Space Weather
                </a>
              </li>
              <li>
                <a
                  href="https://science.nasa.gov/sun/solar-storms-and-flares/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Solar Storms & Flares
                </a>
              </li>
              <li>
                <a
                  href="https://svs.gsfc.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Scientific Visualization Studio
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Sobre este Proyecto</h3>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Contenido educativo basado en investigaciones y recursos de la NASA. Creado para inspirar curiosidad sobre
              el cosmos que nos rodea.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 Historias Estelares. Contenido educativo basado en recursos de NASA.</p>
        </div>
      </div>
    </footer>
  )
}
