"use client"


import { Download, Mail, Github, Linkedin } from "lucide-react"
import { motion, Variants, Easing } from "framer-motion"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function HeroSection() {
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
    return () => clearInterval(interval)
  }, [dynamicTexts.length]) // ✅ FIX: include dependency

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1JSCml7IEvfDp-9-GU2_5K1qDGJDz__oe/view?usp=sharing", "_blank")
  }

  const handleContactMe = () => {
    const contactSection = document.querySelector("#contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

 // At the very top of your file



// Define your custom easing curve
const easeCurve: Easing = [0.42, 0, 0.58, 1] // Equivalent to "easeInOut"

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeCurve, // ✅ correct type
    },
  },
}


  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-sky-400/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              Sumit Sharma
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="h-16 flex items-center justify-center">
          <h2 className="text-xl md:text-2xl text-slate-300 mb-6 font-medium">
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {dynamicTexts[currentText]}
            </motion.span>
            <span className="text-sky-400"> | Web & AI Enthusiast</span>
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            &quot;Transforming ideas into impactful digital solutions&quot;
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            onClick={handleDownloadResume}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleContactMe}
            className="border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com/Vijayabhava"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sumit-sharma-b29858272/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
