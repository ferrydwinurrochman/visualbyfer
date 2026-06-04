"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import LightNav from "@/components/light-nav"

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
    <div className="min-h-screen bg-background text-foreground relative">
      <LightNav />

      <div className="pt-24 pb-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Skills & Tools
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My expertise spans across various creative and marketing disciplines
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-6 bg-white border border-border rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {skill.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Tools */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Tools I Use</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <Badge
                  key={tool.name}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 px-4 py-2"
                >
                  {tool.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
