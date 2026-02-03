'use client'

import { useEffect, useRef } from 'react'

interface Wave {
  x: number
  y: number
  radius: number
  maxRadius: number
  opacity: number
}

export default function MouseWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wavesRef = useRef<Wave[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const lastWaveTimeRef = useRef(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Configurar canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Manejar movimiento del ratón
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      // Crear ondas con frecuencia limitada
      const now = Date.now()
      if (now - lastWaveTimeRef.current > 50) {
        wavesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          radius: 0,
          maxRadius: Math.random() * 60 + 40,
          opacity: 0.6,
        })
        lastWaveTimeRef.current = now
      }
    }

    // Manejar redimensionamiento
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    // Animación
    const animate = () => {
      timeRef.current += 0.005

      // Limpiar canvas
      ctx.fillStyle = 'rgba(15, 23, 42, 0)'
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dibujar ondas de fondo animadas
      drawBackgroundWaves(ctx, canvas.width, canvas.height, timeRef.current)

      // Actualizar y dibujar ondas del ratón
      wavesRef.current = wavesRef.current.filter((wave) => {
        wave.radius += 2.5
        wave.opacity = 1 - wave.radius / wave.maxRadius

        if (wave.opacity <= 0) return false

        // Dibujar onda
        ctx.strokeStyle = `rgba(0, 212, 255, ${wave.opacity * 0.4})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2)
        ctx.stroke()

        // Dibujar punto central
        ctx.fillStyle = `rgba(0, 212, 255, ${wave.opacity * 0.6})`
        ctx.beginPath()
        ctx.arc(wave.x, wave.y, 3, 0, Math.PI * 2)
        ctx.fill()

        return true
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const drawBackgroundWaves = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    // Crear zonas luminosas que se mueven sutilmente
    const glowCount = 3
    
    for (let i = 0; i < glowCount; i++) {
      // Posición que cambia lentamente en el tiempo
      const x = width / 2 + Math.sin(time * 0.2 + i) * width * 0.3
      const y = height / 2 + Math.cos(time * 0.15 + i * 1.5) * height * 0.3
      
      // Radio del glow
      const radius = Math.max(width, height) * 0.3
      
      // Crear gradiente radial para efecto luminoso
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      
      // Colores con transparencia muy sutil
      gradient.addColorStop(0, `rgba(0, 212, 255, ${0.08 + Math.sin(time * 0.3 + i) * 0.04})`)
      gradient.addColorStop(0.5, `rgba(10, 159, 255, ${0.03 + Math.cos(time * 0.25 + i) * 0.015})`)
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    }
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  )
}

