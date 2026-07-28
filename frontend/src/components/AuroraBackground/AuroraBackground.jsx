import './AuroraBackground.css'

// Purely decorative — same three orbs render in both themes, only their
// opacity/blend changes (strong aurora glow in dark, faint blue wash in light)
// via the --orb-opacity token in index.css.
export default function AuroraBackground() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="aurora__orb aurora__orb--a" />
      <span className="aurora__orb aurora__orb--b" />
      <span className="aurora__orb aurora__orb--c" />
    </div>
  )
}
