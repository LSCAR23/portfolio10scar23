const GROUPS = [
  {
    title: 'BACKEND',
    slot: 'SLOT 01',
    items: [
      { code: 'NET', name: '.NET CORE' },
      { code: 'EF', name: 'ENTITY FRAMEWORK' },
      { code: 'ND', name: 'NODE.JS' },
      { code: 'GO', name: 'GO' },
      { code: 'LV', name: 'LARAVEL' },
    ],
  },
  {
    title: 'FRONTEND',
    slot: 'SLOT 02',
    items: [
      { code: 'JS', name: 'JAVASCRIPT' },
      { code: 'TS', name: 'TYPESCRIPT' },
      { code: 'RE', name: 'REACT' },
      { code: 'NX', name: 'NEXT.JS' },
      { code: 'TW', name: 'TAILWIND CSS' },
    ],
  },
  {
    title: 'DATA',
    slot: 'SLOT 03',
    items: [
      { code: 'SQL', name: 'SQL SERVER' },
      { code: 'PG', name: 'POSTGRESQL' },
    ],
  },
  {
    title: 'INFRA & AI',
    slot: 'SLOT 04',
    items: [
      { code: 'DK', name: 'DOCKER' },
      { code: 'AI', name: 'OPENAI API' },
      { code: 'N8', name: 'N8N' },
    ],
  },
]

const TOOL_COUNT = GROUPS.reduce((n, g) => n + g.items.length, 0)

const panel = {
  background: 'linear-gradient(135deg, rgba(30,22,14,.5), rgba(8,6,4,.4))',
  border: '1px solid var(--line)',
  boxShadow: 'inset 0 1px 0 rgba(255,240,220,.12), 0 30px 80px rgba(0,0,0,.6)',
  WebkitBackdropFilter: 'blur(24px) saturate(150%)',
  backdropFilter: 'blur(24px) saturate(150%)',
}

const codeBadge = {
  background: 'linear-gradient(135deg, rgba(252,196,90,.22), rgba(234,108,30,.12))',
  border: '1px solid rgba(252,190,100,.35)',
  color: 'var(--amber-soft)',
}

export default function Stack() {
  return (
    <section
      id="stack"
      aria-label="The Arsenal"
      className="relative overflow-x-clip"
      style={{ padding: '120px clamp(16px, 7vw, 120px) 140px', isolation: 'isolate' }}
    >
      {/* warm glows */}
      <div
        className="glow absolute pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 0,
          right: '-6%',
          top: '6%',
          width: '55%',
          height: '85%',
          background: 'radial-gradient(closest-side, rgba(234,120,30,.28), rgba(160,60,10,.08) 55%, transparent)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 0,
          left: '-10%',
          bottom: '-10%',
          width: '45%',
          height: '60%',
          background: 'radial-gradient(closest-side, rgba(200,90,20,.14), transparent)',
          filter: 'blur(40px)',
        }}
      />

      {/* gatling: right, large */}
      <div
        className="stack-gatling absolute pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 1,
          right: '-4%',
          top: '-8%',
          height: '118%',
          aspectRatio: '983 / 2000',
          opacity: 0.9,
          WebkitMaskImage: 'radial-gradient(ellipse 62% 54% at 52% 50%, #000 55%, rgba(0,0,0,.5) 78%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 62% 54% at 52% 50%, #000 55%, rgba(0,0,0,.5) 78%, transparent 100%)',
        }}
      >
        <div className="wpn absolute inset-0">
          <img
            src="/design/gatling.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="block w-full h-full"
            style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,.8))' }}
          />
        </div>
      </div>

      {/* rifle: bottom-left, tilted, behind the panels */}
      <div
        className="stack-rifle absolute pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 1,
          left: '30%',
          bottom: '-14%',
          height: '78%',
          aspectRatio: '894 / 1380',
          opacity: 0.45,
          WebkitMaskImage: 'radial-gradient(ellipse 60% 58% at 50% 50%, #000 50%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 60% 58% at 50% 50%, #000 50%, transparent 100%)',
        }}
      >
        <div className="wpn absolute inset-0" style={{ '--r': '38deg', animationDelay: '.2s' }}>
          <img src="/design/rifle.webp" alt="" loading="lazy" decoding="async" className="block w-full h-full" />
        </div>
      </div>

      {/* fades */}
      <div
        className="absolute inset-0 pointer-events-none feather"
        aria-hidden="true"
        style={{ zIndex: 2, background: 'linear-gradient(90deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.35) 40%, transparent 62%)' }}
      />

      <div className="relative mx-auto flex flex-col" style={{ zIndex: 3, maxWidth: 1200, gap: 48 }}>
        <div className="flex flex-col" style={{ gap: 18, maxWidth: 640 }}>
          <div className="eyebrow">
            <span className="dot" />
            LOADOUT · {TOOL_COUNT} TOOLS
          </div>
          <h2 className="h2">
            The Arsenal<span className="amber-text">.</span>
          </h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--text)' }}>
            Tools and technologies I use to build robust, scalable solutions.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 20, maxWidth: 820 }}>
          {GROUPS.map((g) => (
            <div key={g.title} className="flex flex-col" style={{ ...panel, gap: 16, padding: 22, borderRadius: 20 }}>
              <div className="mono flex items-center justify-between" style={{ fontSize: 11, letterSpacing: '.2em' }}>
                <h3 style={{ margin: 0, font: 'inherit', color: 'var(--amber)' }}>{g.title}</h3>
                <span style={{ color: '#8f826f' }}>{g.slot}</span>
              </div>
              <ul className="flex flex-wrap" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 8 }}>
                {g.items.map((it) => (
                  <li
                    key={it.name}
                    className="glass lift flex items-center"
                    style={{ gap: 10, padding: '7px 14px 7px 7px', borderRadius: 12 }}
                  >
                    <span
                      className="mono inline-flex items-center justify-center"
                      aria-hidden="true"
                      style={{
                        ...codeBadge,
                        minWidth: 30,
                        height: 30,
                        padding: '0 4px',
                        boxSizing: 'border-box',
                        borderRadius: 8,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '.02em',
                      }}
                    >
                      {it.code}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', color: '#f2e8da' }}>{it.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
