import { useEffect, useRef, useState } from 'react'

const METRICS = [
  { value: 70, suffix: '%', title: 'Operational time reduction', rest: 'achieved through automated microservices.' },
  { value: 100, suffix: '%', title: 'Process automation', rest: 'for high-volume customer interaction workflows.' },
  { value: 0, suffix: '', title: 'Human errors', rest: 'in mission-critical scheduling and sync systems.' },
]

function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active || target === 0) {
      setValue(target)
      return
    }
    let start = null
    let frame
    const step = (now) => {
      start ??= now
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.floor((1 - (1 - progress) ** 3) * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])

  return value
}

function Stat({ value, suffix, title, rest, active }) {
  const n = useCountUp(value, active)
  return (
    <article className="glass lift flex flex-col" style={{ gap: 18, padding: '36px 32px', borderRadius: 20 }}>
      <div
        className="amber-text"
        style={{ fontSize: 72, lineHeight: 1, fontWeight: 900, letterSpacing: '-.04em' }}
        aria-label={`${value}${suffix}`}
      >
        {n}
        {suffix}
      </div>
      <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(252,190,100,.45), transparent)' }} />
      <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text)' }}>
        <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{title}</strong> {rest}
      </p>
    </article>
  )
}

export default function Metrics() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setActive(true), { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="impact"
      ref={ref}
      aria-label="Impact"
      className="relative overflow-x-clip"
      style={{ padding: '96px clamp(16px, 7vw, 120px)', isolation: 'isolate' }}
    >
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 0,
          left: '50%',
          top: '50%',
          width: '80%',
          height: '120%',
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(closest-side, rgba(234,120,30,.13), transparent)',
          filter: 'blur(30px)',
        }}
      />

      <div className="relative mx-auto flex flex-col" style={{ zIndex: 1, maxWidth: 1200, gap: 40 }}>
        <div className="eyebrow">
          <span className="dot" />
          IMPACT
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
          {METRICS.map((m) => (
            <Stat key={m.title} {...m} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
