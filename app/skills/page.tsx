"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import ContactButton from "@/components/contact-button"
import InteractiveBackground from "@/components/interactive-background"

export default function SkillsPage() {
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
                Skills & Tools
              </span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto animate-text-glow">
              My expertise spans across various creative and marketing disciplines
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="glass-card p-6 backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group magnetic-hover hover:shadow-2xl hover:shadow-blue-500/20"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 group-hover:animate-bounce transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                    {skill.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-xl" />
                </div>
              </Card>
            ))}
          </div>

          {/* Tools */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8 text-white animate-text-glow">Tools I Use</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <Badge
                  key={tool.name}
                  variant="secondary"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 px-4 py-2 magnetic-hover"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {tool.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        
        .glass-card:hover {
          transform: translateY(-8px);
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
        
        .magnetic-hover {
          transition: transform 0.3s ease;
        }
        
        .magnetic-hover:hover {
          transform: translateY(-5px) scale(1.02);
        }
      `}</style>
    </div>
  )
}
