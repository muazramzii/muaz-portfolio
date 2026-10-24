import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Github } from './Brand.jsx'
import { projects, filters } from '../data.js'
import { Reveal, Thumb } from './ui.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null)

  const visible = projects.filter((p) => filter === 'all' || p.cats.includes(filter))

  return (
    <section id="projects" className="section bg-soft">
      <div className="container-x">
        <div className="mb-13 max-w-[640px]" style={{ marginBottom: 40 }}>
          <Reveal><span className="eyebrow">04 — Selected Work</span></Reveal>
          <Reveal delay={0.05}><h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3rem)]">Projects I've shipped</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-3.5 text-[1.05rem] text-muted">A mix of production apps, academic builds and experiments. Click any card for the full breakdown.</p></Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mb-9 flex flex-wrap gap-2.5">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className="rounded-full px-4 py-2.5 font-mono text-[0.8rem] transition-all duration-200 hover:-translate-y-0.5"
                style={
                  filter === f.key
                    ? { background: 'var(--gradient)', color: '#04110f', border: '1px solid transparent' }
                    : { background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--muted)' }
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.04 }}
                onClick={() => setActive(p)}
                className="card group flex cursor-pointer flex-col overflow-hidden hover:-translate-y-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <Thumb index={i} label={p.label} img={p.img} position={p.imgPosition} fit={p.imgFit} bg={p.imgBg} />
                  </div>
                  <span className="absolute left-3 top-3 rounded-md px-2.5 py-1 font-mono text-[0.68rem] tracking-wide" style={{ background: 'var(--glass)', backdropFilter: 'blur(8px)', border: '1px solid var(--border-strong)' }}>
                    {p.catLabel}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-[22px]">
                  <h3 className="text-[1.2rem]">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[0.92rem] text-muted">{p.short}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-md px-2.5 py-1 font-mono text-[0.7rem]" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--muted)' }}>{t}</span>
                    ))}
                  </div>
                  <div className="mt-[18px] flex items-center gap-3.5 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 font-mono text-[0.82rem] text-muted transition-colors hover:text-[var(--accent)]">
                        <ExternalLink size={15} /> Live
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 font-mono text-[0.82rem] text-muted transition-colors hover:text-[var(--accent)]">
                        <Github size={15} /> Code
                      </a>
                    )}
                    <span className="ml-auto inline-flex items-center gap-1 font-mono text-[0.72rem] text-accent">
                      Details <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
