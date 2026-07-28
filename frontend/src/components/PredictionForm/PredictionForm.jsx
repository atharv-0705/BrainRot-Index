import { useState } from 'react'
import {
  Cake,
  UserRound,
  Globe,
  GraduationCap,
  Smartphone,
  Target,
  Clock,
  Unlock,
  BookOpen,
  Dumbbell,
  Moon,
  Flame,
  Sparkles,
} from 'lucide-react'
import FormField from './FormField'
import {
  GENDER_OPTIONS,
  COUNTRY_OPTIONS,
  ACADEMIC_LEVEL_OPTIONS,
  PLATFORM_OPTIONS,
  PURPOSE_OPTIONS,
  STRESS_LEVEL_OPTIONS,
} from '../../data/formOptions'
import './PredictionForm.css'

const INITIAL_STATE = {
  age: '',
  gender: '',
  country: '',
  academic_level: '',
  most_used_platform: '',
  purpose_of_use: '',
  avg_daily_usage_hours: '',
  daily_unlocks: '',
  study_hours: '',
  physical_activity_hours: '',
  sleep_hours_per_night: '',
  stress_level: '',
}

export default function PredictionForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState(INITIAL_STATE)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget

    // Native HTML5 validation (required / min / max) — surfaces the browser's
    // built-in validation UI instead of letting an incomplete payload through.
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const payload = {
      age: parseInt(formData.age, 10),
      gender: formData.gender,
      country: formData.country,
      academic_level: formData.academic_level,
      most_used_platform: formData.most_used_platform,
      purpose_of_use: formData.purpose_of_use,
      avg_daily_usage_hours: parseFloat(formData.avg_daily_usage_hours),
      daily_unlocks: parseInt(formData.daily_unlocks, 10),
      study_hours: parseFloat(formData.study_hours),
      physical_activity_hours: parseFloat(formData.physical_activity_hours),
      sleep_hours_per_night: parseFloat(formData.sleep_hours_per_night),
      stress_level: formData.stress_level,
    }

    onSubmit(payload)
  }

  return (
    <section className="predict-section" id="predict-form">
      <div className="container">
        <form className="predict-form glass-panel slide-up" onSubmit={handleSubmit} noValidate={false}>
          <div className="predict-form__heading">
            <span className="predict-form__eyebrow">Tell us about your day</span>
            <h2>Your wellness inputs</h2>
            <p>Every field maps directly to the model — fill it in as honestly as you can for the most useful read.</p>
          </div>

          <div className="predict-form__grid">
            <FormField icon={Cake} label="Age" htmlFor="age">
              <input
                id="age"
                name="age"
                type="number"
                placeholder="e.g. 21"
                min={10}
                max={100}
                required
                value={formData.age}
                onChange={handleChange}
              />
            </FormField>

            <FormField icon={UserRound} label="Gender" htmlFor="gender">
              <select id="gender" name="gender" required value={formData.gender} onChange={handleChange}>
                <option value="" disabled>
                  Select gender
                </option>
                {GENDER_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField icon={Globe} label="Country" htmlFor="country">
              <select id="country" name="country" required value={formData.country} onChange={handleChange}>
                <option value="" disabled>
                  Select country
                </option>
                {COUNTRY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField icon={GraduationCap} label="Academic Level" htmlFor="academic_level">
              <select
                id="academic_level"
                name="academic_level"
                required
                value={formData.academic_level}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select academic level
                </option>
                {ACADEMIC_LEVEL_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField icon={Smartphone} label="Most Used Platform" htmlFor="most_used_platform">
              <select
                id="most_used_platform"
                name="most_used_platform"
                required
                value={formData.most_used_platform}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select platform
                </option>
                {PLATFORM_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField icon={Target} label="Purpose of Use" htmlFor="purpose_of_use">
              <select
                id="purpose_of_use"
                name="purpose_of_use"
                required
                value={formData.purpose_of_use}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select purpose
                </option>
                {PURPOSE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField icon={Clock} label="Avg Daily Usage (hrs)" htmlFor="avg_daily_usage_hours">
              <input
                id="avg_daily_usage_hours"
                name="avg_daily_usage_hours"
                type="number"
                placeholder="e.g. 4.5"
                min={0}
                max={24}
                step={0.1}
                required
                value={formData.avg_daily_usage_hours}
                onChange={handleChange}
              />
            </FormField>

            <FormField icon={Unlock} label="Daily Unlocks" htmlFor="daily_unlocks">
              <input
                id="daily_unlocks"
                name="daily_unlocks"
                type="number"
                placeholder="e.g. 60"
                min={0}
                step={1}
                required
                value={formData.daily_unlocks}
                onChange={handleChange}
              />
            </FormField>

            <FormField icon={BookOpen} label="Study Hours" htmlFor="study_hours">
              <input
                id="study_hours"
                name="study_hours"
                type="number"
                placeholder="e.g. 3"
                min={0}
                max={24}
                step={0.1}
                required
                value={formData.study_hours}
                onChange={handleChange}
              />
            </FormField>

            <FormField icon={Dumbbell} label="Physical Activity (hrs)" htmlFor="physical_activity_hours">
              <input
                id="physical_activity_hours"
                name="physical_activity_hours"
                type="number"
                placeholder="e.g. 1"
                min={0}
                max={24}
                step={0.1}
                required
                value={formData.physical_activity_hours}
                onChange={handleChange}
              />
            </FormField>

            <FormField icon={Moon} label="Sleep Hours / Night" htmlFor="sleep_hours_per_night">
              <input
                id="sleep_hours_per_night"
                name="sleep_hours_per_night"
                type="number"
                placeholder="e.g. 7"
                min={0}
                max={24}
                step={0.1}
                required
                value={formData.sleep_hours_per_night}
                onChange={handleChange}
              />
            </FormField>

            <FormField icon={Flame} label="Stress Level" htmlFor="stress_level">
              <select id="stress_level" name="stress_level" required value={formData.stress_level} onChange={handleChange}>
                <option value="" disabled>
                  Select stress level
                </option>
                {STRESS_LEVEL_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          <button className="predict-form__submit" type="submit" disabled={isLoading}>
            {isLoading ? (
              'Analyzing…'
            ) : (
              <>
                <Sparkles size={17} strokeWidth={2.25} />
                Predict My Score
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
