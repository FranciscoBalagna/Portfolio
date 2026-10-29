import { motion } from 'framer-motion'
import Section from './Section'
import Badge from './Badge'
import { techGroups } from '../data/site'

export default function Tech() {
  return (
    <Section id="tecnologias" title="Tecnologías" intro="Con lo que trabajo durante el ciclo y en mis proyectos personales.">
      <div className="grid gap-4 sm:grid-cols-2">
        {techGroups.map((g) => (
          <motion.div key={g.title} whileHover={{ y: -3 }} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold">{g.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">{g.items.map((t) => <li key={t}><Badge>{t}</Badge></li>)}</ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
