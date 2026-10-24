// Small hand-drawn badges for each technology (no brand logo files needed).
const icon = (children) => () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {children}
  </svg>
)

const STACK = [
  {
    label: '.NET CORE',
    Icon: icon(
      <>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="rgba(89,130,246,0.15)" stroke="#3b82f6" strokeWidth="0.5" />
        <path d="M7 9h2l1.5 4.5L12 9h2l-2.5 6H9.5L7 9z" fill="#60a5fa" />
        <circle cx="16.5" cy="14.5" r="1" fill="#14b8a6" />
      </>,
    ),
  },
  {
    label: 'SQL SERVER',
    Icon: icon(
      <>
        <ellipse cx="12" cy="7" rx="8" ry="3" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" strokeWidth="1" />
        <path d="M4 7v5c0 1.66 3.58 3 8 3s8-1.34 8-3V7" stroke="#14b8a6" strokeWidth="1" />
        <path d="M4 12v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#14b8a6" strokeWidth="1" />
      </>,
    ),
  },
  {
    label: 'ENTITY FRAMEWORK',
    Icon: icon(
      <>
        <rect x="3" y="3" width="8" height="8" rx="2" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" strokeWidth="1" />
        <rect x="13" y="3" width="8" height="8" rx="2" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" strokeWidth="0.5" />
        <rect x="3" y="13" width="8" height="8" rx="2" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" strokeWidth="0.5" />
        <path d="M13 17h8M17 13v8" stroke="#8b5cf6" strokeWidth="1" strokeLinecap="round" />
      </>,
    ),
  },
  {
    label: 'JAVASCRIPT',
    Icon: icon(
      <>
        <rect x="2" y="2" width="20" height="20" rx="3" fill="rgba(250,204,21,0.15)" stroke="#facc15" strokeWidth="0.5" />
        <path d="M7 16.5c0 1.5 1 2 2.2 2 1.3 0 2.1-.7 2.1-2V10h-1.8v6.3c0 .5-.2.8-.6.8-.4 0-.6-.3-.6-.8H7z" fill="#facc15" />
        <path d="M14 14.8c.1 1 .8 1.7 2 1.7 1.3 0 2-.7 2-1.8 0-1-.6-1.5-1.7-1.9l-.5-.2c-.6-.2-.8-.4-.8-.8 0-.4.3-.7.7-.7s.7.2.8.7h1.7c-.1-.9-.8-1.6-2-1.6-1.3 0-2 .8-2 1.7 0 .9.5 1.4 1.6 1.8l.5.2c.7.3.9.5.9.9 0 .5-.3.8-.8.8s-.9-.3-1-1H14z" fill="#facc15" />
      </>,
    ),
  },
  {
    label: 'TYPESCRIPT',
    Icon: icon(
      <>
        <rect x="2" y="2" width="20" height="20" rx="3" fill="rgba(49,120,198,0.18)" stroke="#3178c6" strokeWidth="0.5" />
        <path d="M6 11h6M9 11v7" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M18 11.6c-.4-.4-1-.6-1.6-.6-.9 0-1.6.5-1.6 1.3 0 1.7 3.3 1.1 3.3 3 0 .9-.8 1.5-1.8 1.5-.7 0-1.4-.3-1.8-.8" stroke="#60a5fa" strokeWidth="1.3" strokeLinecap="round" />
      </>,
    ),
  },
  {
    label: 'TAILWIND CSS',
    Icon: icon(
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.38 10.84 14.5 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.62 7.16 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.38 16.84 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.62 13.16 9.5 12 7 12z" fill="#06b6d4" />,
    ),
  },
  {
    label: 'REACT',
    Icon: icon(
      <>
        <circle cx="12" cy="12" r="2.5" fill="#38bdf8" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#38bdf8" strokeWidth="1" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#38bdf8" strokeWidth="1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#38bdf8" strokeWidth="1" transform="rotate(120 12 12)" />
      </>,
    ),
  },
  {
    label: 'NEXT.JS',
    Icon: icon(
      <>
        <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.06)" stroke="rgba(148,163,184,0.6)" strokeWidth="0.8" />
        <path d="M9 16V8l7 9" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 8v5" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
      </>,
    ),
  },
  {
    label: 'NODE.JS',
    Icon: icon(
      <>
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="rgba(74,222,128,0.12)" stroke="#4ade80" strokeWidth="0.8" />
        <path d="M12 6v6l5 3" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" />
      </>,
    ),
  },
  {
    label: 'GO',
    Icon: icon(
      <>
        <rect x="2" y="5" width="20" height="14" rx="7" fill="rgba(0,173,216,0.14)" stroke="#00add8" strokeWidth="0.8" />
        <path d="M10.5 10.2A2.3 2.3 0 1 0 10.8 13H9.4" stroke="#22d3ee" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="15.2" cy="12" r="2.2" stroke="#22d3ee" strokeWidth="1.3" />
      </>,
    ),
  },
  {
    label: 'LARAVEL',
    Icon: icon(
      <>
        <path d="M4 6l4-2 4 2v9l4 2 4-2V10l-4-2-4 2" stroke="#f87171" strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M4 6v9l8 4.5" stroke="#f87171" strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M8 4v9l4 2" stroke="#f87171" strokeWidth="0.7" strokeOpacity="0.7" strokeLinejoin="round" />
      </>,
    ),
  },
  {
    label: 'POSTGRESQL',
    Icon: icon(
      <>
        <ellipse cx="12" cy="6" rx="7.5" ry="2.8" fill="rgba(96,165,250,0.16)" stroke="#60a5fa" strokeWidth="1" />
        <path d="M4.5 6v12c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8V6" stroke="#60a5fa" strokeWidth="1" />
        <path d="M4.5 12c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8" stroke="#60a5fa" strokeWidth="0.7" strokeOpacity="0.7" />
      </>,
    ),
  },
  {
    label: 'DOCKER',
    Icon: icon(
      <>
        <path d="M22 11.5c-.28-1.59-1.44-2.99-3-3.5h-1V6h-2V4h-2v2h-2V4H10v2H8V4H6v2H4.5C3.1 6 2 7.1 2 8.5c0 3.58 2.92 6.5 6.5 6.5h7c2.76 0 5-2.24 5-5 0-.5-.07-1-.5-1.5z" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="0.5" />
        <rect x="7" y="9" width="2" height="2" rx="0.5" fill="#3b82f6" />
        <rect x="11" y="9" width="2" height="2" rx="0.5" fill="#3b82f6" />
        <rect x="15" y="9" width="2" height="2" rx="0.5" fill="#3b82f6" />
        <rect x="9" y="7" width="2" height="2" rx="0.5" fill="#60a5fa" />
        <rect x="13" y="7" width="2" height="2" rx="0.5" fill="#60a5fa" />
      </>,
    ),
  },
  {
    label: 'OPENAI API',
    Icon: icon(
      <>
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" fill="rgba(148,163,184,0.08)" stroke="rgba(148,163,184,0.5)" strokeWidth="0.8" />
        <path d="M8 12l2-4 4 0 2 4-2 4H10L8 12z" fill="rgba(148,163,184,0.2)" stroke="rgba(148,163,184,0.7)" strokeWidth="0.8" />
        <circle cx="12" cy="12" r="2" fill="rgba(148,163,184,0.8)" />
      </>,
    ),
  },
  {
    label: 'N8N',
    Icon: icon(
      <>
        <circle cx="5" cy="12" r="3" fill="rgba(250,100,50,0.2)" stroke="#fa6432" strokeWidth="1" />
        <circle cx="19" cy="12" r="3" fill="rgba(250,100,50,0.2)" stroke="#fa6432" strokeWidth="1" />
        <path d="M8 12h8" stroke="#fa6432" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="12" cy="7" r="2.5" fill="rgba(250,100,50,0.15)" stroke="#fa6432" strokeWidth="0.8" />
        <circle cx="12" cy="17" r="2.5" fill="rgba(250,100,50,0.15)" stroke="#fa6432" strokeWidth="0.8" />
      </>,
    ),
  },
]

export default function Stack({ dark }) {
  return (
    <section id="stack" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <div className="section-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: dark ? '#f1f5f9' : '#0f172a' }}>
            The Arsenal
          </h2>
          <p className="mt-3 text-sm" style={{ color: dark ? '#475569' : '#64748b' }}>
            Tools and technologies I use to build robust, scalable solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {STACK.map(({ Icon, label }) => (
            <div key={label} className="stack-badge">
              <Icon />
              <span className="text-xs font-semibold tracking-wide" style={{ color: dark ? '#94a3b8' : '#475569' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
