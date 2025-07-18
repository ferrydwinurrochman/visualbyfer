"use client"

import { useEffect, useRef, useState } from "react"

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; vx: number; vy: number; size: number }>
  >([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true)

    if (typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Initialize particles only on client side
    const initialParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * (window.innerWidth || 1200),
      y: Math.random() * (window.innerHeight || 800),
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      size: Math.random() * 2 + 1,
    }))
    setParticles(initialParticles)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Particle animation
  useEffect(() => {
    if (!isClient || typeof window === "undefined") return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Update position
          let newX = particle.x + particle.vx
          let newY = particle.y + particle.vy

          // Bounce off edges
          if (newX <= 0 || newX >= canvas.width) particle.vx *= -1
          if (newY <= 0 || newY >= canvas.height) particle.vy *= -1

          newX = Math.max(0, Math.min(canvas.width, newX))
          newY = Math.max(0, Math.min(canvas.height, newY))

          // Draw particle
          ctx.beginPath()
          ctx.arc(newX, newY, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(59, 130, 246, ${0.2 + Math.sin(Date.now() * 0.001 + particle.id) * 0.1})`
          ctx.fill()

          // Draw connections to nearby particles
          prevParticles.forEach((otherParticle) => {
            const dx = newX - otherParticle.x
            const dy = newY - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 80) {
              ctx.beginPath()
              ctx.moveTo(newX, newY)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 * (1 - distance / 80)})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          })

          return { ...particle, x: newX, y: newY }
        }),
      )

      requestAnimationFrame(animateParticles)
    }

    animateParticles()
  }, [isClient])

  // Don't render anything on server side
  if (!isClient) {
    return null
  }

  return (
    <>
      {/* Interactive Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.4 }} />

      {/* Mouse Follower */}
      <div
        className="fixed w-4 h-4 bg-blue-400/20 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${1 + Math.sin(Date.now() * 0.003) * 0.3})`,
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-geometric"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i * 0.3}s`,
            }}
          >
            <div
              className={`w-3 h-3 ${
                i % 3 === 0
                  ? "bg-blue-400/15 rotate-45"
                  : i % 3 === 1
                    ? "bg-cyan-400/15 rounded-full"
                    : "bg-purple-400/15"
              } backdrop-blur-sm`}
            />
          </div>
        ))}
      </div>

      {/* Dynamic Background Gradient */}
      <div
        className="fixed inset-0 opacity-20 transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x / (typeof window !== "undefined" ? window.innerWidth : 1200)) * 100}% ${(mousePosition.y / (typeof window !== "undefined" ? window.innerHeight : 800)) * 100}%, hsla(213, 77%, 24%, 0.3) 0%, transparent 50%)`,
        }}
      />
    </>
  )
}
