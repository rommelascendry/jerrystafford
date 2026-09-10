import { useEffect, useRef } from 'react'

export default function SandStormEffect() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    let w = 0
    let h = 0

    const setSize = () => {
      w = canvas.offsetWidth || window.innerWidth
      h = canvas.offsetHeight || 650
      const dpr = window.devicePixelRatio || 1
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.resetTransform?.()
      ctx.scale(dpr, dpr)
    }

    setSize()
    window.addEventListener('resize', setSize)

    // Sand specks
    const speckCount = 180
    const specks = Array.from({ length: speckCount }, () => ({
      x: Math.random() * (w || 1400),
      y: Math.random() * (h || 700),
      radius: Math.random() * 2.2 + 1.2,
      speedX: Math.random() * 3.5 + 2,
      speedY: (Math.random() - 0.25) * 1.2,
      opacity: Math.random() * 0.5 + 0.45,
      color: Math.random() > 0.4 ? '255, 225, 160' : '215, 140, 60',
    }))

    // Sand streaks (flying grit)
    const streakCount = 60
    const streaks = Array.from({ length: streakCount }, () => ({
      x: Math.random() * (w || 1400),
      y: Math.random() * (h || 700),
      length: Math.random() * 16 + 8,
      thickness: Math.random() * 2 + 1,
      speedX: Math.random() * 6 + 3.5,
      speedY: (Math.random() - 0.2) * 1.5,
      opacity: Math.random() * 0.4 + 0.4,
      color: '240, 200, 130',
    }))

    // Rolling dust puffs
    const puffCount = 12
    const puffs = Array.from({ length: puffCount }, () => ({
      x: Math.random() * (w || 1400),
      y: Math.random() * (h || 700),
      radius: Math.random() * 180 + 90,
      speedX: Math.random() * 1.8 + 0.8,
      opacity: Math.random() * 0.16 + 0.08,
    }))

    const render = () => {
      ctx.clearRect(0, 0, w, h)

      // 1. Dust Puffs
      puffs.forEach((puff) => {
        puff.x += puff.speedX
        if (puff.x - puff.radius > w) {
          puff.x = -puff.radius
          puff.y = Math.random() * h
        }
        const grad = ctx.createRadialGradient(
          puff.x, puff.y, 0,
          puff.x, puff.y, puff.radius
        )
        grad.addColorStop(0, `rgba(225, 165, 90, ${puff.opacity})`)
        grad.addColorStop(1, 'rgba(225, 165, 90, 0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(puff.x, puff.y, puff.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // 2. Flying grit streaks
      streaks.forEach((s) => {
        s.x += s.speedX
        s.y += s.speedY
        if (s.x > w + 30) {
          s.x = -30
          s.y = Math.random() * h
        }
        if (s.y < -15) s.y = h + 15
        if (s.y > h + 15) s.y = -15

        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - s.length, s.y - s.speedY)
        ctx.strokeStyle = `rgba(${s.color}, ${s.opacity})`
        ctx.lineWidth = s.thickness
        ctx.lineCap = 'round'
        ctx.stroke()
      })

      // 3. Sand grains
      specks.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY
        if (p.x > w + 15) {
          p.x = -15
          p.y = Math.random() * h
        }
        if (p.y < -5) p.y = h + 5
        if (p.y > h + 5) p.y = -5

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', setSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-hidden">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}