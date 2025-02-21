"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    const navHeight = 64 // height of navbar
    const targetPosition = element!.offsetTop - navHeight

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Rakesh<span className="text-primary">.dev</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-white hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-primary transition-colors"
            >
              Contact
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-white hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-white hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

