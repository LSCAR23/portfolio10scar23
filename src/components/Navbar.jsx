import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)

  // Highlight the section currently in view.
  useEffect(() => {
    const observers = ['hero', 'projects', 'stack', 'about', 'contact'].map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(id), {
        rootMargin: '-35% 0px -60% 0px',
      })
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ padding: '16px clamp(16px, 7vw, 120px) 0' }}>
      <div className="glass mx-auto" style={{ maxWidth: 1200, borderRadius: 18 }}>
        <nav aria-label="Main" className="flex items-center justify-between gap-6" style={{ height: 64, padding: '0 10px 0 24px' }}>
          <a href="#hero" aria-label="Oscar — back to top" className="inline-flex items-center" style={{ minHeight: 44, fontWeight: 800, fontSize: 20, letterSpacing: '.04em', color: '#fff8ee' }}>
            OSCAR<span className="amber-text">.</span>
          </a>

          <div className="hidden md:flex items-center" style={{ gap: 36, fontSize: 15, fontWeight: 500 }}>
            {LINKS.map(({ label, href }) => {
              const isActive = active === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? 'true' : undefined}
                  className="transition-colors"
                  style={{ color: isActive ? '#fff6ea' : '#b9ab98' }}
                >
                  {label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="glass-amber lift hidden sm:inline-flex items-center"
              style={{ height: 44, padding: '0 20px', borderRadius: 12, fontWeight: 700, fontSize: 15 }}
            >
              Hire me
            </a>
            <button
              type="button"
              className="glass md:hidden flex items-center justify-center"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              style={{ width: 44, height: 44, borderRadius: 12, color: '#e6d8c4' }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden flex flex-col gap-1" style={{ padding: '4px 14px 14px', borderTop: '1px solid var(--line)' }}>
            {LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center"
                style={{ minHeight: 44, padding: '0 10px', fontSize: 16, fontWeight: 500, color: '#e6d8c4' }}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="glass-amber sm:hidden flex items-center justify-center mt-2"
              style={{ height: 46, borderRadius: 12, fontWeight: 700 }}
            >
              Hire me
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
