// Stylised dashboard preview for the RACSA Service Management System.
const NAV = [
  { y: 44, active: true, label: 'Dashboard' },
  { y: 68, active: false, label: 'Requests' },
  { y: 92, active: false, label: 'Services' },
  { y: 116, active: false, label: 'Users' },
  { y: 140, active: false, label: 'Audit Log' },
  { y: 164, active: false, label: 'Reports' },
]

const KPIS = [
  { x: 142, color: '#fbbf24', val: '24', sub: 'Active requests' },
  { x: 282, color: '#f97316', val: '98%', sub: 'SLA compliance' },
  { x: 422, color: '#fcd38a', val: '3', sub: 'Pending approval' },
]

const COLUMNS = ['ID', 'Solicitante', 'Servicio', 'Estado', 'Fecha']
const ROWS = ['En proceso', 'Completado', 'Pendiente', 'En proceso']

function statusColor(status, alpha) {
  if (status === 'Completado') return `rgba(249,115,22,${alpha})`
  if (status === 'Pendiente') return `rgba(245,158,11,${alpha})`
  return `rgba(251,191,36,${alpha})`
}

export default function ServiceManagementMock() {
  return (
    <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect width="560" height="200" fill="#0c0906" />
      <rect x="0" y="0" width="130" height="200" fill="rgba(255,255,255,0.025)" />
      <rect x="12" y="14" width="50" height="8" rx="2" fill="rgba(251,191,36,0.5)" />
      <rect x="66" y="14" width="50" height="8" rx="2" fill="rgba(255,255,255,0.1)" />

      {NAV.map(({ y, active, label }) => (
        <g key={y}>
          <rect
            x="8" y={y} width="114" height="18" rx="4"
            fill={active ? 'rgba(251,191,36,0.18)' : 'transparent'}
            stroke={active ? 'rgba(251,191,36,0.3)' : 'none'}
            strokeWidth="1"
          />
          <rect x="18" y={y + 5} width={active ? 4 : 3} height={8} rx="1" fill={active ? '#fbbf24' : 'rgba(255,255,255,0.15)'} />
          <rect x="28" y={y + 6} width={label.length * 4.5} height="5" rx="1.5" fill={active ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)'} />
        </g>
      ))}

      <rect x="130" y="0" width="430" height="32" fill="rgba(255,255,255,0.02)" />
      <rect x="142" y="10" width="80" height="12" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="460" y="9" width="44" height="14" rx="7" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.3)" strokeWidth="1" />
      <rect x="466" y="13" width="32" height="6" rx="2" fill="rgba(251,191,36,0.5)" />

      {KPIS.map(({ x, color, val, sub }) => (
        <g key={x}>
          <rect x={x} y="44" width="126" height="48" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <text x={x + 12} y="66" fontSize="16" fontWeight="700" fontFamily="monospace" fill={color}>{val}</text>
          <rect x={x + 12} y="74" width={sub.length * 4.2} height="5" rx="1.5" fill="rgba(255,255,255,0.15)" />
        </g>
      ))}

      <rect x="142" y="104" width="406" height="14" rx="2" fill="rgba(255,255,255,0.04)" />
      {COLUMNS.map((c, i) => (
        <rect key={c} x={148 + i * 78} y="107" width={c.length * 5} height="6" rx="2" fill="rgba(255,255,255,0.25)" />
      ))}

      {ROWS.map((status, n) => (
        <g key={n}>
          <rect x="142" y={122 + n * 17} width="406" height="14" rx="2" fill={n % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent'} />
          <rect x="148" y={126 + n * 17} width="22" height="6" rx="2" fill="rgba(251,191,36,0.3)" />
          <rect x="226" y={126 + n * 17} width={32 + n * 6} height="5" rx="2" fill="rgba(255,255,255,0.12)" />
          <rect x="304" y={126 + n * 17} width={40 + n * 4} height="5" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="382" y={124 + n * 17} width="38" height="9" rx="4" fill={statusColor(status, 0.15)} stroke={statusColor(status, 0.3)} strokeWidth="1" />
          <rect x="460" y={126 + n * 17} width="50" height="5" rx="2" fill="rgba(255,255,255,0.07)" />
        </g>
      ))}
    </svg>
  )
}
