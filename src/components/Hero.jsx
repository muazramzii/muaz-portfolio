import { motion } from 'framer-motion'
import { Download, MessageSquare, Code2 } from 'lucide-react'
import { profile, heroStats } from '../data.js'
import { CountUp } from './ui.jsx'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-[72px]">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 80% 65% at 50% 38%, #000 35%, transparent 78%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 38%, #000 35%, transparent 78%)',
          }}
        />
        <motion.div
          className="absolute -left-20 -top-32 h-[480px] w-[480px] rounded-full opacity-25"
          style={{ background: 'var(--accent)', filter: 'blur(90px)' }}
          animate={{ x: [0, 60, 0], y: [0, 50, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-16 top-10 h-[420px] w-[420px] rounded-full opacity-25"
          style={{ background: 'var(--accent-2)', filter: 'blur(90px)' }}
          animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container-x relative z-10 grid w-full items-center gap-14 md:grid-cols-[1.25fr_0.9fr]">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 font-mono text-[0.8rem]"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--muted)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: 'var(--accent)' }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: 'var(--accent)' }} />
            </span>
            {profile.status}
          </motion.div>

          <motion.h1 variants={item} className="text-[clamp(2.7rem,7vw,4.6rem)] font-bold tracking-[-0.035em]">
            {profile.firstName} <span className="grad-text">{profile.lastName}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-3 font-display text-[clamp(1.1rem,2.6vw,1.5rem)] font-medium">
            Full-Stack Developer <span className="text-accent">/</span> Software Engineer
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-[480px] font-display text-[1.25rem] font-medium text-strong">
            {profile.tagline}
          </motion.p>

          <motion.p variants={item} className="mt-3 max-w-[480px] text-[1.05rem] text-muted">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3.5">
            <a href={profile.resume} download className="btn btn-primary">
              <Download size={17} /> Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              <MessageSquare size={17} /> Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-7">
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <b className="font-display text-[1.5rem] text-strong">
                  <CountUp value={s.value} decimals={s.decimals || 0} suffix={s.suffix || ''} text={s.text} />
                </b>
                <span className="mt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative mx-auto"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative aspect-[4/5] w-[min(330px,72vw)] overflow-hidden rounded-3xl"
            style={{ background: 'var(--surface-2)', border: '1px solid var(--border-strong)' }}
          >
            {/* Swap for a real photo: place profile.jpg in /public and use <img src="/profile.jpg" /> */}
            <img src="/gambar.png" alt="Muaz Ramzi" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ padding: 1, background: 'var(--gradient)', WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', opacity: 0.55 }} />
          </motion.div>
          <div
            className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-2 font-mono text-[0.76rem]"
            style={{ background: 'var(--glass)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-strong)' }}
          >
            <Code2 size={13} className="mr-1.5 inline text-accent" /> {profile.badge}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
