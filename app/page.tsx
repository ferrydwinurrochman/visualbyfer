"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Linkedin, Instagram, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProjectsCarousel from "@/components/projects-carousel"
import LightNav from "@/components/light-nav"

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
      title: "JNE Cirebon – Data & Marketing Acceleration",
      description: "Merancang infrastruktur pelaporan data otomatis menggunakan Power BI dan Advanced Excel. Dasbor analitik ini berhasil memfasilitasi pengambilan keputusan strategis klien korporat yang berdampak pada peningkatan omset hingga 25%. Di sisi kreatif, mengeksekusi aktivasi digital yang mencetak pertumbuhan engagement dan pengikut media sosial sebesar 10% setiap bulannya.",
      tags: ["Power BI", "Data Analytics", "Social Media Management"],
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/jne.webp",
    },
    {
      id: 2,
      title: "Amorenza Group – 360-Degree Brand Orchestration",
      description: "Memimpin strategi komunikasi pemasaran digital dan mengorkestrasi lintas divisi (Creative, Marketplace, Affiliate) untuk ekosistem B2B Maklon dan B2C. Mengeksekusi kampanye iklan (Meta, TikTok, Google Ads) berbasis optimasi pixel tracking yang presisi guna memaksimalkan ROAS, sembari merumuskan strategi positioning merek yang kuat untuk lini kosmetik dan parfum.",
      tags: ["Performance Marketing", "Brand Strategy", "Team Leadership"],
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/amorenza.webp",
    },
    {
      id: 3,
      title: "FullCircle Digital – E-Commerce Growth Strategy",
      description: "Menyediakan layanan konsultasi spesialis pemasaran dan ekspansi marketplace untuk berbagai brand lifestyle & beauty. Mengeksekusi struktur kampanye promosi, optimasi funneling konversi tingkat lanjut, dan desain visual antarmuka (UI/UX) guna mendorong visibilitas serta dominasi brand di pasar digital.",
      tags: ["E-Commerce Strategy", "UI/UX Design", "B2C Consulting"],
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/amorenza.webp",
    },
    {
      id: 4,
      title: "Mureeskin Market Expansion",
      description: "Spearheaded the 'Advanced Blemish Defense' campaign, optimizing marketplace conversion funnels exclusively for Shopee, resulting in lower CAC and higher ROAS.",
      tags: ["Shopee", "Meta Ads", "Performance Marketing"],
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/mureeskin.webp",
    },
    {
      id: 5,
      title: "Lutte & Scentnice",
      description: "Brand development and community building for 'Lutters' alongside executing a high-converting '3 for 99k' bundling promo for the Scentnice Black Series.",
      tags: ["Brand Strategy", "Copywriting", "Creative Direction"],
      image: "https://raw.githubusercontent.com/ferrydwinurrochman/visualbyfer/main/Foto%20Porto/Logo/scentnice.webp",
    },
  ]

  const techStack = [
    "Microsoft Power BI",
    "Advanced Excel",
    "META Ads",
    "Google Ads",
    "TikTok Ads",
    "Shopee Seller Center",
    "TikTok Shop",
    "Lazada Affiliate",
    "Adobe Creative Cloud",
    "Figma",
    "CapCut",
    "Canva",
    "CorelDRAW",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <LightNav />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className={`space-y-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  FERRY DWI NURROCHMAN<span className="text-primary">.</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
                  S.Ikom
                </p>
              </div>

              <div className="inline-block">
                <Badge variant="secondary" className="bg-secondary/10 text-foreground border-secondary/20 text-base py-2 px-4">
                  Digital Marketing Strategist | Performance Analyst | Creative Lead
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Memadukan strategi kreatif 360-derajat, infrastruktur data tingkat lanjut, dan eksekusi kampanye yang tajam. Saya membangun sistem pemasaran yang terukur, mengoptimalkan efisiensi budget iklan, dan mendorong skalabilitas pertumbuhan omset untuk brand B2B maupun B2C.
              </p>

              <div className="flex gap-4 pt-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base">
                  <Link href="/portfolio">
                    <Download className="w-4 h-4 mr-2" />
                    Lihat Portofolio
                  </Link>
                </Button>
                <Button variant="outline" className="px-8 py-6 text-base border-primary/20 hover:bg-primary/5">
                  <Link href="/contact" className="flex items-center gap-2">
                    Hubungi Saya
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

          {/* Projects Carousel */}
          <div className="max-w-7xl mx-auto px-4">
            <ProjectsCarousel projects={projects} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/40 backdrop-blur-sm border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">Strategi Berbasis Data.</h2>
              <h2 className="text-4xl font-bold text-primary">Eksekusi Berbasis Kreativitas.</h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Saya adalah seorang profesional di bidang Creative Marketing dan Sales dengan pengalaman lebih dari 6 tahun. Saya percaya bahwa kampanye visual yang memukau harus selalu didukung oleh analitik data yang solid.
              </p>
              <p>
                Keahlian utama saya terletak pada titik temu antara operasional bisnis dan pemasaran—mulai dari memetakan brand positioning, merancang sistem pelaporan otomatis dengan Power BI, hingga memimpin tim mengeksekusi performance marketing dan konversi marketplace. Fokus saya sederhana: menjembatani kebutuhan audiens dengan metrik pertumbuhan bisnis yang nyata.
              </p>
              <p>
                Mari berkolaborasi untuk merancang sistem pemasaran yang tidak hanya estetis, namun juga memberikan dampak terukur bagi bisnis Anda.
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
                <a href="mailto:ferrydwi57@gmail.com">Send Email</a>
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
