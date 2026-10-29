import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink, FiFolder } from 'react-icons/fi'
import Section from './Section'
import Badge from './Badge'
import { projects } from '../data/projects'
import { site } from '../data/site'

const base = import.meta.env.BASE_URL

export default function Projects() {
  return (
    <Section id="proyectos" title="Proyectos" intro="Lo que estoy construyendo mientras aprendo." tint>
      {projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-muted">
          <FiFolder size={28} className="text-brand" aria-hidden />
          <p className="mt-3 max-w-md">Estoy preparando mis primeros proyectos. Mientras tanto, puedes ver mi código en <a className="font-semibold text-brand underline" href={site.github} target="_blank" rel="noreferrer">GitHub</a>.</p>
        </div>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.li key={p.name} whileHover={{ y: -4 }} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {p.image
                ? <img src={`${base}${p.image}`} alt={`Captura de ${p.name}`} loading="lazy" className="aspect-video w-full object-cover" />
                : <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-brand/10 to-accent/20 text-brand"><FiFolder size={32} aria-hidden /></div>}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-bold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t}><Badge>{t}</Badge></li>)}</ul>
                <div className="mt-4 flex gap-4 text-sm font-bold">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-brand hover:underline"><FaGithub aria-hidden />Código</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-brand hover:underline"><FiExternalLink aria-hidden />Demo</a>}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      )}
    </Section>
  )
}
