"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

export default function HomeClient() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  )
}

