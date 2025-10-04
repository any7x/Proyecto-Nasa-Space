"use client"

import { useState } from "react"
import { useSound } from "@/hooks/use-sound"

interface RetroAvatarProps {
  name: string
  role: string
  onClick?: () => void
}

export function RetroAvatar({ name, role, onClick }: RetroAvatarProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { playClick } = useSound()

  const handleClick = () => {
    playClick()
    onClick?.()
  }

  return (
    <div
      className="flex flex-col items-center gap-3 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div
        className={`relative w-24 h-24 transition-all duration-300 ${isHovered ? "scale-110 rotate-3" : "scale-100"}`}
      >
        {/* 90s style pixelated border */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary p-1 rounded-lg animate-pulse-glow">
          <div className="w-full h-full bg-card rounded-lg overflow-hidden">
            {/* Retro avatar with geometric shapes */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="text-4xl font-bold text-primary">{name.charAt(0)}</div>
            </div>
          </div>
        </div>
        {/* 90s style corner decorations */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-primary rounded-sm" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-sm" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary rounded-sm" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-sm" />
      </div>
      <div className="text-center">
        <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}

export function RetroAvatarGrid() {
  const experts = [
    { name: "Dr. Solar", role: "Heliofísico" },
    { name: "Aurora", role: "Experta en Clima Espacial" },
    { name: "Cosmos", role: "Astrofísico" },
    { name: "Nova", role: "Analista de Tormentas Solares" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
      {experts.map((expert) => (
        <RetroAvatar key={expert.name} name={expert.name} role={expert.role} />
      ))}
    </div>
  )
}
