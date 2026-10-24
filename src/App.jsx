import Nebula from './components/Nebula.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Metrics from './components/Metrics.jsx'
import Projects from './components/Projects.jsx'
import Stack from './components/Stack.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="relative overflow-hidden" style={{ background: '#000', isolation: 'isolate' }}>
      <a href="#projects" className="skip-link glass-amber">
        Skip to projects
      </a>
      <Nebula />
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <Metrics />
        <Projects />
        <Stack />
        <About />
      </main>
      <Contact />
    </div>
  )
}
