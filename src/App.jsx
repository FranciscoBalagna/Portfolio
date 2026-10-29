import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main"><Home /></main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Francisco Martín Balagna · Barcelona
      </footer>
    </>
  )
}
