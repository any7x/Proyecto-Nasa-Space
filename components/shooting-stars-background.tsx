"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
}

export function ShootingStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const stars: Star[] = []
    const maxStars = 50

    // Create static stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 0,
        speed: 0,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    let shootingStars: Star[] = []

    const createShootingStar = () => {
      if (shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 3 + 2,
          opacity: 1,
        })
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(3, 7, 18, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw static stars
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fillRect(star.x, star.y, 2, 2)
      })

      // Draw and update shooting stars
      shootingStars = shootingStars.filter((star) => {
        const gradient = ctx.createLinearGradient(star.x, star.y, star.x + star.length, star.y + star.length)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
        gradient.addColorStop(0.5, `rgba(147, 197, 253, ${star.opacity * 0.6})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(star.x + star.length, star.y + star.length)
        ctx.stroke()

        star.x += star.speed * 2
        star.y += star.speed * 2
        star.opacity -= 0.01

        return star.opacity > 0 && star.x < canvas.width && star.y < canvas.height
      })

      requestAnimationFrame(animate)
    }

    animate()

    const shootingStarInterval = setInterval(createShootingStar, 2000)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      clearInterval(shootingStarInterval)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
