"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Linkedin, Instagram, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setTimeout(() => setIsVisible(true), 300)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      id: 1,
      title: "JNE - 6 Years Career Progression",
      description: "A 6+ year journey of consistent promotion and operational excellence. Started at the frontlines handling high-volume transactions as a Sales Counter Officer, advanced to Marketing Staff executing regional brand activations, and ultimately promoted to Sales Support Analyst to build automated Power BI and Excel dashboards for complex sales data.",
      tags: ["Operations", "Marketing Activation", "Data Analysis", "Power BI"],
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/jne.webp",
    },
    {
      id: 2,
      title: "Mureeskin Market Expansion",
      description: "Spearheaded the 'Advanced Blemish Defense' campaign, optimizing marketplace conversion funnels exclusively for Shopee, resulting in lower CAC and higher ROAS.",
      tags: ["Shopee", "Meta Ads", "Power BI"],
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/mureeskin.webp",
    },
    {
      id: 3,
      title: "Lutte & Scentnice",
      description: "Brand development and community building for 'Lutters' alongside executing a high-converting '3 for 99k' bundling promo for the Scentnice Black Series.",
      tags: ["Brand Strategy", "Copywriting", "Web Design"],
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/scentnice.webp",
    },
    {
      id: 4,
      title: "AdPilots Prototype",
      description: "A SaaS prototype dashboard designed to automate ad management workflows.",
      tags: ["React", "Node.js", "Tailwind"],
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/glowthinc.webp",
    },
    {
      id: 5,
      title: "FullCircle Digital",
      description: "Founded a 360-degree digital marketing agency focusing on end-to-end e-commerce operational integration.",
      tags: ["Business Development", "Management"],
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/amorenza.webp",
    },
  ]

  const techStack = [
    "Microsoft Power BI",
    "Excel",
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "Shopee",
    "React",
    "Node.js",
    "Figma",
    "Tailwind CSS",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating Navigation Pill */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-card px-8 py-4 rounded-full flex items-center gap-8 shadow-lg">
          <Link href="/" className="font-bold text-sm tracking-tight hover:text-primary transition-colors">FD.</Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/skills" className="hover:text-primary transition-colors">Skills</Link>
            <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/portfolio" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className={`space-y-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              <div className="space-y-3">
                <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                  HELLO, I AM
                </p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Ferry Dwi Nurrochman<span className="text-primary">.</span>
                </h1>
              </div>

              <div className="inline-block">
                <Badge variant="secondary" className="bg-secondary/10 text-foreground border-secondary/20 text-base py-2 px-4">
                  Independent Marketing Strategist & Data Analyst
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Building scalable, profitable systems for B2B and consumer brands. I combine operational discipline with data analytics to automate workflows, optimize budget efficiency, and drive e-commerce growth.
              </p>

              <div className="flex gap-4 pt-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base">
                  <Link href="/portfolio">
                    <Download className="w-4 h-4 mr-2" />
                    View Full Portfolio
                  </Link>
                </Button>
                <Button variant="outline" className="px-8 py-6 text-base border-primary/20 hover:bg-primary/5">
                  <Link href="/contact" className="flex items-center gap-2">
                    Contact Me
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className={`flex justify-center md:justify-end ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
              <div className="relative w-full max-w-sm">
                {/* Soft background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-2xl" />
                
                {/* Image container */}
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-100 p-8 shadow-lg">
                  <Image
                    src="/images/ferry-profile.jpg"
                    alt="Ferry Dwi Nurrochman"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Tech & Tools Marquee */}
      <section id="experience" className="py-20 bg-white/40 backdrop-blur-sm border-y border-border">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-12">
            Tech Stack & Tools
          </p>
          
          <div className="relative overflow-hidden">
            {/* Marquee Container */}
            <div className="flex gap-8 animate-marquee">
              {[...techStack, ...techStack].map((tech, idx) => (
                <div key={idx} className="flex-shrink-0 whitespace-nowrap">
                  <Badge variant="outline" className="bg-white/60 text-foreground border-primary/20 px-4 py-2 text-sm font-medium">
                    {tech}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Gradient Fade Effect */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real brands, real data, measurable results.
            </p>
          </div>

          {/* Projects Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-40 bg-slate-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={120}
                    className="object-contain max-h-28 w-auto group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/40 backdrop-blur-sm border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Ferry Dwi Nurrochman, a Marketing Strategist and Data Analyst with a passion for building scalable systems. With a background in Communication Studies, I&apos;ve developed expertise in combining operational discipline with technical analytics.
              </p>
              <p>
                Over the years, I&apos;ve worked with B2B and consumer brands to automate workflows, optimize marketing budgets, and drive e-commerce growth. My approach integrates brand strategy, performance marketing, and business operations to deliver measurable results.
              </p>
              <p>
                When I&apos;m not strategizing or analyzing data, I&apos;m exploring new tools, mentoring aspiring marketers, or thinking about the next big system that can scale a business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Let&apos;s Work Together</h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Let&apos;s talk about how I can help build scalable systems for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="mailto:hello@ferrydn.com">Send Email</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                <a href="https://www.linkedin.com/in/ferry-dwi-nurrochman-0ba372152" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-8 pt-12">
              <a
                href="https://www.linkedin.com/in/ferry-dwi-nurrochman-0ba372152"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/ferrydwn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white/20 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Ferry Dwi Nurrochman. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
