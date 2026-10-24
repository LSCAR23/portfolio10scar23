import { useEffect, useRef, useState } from 'react'

// One continuous nebula behind the whole page. The 924x2000 image is never
// upscaled: it is tiled three across and as many rows down as the page needs,
// mirrored so every join is seamless.
const SRC = '/design/nebula.jpg'
const TILE_H = 2000

export default function Nebula() {
  const ref = useRef(null)
  const [rows, setRows] = useState(4)

  // The page is much taller on phones (stacked cards), so count rows from the
  // real height and keep counting as it changes (rotation, fonts loading, resize).
  useEffect(() => {
    const page = ref.current?.parentElement
    if (!page) return
    const update = () => setRows(Math.max(1, Math.ceil(page.scrollHeight / TILE_H)))
    update()
    const obs = new ResizeObserver(update)
    obs.observe(page)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="nebula" aria-hidden="true">
      {Array.from({ length: rows }, (_, row) => {
        const flipped = row % 2 === 1
        const top = row * TILE_H
        return (
          <div key={row}>
            <img className={`nb nb-c ${flipped ? 'nb-fy' : ''}`} style={{ top }} src={SRC} alt="" decoding="async" />
            <img className={`nb nb-l ${flipped ? 'nb-fxy' : 'nb-fx'}`} style={{ top }} src={SRC} alt="" decoding="async" />
            <img className={`nb nb-r ${flipped ? 'nb-fxy' : 'nb-fx'}`} style={{ top }} src={SRC} alt="" decoding="async" />
            {row > 0 && <div className="nb-seam" style={{ top: top - 250 }} />}
          </div>
        )
      })}
      <div className="nb-sides" />
    </div>
  )
}
