import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, ExternalLink } from 'lucide-react'
import { projects } from '../data.js'
import { Thumb } from './ui.jsx'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (project) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  const index = project ? projects.findIndex((p) => p.id === project.id) : 0

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[300] grid place-items-center p-6"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
        >
          <motion.div
            initial={{ y: 24, scale: 0.97, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 24, scale: 0.97, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            className="relative max-h-[88vh] w-full max-w-[640px] overflow-y-auto rounded-[22px]"
            style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)' }}
          >
            <div className="relative aspect-[16/8]">
              <Thumb index={index} label={project.label} img={project.img} position={project.imgPosition} fit={project.imgFit} bg={project.imgBg} />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-3.5 top-3.5 grid h-[38px] w-[38px] place-items-center rounded-[10px] transition-transform duration-200 hover:rotate-90"
                style={{ background: 'var(--glass)', backdropFilter: 'blur(8px)', border: '1px solid var(--border-strong)', color: 'var(--text)' }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-7">
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-accent">{project.catLabel}</span>
              <h3 className="mb-3 mt-2 text-[1.6rem]">{project.title}</h3>
              <p className="text-muted">{project.desc}</p>

              <h4 className="mb-3 mt-6 font-mono text-[0.76rem] uppercase tracking-[0.12em]" style={{ color: 'var(--text)' }}>Key features</h4>
              <ul className="grid gap-2.5">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-2.5 text-[0.94rem] text-muted">
                    <Check size={18} className="mt-0.5 shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>

              <h4 className="mb-3 mt-6 font-mono text-[0.76rem] uppercase tracking-[0.12em]" style={{ color: 'var(--text)' }}>Tech stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-md px-2.5 py-1 font-mono text-[0.7rem]" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--muted)' }}>{t}</span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View live <ExternalLink size={16} />
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">View code</a>
                )}
                {!project.live && !project.repo && (
                  <span className="font-mono text-[0.8rem] text-muted">Private / academic repository</span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
