import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FiMapPin, FiBookOpen, FiCode, FiPenTool, FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { site } from '../data/site'

const base = import.meta.env.BASE_URL
const chips = [[FiMapPin, 'Barcelona'], [FiBookOpen, 'DAM'], [FiCode, 'Frontend'], [FiPenTool, 'UX/UI']]

// Sustituye /public/profile.jpg y /public/avatar.png: si no existen, se muestran las iniciales.
function Picture({ src, alt, className }) {
  const [failed, setFailed] = useState(false)
  if (failed) return (
    <div role="img" aria-label={alt} className={`${className} flex items-center justify-center bg-gradient-to-br from-brand to-accent text-3xl font-extrabold text-white`}>FB</div>
  )
  return <img src={`${base}${src}`} alt={alt} onError={() => setFailed(true)} className={`${className} object-cover`} />
}

const btn = 'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors'

export default function Hero() {
  const reduce = useReducedMotion()
  const item = (i) => reduce ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * 0.08, duration: 0.45 } }
  return (
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
      <div>
        <motion.p {...item(0)} className="font-semibold text-accent-dark">Busco prácticas DAM · Frontend junior</motion.p>
        <motion.h1 {...item(1)} className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{site.name}</motion.h1>
        <motion.p {...item(2)} className="mt-3 text-lg font-semibold text-brand">{site.title}</motion.p>
        <motion.p {...item(3)} className="mt-4 max-w-lg text-lg text-muted">{site.subtitle}</motion.p>
        <motion.ul {...item(4)} className="mt-6 flex flex-wrap gap-2" aria-label="Resumen">
          {chips.map(([Icon, label]) => (
            <li key={label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold"><Icon className="text-brand" aria-hidden />{label}</li>
          ))}
        </motion.ul>
        <motion.div {...item(5)} className="mt-8 flex flex-wrap gap-3">
          <a href={`${base}${site.cv}`} download className={`${btn} bg-brand text-white hover:bg-brand-dark`}><FiDownload aria-hidden />Descargar CV</a>
          <a href={site.github} target="_blank" rel="noreferrer" className={`${btn} border border-slate-300 bg-white hover:border-brand`}><FaGithub aria-hidden />GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className={`${btn} border border-slate-300 bg-white hover:border-brand`}><FaLinkedin aria-hidden />LinkedIn</a>
        </motion.div>
      </div>
      <motion.div {...item(2)} className="relative mx-auto w-64 sm:w-72">
        <Picture src="profile.jpg" alt={`Fotografía de ${site.name}`} className="aspect-[4/5] w-full rounded-3xl shadow-lg ring-1 ring-slate-200" />
        <Picture src="avatar.png" alt="Avatar ilustrado de Francisco" className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl border-4 border-slate-50 shadow-md sm:h-28 sm:w-28" />
      </motion.div>
    </section>
  )
}
