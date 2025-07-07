"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Instagram, ExternalLink, Download, Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    {
      name: "Graphic Design",
      description:
        "Creating compelling visual identities, logos, and brand materials that communicate effectively and leave lasting impressions.",
      icon: "🎨",
    },
    {
      name: "Product Photography",
      description:
        "Professional product photography and videography for e-commerce, marketing campaigns, and brand storytelling.",
      icon: "📸",
    },
    {
      name: "Motion Graphics",
      description:
        "Bringing static designs to life with engaging animations and motion graphics using After Effects for various media.",
      icon: "🎬",
    },
    {
      name: "Social Media Management",
      description:
        "Developing comprehensive social media strategies, content creation, and community management across platforms.",
      icon: "📱",
    },
    {
      name: "Copywriting",
      description:
        "Crafting persuasive and engaging copy for marketing materials, social media, and advertising campaigns.",
      icon: "✍️",
    },
    {
      name: "Web Design",
      description:
        "Designing responsive and user-friendly websites through wireframing, prototyping, and modern web design principles.",
      icon: "🎯",
    },
    {
      name: "Power BI Dashboard",
      description:
        "Creating interactive and insightful business intelligence dashboards for data visualization and analytics.",
      icon: "📊",
    },
    {
      name: "Digital Marketing",
      description:
        "Managing comprehensive digital marketing campaigns including Facebook Ads, Google Ads, and TikTok Ads optimization.",
      icon: "🚀",
    },
  ]

  const tools = [
    { name: "Adobe Creative Suite", category: "Design" },
    { name: "After Effects", category: "Motion" },
    { name: "Figma", category: "UI/UX" },
    { name: "Power BI", category: "Analytics" },
    { name: "Facebook Ads Manager", category: "Marketing" },
    { name: "Google Ads", category: "Marketing" },
    { name: "TikTok Ads", category: "Marketing" },
    { name: "Canva Pro", category: "Design" },
  ]

  const projects = [
    {
      title: "Brand Identity Design",
      category: "Graphic Design",
      description: "Complete brand identity package including logo, business cards, and brand guidelines.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://drive.google.com/drive/folders/1xevc4Frp_teWsVG4Wgl4gotFGx_Dj88o?usp=share_link",
      tags: ["Branding", "Logo Design", "Print Design"],
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      description: "Comprehensive social media strategy and content creation for brand awareness.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://drive.google.com/drive/folders/12oqgbEYFnp3eyqrQ1WOF6IV2_F5OQsme?usp=share_link",
      tags: ["Social Media", "Content Strategy", "Marketing"],
    },
    {
      title: "Graphic Design Portfolio",
      category: "Graphic Design",
      description: "Collection of creative graphic design works including posters, flyers, and digital artwork.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://drive.google.com/drive/folders/1JyZD-VVhBfzWu9TQJB3rVzsy5c7xGR-l?usp=sharing",
      tags: ["Graphic Design", "Creative", "Visual Identity"],
    },
    {
      title: "Product Photography Campaign",
      category: "Photography",
      description: "High-end product photography for e-commerce and marketing materials.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://drive.google.com/drive/folders/15SdlJzjrENFByE60E-ip1tqk_nK76TEr?usp=share_link",
      tags: ["Photography", "Product", "E-commerce"],
    },
    {
      title: "Motion Graphics Explainer",
      category: "Motion Graphics",
      description: "Animated explainer video for product launch and marketing campaigns.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://drive.google.com/drive/folders/1BSxypjGhEtGRoHPoWamUvfGewXhXWRC9?usp=share_link",
      tags: ["Animation", "After Effects", "Video"],
    },
    {
      title: "Dashboard Design",
      category: "Data Visualization",
      description: "Interactive Power BI dashboard for business intelligence and analytics.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://drive.google.com/drive/folders/19I_cm6JSTfg5OOGc9JIRZxlrP8_GVcO9?usp=share_link",
      tags: ["Power BI", "Analytics", "Dashboard"],
    },
    {
      title: "Web Design Projects",
      category: "Web Design",
      description: "Responsive website designs from wireframes to high-fidelity prototypes.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://drive.google.com/drive/folders/1y_snLEse1-fvYzhmX3gr1av0aN7c4VN9?usp=share_link",
      tags: ["Web Design", "Responsive", "Prototyping"],
    },
    {
      title: "Digital Marketing Campaigns",
      category: "Digital Marketing",
      description: "Comprehensive digital marketing strategies and campaign results across multiple platforms.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://drive.google.com/drive/folders/1QvojCjoFfCdasa3rnnnO9DqFKHrrDUwb?usp=share_link",
      tags: ["Digital Marketing", "Campaigns", "Analytics"],
    },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const openPortfolioLink = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{
        background: "hsla(213, 77%, 14%, 1)",
        background: "linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)",
      }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portofolio Ferrydn
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["hero", "skills", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === section ? "text-blue-400" : "text-white/80"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {["hero", "skills", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 hover:text-blue-400 transition-colors"
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 animate-pulse"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background:
              "radial-gradient(circle at 20% 50%, hsla(213, 77%, 24%, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsla(202, 27%, 55%, 0.3) 0%, transparent 50%)",
          }}
        ></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="glass-card p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
            <div className="mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/ferry-profile.jpg"
                    alt="Ferry Dwi Nurrochman"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ferry Dwi Nurrochman
              </h1>
              <p className="text-xl md:text-2xl text-blue-300 mb-2">Marketing Creative</p>
              <p className="text-lg text-white/80 mb-6">Bachelor's in Communication Studies</p>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
                Passionate marketing creative specializing in graphic design, digital marketing, and visual
                storytelling. I transform ideas into compelling visual experiences that drive engagement and results.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                onClick={() => scrollToSection("portfolio")}
              >
                View Portfolio
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/ferry-dwi-nurrochman-0ba372152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/ferrydwn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-blue-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Tools
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              My expertise spans across various creative and marketing disciplines
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="glass-card p-6 backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold mb-3 text-white">{skill.name}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Tools */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8 text-white">Tools I Use</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <Badge
                  key={tool.name}
                  variant="secondary"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors px-4 py-2"
                >
                  {tool.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio Projects
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A showcase of my creative work and successful campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="glass-card backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                onClick={() => openPortfolioLink(project.link)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-white/20 text-white/60 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Ready to bring your creative vision to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="glass-card p-6 backdrop-blur-xl bg-white/5 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p className="text-white">Ferrydwn@icloud.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Phone</p>
                      <p className="text-white">+62897-7400-606</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Location</p>
                      <p className="text-white">Cirebon, Indonesia</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6 backdrop-blur-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/ferry-dwi-nurrochman-0ba372152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/ferrydwn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="glass-card p-8 backdrop-blur-xl bg-white/5 border border-white/10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                    <Input
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Subject</label>
                  <Input
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <Textarea
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 min-h-[120px]"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 py-3">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
