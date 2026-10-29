import { motion, useReducedMotion } from 'framer-motion'

export default function Section({ id, title, intro, children, tint = false }) {
  const reduce = useReducedMotion()
  return (
    <section id={id} className={tint ? 'bg-white' : ''} aria-labelledby={`${id}-t`}>
      <motion.div
        className="mx-auto max-w-5xl px-5 py-20"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        <h2 id={`${id}-t`} className="text-3xl font-extrabold tracking-tight">{title}</h2>
        {intro && <p className="mt-3 max-w-xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  )
}
