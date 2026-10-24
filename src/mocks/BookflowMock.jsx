// Stylised preview for Bookflow: chat, n8n workflow and booking calendar.
const BUBBLES = [
  { y: 38, right: false, w: 130, color: 'rgba(255,255,255,0.06)', lines: [90, 70] },
  { y: 72, right: true, w: 120, color: 'rgba(249,115,22,0.12)', lines: [80, 60] },
  { y: 104, right: false, w: 140, color: 'rgba(255,255,255,0.06)', lines: [100, 80] },
  { y: 138, right: true, w: 150, color: 'rgba(249,115,22,0.12)', lines: [110, 60] },
]

const NODES = [
  { x: 200, y: 20, w: 72, label: 'WA Message', color: '#f97316' },
  { x: 200, y: 72, w: 68, label: 'AI Parser', color: '#fcd38a' },
  { x: 200, y: 124, w: 76, label: 'Check Slots', color: '#fbbf24' },
  { x: 200, y: 162, w: 64, label: 'Confirm', color: '#f97316' },
]

const SLOTS = [
  { y: 144, color: '#fbbf24', label: '10:00 — Confirmed' },
  { y: 160, color: '#f97316', label: '11:30 — Confirmed' },
  { y: 176, color: '#f59e0b', label: '14:00 — Pending' },
]

function cellFill(col, row) {
  if (col === 2 && row === 1) return 'rgba(251,191,36,0.25)'
  if (col === 4 && row === 2) return 'rgba(249,115,22,0.15)'
  if (col === 1 && row === 3) return 'rgba(245,158,11,0.1)'
  return 'rgba(255,255,255,0.025)'
}

function cellStroke(col, row) {
  if (col === 2 && row === 1) return 'rgba(251,191,36,0.5)'
  if (col === 4 && row === 2) return 'rgba(249,115,22,0.4)'
  return 'rgba(255,255,255,0.05)'
}

export default function BookflowMock() {
  return (
    <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect width="560" height="200" fill="#0c0906" />

      {/* Chat column */}
      <rect x="0" y="0" width="190" height="200" fill="rgba(255,255,255,0.02)" />
      <rect x="0" y="0" width="190" height="30" fill="rgba(249,115,22,0.08)" />
      <circle cx="20" cy="15" r="8" fill="rgba(249,115,22,0.2)" stroke="rgba(249,115,22,0.4)" strokeWidth="1" />
      <rect x="34" y="9" width="60" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="34" y="18" width="40" height="4" rx="2" fill="rgba(249,115,22,0.4)" />
      <circle cx="20" cy="21" r="3" fill="#4ade80" stroke="#0c0906" strokeWidth="1.5" />
      {BUBBLES.map(({ y, right, w, color, lines }) => (
        <g key={y}>
          <rect
            x={right ? 190 - w - 8 : 8} y={y} width={w} height={lines.length * 10 + 10} rx="6"
            fill={color} stroke={right ? 'rgba(249,115,22,0.2)' : 'rgba(255,255,255,0.06)'} strokeWidth="1"
          />
          {lines.map((lw, i) => (
            <rect key={i} x={right ? 190 - w - 2 : 14} y={y + 6 + i * 10} width={lw} height="4" rx="2" fill={right ? 'rgba(249,115,22,0.4)' : 'rgba(255,255,255,0.15)'} />
          ))}
          {right && <rect x={190 - w - 2} y={y + lines.length * 10 + 4} width="22" height="3" rx="1" fill="rgba(249,115,22,0.3)" />}
        </g>
      ))}
      <rect x="8" y="172" width="80" height="14" rx="7" fill="rgba(252,211,138,0.15)" stroke="rgba(252,211,138,0.3)" strokeWidth="1" />
      <rect x="16" y="176" width="8" height="6" rx="1" fill="rgba(252,211,138,0.5)" />
      <rect x="28" y="177" width="52" height="4" rx="1.5" fill="rgba(252,211,138,0.4)" />

      {/* Workflow column */}
      <rect x="190" y="0" width="200" height="200" fill="rgba(255,255,255,0.01)" />
      <defs>
        <pattern id="wfgrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect x="190" y="0" width="200" height="200" fill="url(#wfgrid)" />
      {NODES.map(({ x, y, w, label, color }) => (
        <g key={y}>
          <rect x={x} y={y} width={w} height="26" rx="5" fill={`${color}12`} stroke={`${color}35`} strokeWidth="1" />
          <rect x={x + 6} y={y + 8} width="6" height="10" rx="1" fill={color} opacity="0.4" />
          <rect x={x + 16} y={y + 9} width={label.length * 4.8} height="5" rx="2" fill={color} opacity="0.5" />
          {y < 162 && (
            <line x1={x + w / 2} y1={y + 26} x2={x + w / 2} y2={y + 46} stroke={color} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />
          )}
        </g>
      ))}
      <circle cx="236" cy="85" r="12" fill="rgba(252,211,138,0.06)" />
      <circle cx="236" cy="85" r="4" fill="rgba(252,211,138,0.4)" />
      <path d="M 280 137 L 310 137 L 310 60 L 390 60" stroke="rgba(251,191,36,0.25)" strokeWidth="1" fill="none" strokeDasharray="3 3" />

      {/* Calendar column */}
      <rect x="390" y="0" width="170" height="200" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <rect x="398" y="10" width="80" height="8" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="398" y="22" width="50" height="5" rx="2" fill="rgba(251,191,36,0.3)" />
      {[0, 1, 2, 3, 4, 5, 6].map((col) => (
        <g key={col}>
          <rect x={398 + col * 22} y="34" width="18" height="6" rx="1" fill="rgba(255,255,255,0.05)" />
          {[0, 1, 2, 3].map((row) => (
            <rect key={row} x={398 + col * 22} y={46 + row * 22} width="18" height="18" rx="3" fill={cellFill(col, row)} stroke={cellStroke(col, row)} strokeWidth="1" />
          ))}
        </g>
      ))}
      {SLOTS.map(({ y, color, label }) => (
        <g key={y}>
          <rect x="398" y={y} width="154" height="11" rx="3" fill={`${color}10`} stroke={`${color}30`} strokeWidth="1" />
          <rect x="402" y={y + 3} width="4" height={5} rx="1" fill={color} opacity="0.7" />
          <rect x="410" y={y + 4} width={label.length * 4.2} height="4" rx="1.5" fill={color} opacity="0.35" />
        </g>
      ))}
      <rect x="398" y="192" width="100" height="5" rx="2" fill="rgba(255,255,255,0.04)" />
    </svg>
  )
}
