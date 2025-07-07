import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ferrydn Portofolio",
  description:
    "Ferry Dwi Nurrochman - Marketing Creative Portfolio. Specializing in graphic design, digital marketing, web design, and visual storytelling.",
  keywords:
    "Ferry Dwi Nurrochman, Marketing Creative, Graphic Design, Digital Marketing, Web Design, Portfolio, Cirebon Indonesia",
  authors: [{ name: "Ferry Dwi Nurrochman" }],
  creator: "Ferry Dwi Nurrochman",
  openGraph: {
    title: "Ferrydn Portofolio",
    description: "Marketing Creative Portfolio - Ferry Dwi Nurrochman",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferrydn Portofolio",
    description: "Marketing Creative Portfolio - Ferry Dwi Nurrochman",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
