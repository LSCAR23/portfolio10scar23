import { ArrowUpRight, Check } from 'lucide-react'
import ServiceManagementMock from '../mocks/ServiceManagementMock.jsx'
import BookflowMock from '../mocks/BookflowMock.jsx'

const FEATURED = {
  num: '01',
  category: 'FULL STACK · POLYGLOT MICROSERVICES',
  title: 'CaribeOps — Tourism Operations & Analytics',
  chips: ['Next.js', 'React 19', 'TypeScript', 'Laravel 12', 'PHP 8.4', 'Go', 'PostgreSQL 16', 'Docker Compose'],
  problem:
    'Caribbean tourism businesses — hotels, restaurants and tour operators — keep their listings, customer reviews and performance data in scattered places. Owners get no single view of how operations are going or how ratings trend over time.',
  solution:
    'A multi-service platform: a Next.js (App Router) dashboard talks to a Laravel 12 REST API that owns business rules, validation and Sanctum token authentication, and to a separate Go service that serves read-only analytics aggregates. Both run on PostgreSQL 16, and the Go service connects with a least-privilege, SELECT-only database role. The whole stack starts with one Docker Compose command and runs in production on Vercel, Render and Neon.',
  impact: [
    'Live in production with 300+ businesses and 18,000+ customer reviews',
    'Write and read paths split: Laravel owns writes, Go serves fast analytics',
    'Analytics SQL measured with EXPLAIN ANALYZE — sub-millisecond query plans',
    'Least-privilege database access and documented API (13 endpoints)',
  ],
  note: 'Demo login: test@example.com / password — the free backend may take a few seconds to wake up.',
  links: [
    { label: 'Live demo', href: 'https://caribeops.vercel.app' },
    { label: 'View on GitHub', href: 'https://github.com/LSCAR23/caribeops' },
  ],
}

const MORE = [
  {
    num: '02',
    category: 'ENTERPRISE · FULL STACK',
    client: 'RACSA — Radiográfica Costarricense S.A.',
    title: 'Service Management System',
    window: 'racsa · service desk',
    chips: ['.NET Core 8', 'Entity Framework', 'SQL Server', 'Razor Pages', 'Tailwind CSS', 'JWT', 'Active Directory'],
    problem:
      'The IT Systems Management department tracked all internal service requests in shared Excel files — leading to version conflicts, zero traceability, no access control, and no audit trail for who changed what and when.',
    solution:
      'Replaced the Excel-based workflow with a full-stack service management system featuring role-based access control (Admin, Requester, Receiver), corporate directory authentication via LDAP/Active Directory, and a normalized relational data model. Built on a three-layer architecture with Repository Pattern and Unit of Work.',
    impact: [
      'Full traceability of every service request — creator, assignee, timestamps, state changes',
      'Eliminated version conflicts and duplicate records from shared Excel files',
      'Role-based security backed by corporate Active Directory authentication',
      'Formal technical documentation: UML, DB design and test cases',
    ],
    Mock: ServiceManagementMock,
    note: 'University internship project — delivered with formal technical documentation.',
  },
  {
    num: '03',
    category: 'SAAS · AI AUTOMATION',
    title: 'Bookflow — WhatsApp Booking Automation',
    window: 'bookflow · n8n workflow',
    chips: ['n8n', 'WhatsApp Business API', 'PostgreSQL', 'Docker Compose', 'AI Agents', 'Node.js'],
    problem:
      "Businesses serving clients via WhatsApp (barbershops, clinics, salons, workshops) manage bookings by hand: read the message, check the calendar, confirm, write it down. It doesn't scale, causes double bookings, and leaves no history.",
    solution:
      'Multi-user SaaS for automated reservations via WhatsApp. An AI agent interprets the intent (book, check availability, cancel, reschedule), replies with a confirmation and manages the booking in the backend. Staff from the same business can monitor or step into conversations. Orchestrated with n8n workflows connecting WhatsApp Business API, AI agents and PostgreSQL.',
    impact: [
      'End-to-end automation of the booking conversation flow',
      'Eliminated double-booking and missed confirmation errors',
      'Multi-user support — multiple staff under one business account',
      'Full traceability of conversations and booking history',
    ],
    Mock: BookflowMock,
    note: 'Evolved from a single-client barbershop agent into a reusable multi-tenant platform.',
  },
]

