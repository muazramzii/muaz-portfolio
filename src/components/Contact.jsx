import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Github, Linkedin } from './Brand.jsx'
import { profile } from '../data.js'
import { Reveal } from './ui.jsx'

const contactList = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'WhatsApp', value: profile.phone, href: `https://wa.link/wzm6bq` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinUser, href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: profile.githubUser, href: profile.github },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error'

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: false }))
  }

  const submit = async (e) => {
    e.preventDefault()
    const er = {}
    if (!form.name.trim()) er.name = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) er.email = true
    if (!form.message.trim()) er.message = true
    setErrors(er)
    if (Object.keys(er).length) return

    setSending(true)
    setStatus(null)
    try {
      const res = await fetch(profile.formspree, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
        }),
      })
      if (res.ok) {
        setForm({ name: '', email: '', message: '' })
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
      setTimeout(() => setStatus(null), 4500)
    }
  }

  const fieldStyle = (bad) => ({
    background: 'var(--surface-2)',
    border: `1px solid ${bad ? '#f87171' : 'var(--border)'}`,
    color: 'var(--text)',
  })

  return (
    <section id="contact" className="section bg-soft">
      <div className="container-x">
        <div className="mx-auto mb-13 max-w-[640px] text-center" style={{ marginBottom: 52 }}>
          <Reveal><span className="eyebrow" style={{ display: 'inline-flex' }}>06 — Contact</span></Reveal>
          <Reveal delay={0.05}><h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3rem)]">Let's build something</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-3.5 text-[1.05rem] text-muted">Open to full-time roles, recruiter enquiries and relevant collaborations.</p></Reveal>
        </div>

        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h3 className="text-[1.4rem]">Get in touch</h3>
            <p className="mt-3 text-muted">
              I'm doing my internship at Secure LabX until 15 January 2027 and will be open to full-time opportunities after that.
              If you're hiring or would like to talk about a project, email or LinkedIn is the fastest way to reach me.
            </p>
            <div className="mt-7 grid gap-3.5">
              {contactList.map((c) => {
                const Inner = (
                  <>
                    <div className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[11px] text-accent" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <c.icon size={18} />
                    </div>
                    <div>
                      <small className="block font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted">{c.label}</small>
                      <b className="text-[0.96rem] font-medium">{c.value}</b>
                    </div>
                  </>
                )
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-3.5 transition-transform duration-200 hover:translate-x-1">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label} className="flex items-center gap-3.5">{Inner}</div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-7" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <div className="mb-[18px]">
                <label htmlFor="name" className="mb-1.5 block text-[0.82rem] font-medium">Name</label>
                <input id="name" value={form.name} onChange={set('name')} placeholder="Your name" autoComplete="name"
                  className="w-full rounded-[11px] px-3.5 py-3 text-[0.95rem] outline-none transition-colors focus:border-[var(--accent)]" style={fieldStyle(errors.name)} />
                {errors.name && <span className="mt-1.5 block text-[0.76rem]" style={{ color: '#f87171' }}>Please enter your name.</span>}
              </div>
              <div className="mb-[18px]">
                <label htmlFor="email" className="mb-1.5 block text-[0.82rem] font-medium">Email</label>
                <input id="email" value={form.email} onChange={set('email')} placeholder="you@company.com" autoComplete="email"
                  className="w-full rounded-[11px] px-3.5 py-3 text-[0.95rem] outline-none transition-colors focus:border-[var(--accent)]" style={fieldStyle(errors.email)} />
                {errors.email && <span className="mt-1.5 block text-[0.76rem]" style={{ color: '#f87171' }}>Please enter a valid email address.</span>}
              </div>
              <div className="mb-[18px]">
                <label htmlFor="message" className="mb-1.5 block text-[0.82rem] font-medium">Message</label>
                <textarea id="message" rows={4} value={form.message} onChange={set('message')} placeholder="Tell me about the role or project…"
                  className="w-full resize-y rounded-[11px] px-3.5 py-3 text-[0.95rem] outline-none transition-colors focus:border-[var(--accent)]" style={fieldStyle(errors.message)} />
                {errors.message && <span className="mt-1.5 block text-[0.76rem]" style={{ color: '#f87171' }}>Please add a short message.</span>}
              </div>
              <button onClick={submit} disabled={sending} className="btn btn-primary w-full justify-center" style={{ opacity: sending ? 0.7 : 1, cursor: sending ? 'wait' : 'pointer' }}>
                {sending ? 'Sending…' : 'Send message'} {!sending && <Send size={16} />}
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ y: 120, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            exit={{ y: 120, x: '-50%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="fixed bottom-7 left-1/2 z-[400] flex items-center gap-3 rounded-[14px] px-5 py-3.5"
            style={{ background: 'var(--surface)', border: `1px solid ${status === 'success' ? 'var(--accent)' : '#f87171'}`, boxShadow: '0 12px 34px rgba(0,0,0,0.18)' }}
          >
            {status === 'success' ? <CheckCircle2 size={20} className="text-accent" /> : <AlertCircle size={20} style={{ color: '#f87171' }} />}
            <div>
              <b className="block text-[0.9rem]">{status === 'success' ? 'Message sent' : "Couldn't send"}</b>
              <span className="block text-[0.8rem] text-muted">
                {status === 'success' ? "Thanks — I'll get back to you soon." : 'Something went wrong. Try again or email me directly.'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}