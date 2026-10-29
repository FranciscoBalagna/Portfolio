import Section from './Section'
import Badge from './Badge'
import { skills } from '../data/site'

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiencia">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold">Cafetería Changui</h3>
        <p className="text-sm font-semibold text-muted">Actualmente</p>
        <p className="mt-3 max-w-xl text-muted">Trabajo de cara al público, compaginado con mis estudios. Me ha dado hábitos que llevo también al desarrollo:</p>
        <ul className="mt-4 flex flex-wrap gap-2">{skills.map((s) => <li key={s}><Badge>{s}</Badge></li>)}</ul>
      </div>
    </Section>
  )
}
