import { Award, CheckCircle2, BarChart3, FileText } from 'lucide-react'

const ICONS = { Award, CheckCircle2, BarChart3, FileText }
import { certifications } from '../data.js'
import { Reveal } from './ui.jsx'

export default function Certifications() {
  return (
    <section id="certs" className="section">
      <div className="container-x">
        <div className="mb-13 max-w-[640px]" style={{ marginBottom: 52 }}>
          <Reveal><span className="eyebrow">05 — Recognition</span></Reveal>
          <Reveal delay={0.05}><h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3rem)]">Achievements & milestones</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-3.5 text-[1.05rem] text-muted">A few things I'm proud of from my studies and projects.</p></Reveal>
        </div>

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => {
            const Icon = ICONS[c.icon] || Award
            return (
              <Reveal key={c.title} delay={(i % 4) * 0.07}>
                <div className="card h-full p-[26px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)]">
                  <div className="mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-xl" style={{ background: 'var(--gradient)', color: '#04110f' }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-[1.1rem]">{c.title}</h3>
                  <div className="my-1.5 font-mono text-[0.76rem] text-accent">{c.issuer}</div>
                  <p className="text-[0.9rem] text-muted">{c.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
