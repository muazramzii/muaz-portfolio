import { Code2, Server, Smartphone, Database, Wrench, BrainCircuit } from 'lucide-react'

const ICONS = { Code2, Server, Smartphone, Database, Wrench, BrainCircuit }
import { skills, marquee } from '../data.js'
import { Reveal } from './ui.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section bg-soft">
      <div className="container-x">
        <div className="mb-13 max-w-[640px]" style={{ marginBottom: 52 }}>
          <Reveal><span className="eyebrow">02 — Skills</span></Reveal>
          <Reveal delay={0.05}><h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3rem)]">The stack I build with</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-3.5 text-[1.05rem] text-muted">Technologies I've used in my projects and studies, grouped by area.</p></Reveal>
        </div>

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => {
            const Icon = ICONS[cat.icon] || Code2
            return (
              <Reveal key={cat.title} delay={(i % 3) * 0.08}>
                <div className="card group relative h-full overflow-hidden p-[26px] hover:-translate-y-1.5">
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ background: 'var(--gradient)' }} />
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl" style={{ background: 'color-mix(in srgb, var(--accent) 14%, transparent)', color: 'var(--accent)' }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-[1.1rem]">{cat.title}</h3>
                  <span className="font-mono text-[0.72rem] text-muted">{cat.note}</span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.items.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      {/* Infinite marquee */}
      <div className="relative mt-14 flex overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)' }}>
        <div className="flex shrink-0 animate-marquee gap-4 pr-4">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="whitespace-nowrap font-mono text-[0.85rem]" style={{ color: 'var(--muted)' }}>
              {t} <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
