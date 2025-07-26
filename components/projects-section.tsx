"use client"

import { motion, Variants, Easing } from "framer-motion"

import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Github, ExternalLink, Code, ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "AGRE",
      description:
        "Advanced Agricultural Guidance and Resource Engine – An intelligent ML-powered chatbot designed to support farmers through natural language interaction. Integrates Gemini-based image processing for accurate crop disease detection and provides personalized farming recommendations. Built with advanced neural networks for crop yield optimization and predictive analytics.",
      tech: ["Python", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Vijayabhava/Agre_Sumit",
      liveLink: "https://agre-sumit.vercel.app/",
      image: "/images/agre-screenshot.png",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      category: "WEB APP",
    },
    {
      title: "SmartCards",
      description:
        "AI-Powered Flashcard Generation Platform - A sophisticated React web application that transforms learning through intelligent PDF processing. Leverages Google's Gemini Flash 2.0 AI model for advanced document analysis, automatic question generation, and smart content summarization. Features responsive design, animated counters, smooth scrolling navigation, and an elegant red-black themed dark mode.",
      tech: ["React", "Gemini AI 2.0", "PDF Processing", "Dark Mode", "Responsive Design", "Context API"],
      github: "https://github.com/Vijayabhava/Smartcards1",
      liveLink: "https://smartcards1-lwib.vercel.app/",
      image: "/images/smartcards-screenshot.png",
      gradient: "from-red-400 via-rose-500 to-pink-600",
      category: "Web App",
    },
    {
      title: "Krishivani",
      description:
        "Revolutionary ML and Twilio-based agricultural assistance system designed for farmers without mobile access. Features voice-based crop guidance, SMS alerts for weather and market prices, and multilingual support to bridge the digital divide in rural agriculture. Provides real-time agricultural insights through voice commands and SMS notifications for enhanced farming productivity.",
      tech: ["Python", "Machine Learning", "Twilio API", "Voice Recognition", "SMS Gateway"],
      github: "https://github.com/Vijayabhava/Krishivaani",
      liveLink: null,
      image: "/images/krishivani-screenshot.png",
      gradient: "from-amber-400 via-yellow-500 to-orange-600",
      category: "AI/ML",
    },
    {
      title: "CareerBaba",
      description:
        "AI-powered career counseling platform that provides personalized career roadmaps, skill assessments, and industry insights. Features intelligent matching algorithms, interactive career exploration tools, and comprehensive guidance to help students and professionals make informed career decisions with confidence and clarity for their professional journey.",
      tech: ["React", "Node.js", "AI/ML", "MongoDB", "Express", "JWT"],
      github: "https://github.com/Vijayabhava/bitverse-CareerBaba",
      liveLink: "https://bitverse-eight.vercel.app/",
      image: "/images/careerbaba-screenshot.png",
      gradient: "from-purple-400 via-pink-500 to-red-500",
      category: "Web App",
    },
    {
      title: "FlashPlay",
      description:
        "Advanced YouTube speed control browser extension with enhanced playback features. Includes customizable keyboard shortcuts, multiple speed presets, and seamless integration with YouTube's interface. Designed to improve video learning experience with precise playback control, user-friendly interface, and enhanced productivity features for students and professionals.",
      tech: ["JavaScript", "HTML5", "CSS3", "Manifest V3"],
      github: "https://github.com/Vijayabhava/FlashPlay",
      liveLink: null,
      image: "/images/flashplay-screenshot.png",
      gradient: "from-blue-400 via-cyan-500 to-indigo-600",
      category: "Extension",
    },
    {
      title: "Hotel Management System",
      description:
        "Comprehensive enterprise-grade hotel management solution featuring booking system, customer management, billing, and analytics dashboard. Built with robust Java architecture and MySQL database, providing complete hotel operations management with reporting and administrative tools. Includes room management, guest services, and financial tracking capabilities.",
      tech: ["Java"],
      github: "https://github.com/Vijayabhava/HotelManagementSystem",
      liveLink: null,
      image: "/images/hotel-management-screenshot.png",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      category: "Desktop App",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

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

  const handleGitHubClick = () => {
    window.open("https://github.com/Vijayabhava", "_blank")
  }

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-white/80 text-sm font-medium">Featured Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover my latest creations where innovation meets functionality. Each project represents a unique
              solution crafted with passion and precision.
            </p>
          </motion.div>

          {/* Uniform Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                   <Image
  src={project.image || "/placeholder.svg"}
  alt={project.title}
  fill
  className="object-cover transition-transform duration-700 group-hover:scale-110"
/>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Floating Action Buttons */}
                    <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center mb-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} mr-3`}></div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-white/60 ml-auto group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>

                      <p className="text-slate-300 mb-4 leading-relaxed text-sm line-clamp-4">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 mt-auto">
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-cyan-500/25 text-white rounded-full transition-all duration-300 hover:scale-105 flex-1 border-0 text-sm`}
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Code className="w-3 h-3 mr-2" />
                          View Code
                        </a>
                      </Button>

                      {project.liveLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-full transition-all duration-300 hover:scale-105 flex-1 bg-transparent backdrop-blur-sm text-sm"
                          asChild
                        >
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-20 blur-xl`}
                    ></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects Button */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="relative inline-block">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 text-lg font-semibold"
                onClick={handleGitHubClick}
              >
                <Github className="w-6 h-6 mr-3" />
                Explore All Projects
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
          </section>
  )
}