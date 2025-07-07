"use client"

import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"
import Navigation from "@/components/navigation"
import InteractiveBackground from "@/components/interactive-background"

export default function ContactPage() {
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

      <div className="pt-24 pb-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto animate-text-glow">
              Ready to bring your creative vision to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="glass-card p-6 backdrop-blur-xl bg-white/5 border border-white/10 magnetic-hover hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-6 text-white animate-text-glow">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p className="text-white group-hover:text-blue-300 transition-colors">Ferrydwn@icloud.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Phone</p>
                      <p className="text-white group-hover:text-blue-300 transition-colors">+62897-7400-606</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Location</p>
                      <p className="text-white group-hover:text-blue-300 transition-colors">Cirebon, Indonesia</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6 backdrop-blur-xl bg-white/5 border border-white/10 magnetic-hover hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
                <h3 className="text-xl font-semibold mb-4 text-white animate-text-glow">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/ferry-dwi-nurrochman-0ba372152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-125 transition-transform magnetic-hover"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/ferrydwn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-125 transition-transform magnetic-hover"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="glass-card p-8 backdrop-blur-xl bg-white/5 border border-white/10 magnetic-hover hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <form action="https://formspree.io/f/mrbkwgva" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 rounded-md px-3 py-2 transition-all duration-300 hover:bg-white/15"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 rounded-md px-3 py-2 transition-all duration-300 hover:bg-white/15"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 rounded-md px-3 py-2 transition-all duration-300 hover:bg-white/15"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 rounded-md px-3 py-2 transition-all duration-300 hover:bg-white/15 min-h-[120px] resize-vertical"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 py-3 px-4 rounded-md font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 magnetic-hover"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 relative z-20">
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
