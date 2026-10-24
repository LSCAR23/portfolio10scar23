import { ArrowUp, Code2, Mail, Send } from 'lucide-react'

const CHANNELS = [
  { label: 'EMAIL', value: 'laraoscar2310@gmail.com', href: 'mailto:laraoscar2310@gmail.com', icon: <Mail size={18} strokeWidth={1.8} /> },
  {
    label: 'LINKEDIN',
    value: '/in/lscar23',
    href: 'https://www.linkedin.com/in/lscar23/',
    icon: <span style={{ fontSize: 15, fontWeight: 800 }}>in</span>,
  },
  { label: 'GITHUB', value: 'LSCAR23', href: 'https://github.com/LSCAR23', icon: <Code2 size={18} strokeWidth={1.8} /> },
]

const glass = {
  background: 'linear-gradient(135deg, rgba(255,236,214,.08), rgba(255,236,214,.015))',
  border: '1px solid var(--line)',
  boxShadow:
    'inset 0 1px 0 rgba(255,240,220,.12), 0 2px 0 rgba(0,0,0,.4), 0 24px 60px rgba(0,0,0,.75), 0 10px 50px -10px rgba(234,120,30,.18)',
  WebkitBackdropFilter: 'blur(20px) saturate(150%)',
  backdropFilter: 'blur(20px) saturate(150%)',
}

export default function Contact() {
  return (
    <div className="relative overflow-x-clip" style={{ zIndex: 1, isolation: 'isolate' }}>
      {/* ambient light */}
      <div
        className="glow absolute pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 0,
          left: '50%',
          top: '34%',
          width: '70%',
          height: '80%',
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(closest-side, rgba(234,120,30,.22), rgba(160,60,10,.06) 55%, transparent)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none feather"
        aria-hidden="true"
        style={{ zIndex: 0, background: 'linear-gradient(90deg, rgba(0,0,0,.6), transparent 22%, transparent 78%, rgba(0,0,0,.6))' }}
      />

      <section
        id="contact"
        aria-label="Contact"
        className="relative flex flex-col items-center text-center"
        style={{ zIndex: 2, padding: '140px clamp(16px, 7vw, 120px) 120px', gap: 28 }}
      >
        <div className="eyebrow" style={{ gap: 12 }}>
          <span className="dot" style={{ background: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
          AVAILABLE FOR NEW PROJECTS
        </div>
        <h2 className="h2" style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 900, letterSpacing: '-.045em', textShadow: '0 8px 50px rgba(245,140,40,.3), 0 2px 2px rgba(0,0,0,.6)' }}>
          Let's build the future<span className="amber-text">.</span>
        </h2>
        <p style={{ margin: 0, maxWidth: 560, fontSize: 18, lineHeight: 1.6, color: 'var(--text)' }}>
          Currently open to collaborations on high-impact systems and automation architectures. Let's talk.
        </p>

        <div className="flex flex-wrap justify-center" style={{ gap: 16, paddingTop: 20 }}>
          {CHANNELS.map(({ label, value, href, icon }) => {
            const external = href.startsWith('http')
            return (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="contact-link lift flex items-center text-left"
                style={{ ...glass, gap: 14, minHeight: 64, padding: '12px 22px 12px 14px', borderRadius: 16 }}
              >
                <span
                  className="ico inline-flex items-center justify-center"
                  aria-hidden="true"
                  style={{ width: 40, height: 40, borderRadius: 11, flexShrink: 0 }}
                >
                  {icon}
                </span>
                <span className="flex flex-col" style={{ gap: 3 }}>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '.2em', color: 'var(--muted)' }}>
                    {label}
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{value}</span>
                </span>
              </a>
            )
          })}
        </div>

        <a
          href="mailto:laraoscar2310@gmail.com"
          className="glass-amber lift inline-flex items-center"
          style={{
            marginTop: 20,
            gap: 10,
            height: 58,
            padding: '0 32px',
            borderRadius: 14,
            fontWeight: 700,
            fontSize: 17,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,.45), 0 14px 44px rgba(245,130,30,.4), 0 30px 80px -20px rgba(245,130,30,.5)',
          }}
        >
          <Send size={18} strokeWidth={2} aria-hidden="true" />
          Send me a message
        </a>
      </section>

      <footer
        className="site-footer relative flex flex-wrap items-center justify-between"
        style={{
          zIndex: 2,
          gap: 12,
          padding: '28px clamp(16px, 7vw, 120px)',
          background: 'linear-gradient(180deg, rgba(0,0,0,.4), #000)',
        }}
      >
        <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: '.04em', color: 'var(--ink)' }}>
          OSCAR<span className="amber-text">.</span>
        </span>
        <span style={{ fontSize: 13, color: '#9c8f7c' }}>© {new Date().getFullYear()} Oscar. Built with precision.</span>
        <a
          href="#hero"
          className="mono inline-flex items-center"
          style={{ gap: 8, minHeight: 44, fontSize: 11, letterSpacing: '.2em', color: 'var(--label)' }}
        >
          BACK TO TOP
          <ArrowUp size={14} strokeWidth={2.2} color="#fbbf24" aria-hidden="true" />
        </a>
      </footer>
    </div>
  )
}
