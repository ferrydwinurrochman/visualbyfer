"use client"

import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"
import LightNav from "@/components/light-nav"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <LightNav />

      <div className="pt-24 pb-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Let's Work Together
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to bring your creative vision to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6 bg-white border border-border shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Email</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">Ferrydn18@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Phone</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">+62817-7674-2411</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Location</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">Cirebon, Indonesia</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border border-border shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/ferry-dwi-nurrochman-0ba372152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:scale-125 hover:bg-primary/90 transition-all"
                  >
                    <Linkedin className="w-6 h-6 text-primary-foreground" />
                  </a>
                  <a
                    href="https://www.instagram.com/ferrydwn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:scale-125 hover:bg-primary/90 transition-all"
                  >
                    <Instagram className="w-6 h-6 text-primary-foreground" />
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-white border border-border shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <form action="https://formspree.io/f/mrbkwgva" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-md px-3 py-2 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-md px-3 py-2 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-md px-3 py-2 transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-md px-3 py-2 transition-all duration-300 min-h-[120px] resize-vertical"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 py-3 px-4 rounded-md font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border relative z-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2025 Ferry Dwi Nurrochman. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
