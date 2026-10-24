import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certs', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[100] transition-colors duration-300"
      style={
        scrolled
          ? { background: 'var(--glass)', backdropFilter: 'blur(14px) saturate(150%)', borderBottom: '1px solid var(--border)' }
          : { borderBottom: '1px solid transparent' }
      }
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <a href="#home" className="font-display text-[1.15rem] font-bold tracking-tight">
          Muaz<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="relative rounded-[10px] px-3.5 py-2 text-[0.9rem] font-medium transition-colors duration-200"
                style={{ color: active === l.id ? 'var(--text-strong)' : 'var(--muted)' }}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3.5 bottom-0.5 h-0.5 rounded-full"
                    style={{ background: 'var(--gradient)' }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggle}
            aria-label="Toggle dark and light mode"
            className="grid h-[42px] w-[42px] place-items-center rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid place-items-center"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a href="#contact" className="btn btn-primary hidden sm:inline-flex" style={{ padding: '10px 18px' }}>
            Let's talk
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            className="grid h-[42px] w-[42px] place-items-center rounded-xl md:hidden"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
            style={{ background: 'var(--glass)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)' }}
          >
            <div className="container-x flex flex-col py-3">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="border-b py-3 font-medium last:border-b-0"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
