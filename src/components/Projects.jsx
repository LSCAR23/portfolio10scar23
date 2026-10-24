import { ArrowUpRight } from 'lucide-react'
import ServiceManagementMock from '../mocks/ServiceManagementMock.jsx'
import BookflowMock from '../mocks/BookflowMock.jsx'

const PROJECTS = [
  {
    num: '01',
    featured: true,
    category: 'Full Stack · Polyglot Microservices',
    client: null,
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
    image: { src: '/projects/caribeops-dashboard.jpg', alt: 'CaribeOps dashboard with live operations snapshot' },
    links: [
      { label: 'Live demo', href: 'https://caribeops.vercel.app' },
      { label: 'View on GitHub', href: 'https://github.com/LSCAR23/caribeops' },
    ],
    note: 'Demo login: test@example.com / password — the free backend may take a few seconds to wake up.',
  },
  {
    num: '02',
    category: 'Enterprise · Full Stack',
    client: 'RACSA — Radiográfica Costarricense S.A.',
    title: 'Service Management System',
    chips: ['.NET Core 8', 'Entity Framework', 'SQL Server', 'Razor Pages', 'Tailwind CSS', 'JWT', 'Active Directory'],
    problem:
      'The IT Systems Management department tracked all internal service requests in shared Excel files — leading to version conflicts, zero traceability, no access control, and no audit trail for who changed what and when.',
    solution:
      'Replaced the Excel-based workflow with a full-stack service management system featuring role-based access control (Admin, Requester, Receiver), corporate directory authentication via LDAP/Active Directory, and a normalized relational data model that eliminates duplication and manual errors. Built on a three-layer architecture with Repository Pattern and Unit of Work.',
    impact: [
      'Full traceability of every service request — creator, assignee, timestamps, state changes',
      'Eliminated version conflicts and duplicate records from shared Excel files',
      'Role-based security backed by corporate Active Directory authentication',
      'Auditable record for the IT department with formal technical documentation (UML, DB design, test cases)',
    ],
    Mock: ServiceManagementMock,
    note: 'University internship project — delivered with formal technical documentation.',
  },
  {
    num: '03',
    category: 'SaaS · AI Automation',
    client: null,
    title: 'Bookflow — WhatsApp Booking Automation',
    chips: ['n8n', 'WhatsApp Business API', 'PostgreSQL', 'Docker Compose', 'AI Agents', 'Node.js'],
    problem:
      "Businesses serving clients via WhatsApp (barbershops, clinics, salons, workshops) manage bookings manually: read the message, check the calendar, confirm, write it down. This doesn't scale, generates double-booking errors, and leaves no conversation or booking history.",
    solution:
      'Multi-user SaaS platform for automated reservation management via WhatsApp. The client sends a message, an AI agent interprets the intent (book, check availability, cancel, reschedule), responds automatically with confirmation, and manages the booking in the backend. Multiple staff members from the same business can monitor or intervene in conversations when needed. Orchestrated with n8n workflows connecting WhatsApp Business API, AI agents, and PostgreSQL.',
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

function Label({ dark, children, mb = 'mb-1.5' }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-wide ${mb}`} style={{ color: dark ? '#475569' : '#94a3b8' }}>
      {children}
    </p>
  )
}

function Preview({ project }) {
  const { image, Mock, featured } = project
  return (
    <div
      className="project-mock"
      style={{
        height: featured ? 'auto' : '200px',
        borderRadius: 0,
        border: 'none',
        // Matches the screenshot's own background so letterboxing is invisible.
        background: image ? '#05090b' : undefined,
      }}
    >
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          width="1120"
          height="700"
          loading="lazy"
          decoding="async"
          className={`w-full ${featured ? 'h-auto lg:h-full lg:object-contain' : 'h-full object-cover object-left-top'}`}
        />
      ) : (
        <Mock />
      )}
    </div>
  )
}

function ProjectCard({ project, dark }) {
  const { num, featured, category, client, title, chips, problem, solution, impact, links, note } = project
  const linkColor = dark ? '#475569' : '#94a3b8'

  return (
    <article
      className={`glass-card rounded-xl overflow-hidden flex flex-col ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''
      }`}
    >
      <Preview project={project} />

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#3b82f6' }}>
            {category}
          </span>
          <span className="text-xs font-mono" style={{ color: dark ? '#334155' : '#94a3b8' }}>
            {num}
          </span>
        </div>
        {client && (
          <span className="text-xs font-medium" style={{ color: '#14b8a6' }}>
            {client}
          </span>
        )}
        <h3 className="text-lg font-semibold leading-snug" style={{ color: dark ? '#f1f5f9' : '#0f172a' }}>
          {title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {chips.map((c) => (
            <span key={c} className="tech-chip">
              {c}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <div>
            <Label dark={dark}>Problem</Label>
            <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
              {problem}
            </p>
          </div>
          <div>
            <Label dark={dark}>Solution</Label>
            <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
              {solution}
            </p>
          </div>
          <div>
            <Label dark={dark} mb="mb-2">
              Impact
            </Label>
            <ul className="flex flex-col gap-1.5">
              {impact.map((item) => (
                <li key={item} className="text-sm leading-relaxed flex items-start gap-2" style={{ color: '#64748b' }}>
                  <span style={{ color: '#14b8a6', marginTop: '3px', flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {note && (
          <p className="text-xs italic mt-1" style={{ color: dark ? '#334155' : '#94a3b8' }}>
            {note}
          </p>
        )}

        {links ? (
          <div className="flex flex-wrap items-center gap-5 mt-1">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                style={{ color: dark ? '#94a3b8' : '#475569' }}
              >
                {label}
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        ) : (
          <span className="project-link mt-1 self-start" style={{ color: linkColor, cursor: 'default' }}>
            View on GitHub — Coming soon
            <ArrowUpRight size={12} />
          </span>
        )}
      </div>
    </article>
  )
}

export default function Projects({ dark }) {
  return (
    <section id="projects" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <div className="section-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: dark ? '#f1f5f9' : '#0f172a' }}>
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.num} project={p} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  )
}
