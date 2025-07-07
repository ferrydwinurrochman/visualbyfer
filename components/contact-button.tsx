"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function ContactButton() {
  return (
    <Link href="/contact">
      <Button className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-4">
        <Mail className="w-5 h-5 mr-2" />
        Contact Me
      </Button>
    </Link>
  )
}
