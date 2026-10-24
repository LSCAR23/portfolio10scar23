import { ArrowDown } from 'lucide-react'

export default function Hero({ dark }) {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center dot-grid scroll-mt-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
      />
      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="flex items-center gap-2 mb-8">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
            style={{
              color: '#3b82f6',
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.2)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 6px #4ade80' }} />
            Software Engineer &amp; Systems Developer
          </span>
        </div>

        <h1
          className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
          style={{ color: dark ? '#f1f5f9' : '#0f172a' }}
        >
          OSCAR<span style={{ color: '#3b82f6' }}>.</span>
        </h1>

        <p
          className="text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
          style={{ color: dark ? '#94a3b8' : '#475569' }}
        >
          Automating the future with scalable, AI-driven solutions and robust backend systems. Expert in turning
          complex workflows into seamless digital operations.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button onClick={() => go('#projects')} className="btn-primary px-6 py-3 rounded-lg text-sm font-semibold">
            View projects
          </button>
          <button onClick={() => go('#contact')} className="btn-secondary px-6 py-3 rounded-lg text-sm font-semibold">
            Contact
          </button>
        </div>
      </div>

      <button
        onClick={() => go('#metrics')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        aria-label="Scroll down"
        style={{ color: dark ? '#475569' : '#94a3b8' }}
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-60">Scroll</span>
        <ArrowDown
          size={16}
          className="opacity-60 group-hover:opacity-100 transition-all duration-300"
          style={{ animation: 'bounce-soft 2s infinite' }}
        />
      </button>
    </section>
  )
}
