"use client"

import { useCallback, useRef, useEffect } from "react"

export function useSound() {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Only create AudioContext in browser environment
    if (typeof window !== "undefined") {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      } catch (error) {
        console.log("[v0] Web Audio API not supported")
      }
    }

    // Cleanup on unmount
    return () => {
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close()
      }
    }
  }, [])

  const playClick = useCallback(() => {
    const audioContext = audioContextRef.current
    if (!audioContext || audioContext.state === "closed") return

    try {
      // Resume context if suspended (required by some browsers)
      if (audioContext.state === "suspended") {
        audioContext.resume()
      }

      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = 800
      oscillator.type = "sine"

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.1)

      oscillator.onended = () => {
        oscillator.disconnect()
        gainNode.disconnect()
      }
    } catch (error) {
      console.log("[v0] Error playing click sound:", error)
    }
  }, [])

  const playWhoosh = useCallback(() => {
    const audioContext = audioContextRef.current
    if (!audioContext || audioContext.state === "closed") return

    try {
      // Resume context if suspended
      if (audioContext.state === "suspended") {
        audioContext.resume()
      }

      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.setValueAtTime(400, audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2)
      oscillator.type = "sawtooth"

      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.2)

      oscillator.onended = () => {
        oscillator.disconnect()
        gainNode.disconnect()
      }
    } catch (error) {
      console.log("[v0] Error playing whoosh sound:", error)
    }
  }, [])

  return { playClick, playWhoosh }
}
