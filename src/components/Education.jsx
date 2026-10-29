import Section from './Section'

// Añade nuevas formaciones (cursos, certificados) a este array.
const items = [
  { title: 'Desarrollo de Aplicaciones Multiplataforma (DAM)', detail: '2º curso · En curso' },
  // { title: 'Curso o certificado', detail: 'Entidad · Año' },
]

export default function Education() {
  return (
    <Section id="formacion" title="Formación" tint>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold">{i.title}</h3>
            <p className="text-sm text-muted">{i.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
