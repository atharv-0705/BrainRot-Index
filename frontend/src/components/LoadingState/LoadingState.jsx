import './LoadingState.css'

export default function LoadingState() {
  return (
    <div className="loading-state glass-panel fade-in" role="status" aria-live="polite">
      <span className="loading-state__spinner" />
      <p>Analyzing Mental Wellness…</p>
    </div>
  )
}
