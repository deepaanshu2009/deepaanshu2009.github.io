import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function TiltCard({ project }) {
  const ref = useRef(null)
  const [transform, setTransform] = useState('')
  const [glow, setGlow] = useState({ x: 50, y: 50 })

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * 16
    const rotateX = (0.5 - py) * 16
    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`)
    setGlow({ x: px * 100, y: py * 100 })
  }

  const handleLeave = () => {
    setTransform('perspective(900px) rotateX(0deg) rotateY(0deg)')
    setGlow({ x: 50, y: 50 })
  }

  return (
    <motion.a
      href={project.link}
      target={project.link?.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      ref={ref}
      className="card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform,
        '--accent': project.accent,
        '--gx': `${glow.x}%`,
        '--gy': `${glow.y}%`,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="card__glow" />
      <div className="card__body">
        <div className="card__dot" />
        <h3 className="card__title">{project.title}</h3>
        <p className="card__blurb">{project.blurb}</p>
        <div className="card__tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <span className="card__cta">View project →</span>
      </div>
    </motion.a>
  )
}
