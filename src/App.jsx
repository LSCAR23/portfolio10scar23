import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Metrics from './components/Metrics.jsx'
import Projects from './components/Projects.jsx'
import Stack from './components/Stack.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function readDarkPreference() {
  try {
    const saved = localStorage.getItem('portfolio-dark')
    return saved === null ? true : saved === 'true'
  } catch {
    return true
  }
}

export default function App() {
  const [dark, setDark] = useState(readDarkPreference)

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
    try {
      localStorage.setItem('portfolio-dark', String(dark))
    } catch {
      // Storage can be blocked (private mode); the toggle still works.
    }
  }, [dark])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: dark ? '#0b0c10' : '#f8fafc',
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
    >
      <a href="#projects" className="skip-link">
        Skip to projects
      </a>
      <Navbar dark={dark} onToggleDark={() => setDark((d) => !d)} />
      <main>
        <Hero dark={dark} />
        <Metrics dark={dark} />
        <Projects dark={dark} />
        <Stack dark={dark} />
        <About dark={dark} />
        <Contact dark={dark} />
      </main>
      <footer
        className="text-center py-8 text-xs"
        style={{
          color: dark ? '#334155' : '#94a3b8',
          borderTop: dark ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(0,0,0,0.06)',
        }}
      >
        © {new Date().getFullYear()} Oscar. Built with precision.
      </footer>
    </div>
  )
}
