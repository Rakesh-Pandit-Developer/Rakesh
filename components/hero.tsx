"use client"

import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "./typewriter-effect"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import HeroBackground from "./HeroBackground"
import { useRef } from "react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    const navHeight = 64
    const targetPosition = element!.offsetTop - navHeight

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }

  return (
    <section ref={heroRef} className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Hi, I'm Rakesh Pandit</h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-6">
              <TypewriterEffect words={["Frontend Developer", "Web Designer", "UI/UX Enthusiast"]} />
            </div>
            <p className="text-lg text-gray-300 mb-8">
              Aspiring Frontend Developer with a passion for creating clean, user-friendly websites.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Contact Me
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToAbout}>
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-square"
          >
            <Image
              src="/your-photo.jpg" // Replace with your photo
              alt="Rakesh Pandit"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-primary transition-colors"
      >
        <ArrowDown className="h-8 w-8" />
      </motion.button>
    </section>
  )
}

