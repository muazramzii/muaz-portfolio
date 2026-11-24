import { GraduationCap } from 'lucide-react'
import { facts, education } from '../data.js'
import { Reveal } from './ui.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid items-start gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal><span className="eyebrow">01 — About</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3rem)]">Building software and data-driven solutions for real-world problems.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[1.05rem] text-muted">
             I'm Muaz, a final-year IT student at UTHM. I'm currently doing my internship at Secure LabX as a full-stack developer. I started on the backend and now work on both the backend and the frontend of my project.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-[1.05rem] text-muted">
              Most of what I know comes from building projects: a research monitoring system for my final-year project, an inventory system, a study planner and a few mobile apps. My work so far uses PHP, Node.js, MySQL and PostgreSQL, and I like picking up new tools and working through problems step by step.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-[1.05rem] text-muted">
             I'm interested in backend development, databases, software testing and data analytics, and I'm still learning how to build software that is reliable and easy to maintain.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-[1.05rem] text-muted">
             My internship ends on 15 January 2027. After that, I'm looking for a full-time role in software engineering, backend or database development, software testing or data analytics.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-3.5">
            {facts.map((f, i) => (
              <Reveal key={f.big} delay={i * 0.06}>
                <div className="card p-[18px] hover:-translate-y-1" style={{ borderRadius: 12 }}>
                  <b className="block font-display text-[1.45rem] text-strong">{f.big}</b>
                  <span className="text-[0.82rem] text-muted">{f.small}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="card p-7">
            <h3 className="mb-6 flex items-center gap-2.5 text-[1.05rem]">
              <GraduationCap size={18} className="text-accent" /> Education
            </h3>
            {education.map((e, i) => (
              <div key={e.qualification} className={`relative pl-7 ${i === education.length - 1 ? '' : 'pb-7'}`}>
                {e.current ? (
                  <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full" style={{ background: 'var(--accent)', boxShadow: '0 0 0 4px color-mix(in srgb, var(--accent) 22%, transparent)' }} />
                ) : (
                  <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full" style={{ background: 'var(--bg)', border: '2px solid var(--muted)' }} />
                )}
                {i !== education.length - 1 && <span className="absolute bottom-0 left-[5.5px] top-[22px] w-px" style={{ background: 'var(--border)' }} />}
                <div className="font-mono text-[0.72rem] tracking-wide text-accent">{e.period}</div>
                <h4 className="my-1 text-[1rem] leading-snug">{e.qualification}</h4>
                <p className="text-[0.88rem] text-muted">{e.institution}</p>
                {e.achievement && <p className="mt-1 text-[0.88rem] font-medium text-strong">{e.achievement}</p>}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
