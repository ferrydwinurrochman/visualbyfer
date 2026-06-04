"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"
import Image from "next/image"
import LightNav from "@/components/light-nav"

export default function PortfolioPage() {
  const projects = [
    {
      title: "Strategic Branding",
      category: "Graphic Design",
      description: "Complete brand identity & strategic package including logo, business cards, and guidelines.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/brandcampaign.webp",
      link: "https://drive.google.com/drive/folders/1xevc4Frp_teWsVG4Wgl4gotFGx_Dj88o?usp=share_link",
      tags: ["Branding", "Logo Design", "Brand Vision"],
      color: "from-purple-500/20 to-pink-500/20",
      icon: "🎨",
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      description: "Comprehensive social media strategy and content creation for brand awareness.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/kampanyesosmed.webp",
      link: "https://drive.google.com/drive/folders/12oqgbEYFnp3eyqrQ1WOF6IV2_F5OQsme?usp=share_link",
      tags: ["Social Media", "Content Strategy", "Marketing"],
      color: "from-blue-500/20 to-cyan-500/20",
      icon: "📱",
    },
    {
      title: "Graphic Design Portfolio",
      category: "Graphic Design",
      description: "Collection of creative graphic design works including posters, flyers, and digital artwork.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/graphicdesign.webp",
      link: "https://drive.google.com/drive/folders/1JyZD-VVhBfzWu9TQJB3rVzsy5c7xGR-l?usp=sharing",
      tags: ["Graphic Design", "Creative", "Visual Identity"],
      color: "from-green-500/20 to-emerald-500/20",
      icon: "🎨",
    },
    {
      title: "Product Photography Campaign",
      category: "Photography",
      description: "High-end product photography for e-commerce and marketing materials.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Terraessance.webp",
      link: "https://drive.google.com/drive/folders/15SdlJzjrENFByE60E-ip1tqk_nK76TEr?usp=share_link",
      tags: ["Photography", "Product", "E-commerce"],
      color: "from-orange-500/20 to-red-500/20",
      icon: "📸",
    },
    {
      title: "Strategic Planning",
      category: "Plan & Analysis",
      description: "Strategic Plan for Brand & Bussiness For Efectively Growth Revenue.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/shopee-1.webp",
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
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/analisis-1.webp",
      link: "https://drive.google.com/drive/folders/19I_cm6JSTfg5OOGc9JIRZxlrP8_GVcO9?usp=share_link",
      tags: ["Power BI", "Excel", "Dashboard"],
      color: "from-yellow-500/20 to-orange-500/20",
      icon: "📊",
    },
    {
      title: "Web Design Projects",
      category: "Web Design",
      description: "Responsive website designs from wireframes to high-fidelity prototypes.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/web-1.webp",
      link: "https://linktr.ee/visualbyfer",
      tags: ["Web Design", "Responsive", "Prototyping"],
      color: "from-pink-500/20 to-rose-500/20",
      icon: "🎯",
    },
    {
      title: "Digital Marketing Campaigns",
      category: "Digital Marketing",
      description: "Comprehensive digital marketing strategies and campaign results across multiple platforms.",
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/digmar-2.webp",
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
    <div className="min-h-screen bg-background text-foreground relative">
      <LightNav />

      <div className="pt-24 pb-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Portfolio Projects
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my creative work and successful campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden bg-white border border-border rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-pointer h-full flex flex-col"
                onClick={() => openPortfolioLink(project.link)}
              >
                <div className="relative overflow-hidden h-40 bg-slate-50">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Video Play Button */}
                  {project.isVideo && (
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-foreground ml-0.5" />
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary border-primary/30"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{project.icon}</span>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-border text-muted-foreground text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 w-full mt-2 group-hover:scale-105 transition-transform"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
