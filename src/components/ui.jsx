import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

// Scroll reveal wrapper
export function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}

// Animated count-up number
export function CountUp({ value, decimals = 0, suffix = '', text }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: 1400, bounce: 0 })

  useEffect(() => {
    if (text) return
    if (inView) mv.set(value)
  }, [inView, value, mv, text])

  useEffect(() => {
    if (text) return
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = v.toFixed(decimals)
    })
  }, [spring, decimals, text])

  if (text) return <span>{text}</span>
  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  )
}

const GRADS = [
  ['#13343b', '#1c3a52'], ['#1b2a4a', '#2a1f4a'], ['#0f3331', '#13283f'],
  ['#2a2140', '#3a1f3f'], ['#10283a', '#1a3340'], ['#1e2336', '#341f33'],
]

// Project thumbnail — real screenshot when provided, gradient placeholder otherwise
export function Thumb({ index = 0, label = 'MR', img = '', position = 'top', fit = 'cover', bg = '' }) {
  if (img) {
    return (
      <div className="h-full w-full" style={{ background: bg || undefined }}>
        <img src={img} alt={`${label} screenshot`} className="h-full w-full" style={{ objectFit: fit, objectPosition: position }} />
      </div>
    )
  }

  const [a, b] = GRADS[index % GRADS.length]
  const uid = `t${index}`
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${label} thumbnail`} className="w-full h-full">
      <defs>
        <linearGradient id={`${uid}g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} />
        </linearGradient>
        <linearGradient id={`${uid}a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2DD4BF" /><stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill={`url(#${uid}g)`} />
      <g opacity="0.1" stroke="#fff" strokeWidth="1">
        {Array.from({ length: 9 }, (_, k) => <line key={`v${k}`} x1={k * 50} y1="0" x2={k * 50} y2="250" />)}
        {Array.from({ length: 6 }, (_, k) => <line key={`h${k}`} x1="0" y1={k * 50} x2="400" y2={k * 50} />)}
      </g>
      <text x="32" y="150" fontFamily="Space Grotesk, sans-serif" fontSize="62" fontWeight="700" fill={`url(#${uid}a)`}>{label}</text>
      <rect x="32" y="172" width="64" height="6" rx="3" fill={`url(#${uid}a)`} />
    </svg>
  )
}
