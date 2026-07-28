import { Smartphone, Moon, Dumbbell, BookOpen, Brain, HeartPulse } from 'lucide-react'
import { APP_NAME, APP_TAGLINE } from '../../config'
import PulseWave from './PulseWave'
import './Hero.css'

const FACTORS = [
  { icon: Smartphone, label: 'Social Media Usage' },
  { icon: Brain, label: 'Lifestyle' },
  { icon: Moon, label: 'Sleep' },
  { icon: Dumbbell, label: 'Physical Activity' },
  { icon: BookOpen, label: 'Study Habits' },
  { icon: HeartPulse, label: 'Stress Level' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy slide-up">
          <span className="hero__eyebrow">AI-powered wellness engine</span>
          <h1 className="hero__title">{APP_NAME}</h1>
          <p className="hero__subtitle">{APP_TAGLINE}</p>
          <p className="hero__description">
            The model behind {APP_NAME} was trained on real student behavior data — it weighs how you spend
            your day online and offline to estimate where your mental wellness stands right now.
          </p>

          <ul className="hero__factors">
            {FACTORS.map(({ icon: Icon, label }) => (
              <li className="hero__factor" key={label}>
                <Icon size={15} strokeWidth={2.25} />
                {label}
              </li>
            ))}
          </ul>

          <a className="hero__cta" href="#predict-form">
            Get your score
          </a>
        </div>

        <div className="hero__visual slide-up">
          <PulseWave />
        </div>
      </div>
    </section>
  )
}
