"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  words: string[]
  delay?: number
}

export function TypewriterEffect({ words, delay = 200 }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex]

      if (isDeleting) {
        setCurrentText((current) => current.slice(0, -1))
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((current) => (current === words.length - 1 ? 0 : current + 1))
        }
      } else {
        setCurrentText(currentWord.slice(0, currentText.length + 1))
        if (currentText === currentWord) {
          setIsDeleting(true)
        }
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, delay, isDeleting, words])

  return (
    <span className="text-primary">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}

