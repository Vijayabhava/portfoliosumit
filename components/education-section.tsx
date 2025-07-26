"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, Award } from "lucide-react"

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const educationData = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "Techno Main Salt Lake",
      duration: "2022 - 2026",
      grade: "CGPA 7.79",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary",
      institution: "Manikpara Higher Secondary School(WBCHSE)",
      duration: "2022",
      grade: "90.8%",
      icon: Award,
    },
    {
      degree: "Secondary",
      institution: "Manikpara Higher Secondary School(WBBSE)",
      duration: "2020",
      grade: "91.43%",
      icon: Award,
    },
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              My <span className="text-blue-600">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-sky-400"></div>

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start space-x-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full flex items-center justify-center shadow-lg">
                      <edu.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 md:mb-0">{edu.degree}</h3>
                      <div className="flex items-center space-x-2 text-blue-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{edu.duration}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-3">{edu.institution}</p>

                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-sky-50 px-4 py-2 rounded-full">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-700 font-semibold">{edu.grade}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
