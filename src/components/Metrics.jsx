import { useEffect, useRef, useState } from 'react'

const METRICS = [
  { value: 70, suffix: '%', label: 'Operational Time Reduction achieved through automated microservices.' },
  { value: 100, suffix: '%', label: 'Process Automation for high-volume customer interaction workflows.' },
  { value: 0, suffix: '', label: 'Human Errors in mission-critical scheduling and sync systems.' },
]

function useCountUp(target, duration = 1400, active = false) {
  const [value, setValue] = useState(0)
  const frame = useRef(null)

  useEffect(() => {
    if (!active || target === 0) {
      setValue(target)
      return
    }
    let start = null
    const step = (now) => {
      start ||= now
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.floor(eased * target))
      if (progress < 1) frame.current = requestAnimationFrame(step)
    }
    frame.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame.current)
  }, [active, target, duration])

  return value
}

function Metric({ value, suffix, label, active }) {
  const n = useCountUp(value, 1400, active)
  return (
    <div className="flex flex-col gap-3">
      <div className="metric-num">
        {n}
        {suffix}
      </div>
      <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: '#64748b' }}>
        {label}
      </p>
    </div>
  )
}

export default function Metrics({ dark }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(true), {
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0.1,
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const line = dark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)'

  return (
    <section
      id="metrics"
      ref={ref}
      className="scroll-mt-16"
      style={{
        borderTop: line,
        borderBottom: line,
        background: dark ? 'rgba(15,16,26,0.6)' : 'rgba(241,245,249,0.6)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6">
          {METRICS.map((m) => (
            <Metric key={m.label} {...m} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
