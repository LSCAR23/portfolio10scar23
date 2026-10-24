import { ArrowDown, ArrowRight } from 'lucide-react'

// Horizontal position of the robot hand, in % of the hero width.
const IMAGE_X = 70

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ height: '100svh', minHeight: 760, isolation: 'isolate' }}
    >
      {/* warm glow behind the hand */}
      <div
        className="glow absolute pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 0,
          left: `${IMAGE_X}%`,
          top: '10%',
          width: '52%',
          height: '80%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(closest-side, rgba(234,120,30,.32) 0%, rgba(180,70,10,.12) 50%, transparent 100%)',
          filter: 'blur(40px)',
        }}
      />

      {/* robot hand */}
      <div
        className="hero-hand absolute pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 1, bottom: '-3%', left: `${IMAGE_X}%`, transform: 'translateX(-50%)', height: '106%', aspectRatio: '736 / 1177' }}
      >
        <div className="hand absolute inset-0">
          <img
            src="/design/robot-hand.webp"
            alt=""
            fetchPriority="high"
            className="block w-full h-full"
            style={{
              WebkitMaskImage: 'linear-gradient(180deg, #000 72%, transparent 98%)',
              maskImage: 'linear-gradient(180deg, #000 72%, transparent 98%)',
            }}
          />
          {/* fingertip flare */}
          <div
            className="flare absolute"
            style={{
              left: '66%',
              top: '38.6%',
              width: '34%',
              aspectRatio: '1',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,236,190,.85) 0%, rgba(255,170,70,.35) 18%, rgba(240,110,20,.12) 40%, transparent 68%)',
              mixBlendMode: 'screen',
            }}
          />
          <div
            className="absolute"
            style={{
              left: '66%',
              top: '38.6%',
              width: '70%',
              height: 2,
              transform: 'translate(-50%,-50%)',
              background: 'linear-gradient(90deg, transparent, rgba(255,210,140,.55), transparent)',
              filter: 'blur(1px)',
              mixBlendMode: 'screen',
            }}
          />
        </div>
      </div>

      {/* fades so the copy stays readable */}
      <div
        className="absolute inset-0 pointer-events-none feather"
        aria-hidden="true"
        style={{ zIndex: 2, background: 'linear-gradient(90deg, #000 0%, rgba(0,0,0,.85) 24%, rgba(0,0,0,.3) 44%, transparent 58%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 2, background: 'linear-gradient(180deg, rgba(0,0,0,.5) 0%, transparent 14%)' }}
      />

      {/* HUD card */}
      <div
        className="hero-hud glass absolute hidden lg:flex flex-col mono"
        aria-hidden="true"
        style={{ zIndex: 3, right: '4%', bottom: '14%', gap: 10, padding: '16px 18px', borderRadius: 14, fontSize: 11, letterSpacing: '.14em', color: 'var(--label)' }}
      >
        <div className="flex items-center" style={{ gap: 10 }}>
          <span className="dot" style={{ width: 6, height: 6 }} />
          SYS.ONLINE
        </div>
        <div style={{ height: 1, background: 'var(--line)' }} />
        <div>AUTOMATION / AI / BACKEND</div>
      </div>

      {/* content */}
      <div
        className="relative h-full mx-auto flex flex-col justify-center"
        style={{ zIndex: 4, maxWidth: 1440, boxSizing: 'border-box', padding: '96px clamp(16px, 7vw, 120px) 80px' }}
      >
        <div className="flex flex-col" style={{ gap: 28, maxWidth: 760, paddingLeft: 'clamp(0px, 1.2vw, 16px)' }}>
          <div
            className="rise d1 glass self-start inline-flex items-center"
            style={{ gap: 10, padding: '9px 16px', borderRadius: 999, fontSize: 'clamp(11px, 1.6vw, 13px)', fontWeight: 600, letterSpacing: '.16em', color: '#fcc96a' }}
          >
            <span className="dot" />
            SOFTWARE ENGINEER &amp; SYSTEMS DEVELOPER
          </div>

          <h1
            className="rise d2"
            style={{
              margin: 0,
              fontSize: 'clamp(84px, 13vw, 168px)',
              lineHeight: 0.9,
              fontWeight: 900,
              letterSpacing: '-.045em',
              color: 'var(--ink)',
              textShadow: '0 10px 60px rgba(0,0,0,.7)',
            }}
          >
            OSCAR<span className="amber-text">.</span>
          </h1>

          <p className="rise d3" style={{ margin: 0, maxWidth: 620, fontSize: 'clamp(17px, 1.6vw, 21px)', lineHeight: 1.6, color: 'var(--text)' }}>
            Automating the future with scalable, AI-driven solutions and robust backend systems. Expert in turning
            complex workflows into seamless digital operations.
          </p>

          <div className="rise d4 flex flex-wrap" style={{ gap: 16, paddingTop: 8 }}>
            <a
              href="#projects"
              className="glass-amber lift inline-flex items-center"
              style={{ gap: 10, height: 56, padding: '0 30px', borderRadius: 14, fontWeight: 700, fontSize: 17 }}
            >
              View projects
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
            <a
              href="#contact"
              className="glass lift inline-flex items-center"
              style={{ height: 56, padding: '0 30px', borderRadius: 14, fontWeight: 600, fontSize: 17 }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <a
        href="#impact"
        className="absolute flex flex-col items-center"
        aria-label="Scroll to impact"
        style={{ zIndex: 4, left: '50%', bottom: 28, transform: 'translateX(-50%)', gap: 12, fontSize: 12, letterSpacing: '.3em', color: '#9a8d7b' }}
      >
        SCROLL
        <ArrowDown size={16} className="scrollcue" />
      </a>
    </section>
  )
}
