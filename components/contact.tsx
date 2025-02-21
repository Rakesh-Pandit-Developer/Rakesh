"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Loader2 } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
      }

      // Send email using EmailJS
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          to_email: "rakeshpanditdeveloper@gmail.com",
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "YOUR_PUBLIC_KEY",
      )

      // Send data to Google Apps Script
      const scriptURL = "YOUR_GOOGLE_APPS_SCRIPT_URL"
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })

      toast.success("Message sent successfully!")
      form.reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="max-w-md mx-auto">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <Input id="subject" name="subject" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" rows={6} required />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

