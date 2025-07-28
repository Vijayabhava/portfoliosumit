"use client"

import { useEffect, useRef, useState } from "react"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MergedHero() {
  const gradientRef = useRef<HTMLDivElement>(null)
  const [currentText, setCurrentText] = useState(0)

  const dynamicTexts = [
    "CSE UnderGrad",
    "Software Developer",
    "Web Enthusiast",
    "AI Developer",
    "Problem Solver",
    "Tech Innovator",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length)
    }, 3000)

    const gradient = gradientRef.current
    const onMouseMove = (e: MouseEvent) => {
      if (gradient) {
        gradient.style.left = `${e.clientX - 192}px`
        gradient.style.top = `${e.clientY - 192}px`
        gradient.style.opacity = "1"
      }
    }
    const onMouseLeave = () => {
      if (gradient) gradient.style.opacity = "0"
    }

    const onClick = (e: MouseEvent) => {
      const ripple = document.createElement("div")
      ripple.style.position = "fixed"
      ripple.style.left = `${e.clientX}px`
      ripple.style.top = `${e.clientY}px`
      ripple.style.width = "4px"
      ripple.style.height = "4px"
      ripple.style.background = "rgba(96, 165, 250, 0.5)" // soft blue
      ripple.style.borderRadius = "50%"
      ripple.style.transform = "translate(-50%, -50%)"
      ripple.style.pointerEvents = "none"
      ripple.style.animation = "pulse-glow 1s ease-out forwards"
      document.body.appendChild(ripple)
      setTimeout(() => ripple.remove(), 1000)
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("click", onClick)

    return () => {
      clearInterval(interval)
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("click", onClick)
    }
  }, [])

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1JSCml7IEvfDp-9-GU2_5K1qDGJDz__oe/view?usp=sharing",
      "_blank"
    )
  }

  const handleContactMe = () => {
    const contactSection = document.querySelector("#contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0e23] via-[#0f172a] to-[#1e3a8a] text-white overflow-hidden">
      <div
        ref={gradientRef}
        className="pointer-events-none fixed z-10 h-[384px] w-[384px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent opacity-0 transition-opacity duration-300"
      />

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 md:px-12">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-blue-400">
          Sumit Sharma
        </h1>

        <div className="text-2xl md:text-3xl font-medium text-slate-200 mb-4 h-10">
          <span className="inline-block animate-fadeIn transition-all duration-500">
            {dynamicTexts[currentText]}
          </span>
          <span className="text-blue-400"> | Web & AI Enthusiast</span>
        </div>

        <p className="max-w-xl text-slate-400 mb-10 text-lg leading-relaxed">
          Transforming ideas into impactful digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Button
            size="lg"
            onClick={handleDownloadResume}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleContactMe}
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-3 rounded-full"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Vijayabhava"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition duration-300"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-sharma-b29858272/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition duration-300"
          >
            <Linkedin className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  )
}
