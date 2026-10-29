import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import Section from './Section'
import { site } from '../data/site'

const field = 'mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-brand'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const send = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contacto desde tu portfolio – ${f.name}`)
    const body = encodeURIComponent(`${f.message}\n\n${f.name} (${f.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }
  return (
    <Section id="contacto" title="Contacto" intro="¿Tienes una oportunidad de prácticas o quieres hablar de un proyecto? Escríbeme.">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <form onSubmit={send} className="space-y-4">
          <label className="block text-sm font-semibold">Nombre
            <input required value={f.name} onChange={set('name')} autoComplete="name" className={field} />
          </label>
          <label className="block text-sm font-semibold">Email
            <input required type="email" value={f.email} onChange={set('email')} autoComplete="email" className={field} />
          </label>
          <label className="block text-sm font-semibold">Mensaje
            <textarea required rows={5} value={f.message} onChange={set('message')} className={field} />
          </label>
          <button className="rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark">Enviar por email</button>
        </form>
        <ul className="space-y-4 font-semibold">
          <li><a className="inline-flex items-center gap-3 hover:text-brand" href={`mailto:${site.email}`}><FiMail aria-hidden />{site.email}</a></li>
          <li><a className="inline-flex items-center gap-3 hover:text-brand" href={site.github} target="_blank" rel="noreferrer"><FaGithub aria-hidden />GitHub</a></li>
          <li><a className="inline-flex items-center gap-3 hover:text-brand" href={site.linkedin} target="_blank" rel="noreferrer"><FaLinkedin aria-hidden />LinkedIn</a></li>
        </ul>
      </div>
    </Section>
  )
}
