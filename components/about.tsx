"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-6 mb-6">
              <div className="relative w-32 h-32">
                <Image
                  src="/your-pp-photo.jpg" // Replace with your profile photo
                  alt="Rakesh Pandit"
                  fill
                  className="object-cover rounded-full border-4 border-primary"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-2">Rakesh Pandit</h3>
                <p className="text-muted-foreground">Frontend Developer</p>
                <div className="flex gap-4 mt-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <p className="text-lg mb-6">
              Aspiring Frontend Developer with a passion for creating clean, user-friendly websites. Eager to learn and
              grow in the field of web development, with a focus on mastering HTML, CSS, and JavaScript. Committed to
              delivering visually appealing and responsive designs while collaborating with teams to bring ideas to
              life.
            </p>
            <div className="grid gap-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>rakeshpanditdeveloper@gmail.com</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+977-9806812433</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Garuda-6 Rautahat, Nepal</span>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium">Secondary Education</h4>
                  <p className="text-muted-foreground">Shree Jay kisan higher Secondary School Dharahari, Rautahat</p>
                  <p className="text-sm text-muted-foreground">2016</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Training</h3>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium">Advance Computer</h4>
                  <p className="text-muted-foreground">Mega training point, Rautahat, Nepal</p>
                  <p className="text-sm text-muted-foreground">6 months</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

