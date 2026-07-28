// The signature visual: a heartbeat-style waveform inside a glass dial —
// one calm animated element, nothing busier.
export default function PulseWave() {
  return (
    <div className="pulse-dial glass-panel fade-in">
      <div className="pulse-dial__ring" aria-hidden="true" />
      <svg className="pulse-dial__wave" viewBox="0 0 320 120" fill="none" aria-hidden="true">
        <path
          className="pulse-dial__wave-path"
          d="M0 60 H70 L88 60 L100 20 L118 100 L134 40 L150 60 H320"
          stroke="url(#pulseGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="pulseGradient" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" className="pulse-stop pulse-stop--1" />
            <stop offset="55%" className="pulse-stop pulse-stop--2" />
            <stop offset="100%" className="pulse-stop pulse-stop--3" />
          </linearGradient>
        </defs>
      </svg>
      <div className="pulse-dial__readout">
        <span className="pulse-dial__label">Live wellness signal</span>
        <span className="pulse-dial__value">Analyzing patterns…</span>
      </div>
    </div>
  )
}
