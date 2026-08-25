import { useEffect, useRef } from 'react'

type Props = {
  className?: string
}

/** Soft aurora ribbons that drift across the section background. */
export function AuroraCanvas({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let t = 0
    let w = 0
    let h = 0
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

    const drawBand = (
      yBase: number,
      amp: number,
      speed: number,
      color: string,
      phase: number,
    ) => {
      ctx.beginPath()
      ctx.moveTo(0, h)
      for (let x = 0; x <= w; x += 8) {
        const y =
          yBase +
          Math.sin(x * 0.004 + t * speed + phase) * amp +
          Math.sin(x * 0.01 + t * speed * 0.6) * (amp * 0.35)
        ctx.lineTo(x, y)
      }
      ctx.lineTo(w, h)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      if (!reduced) t += 0.008

      drawBand(h * 0.55, 28, 1, 'rgba(26, 155, 122, 0.12)', 0)
      drawBand(h * 0.62, 36, 0.75, 'rgba(232, 165, 75, 0.08)', 1.4)
      drawBand(h * 0.7, 22, 1.15, 'rgba(46, 196, 160, 0.1)', 2.2)

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
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
