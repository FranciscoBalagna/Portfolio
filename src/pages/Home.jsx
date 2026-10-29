import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Tech from '../components/Tech'

// Las secciones bajo el primer scroll se cargan en diferido.
const Projects = lazy(() => import('../components/Projects'))
const Experience = lazy(() => import('../components/Experience'))
const Education = lazy(() => import('../components/Education'))
const Contact = lazy(() => import('../components/Contact'))

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tech />
      <Suspense fallback={null}>
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </Suspense>
    </>
  )
}
