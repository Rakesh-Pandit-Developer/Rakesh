"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

