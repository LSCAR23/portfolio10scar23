import { Cpu, GitBranch, Layers, Target } from 'lucide-react'

const PILLARS = [
  {
    Icon: Cpu,
    title: 'AI-Driven Automation',
    desc: 'I design and integrate AI agents into real operational workflows, using OpenAI and n8n to automate complex decision-making.',
  },
  {
    Icon: GitBranch,
    title: 'Systems Integration',
    desc: 'I connect platforms via APIs and webhooks, building ecosystems where every service communicates and acts autonomously.',
  },
  {
    Icon: Layers,
    title: 'Scalable Architectures',
    desc: 'I design decoupled backends with microservices and Docker containers, built to grow without friction.',
  },
  {
    Icon: Target,
    title: 'Results-Oriented',
    desc: 'Every solution I build has measurable impact: less manual work, fewer errors, more business value.',
  },
]

const glass = {
  background: 'linear-gradient(135deg, rgba(255,236,214,.08), rgba(255,236,214,.015))',
  border: '1px solid var(--line)',
  boxShadow:
    'inset 0 1px 0 rgba(255,240,220,.12), 0 2px 0 rgba(0,0,0,.4), 0 24px 60px rgba(0,0,0,.75), 0 10px 50px -10px rgba(234,120,30,.18)',
  WebkitBackdropFilter: 'blur(20px) saturate(150%)',
  backdropFilter: 'blur(20px) saturate(150%)',
}

function SystemMap() {
  return (
    <figure
      className="overflow-hidden"
      aria-label="Diagram: a core service connected to API, AI, message queue and database nodes"
      style={{
        ...glass,
        flex: '1 1 440px',
        minWidth: 0,
        margin: 0,
        borderRadius: 24,
        background: 'linear-gradient(135deg, rgba(30,22,14,.55), rgba(8,6,4,.45))',
        boxShadow:
          'inset 0 1px 0 rgba(255,240,220,.14), 0 40px 100px rgba(0,0,0,.85), 0 30px 90px -20px rgba(234,120,30,.38), 0 0 0 1px rgba(252,190,100,.06)',
      }}
    >
      <div
        className="mono flex items-center justify-between"
        style={{ height: 46, padding: '0 18px', borderBottom: '1px solid rgba(255,226,190,.1)', fontSize: 11, letterSpacing: '.16em', color: 'var(--muted)' }}
      >
        <span>SYSTEM MAP</span>
        <span className="flex items-center" style={{ gap: 8, color: 'var(--amber-soft)' }}>
          <span className="dot" style={{ width: 6, height: 6 }} />
          LIVE
        </span>
      </div>

      <svg aria-hidden="true" viewBox="0 0 520 380" className="block w-full h-auto">
        <defs>
          <pattern id="map-grid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0V26" fill="none" stroke="rgba(255,210,150,.06)" strokeWidth="1" />
          </pattern>
          <radialGradient id="map-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="55%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#c2410c" />
          </radialGradient>
          <radialGradient id="map-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(245,158,11,.45)" />
            <stop offset="100%" stopColor="rgba(245,158,11,0)" />
          </radialGradient>
        </defs>
        <rect width="520" height="380" fill="url(#map-grid)" />

        {/* links */}
        <g stroke="rgba(252,190,100,.55)" strokeWidth="1.4" fill="none">
          <path id="map-l1" className="flow" d="M110 80 L260 190" />
          <path id="map-l2" className="flow" d="M410 100 L260 190" />
          <path id="map-l3" className="flow" d="M110 300 L260 190" />
          <path id="map-l4" className="flow" d="M340 300 L260 190" />
          <path className="flow" d="M410 100 L440 230 L340 300" />
          <path className="flow" d="M110 80 L180 120" />
          <path className="flow" d="M110 300 L160 265" />
        </g>

        {/* packets travelling along the links */}
        <g fill="#fde68a">
          <circle r="3">
            <animateMotion dur="2.6s" repeatCount="indefinite">
              <mpath href="#map-l1" />
            </animateMotion>
          </circle>
          <circle r="3">
            <animateMotion dur="3.1s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1">
              <mpath href="#map-l2" />
            </animateMotion>
          </circle>
          <circle r="3">
            <animateMotion dur="2.9s" repeatCount="indefinite">
              <mpath href="#map-l3" />
            </animateMotion>
          </circle>
          <circle r="3">
            <animateMotion dur="3.4s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1">
              <mpath href="#map-l4" />
            </animateMotion>
          </circle>
        </g>

        {/* minor nodes */}
        <g fill="rgba(252,190,100,.35)" stroke="rgba(252,190,100,.6)" strokeWidth="1">
          <circle cx="180" cy="120" r="5" />
          <circle cx="160" cy="265" r="5" />
          <circle cx="440" cy="230" r="5" />
          <circle cx="330" cy="150" r="4" />
        </g>

        {/* main nodes */}
        {[
          [110, 80],
          [410, 100],
          [110, 300],
          [340, 300],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="10" fill="#1a120a" stroke="#fbbf24" strokeWidth="1.6" />
            <circle cx={cx} cy={cy} r="3.5" fill="#fbbf24" />
          </g>
        ))}

        {/* core */}
        <circle cx="260" cy="190" r="60" fill="url(#map-halo)" />
        <circle className="ring" cx="260" cy="190" r="14" fill="none" stroke="#fbbf24" strokeWidth="1.4" />
        <circle className="ring ring2" cx="260" cy="190" r="14" fill="none" stroke="#fbbf24" strokeWidth="1.4" />
        <circle cx="260" cy="190" r="20" fill="#120c06" stroke="#fcd34d" strokeWidth="1.8" />
        <circle cx="260" cy="190" r="9" fill="url(#map-core)" />

        {/* labels */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="700" letterSpacing="1.5" fill="#fcd38a" textAnchor="middle">
          <text x="110" y="58">API</text>
          <text x="410" y="78">AI</text>
          <text x="260" y="160">CORE</text>
          <text x="110" y="330">MQ</text>
          <text x="340" y="330">DB</text>
        </g>
      </svg>

      <figcaption
        className="mono flex flex-wrap"
        style={{ gap: '8px 20px', padding: '14px 18px', borderTop: '1px solid rgba(255,226,190,.1)', fontSize: 11, letterSpacing: '.12em', color: 'var(--muted)' }}
      >
        <span>API → CORE</span>
        <span>AI ⇄ CORE</span>
        <span>CORE → DB · MQ</span>
      </figcaption>
    </figure>
  )
}

