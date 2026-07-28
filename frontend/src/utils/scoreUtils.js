// Interpretation bands for predicted_mental_health_score on a 0–10 scale,
// where a HIGHER score means BETTER wellbeing (adjust here if your model's
// target is scored the opposite way).
const BANDS = [
  { max: 4, label: 'High Risk', color: '#EF4444', bg: 'rgba(239, 68, 68, 0.12)' },
  { max: 6, label: 'Needs Attention', color: '#F97316', bg: 'rgba(249, 115, 22, 0.12)' },
  { max: 8, label: 'Moderate', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.12)' },
  { max: Infinity, label: 'Healthy', color: '#10B981', bg: 'rgba(16, 185, 129, 0.12)' },
]

export function interpretScore(score) {
  const clamped = Math.min(Math.max(score, 0), 10)
  const band = BANDS.find((b) => clamped <= b.max)
  return {
    label: band.label,
    color: band.color,
    bg: band.bg,
    percent: (clamped / 10) * 100,
  }
}
