import { Cpu, GitMerge, Layers, Lightbulb } from 'lucide-react'

const PILLARS = [
  {
    Icon: Cpu,
    title: 'AI-Driven Automation',
    desc: 'I design and integrate AI agents into real operational workflows, using OpenAI and n8n to automate complex decision-making.',
  },
  {
    Icon: GitMerge,
    title: 'Systems Integration',
    desc: 'I connect platforms via APIs and webhooks, building ecosystems where every service communicates and acts autonomously.',
  },
  {
    Icon: Layers,
    title: 'Scalable Architectures',
    desc: 'I design decoupled backends with microservices and Docker containers, built to grow without friction.',
  },
  {
    Icon: Lightbulb,
    title: 'Results-Oriented',
    desc: 'Every solution I build has measurable impact: less manual work, fewer errors, more business value.',
  },
]

const EDGES = [
  [80, 60, 200, 160], [200, 160, 320, 80], [200, 160, 280, 260], [80, 260, 200, 160],
  [320, 80, 360, 200], [280, 260, 360, 200], [200, 160, 120, 240], [120, 240, 80, 260],
]

const NODES = [
  { cx: 200, cy: 160, r: 14, accent: true },
  { cx: 80, cy: 60, r: 8 }, { cx: 320, cy: 80, r: 8 }, { cx: 280, cy: 260, r: 8 },
  { cx: 80, cy: 260, r: 8 }, { cx: 360, cy: 200, r: 6 }, { cx: 120, cy: 240, r: 6 },
  { cx: 150, cy: 100, r: 5 }, { cx: 260, cy: 180, r: 5 },
]

const LABELS = [
  { x: 200, y: 145, label: 'CORE' }, { x: 80, y: 45, label: 'API' }, { x: 320, y: 65, label: 'AI' },
  { x: 280, y: 278, label: 'DB' }, { x: 80, y: 278, label: 'MQ' },
]

function SystemGraph({ dark }) {
  const nodeFill = dark ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.2)'
  const line = dark ? 'rgba(59,130,246,0.15)' : 'rgba(59,130,246,0.12)'
  const accent = dark ? '#3b82f6' : '#60a5fa'

  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <defs>
        <pattern id="cgrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke={line} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="320" fill="url(#cgrid)" />
      {EDGES.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={line} strokeWidth="1.5" strokeDasharray="4 4" />
      ))}
      {NODES.map(({ cx, cy, r, accent: isAccent }, i) => (
        <g key={i}>
          {isAccent && <circle cx={cx} cy={cy} r={r + 8} fill={`${accent}18`} />}
          <circle
            cx={cx} cy={cy} r={r}
            fill={isAccent ? `${accent}25` : nodeFill}
            stroke={isAccent ? accent : 'rgba(59,130,246,0.4)'}
            strokeWidth={isAccent ? 1.5 : 1}
          />
          {isAccent && <circle cx={cx} cy={cy} r={5} fill={accent} opacity="0.6" />}
        </g>
      ))}
      {LABELS.map(({ x, y, label }) => (
        <text key={label} x={x} y={y} textAnchor="middle" fontSize="8" fontFamily="monospace" fontWeight="700" fill={dark ? '#60a5fa' : '#3b82f6'} opacity="0.8">
          {label}
        </text>
      ))}
    </svg>
  )
}

export default function About({ dark }) {
  return (
    <section
      id="about"
      className="py-24 scroll-mt-16"
      style={{
        background: dark
          ? 'linear-gradient(180deg, transparent 0%, rgba(15,16,26,0.5) 100%)'
          : 'linear-gradient(180deg, transparent 0%, rgba(241,245,249,0.5) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-accent" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6" style={{ color: dark ? '#f1f5f9' : '#0f172a' }}>
              Behind the Code
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#64748b' }}>
              I'm a Software Engineer driven by the challenge of optimizing complex systems. My core belief: every manual
              process can be made intelligent. Focused on automation and AI integration, I build systems — from
              microservices to autonomous agents — that don't just work, they scale. My problem-solving mindset lets me
              bridge the gap between business needs and technical execution, delivering solutions with measurable
              operational impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILLARS.map(({ Icon, title, desc }) => (
                <div key={title} className="glass-card rounded-xl p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg" style={{ background: 'rgba(59,130,246,0.1)' }}>
                      <Icon size={14} color="#3b82f6" />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: dark ? '#f1f5f9' : '#0f172a' }}>
                      {title}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: dark ? '#475569' : '#64748b' }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: dark ? '#0d0e18' : '#f1f5f9',
              border: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
              height: '320px',
            }}
          >
            <SystemGraph dark={dark} />
          </div>
        </div>
      </div>
    </section>
  )
}