export default function About() {
  return (
    <section
      id="about"
      aria-label="Behind the Code"
      className="relative overflow-x-clip"
      style={{ padding: '120px clamp(16px, 7vw, 120px)', isolation: 'isolate' }}
    >
      <div
        className="glow absolute pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 0,
          right: '2%',
          top: '14%',
          width: '50%',
          height: '75%',
          background: 'radial-gradient(closest-side, rgba(234,120,30,.2), rgba(160,60,10,.06) 55%, transparent)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="glow absolute pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 0,
          left: '-8%',
          bottom: '-12%',
          width: '55%',
          height: '60%',
          background: 'radial-gradient(closest-side, rgba(200,90,20,.18), transparent)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none feather"
        aria-hidden="true"
        style={{ zIndex: 0, background: 'linear-gradient(90deg, rgba(0,0,0,.6), transparent 22%, transparent 78%, rgba(0,0,0,.6))' }}
      />

      <div className="relative mx-auto flex flex-wrap items-center" style={{ zIndex: 1, maxWidth: 1200, gap: 64 }}>
        <div className="flex flex-col" style={{ flex: '1 1 520px', minWidth: 0, gap: 28 }}>
          <div className="eyebrow">
            <span className="dot" />
            ABOUT
          </div>
          <h2 className="h2">
            Behind the Code<span className="amber-text">.</span>
          </h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: 'var(--text)' }}>
            I'm a Software Engineer driven by the challenge of optimizing complex systems. My core belief:{' '}
            <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>every manual process can be made intelligent.</strong> Focused
            on automation and AI integration, I build systems — from microservices to autonomous agents — that don't just work,
            they scale. My problem-solving mindset lets me bridge the gap between business needs and technical execution,
            delivering solutions with measurable operational impact.
          </p>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 16, paddingTop: 8 }}>
            {PILLARS.map(({ Icon, title, desc }) => (
              <article key={title} className="lift flex flex-col" style={{ ...glass, gap: 12, padding: 22, borderRadius: 18 }}>
                <div className="flex items-center" style={{ gap: 12 }}>
                  <span className="ico inline-flex items-center justify-center" style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0 }}>
                    <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>{title}</h3>
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#b3a592' }}>{desc}</p>
              </article>
            ))}
          </div>
        </div>

        <SystemMap />
      </div>
    </section>
  )
}
