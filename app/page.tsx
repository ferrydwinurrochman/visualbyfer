"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ChevronDown, Linkedin, Instagram, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import ContactButton from "@/components/contact-button"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; vx: number; vy: number; size: number }>
  >([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true)

    if (typeof window === "undefined") return

    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    // Initialize particles
    const initialParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * (window.innerWidth || 1200),
      y: Math.random() * (window.innerHeight || 800),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
    }))
    setParticles(initialParticles)

    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 300)

    return () => {
      window.removeEventListener("scroll", handleScroll)
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
          ctx.fillStyle = `rgba(59, 130, 246, ${0.3 + Math.sin(Date.now() * 0.001 + particle.id) * 0.2})`
          ctx.fill()

          // Draw connections to nearby particles
          prevParticles.forEach((otherParticle) => {
            const dx = newX - otherParticle.x
            const dy = newY - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(newX, newY)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`
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

  const featuredWorks = [
    {
      id: 1,
      category: "B2B Strategy",
      title: "B2B Strategic Marketing & Supply Chain Integration",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/amorenza.webp",
      brands: "Amorenza · JNE · Zealin",
      color: "from-purple-500/20 to-indigo-500/20",
      accentColor: "text-purple-300",
      borderColor: "border-purple-500/30",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      problem: "Fragmented data and operational silos between the fragrance supplier (Amorenza), manufacturing factory (Zealin), and logistics (JNE).",
      solution: "Developed an integrated B2B digital strategy and automated data tracking systems to sync the entire supply chain.",
      result: "Streamlined end-to-end operations from raw material sourcing to final consumer delivery.",
      tags: ["B2B Strategy", "Supply Chain", "Logistics Integration"],
    },
    {
      id: 2,
      category: "Brand Excellence",
      title: "Retail Growth: Fragrance & Fashion Branding",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/lutte.webp",
      brands: "Scentnice · Lutte · Rusteline",
      color: "from-blue-500/20 to-cyan-500/20",
      accentColor: "text-cyan-300",
      borderColor: "border-cyan-500/30",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      problem: "Low conversion rates and weak market positioning for retail brands in the highly competitive Fashion and Fragrance sectors.",
      solution: "Executed high-converting landing page designs, premium brand identity systems, and optimized marketplace ads (CPAS).",
      result: "Scaled daily sales volume for Scentnice, Lutte, and Rusteline while establishing a distinctive premium brand voice.",
      tags: ["Brand Excellence", "Conversion Rate Optimization", "E-commerce"],
    },
    {
      id: 3,
      category: "Performance Marketing",
      title: "Data-Driven Performance Marketing for Beauty",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/glowthinc.webp",
      brands: "Glowthinc · Mureeskin",
      color: "from-emerald-500/20 to-teal-500/20",
      accentColor: "text-emerald-300",
      borderColor: "border-emerald-500/30",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      problem: "High Customer Acquisition Costs (CAC) and inefficient ad spend across Meta and Google platforms.",
      solution: "Implemented advanced performance dashboards to monitor real-time LTV and CPA metrics.",
      result: "Optimized ad efficiency for Glowthinc and Mureeskin, resulting in a significant reduction in CPA and data-backed scaling.",
      tags: ["Performance Marketing", "Data Analytics", "Growth Hacking"],
    },
  ]

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden relative"
      style={{
        background: "hsla(213, 77%, 14%, 1)",
        background: "linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)",
      }}
    >
      {/* Interactive Canvas Background */}
      {isClient && (
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.6 }} />
      )}

      {/* Mouse Follower */}
      {isClient && (
        <div
          className="fixed w-6 h-6 bg-blue-400/30 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: `scale(${1 + Math.sin(Date.now() * 0.005) * 0.2})`,
          }}
        />
      )}

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-geometric"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          >
            <div
              className={`w-4 h-4 ${
                i % 3 === 0
                  ? "bg-blue-400/20 rotate-45"
                  : i % 3 === 1
                    ? "bg-cyan-400/20 rounded-full"
                    : "bg-purple-400/20"
              } backdrop-blur-sm`}
            />
          </div>
        ))}
      </div>

      <Navigation />
      <ContactButton />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
      >
        {/* Dynamic Background Gradient */}
        {isClient && (
          <div
            className="absolute inset-0 opacity-30 transition-all duration-1000"
            style={{
              background: `radial-gradient(circle at ${(mousePosition.x / (window.innerWidth || 1200)) * 100}% ${(mousePosition.y / (window.innerHeight || 800)) * 100}%, hsla(213, 77%, 24%, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsla(202, 27%, 55%, 0.3) 0%, transparent 50%)`,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
        )}

        {/* Animated Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-blue-400/20 rounded-full animate-pulse-ring"
              style={{
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-20 pt-8 md:pt-0">
          <div className="glass-card p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl animate-fade-in hover:bg-white/10 transition-all duration-500">
            <div className="mb-8">
              {/* Profile Image with Reduced Float */}
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-400 p-1 animate-gentle-float relative">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/images/ferry-profile.jpg"
                    alt="Ferry Dwi Nurrochman"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Interactive Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 hover:opacity-30 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </div>

              {/* Name with Interactive Text Effect */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white hover:scale-105 transition-transform duration-300 cursor-default">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Ferry Dwi Nurrochman
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-300 mb-2 animate-text-glow">Marketing Creative</p>
              <p className="text-lg text-white/80 mb-6">Bachelor's in Communication Studies</p>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
                Data-driven Marketing Strategist specializing in performance analytics and business operations. I combine branding creativity with technical expertise to build scalable, profitable systems for B2B and consumer brands. With a strong foundation in operational discipline, I help businesses measure campaign effectiveness, automate workflows, and optimize budget efficiency.
              </p>
            </div>

            {/* Interactive Buttons */}
<div className="flex flex-wrap justify-center gap-4 mb-8">
  <Button 
    asChild 
    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 animate-pulse-glow"
  >
    {/* aman jika download gagal/membuka preview */}
    <Link 
      href="https://drive.google.com/uc?export=download&id=1ThKvAvte5QpXD-DkMUd-q4rg7n7NlNt9"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Download className="w-4 h-4 mr-2" />
      Download CV
    </Link>
  </Button>
  
  {/* Tombol kedua */}
  <Button
    asChild
    variant="outline"
    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
  >
    <Link href="/portfolio">
      View Full Portfolio
    </Link>
  </Button>
</div>
            {/* Social Links with Magnetic Effect */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/ferry-dwi-nurrochman-0ba372152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform magnetic-hover"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/ferrydwn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform magnetic-hover"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-enhanced cursor-pointer">
          <ChevronDown className="w-8 h-8 text-white/60 hover:text-blue-400 transition-colors hover:scale-125 transform" />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-14 relative z-10">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-10">
            Trusted by Industry Leaders &amp; Growing Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            {[
              { src: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/amorenza.webp", alt: "Amorenza" },
              { src: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/jne.webp", alt: "JNE" },
              { src: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/zealin.webp", alt: "Zealin" },
              { src: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/scentnice.webp", alt: "Scentnice" },
              { src: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/lutte.webp", alt: "Lutte" },
              { src: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/rusteline.webp", alt: "Rusteline" },
              { src: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/glowthinc.webp", alt: "Glowthinc" },
              { src: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/mureeskin.webp", alt: "Mureeskin" },
            ].map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-14 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
              Featured Works
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Three strategic pillars — each built on real brands, real data, and measurable results.
            </p>
          </div>

          {/* Three Strategic Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {featuredWorks.map((work, index) => (
              <div
                key={work.id}
                className={`group relative rounded-2xl glass-card backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Hover background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Logo / Image area */}
                <div className="relative h-44 flex items-center justify-center p-8 overflow-hidden">
                  {/* Subtle radial glow behind logo */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-30`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/30" />
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={200}
                    height={120}
                    className="relative z-10 object-contain max-h-24 w-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className={`border text-xs font-semibold backdrop-blur-sm ${work.badgeColor}`}>
                      {work.category}
                    </Badge>
                  </div>
                </div>

                {/* Card body */}
                <div className="relative z-10 p-6 flex flex-col gap-4">
                  {/* Brands */}
                  <p className={`text-xs font-medium tracking-widest uppercase ${work.accentColor}`}>
                    {work.brands}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-blue-200 transition-colors">
                    {work.title}
                  </h3>

                  {/* Problem / Solution / Result */}
                  <ul className="flex flex-col gap-3 text-sm text-white/75">
                    <li className="flex gap-2">
                      <span className="shrink-0 font-bold text-red-400 mt-0.5">Problem:</span>
                      <span>{work.problem}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="shrink-0 font-bold text-blue-300 mt-0.5">Solution:</span>
                      <span>{work.solution}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="shrink-0 font-bold text-emerald-400 mt-0.5">Result:</span>
                      <span>{work.result}</span>
                    </li>
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {work.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/20 text-white/55 text-xs hover:border-white/40 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-xl" />
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects */}
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-3 text-lg hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 animate-pulse-glow">
                View All Projects
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">© 2025 Ferry Dwi Nurrochman. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        .glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        
        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-gentle-float {
          animation: gentle-float 4s ease-in-out infinite;
        }
        
        @keyframes float-geometric {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        .animate-float-geometric {
          animation: float-geometric 6s ease-in-out infinite;
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 3s ease-out infinite;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background: linear-gradient(-45deg, #3b82f6, #06b6d4, #8b5cf6, #ec4899);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(6, 182, 212, 0.5); }
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(6, 182, 212, 0.3); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        @keyframes bounce-enhanced {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0,-15px,0); }
          70% { transform: translate3d(0,-8px,0); }
          90% { transform: translate3d(0,-3px,0); }
        }
        
        .animate-bounce-enhanced {
          animation: bounce-enhanced 2s ease-in-out infinite;
        }
        
        @keyframes border-flow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-border-flow {
          animation: border-flow 3s linear infinite;
        }
        
        .magnetic-hover {
          transition: transform 0.3s ease;
        }
        
        .magnetic-hover:hover {
          transform: translateY(-8px) scale(1.02);
        }
      `}</style>
    </div>
  )
}