function WindowFrame({ title, children }) {
  return (
    <div className="glass shot relative overflow-hidden" style={{ borderRadius: 16 }}>
      <div className="flex items-center" style={{ gap: 7, height: 34, padding: '0 14px', borderBottom: '1px solid rgba(255,226,190,.1)' }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(255,226,190,.22)' }} />
        ))}
        <span className="mono" style={{ marginLeft: 10, fontSize: 11, color: 'var(--muted)' }}>
          {title}
        </span>
      </div>
      {children}
    </div>
  )
}

function Block({ label, children }) {
  return (
    <div className="flex flex-col" style={{ gap: 8 }}>
      <h4 className="mono" style={{ margin: 0, fontSize: 11, fontWeight: 500, letterSpacing: '.2em', color: 'var(--label)' }}>
        {label}
      </h4>
      {children}
    </div>
  )
}

function Details({ p, titleSize = 30 }) {
  return (
    <>
      <div className="flex justify-between items-baseline" style={{ gap: 16 }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', color: 'var(--amber)' }}>{p.category}</span>
        <span className="mono" style={{ fontSize: 12, color: '#8f826f' }}>
          {p.num}
        </span>
      </div>
      {p.client && <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--amber-soft)', marginTop: -10 }}>{p.client}</span>}
      <h3 style={{ margin: 0, fontSize: titleSize, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>
        {p.title}
      </h3>
      <ul aria-label="Tech stack" className="flex flex-wrap" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 8, fontSize: 12, fontWeight: 600 }}>
        {p.chips.map((c) => (
          <li key={c} className="chip" style={{ padding: '6px 11px', borderRadius: 8 }}>
            {c}
          </li>
        ))}
      </ul>
      <Block label="PROBLEM">
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--text)' }}>{p.problem}</p>
      </Block>
      <Block label="SOLUTION">
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--text)' }}>{p.solution}</p>
      </Block>
      <Block label="IMPACT">
        <ul className="flex flex-col" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 10, fontSize: 15, lineHeight: 1.5, color: '#e2d6c4' }}>
          {p.impact.map((item) => (
            <li key={item} className="flex" style={{ gap: 12 }}>
              <Check size={16} strokeWidth={2.4} color="#fbbf24" style={{ flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Block>
      {p.note && <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, fontStyle: 'italic', color: '#9c8f7c' }}>{p.note}</p>}
      {p.links ? (
        <div className="flex flex-wrap" style={{ gap: 12, paddingTop: 4 }}>
          {p.links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass lift inline-flex items-center"
              style={{ gap: 8, height: 46, padding: '0 20px', borderRadius: 12, fontSize: 15, fontWeight: 600 }}
            >
              {label}
              <ArrowUpRight size={14} strokeWidth={2.4} color="#fbbf24" aria-hidden="true" />
            </a>
          ))}
        </div>
      ) : (
        <span className="mono" style={{ fontSize: 11, letterSpacing: '.16em', color: 'var(--muted)' }}>
          GITHUB — COMING SOON
        </span>
      )}
    </>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="relative overflow-x-clip"
      style={{ padding: '112px clamp(16px, 7vw, 120px) 128px', isolation: 'isolate', scrollMarginTop: 0 }}
    >
      {/* warm glow behind the robot */}
      <div
        className="glow absolute pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 0,
          left: '80%',
          top: 0,
          width: '55%',
          height: 1100,
          transform: 'translateX(-50%)',
          background: 'radial-gradient(closest-side, rgba(234,120,30,.3) 0%, rgba(160,60,10,.1) 55%, transparent 100%)',
          filter: 'blur(40px)',
        }}
      />

      {/* robot — sized to the first screen of the section, like the design */}
      <div
        className="projects-robot absolute pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 1,
          top: -20,
          left: '80%',
          transform: 'translateX(-50%)',
          height: 1160,
          aspectRatio: '736 / 1313',
          opacity: 0.9,
          // Radial mask from the design, intersected with a top fade so the robot
          // rises out of the nebula instead of starting at a straight edge.
          WebkitMaskImage:
            'radial-gradient(ellipse 56% 52% at 50% 42%, #000 50%, rgba(0,0,0,.5) 75%, transparent 100%), linear-gradient(180deg, transparent 0, #000 300px)',
          maskImage:
            'radial-gradient(ellipse 56% 52% at 50% 42%, #000 50%, rgba(0,0,0,.5) 75%, transparent 100%), linear-gradient(180deg, transparent 0, #000 300px)',
          WebkitMaskComposite: 'source-in',
          maskComposite: 'intersect',
        }}
      >
        <img src="/design/robot.webp" alt="" loading="lazy" decoding="async" className="block w-full h-full" />
        {/* warm tint, masked to the robot's own shape */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, #fbbf24, #ea580c)',
            mixBlendMode: 'color',
            opacity: 0.35,
            WebkitMaskImage: 'url(/design/robot.webp)',
            maskImage: 'url(/design/robot.webp)',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          }}
        />
      </div>

      {/* fades */}
      <div
        className="absolute inset-0 pointer-events-none feather"
        aria-hidden="true"
        style={{ zIndex: 2, background: 'linear-gradient(90deg, #000 0%, rgba(0,0,0,.6) 30%, transparent 55%, transparent 90%, rgba(0,0,0,.5) 100%)' }}
      />

      <div className="relative mx-auto flex flex-col" style={{ zIndex: 3, maxWidth: 1200, gap: 56 }}>
        <div className="flex flex-col" style={{ gap: 18 }}>
          <div className="eyebrow">
            <span className="dot" />
            SELECTED WORK
          </div>
          <h2 className="h2">
            Featured Projects<span className="amber-text">.</span>
          </h2>
        </div>

        {/* featured: CaribeOps */}
        <article className="card flex flex-wrap overflow-hidden" style={{ borderRadius: 28 }}>
          <div
            className="relative flex flex-col justify-center"
            style={{
              flex: '1 1 480px',
              minWidth: 0,
              padding: 'clamp(16px, 3vw, 32px)',
              background: 'linear-gradient(160deg, rgba(0,0,0,.55), rgba(0,0,0,.25))',
              borderRight: '1px solid rgba(255,226,190,.08)',
            }}
          >
            <div
              aria-hidden="true"
              className="absolute"
              style={{
                left: '50%',
                top: '55%',
                width: '80%',
                height: '70%',
                transform: 'translate(-50%,-50%)',
                background: 'radial-gradient(closest-side, rgba(245,140,40,.18), transparent)',
                filter: 'blur(20px)',
              }}
            />
            <WindowFrame title="caribeops · dashboard">
              <img
                src="/projects/caribeops-dashboard.jpg"
                alt="CaribeOps dashboard showing the tourism operations overview and live operations snapshot"
                width="1120"
                height="700"
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
              />
            </WindowFrame>
          </div>
          <div className="flex flex-col" style={{ flex: '1 1 460px', minWidth: 0, padding: 'clamp(24px, 3vw, 40px)', gap: 22 }}>
            <Details p={FEATURED} />
          </div>
        </article>

        {/* more work */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: 24 }}>
          {MORE.map((p) => (
            <article key={p.num} className="card flex flex-col overflow-hidden" style={{ borderRadius: 24 }}>
              <div style={{ padding: 'clamp(16px, 2.4vw, 24px) clamp(16px, 2.4vw, 24px) 0' }}>
                <WindowFrame title={p.window}>
                  <div style={{ aspectRatio: '560 / 200', background: '#0c0906' }}>
                    <p.Mock />
                  </div>
                </WindowFrame>
              </div>
              <div className="flex flex-col flex-1" style={{ padding: 'clamp(20px, 2.4vw, 28px)', gap: 20 }}>
                <Details p={p} titleSize={24} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
