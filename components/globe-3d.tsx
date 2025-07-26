"use client"

import type React from "react"
import { useRef, useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

export default function Globe3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const rotationRef = useRef({ x: 0, y: 0 })
  const [autoRotate, setAutoRotate] = useState(true)
  const animationRef = useRef<number>()
  const lastMousePos = useRef({ x: 0, y: 0 })

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const size = 300
    canvas.width = size
    canvas.height = size

    // Globe properties
    const centerX = size / 2
    const centerY = size / 2
    const radius = 120

    // Auto-rotate when not dragging
    if (autoRotate && !isDragging) {
      rotationRef.current.y += 0.5
    }

    const rotation = rotationRef.current

    // Create gradient for the globe
    const createGradient = (ctx: CanvasRenderingContext2D) => {
      const gradient = ctx.createRadialGradient(
        centerX - rotation.x * 0.3,
        centerY - rotation.y * 0.3,
        0,
        centerX,
        centerY,
        radius,
      )
      gradient.addColorStop(0, "#38BDF8") // Sky blue
      gradient.addColorStop(0.3, "#0F52BA") // Sapphire blue
      gradient.addColorStop(0.7, "#1E293B") // Slate
      gradient.addColorStop(1, "#0F172A") // Dark slate
      return gradient
    }

    // Draw latitude and longitude lines
    const drawGridLines = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
      ctx.lineWidth = 1

      // Latitude lines
      for (let i = -60; i <= 60; i += 30) {
        ctx.beginPath()
        const y = Math.sin((i * Math.PI) / 180) * radius
        const radiusAtY = Math.cos((i * Math.PI) / 180) * radius

        for (let angle = 0; angle <= 360; angle += 5) {
          const adjustedAngle = angle + rotation.y
          const x = Math.cos((adjustedAngle * Math.PI) / 180) * radiusAtY
          const z = Math.sin((adjustedAngle * Math.PI) / 180) * radiusAtY

          // Simple 3D to 2D projection
          const rotatedY = y * Math.cos((rotation.x * Math.PI) / 180) - z * Math.sin((rotation.x * Math.PI) / 180)
          const rotatedZ = y * Math.sin((rotation.x * Math.PI) / 180) + z * Math.cos((rotation.x * Math.PI) / 180)

          if (rotatedZ > 0) {
            const screenX = centerX + x
            const screenY = centerY + rotatedY

            if (angle === 0) {
              ctx.moveTo(screenX, screenY)
            } else {
              ctx.lineTo(screenX, screenY)
            }
          }
        }
        ctx.stroke()
      }

      // Longitude lines
      for (let i = 0; i < 360; i += 30) {
        ctx.beginPath()
        for (let lat = -90; lat <= 90; lat += 5) {
          const adjustedLon = i + rotation.y
          const x = Math.cos((lat * Math.PI) / 180) * Math.cos((adjustedLon * Math.PI) / 180) * radius
          const y = Math.sin((lat * Math.PI) / 180) * radius
          const z = Math.cos((lat * Math.PI) / 180) * Math.sin((adjustedLon * Math.PI) / 180) * radius

          // Simple 3D to 2D projection
          const rotatedY = y * Math.cos((rotation.x * Math.PI) / 180) - z * Math.sin((rotation.x * Math.PI) / 180)
          const rotatedZ = y * Math.sin((rotation.x * Math.PI) / 180) + z * Math.cos((rotation.x * Math.PI) / 180)

          if (rotatedZ > 0) {
            const screenX = centerX + x
            const screenY = centerY + rotatedY

            if (lat === -90) {
              ctx.moveTo(screenX, screenY)
            } else {
              ctx.lineTo(screenX, screenY)
            }
          }
        }
        ctx.stroke()
      }
    }

    // Draw glowing dots (cities/connections)
    const drawGlowingDots = (ctx: CanvasRenderingContext2D) => {
      const cities = [
        { lat: 28.6, lon: 77.2 }, // Delhi
        { lat: 19.0, lon: 72.8 }, // Mumbai
        { lat: 22.5, lon: 88.3 }, // Kolkata (West Bengal)
        { lat: 40.7, lon: -74.0 }, // New York
        { lat: 51.5, lon: -0.1 }, // London
        { lat: 35.6, lon: 139.6 }, // Tokyo
        { lat: -33.8, lon: 151.2 }, // Sydney
      ]

      cities.forEach((city, index) => {
        const adjustedLon = city.lon + rotation.y
        const x = Math.cos((city.lat * Math.PI) / 180) * Math.cos((adjustedLon * Math.PI) / 180) * radius
        const y = Math.sin((city.lat * Math.PI) / 180) * radius
        const z = Math.cos((city.lat * Math.PI) / 180) * Math.sin((adjustedLon * Math.PI) / 180) * radius

        // Simple 3D to 2D projection
        const rotatedY = y * Math.cos((rotation.x * Math.PI) / 180) - z * Math.sin((rotation.x * Math.PI) / 180)
        const rotatedZ = y * Math.sin((rotation.x * Math.PI) / 180) + z * Math.cos((rotation.x * Math.PI) / 180)

        if (rotatedZ > 0) {
          const screenX = centerX + x
          const screenY = centerY + rotatedY

          // Create glowing effect
          const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, 8)
          gradient.addColorStop(0, index === 2 ? "#FFD700" : "#38BDF8") // Gold for Kolkata, blue for others
          gradient.addColorStop(0.5, index === 2 ? "rgba(255, 215, 0, 0.6)" : "rgba(56, 189, 248, 0.6)")
          gradient.addColorStop(1, "rgba(56, 189, 248, 0)")

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(screenX, screenY, 8, 0, 2 * Math.PI)
          ctx.fill()

          // Inner bright dot
          ctx.fillStyle = index === 2 ? "#FFD700" : "#FFFFFF"
          ctx.beginPath()
          ctx.arc(screenX, screenY, 2, 0, 2 * Math.PI)
          ctx.fill()
        }
      })
    }

    // Clear and draw
    ctx.clearRect(0, 0, size, size)

    // Draw globe base
    ctx.fillStyle = createGradient(ctx)
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.fill()

    // Add outer glow
    ctx.shadowColor = "#38BDF8"
    ctx.shadowBlur = 20
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)"
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.shadowBlur = 0

    // Draw grid lines
    drawGridLines(ctx)

    // Draw glowing dots
    drawGlowingDots(ctx)

    // Add highlight
    const highlightGradient = ctx.createRadialGradient(centerX - 40, centerY - 40, 0, centerX - 40, centerY - 40, 80)
    highlightGradient.addColorStop(0, "rgba(255, 255, 255, 0.3)")
    highlightGradient.addColorStop(1, "rgba(255, 255, 255, 0)")

    ctx.fillStyle = highlightGradient
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.fill()

    animationRef.current = requestAnimationFrame(animate)
  }, [isDragging, autoRotate])

  useEffect(() => {
    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate])

  // Mouse/touch event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setAutoRotate(false)
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    lastMousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const currentX = e.clientX - rect.left
    const currentY = e.clientY - rect.top

    const deltaX = currentX - lastMousePos.current.x
    const deltaY = currentY - lastMousePos.current.y

    rotationRef.current.x = Math.max(-45, Math.min(45, rotationRef.current.x - deltaY * 0.5))
    rotationRef.current.y += deltaX * 0.5

    lastMousePos.current = { x: currentX, y: currentY }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setTimeout(() => setAutoRotate(true), 2000) // Resume auto-rotation after 2 seconds
  }

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setAutoRotate(false)
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const touch = e.touches[0]
    lastMousePos.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const touch = e.touches[0]
    const currentX = touch.clientX - rect.left
    const currentY = touch.clientY - rect.top

    const deltaX = currentX - lastMousePos.current.x
    const deltaY = currentY - lastMousePos.current.y

    rotationRef.current.x = Math.max(-45, Math.min(45, rotationRef.current.x - deltaY * 0.5))
    rotationRef.current.y += deltaX * 0.5

    lastMousePos.current = { x: currentX, y: currentY }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(false)
    setTimeout(() => setAutoRotate(true), 2000)
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-sky-400/20 blur-xl scale-110 animate-pulse"></div>

        {/* Canvas container */}
        <div className="relative bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-full p-4 backdrop-blur-sm border border-white/10">
          <canvas
            ref={canvasRef}
            className={`rounded-full ${isDragging ? "cursor-grabbing" : "cursor-grab"} transition-all duration-200`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: "none" }}
          />
        </div>

        {/* Interaction hint */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 text-sm"
          initial={{ opacity: 1 }}
          animate={{ opacity: isDragging ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          Drag to explore
        </motion.div>
      </div>
    </motion.div>
  )
}
