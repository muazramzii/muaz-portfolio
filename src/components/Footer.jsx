import { Mail } from 'lucide-react'
import { Github, Linkedin } from './Brand.jsx'
import { profile } from '../data.js'

export default function Footer() {
  const socials = [
    { icon: Github, href: profile.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ]
  return (
    <footer className="border-t py-10" style={{ borderColor: 'var(--border)' }}>
      <div className="container-x flex flex-wrap items-center justify-between gap-5">
        <div>
          <div className="font-display text-[1.1rem] font-bold">
            Muaz<span className="text-accent">.</span>
          </div>
          <p className="text-[0.84rem] text-muted">Built & designed by Muaz Ramzi · {new Date().getFullYear()}</p>
        </div>
        <div className="flex gap-2.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-[11px] text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--accent)] hover:border-[var(--accent)]"
              style={{ border: '1px solid var(--border)' }}
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
