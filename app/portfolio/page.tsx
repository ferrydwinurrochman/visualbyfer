"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play, Eye, Heart } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import ContactButton from "@/components/contact-button"
import InteractiveBackground from "@/components/interactive-background"

export default function PortfolioPage() {
  const projects = [
    {
      title: "Strategic Branding",
      category: "Graphic Design",
      description: "Complete brand identity & strategic package including logo, business cards, and guidelines.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/blob/main/Foto%20Porto/logo-1.webp",
      link: "https://drive.google.com/drive/folders/1xevc4Frp_teWsVG4Wgl4gotFGx_Dj88o?usp=share_link",
      tags: ["Branding", "Logo Design", "Brand Vision"],
      color: "from-purple-500/20 to-pink-500/20",
      icon: "🎨",
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      description: "Comprehensive social media strategy and content creation for brand awareness.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/blob/main/Foto%20Porto/digmar-1.webp",
      link: "https://drive.google.com/drive/folders/12oqgbEYFnp3eyqrQ1WOF6IV2_F5OQsme?usp=share_link",
      tags: ["Social Media", "Content Strategy", "Marketing"],
      color: "from-blue-500/20 to-cyan-500/20",
      icon: "📱",
    },
    {
      title: "Graphic Design Portfolio",
      category: "Graphic Design",
      description: "Collection of creative graphic design works including posters, flyers, and digital artwork.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://drive.google.com/drive/folders/1JyZD-VVhBfzWu9TQJB3rVzsy5c7xGR-l?usp=sharing",
      tags: ["Graphic Design", "Creative", "Visual Identity"],
      color: "from-green-500/20 to-emerald-500/20",
      icon: "🎨",
    },
    {
      title: "Product Photography Campaign",
      category: "Photography",
      description: "High-end product photography for e-commerce and marketing materials.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://drive.google.com/drive/folders/15SdlJzjrENFByE60E-ip1tqk_nK76TEr?usp=share_link",
      tags: ["Photography", "Product", "E-commerce"],
      color: "from-orange-500/20 to-red-500/20",
      icon: "📸",
    },
    {
      title: "Strategic Planning",
      category: "Plan & Analysis",
      description: "Strategic Plan for Brand & Bussiness For Efectively Growth Revenue.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/blob/main/Foto%20Porto/brand-1.webp",
      link: "https://drive.google.com/drive/folders/1BSxypjGhEtGRoHPoWamUvfGewXhXWRC9?usp=share_link",
      tags: ["Strategy", "Plan", "Analysis"],
      color: "from-indigo-500/20 to-purple-500/20",
      icon: "📈",
      isVideo: true,
    },
    {
      title: "Dashboard Design",
      category: "Data Visualization",
      description: "Interactive data dashboard for business intelligence and analytics.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/blob/main/Foto%20Porto/analisis-1.webp",
      link: "https://drive.google.com/drive/folders/19I_cm6JSTfg5OOGc9JIRZxlrP8_GVcO9?usp=share_link",
      tags: ["Power BI", "Excel", "Dashboard"],
      color: "from-yellow-500/20 to-orange-500/20",
      icon: "📊",
    },
    {
      title: "Web Design Projects",
      category: "Web Design",
      description: "Responsive website designs from wireframes to high-fidelity prototypes.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/blob/main/Foto%20Porto/web-1.webp",
      link: "https://linktr.ee/visualbyfer",
      tags: ["Web Design", "Responsive", "Prototyping"],
      color: "from-pink-500/20 to-rose-500/20",
      icon: "🎯",
    },
    {
      title: "Digital Marketing Campaigns",
      category: "Digital Marketing",
      description: "Comprehensive digital marketing strategies and campaign results across multiple platforms.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/blob/main/Foto%20Porto/digmar-2.webp",
      link: "https://drive.google.com/drive/folders/1QvojCjoFfCdasa3rnnnO9DqFKHrrDUwb?usp=share_link",
      tags: ["Digital Marketing", "Campaigns", "Analytics"],
      color: "from-cyan-500/20 to-blue-500/20",
      icon: "🚀",
    },
  ]

  const openPortfolioLink = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        background: "hsla(213, 77%, 14%, 1)",
        background: "linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)",
      }}
    >
      <InteractiveBackground />
      <Navigation />
      <ContactButton />

      <div className="pt-24 pb-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolio Projects
              </span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto animate-text-glow">
              A showcase of my creative work and successful campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="glass-card backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 group cursor-pointer magnetic-hover hover:shadow-2xl hover:shadow-blue-500/20"
                onClick={() => openPortfolioLink(project.link)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Interactive Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Video Play Button */}
                  {project.isVideo && (
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-glow">
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:scale-105 transition-transform"
                    >
                      {project.category}
                    </Badge>
                  </div>

                  {/* Stats */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 hover:scale-110 transition-transform">
                      <Eye className="w-3 h-3 text-white" />
                      <span className="text-xs text-white">{project.stats.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 hover:scale-110 transition-transform">
                      <Heart className="w-3 h-3 text-white" />
                      <span className="text-xs text-white">{project.stats.likes}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 relative z-10">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2 group-hover:animate-bounce">{project.icon}</span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-white/70 mb-4 text-sm group-hover:text-white/90 transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/20 text-white/60 text-xs hover:scale-105 transition-transform"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
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

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-xl" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        
        .glass-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        @keyframes float-geometric {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }
        
        .animate-float-geometric {
          animation: float-geometric 6s ease-in-out infinite;
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(6, 182, 212, 0.3); }
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.6), 0 0 35px rgba(6, 182, 212, 0.3); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
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
