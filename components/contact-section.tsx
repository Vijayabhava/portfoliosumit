"use client";

import { motion, useInView, Variants, Easing } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, Github, Linkedin, MapPin } from "lucide-react";
import Globe3D from "@/components/globe-3d";

const easeCurve: Easing = [0.42, 0, 0.58, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeCurve,
    },
  },
};

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9641990892",
      href: "tel:+919641990892",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ss.sharma240303@gmail.com",
      href: "mailto:ss.sharma240303@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Vijayabhava",
      href: "https://github.com/Vijayabhava",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sumit-sharma-b29858272",
      href: "https://www.linkedin.com/in/sumit-sharma-b29858272/",
    },
  ];

  return (
    <section
      id="contact-section"
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-sky-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Let&apos;s connect and discuss opportunities to work together on exciting projects.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mb-16">
            <Globe3D />
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">{contact.label}</p>
                  <p className="text-white font-medium group-hover:text-sky-400 transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center space-x-2 text-slate-400 mb-8">
              <MapPin className="w-5 h-5" />
              <span>West Bengal, India</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.footer variants={itemVariants} className="border-t border-white/20 mt-16 pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-slate-400">© 2025 Sumit Sharma. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
