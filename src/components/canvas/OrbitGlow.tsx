import { useEffect, useRef } from 'react'

type Props = {
  className?: string
}

/** Cursor-reactive glow orbs for depth behind content. */
export function OrbitGlow({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const target = useRef({ x: 0.5, y: 0.4 })
  const current = useRef({ x: 0.5, y: 0.4 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    let time = 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const parent = canvas.parentElement
      w = parent?.clientWidth ?? window.innerWidth
      h = parent?.clientHeight ?? window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX / window.innerWidth
      target.current.y = e.clientY / window.innerHeight
    }

    const drawOrb = (x: number, y: number, radius: number, color: string) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, radius)
      g.addColorStop(0, color)
      g.addColorStop(1, 'transparent')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    const draw = () => {
      time += 0.01
      current.current.x += (target.current.x - current.current.x) * 0.05
      current.current.y += (target.current.y - current.current.y) * 0.05

      ctx.clearRect(0, 0, w, h)

      const mx = current.current.x * w
      const my = current.current.y * h
      const drift = reduced ? 0 : Math.sin(time) * 18

      drawOrb(mx + drift, my, Math.max(w, h) * 0.28, 'rgba(26, 155, 122, 0.22)')
      drawOrb(w * 0.82, h * 0.2 + drift * 0.4, Math.max(w, h) * 0.2, 'rgba(232, 165, 75, 0.14)')
      drawOrb(w * 0.15, h * 0.75, Math.max(w, h) * 0.18, 'rgba(217, 107, 76, 0.1)')

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    />
  )
}
