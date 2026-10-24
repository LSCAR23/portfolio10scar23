// One continuous nebula behind the whole page. The 924x2000 image is never
// upscaled: it is tiled three across and four down, mirrored so every join is seamless.
const SRC = '/design/nebula.jpg'
const ROWS = 4
const TILE_H = 2000

export default function Nebula() {
  return (
    <div className="nebula" aria-hidden="true">
      {Array.from({ length: ROWS }, (_, row) => {
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
