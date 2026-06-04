"use client"

import Link from "next/link"

export default function LightNav() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-card px-8 py-4 rounded-full flex items-center gap-8 shadow-lg bg-white/80 backdrop-blur-md border border-white/50">
        <Link href="/" className="font-bold text-sm tracking-tight text-foreground hover:text-primary transition-colors">
          FD.
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/skills" className="hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="/portfolio" className="hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/portfolio" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
