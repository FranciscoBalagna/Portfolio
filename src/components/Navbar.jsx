import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { nav } from '../data/site'
import useActiveSection from '../hooks/useActiveSection'

const ids = nav.map(([id]) => id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const link = (id) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${active === id ? 'text-brand' : 'text-slate-700 hover:text-brand'}`
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3" aria-label="Principal">
        <a href="#top" className="font-extrabold tracking-tight">Francisco Martín</a>
        <ul className="hidden gap-1 md:flex">
          {nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className={link(id)} aria-current={active === id ? 'true' : undefined}>{label}</a></li>
          ))}
        </ul>
        <button className="rounded-lg p-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-slate-200 bg-white px-5 py-2 md:hidden">
          {nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className={`block ${link(id)}`}>{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
