"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Lightbulb, Target, Coffee } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: "10+", label: "Projects Completed", icon: Code },
    { number: "3+", label: "Years Learning", icon: Lightbulb },
    { number: "5+", label: "Technologies", icon: Target },
    { number: "∞", label: "Cups of Coffee", icon: Coffee },
  ]

  const interests = [
    { name: "Machine Learning", icon: "🤖", color: "from-purple-500 to-pink-500" },
    { name: "Web Development", icon: "🌐", color: "from-blue-500 to-cyan-500" },
    { name: "Problem Solving", icon: "🧩", color: "from-green-500 to-emerald-500" },
    { name: "Innovation", icon: "💡", color: "from-yellow-500 to-orange-500" },
    { name: "Public Speaker", icon: "🚀", color: "from-red-500 to-rose-500" },
    { name: "Tech Community", icon: "👥", color: "from-indigo-500 to-purple-500" },
  ]

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }, // ✅ fixed here
    },
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <div className="relative inline-block mb-8">
                <div className="w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
                  <Image
                    src="/images/sumit-profile.jpg"
                    alt="Sumit Sharma"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">👋</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                I&apos;m a passionate Software Developer with expertise in web development and AI technologies. I love
                creating innovative solutions that make a real impact. My journey in tech has been driven by curiosity
                and a desire to solve complex problems through code.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Core Strengths</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Teamwork", "Problem-solving", "Adaptability", "Leadership"].map((skill) => (
                    <motion.div
                      key={skill}
                      className="bg-gradient-to-r from-blue-50 to-sky-50 p-3 rounded-lg border-l-4 border-blue-600"
                      whileHover={{ scale: 1.05, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-sky-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interests Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-slate-800 text-center mb-8">What I&apos;m Passionate About</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  className={`p-4 rounded-xl bg-gradient-to-r ${interest.color} text-white text-center hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <div className="text-2xl mb-2">{interest.icon}</div>
                  <div className="font-medium text-sm">{interest.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
