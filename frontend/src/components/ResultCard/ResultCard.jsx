import { RotateCcw } from 'lucide-react'
import { interpretScore } from '../../utils/scoreUtils'
import './ResultCard.css'

export default function ResultCard({ score, onReset }) {
  const { label, color, bg, percent } = interpretScore(score)

  return (
    <div className="result-card glass-panel slide-up">
      <span className="result-card__eyebrow">Your predicted score</span>

      <div className="result-card__score">
        <span className="result-card__number" style={{ color }}>
          {score.toFixed(2)}
        </span>
        <span className="result-card__scale">/ 10</span>
      </div>

      <div className="result-card__bar-track">
        <div
          className="result-card__bar-fill"
          style={{ width: `${percent}%`, background: color }}
        />
      </div>

      <span className="result-card__badge" style={{ color, background: bg }}>
        {label}
      </span>

      <p className="result-card__note">
        This is a model estimate, not a clinical diagnosis. If you're struggling, please talk to someone you trust
        or a mental health professional.
      </p>

      <button className="result-card__reset" type="button" onClick={onReset}>
        <RotateCcw size={16} strokeWidth={2.25} />
        Predict Again
      </button>
    </div>
  )
}
