"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Award, Users, BookOpen, ExternalLink } from "lucide-react"

export default function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      title: "Runner-up @ DoubleSlash 3.0",
      organization: "IEEE Jadavpur University",
      year: "2025",
      icon: Trophy,
      type: "Competition",
      link: "https://www.instagram.com/p/DGQ1zFXyj74/?img_index=3",
    },
    {
      title: "Education Head",
      organization: "Team Samarth",
      year: "2025 – Present",
      icon: Users,
      type: "Leadership",
      link: null,
    },
  ]

  const certifications = [
    {
      title: "Google Cloud Gen AI Study Jam",
      organization: "Google Cloud",
      icon: BookOpen,
      type: "Certification",
      link: "https://credsverse.com/credentials/5ab988ff-ddef-4fcf-9fb9-3cbff50d4660",
      badge: "https://cdn.qwiklabs.com/badge.svg",
    },
    {
      title: "Data Analytics Internship",
      organization: "Deloitte",
      icon: Award,
      type: "Virtual Internship Certification",
      link: "https://drive.google.com/file/d/1FTDplAH98lACH1bANt_YiaDJMNRCx4vT/view?usp=sharing",
      badge: "https://deloitte.com/badge.svg",
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
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
              Achievements & <span className="text-blue-600">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-slate-800 mb-8 flex items-center">
                <Trophy className="w-6 h-6 text-blue-600 mr-3" />
                Achievements
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.a
                    key={index}
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-blue-50 to-sky-50 p-6 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-sky-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                            {achievement.title}
                          </h4>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                        </div>
                        <p className="text-slate-600 mb-2">{achievement.organization}</p>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-blue-600 font-medium">{achievement.year}</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {achievement.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-slate-800 mb-8 flex items-center">
                <Award className="w-6 h-6 text-blue-600 mr-3" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border-l-4 border-sky-400 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <cert.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-lg font-semibold text-slate-800 group-hover:text-sky-600 transition-colors duration-300">
                            {cert.title}
                          </h4>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors duration-300" />
                        </div>
                        <p className="text-slate-600 mb-2">{cert.organization}</p>
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">{cert.type}</span>
                          {cert.badge && (
                            <div className="text-xs text-slate-500 flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                              Verified
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
