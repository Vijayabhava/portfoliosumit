"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Globe, GitBranch } from "lucide-react"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C", "HTML", "Tailwind CSS", "JavaScript", "Python", "Java", "PHP", "AWK", "Shell"],
    },
    {
      title: "Frameworks",
      icon: Globe,
      skills: ["React", "Node.js"],
    },
    {
      title: "Tools",
      icon: GitBranch,
      skills: ["Git", "GitHub", "BitBucket"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQL", "MongoDB"],
    },
  ]

  const technologiesWithLogos = [
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#ED8B00",
    },
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      color: "#A8B9CC",
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      color: "#06B6D4",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#181717",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      color: "#777BB4",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
              Technical <span className="text-blue-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto"></div>
          </motion.div>

          {/* Skill Categories */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-sky-400 rounded-lg flex items-center justify-center mr-3">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technologies Marquee with Logos */}
          <motion.div variants={itemVariants} className="overflow-hidden">
            <h3 className="text-2xl font-semibold text-slate-800 text-center mb-8">Technologies I Work With</h3>
            <div className="relative">
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

              <div className="flex animate-scroll space-x-8">
                {[...technologiesWithLogos, ...technologiesWithLogos].map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 min-w-[180px]">
                      <div className="relative">
                        <img
                          src={tech.logo || "/placeholder.svg"}
                          alt={`${tech.name} logo`}
                          className="w-8 h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          style={{
                            filter: "grayscale(100%)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.filter = "grayscale(0%)"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.filter = "grayscale(100%)"
                          }}
                        />
                        <div
                          className="absolute inset-0 rounded opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{ backgroundColor: tech.color }}
                        ></div>
                      </div>
                      <span className="text-slate-700 font-medium group-hover:text-blue-700 transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
