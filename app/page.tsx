"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ChevronDown, Linkedin, Instagram, ExternalLink, Play } from "lucide-react"
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

  const portfolioItems = [
    // 2 LARGE PORTRAIT ITEMS
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      description:
        "Complete visual identity system for modern startups including logo design, brand guidelines, and marketing materials",
      image: "/placeholder.svg?height=600&width=400",
      size: "portrait", // spans 1 column, 2 rows
      color: "from-purple-500/20 to-pink-500/20",
      icon: "🎨",
    },
    {
      id: 2,
      title: "Digital Marketing Campaign",
      category: "Marketing",
      description: "Comprehensive digital marketing strategy with multi-platform campaigns and performance analytics",
      image: "/placeholder.svg?height=600&width=400",
      size: "portrait", // spans 1 column, 2 rows
      color: "from-blue-500/20 to-cyan-500/20",
      icon: "🚀",
    },

    // 4 MEDIUM ITEMS
    {
      id: 3,
      title: "Motion Graphics Reel",
      category: "Animation",
      description: "Dynamic animations and motion graphics for social media campaigns",
      image: "/placeholder.svg?height=300&width=400",
      size: "medium",
      color: "from-indigo-500/20 to-purple-500/20",
      icon: "🎬",
      isVideo: true,
    },
    {
      id: 4,
      title: "Product Photography",
      category: "Photography",
      description: "High-end product photography for e-commerce and marketing",
      image: "/placeholder.svg?height=300&width=400",
      size: "medium",
      color: "from-orange-500/20 to-red-500/20",
      icon: "📸",
    },
    {
      id: 5,
      title: "Web Design Projects",
      category: "UI/UX",
      description: "Responsive website designs and user interface concepts",
      image: "/placeholder.svg?height=300&width=400",
      size: "medium",
      color: "from-green-500/20 to-emerald-500/20",
      icon: "💻",
    },
    {
      id: 6,
      title: "Power BI Dashboard",
      category: "Data Visualization",
      description: "Interactive business intelligence dashboards and analytics",
      image: "/placeholder.svg?height=300&width=400",
      size: "medium",
      color: "from-cyan-500/20 to-blue-500/20",
      icon: "📊",
    },

    // 3 SMALL ITEMS
    {
      id: 7,
      title: "Logo Collection",
      category: "Branding",
      description: "Minimalist logo designs for various industries",
      image: "/placeholder.svg?height=250&width=300",
      size: "small",
      color: "from-yellow-500/30 to-orange-500/30",
      icon: "⚡",
    },
    {
      id: 8,
      title: "Social Media Content",
      category: "Design",
      description: "Instagram posts and story templates",
      image: "/placeholder.svg?height=250&width=300",
      size: "small",
      color: "from-pink-500/30 to-rose-500/30",
      icon: "📱",
    },
    {
      id: 9,
      title: "Print Design",
      category: "Graphic Design",
      description: "Brochures, flyers, and marketing materials",
      image: "/placeholder.svg?height=250&width=300",
      size: "small",
      color: "from-teal-500/30 to-green-500/30",
      icon: "📄",
    },

    // 1 LARGE HORIZONTAL ITEM (at bottom)
    {
      id: 10,
      title: "Video Editing Projects",
      category: "Video Production",
      description:
        "Professional video editing for marketing campaigns, social media content, promotional materials, and brand storytelling",
      image: "/placeholder.svg?height=300&width=800",
      size: "horizontal", // spans multiple columns, 1 row
      color: "from-red-500/20 to-orange-500/20",
      icon: "🎥",
      isVideo: true,
    },
  ]

  const openPortfolioLink = (id: number) => {
    console.log(`Opening portfolio item ${id}`)
  }

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
                Data-driven marketing professional with experience leading promotional strategies and operations. Currently serving as Head of Marketing, combining branding creativity with technical analytical skills to measure campaign effectiveness and budget efficiency. Possesses a strong operational background, discipline, and high adaptability in developing measurable and profitable business strategies.
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

      {/* Portfolio Bento Grid Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
              Featured Work
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A curated selection of my best creative projects and campaigns
            </p>
          </div>

          {/* Interactive Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`
                  group relative overflow-hidden rounded-2xl cursor-pointer
                  glass-card backdrop-blur-xl bg-white/5 border border-white/10
                  hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]
                  hover:shadow-2xl hover:shadow-blue-500/20
                  ${item.size === "portrait" ? "md:col-span-1 lg:col-span-1 md:row-span-2" : ""}
                  ${item.size === "medium" ? "md:col-span-2 lg:col-span-2" : ""}
                  ${item.size === "small" ? "md:col-span-1 lg:col-span-1" : ""}
                  ${item.size === "horizontal" ? "md:col-span-4 lg:col-span-6" : ""}
                  ${isVisible ? "animate-slide-up" : "opacity-0"}
                  magnetic-hover
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onClick={() => openPortfolioLink(item.id)}
              >
                {/* Interactive Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/50 to-cyan-400/50 animate-border-flow" />
                </div>

                {/* Image with Parallax Effect */}
                <div className="relative h-48 md:h-full min-h-[200px] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Dynamic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Interactive Elements */}
                  {item.isVideo && (
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-glow">
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>
                  )}

                  {/* Category Badge - back to original position */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 hover:bg-white/30 transition-colors hover:scale-105 transform">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                {/* Content with Slide Animation */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2 group-hover:animate-bounce">{item.icon}</span>
                    <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm mb-3 group-hover:text-white/90 transition-colors">
                    {item.description}
                  </p>

                  {/* Interactive Action Button */}
                  <div className="flex items-center justify-between">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <Button
                        size="sm"
                        className="bg-blue-600/80 hover:bg-blue-600 text-white border-0 backdrop-blur-sm hover:scale-110 transition-all duration-300"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Magnetic Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl animate-pulse-glow" />
                </div>
              </div>
            ))}
          </div>

          {/* Interactive View More Button */}
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
