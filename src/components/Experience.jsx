import { experience } from '../data.js'
import { Reveal } from './ui.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <div className="mx-auto mb-13 max-w-[640px] text-center" style={{ marginBottom: 52 }}>
          <Reveal><span className="eyebrow" style={{ display: 'inline-flex' }}>03 — Experience</span></Reveal>
          <Reveal delay={0.05}><h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3rem)]">Where I've been building</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-3.5 text-[1.05rem] text-muted">My experience comes from my current internship and from the projects I've built during my studies.</p></Reveal>
        </div>

        <div className="relative mx-auto max-w-[760px]">
          <span className="absolute bottom-1.5 left-[18px] top-1.5 w-0.5 opacity-30" style={{ background: 'linear-gradient(var(--accent), var(--accent-2))' }} />
          {experience.map((job, i) => (
            <Reveal key={job.title} delay={i * 0.08}>
              <div className={`relative pl-[60px] ${i === experience.length - 1 ? '' : 'pb-10'}`}>
                <span className="absolute left-[9px] top-1 grid h-5 w-5 place-items-center rounded-full" style={{ background: 'var(--bg)', border: '2px solid var(--accent)' }}>
                  <span className="h-[7px] w-[7px] rounded-full" style={{ background: 'var(--accent)' }} />
                </span>
                <div className="card p-6 transition-transform duration-300 hover:translate-x-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-[1.15rem]">
                        {job.title}
                        {job.tag && (
                          <span className="ml-2 rounded-md px-2 py-0.5 font-mono text-[0.66rem] uppercase tracking-wider" style={{ background: 'color-mix(in srgb, var(--accent) 16%, transparent)', color: 'var(--accent)' }}>
                            {job.tag}
                          </span>
                        )}
                      </h3>
                      <div className="text-[0.95rem] font-medium text-accent">{job.company}</div>
                    </div>
                    <div className="whitespace-nowrap font-mono text-[0.74rem] text-muted">{job.when}</div>
                  </div>
                  <ul className="mt-3.5 list-disc pl-[18px] text-[0.94rem] text-muted marker:text-[var(--accent)]">
                    {job.points.map((p, k) => <li key={k} className="mb-1.5">{p}</li>)}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
