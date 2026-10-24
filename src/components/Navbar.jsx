import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SECTIONS = ['hero', 'projects', 'stack', 'about', 'metrics', 'contact']

export default function Navbar({ dark, onToggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(id),
        { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const onLink = (href) => (e) => {
    e.preventDefault()
    go(href)
  }

  const muted = dark ? '#94a3b8' : '#475569'

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? (dark ? 'rgba(11,12,16,0.92)' : 'rgba(248,250,252,0.92)') : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? dark
            ? '1px solid rgba(255,255,255,0.06)'
            : '1px solid rgba(0,0,0,0.07)'
          : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={onLink('#hero')}
          className="text-base font-bold tracking-wide transition-opacity hover:opacity-80"
          style={{ color: dark ? '#f1f5f9' : '#0f172a' }}
        >
          OSCAR
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(({ label, href }) => {
            const isActive = active === href.replace('#', '')
            return (
              <a
                key={href}
                href={href}
                onClick={onLink(href)}
                aria-current={isActive ? 'true' : undefined}
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={{ color: isActive ? (dark ? '#f1f5f9' : '#0f172a') : '' }}
              >
                {label}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg transition-colors duration-200"
            style={{ color: muted, background: 'transparent' }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            onClick={onLink('#contact')}
            className="hidden md:flex btn-primary text-sm font-medium px-4 py-2 rounded-lg"
          >
            Hire me
          </a>
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{ color: muted }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="md:hidden px-6 pt-4 pb-4 flex flex-col gap-4 border-t"
          style={{
            background: dark ? 'rgba(11,12,16,0.97)' : 'rgba(248,250,252,0.97)',
            borderColor: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)',
          }}
        >
          {LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={onLink(href)} className="nav-link py-1" style={{ color: muted }}>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={onLink('#contact')}
            className="btn-primary text-sm font-medium px-4 py-2 rounded-lg text-center mt-1"
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  )
}
