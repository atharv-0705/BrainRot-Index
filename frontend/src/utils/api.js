import { PREDICT_ENDPOINT } from '../config'

/**
 * Error shape thrown by predictMentalHealth so the UI can render
 * the right alert without inspecting fetch internals.
 */
export class PredictionError extends Error {
  constructor(message, kind = 'server') {
    super(message)
    this.name = 'PredictionError'
    this.kind = kind // 'network' | 'validation' | 'server'
  }
}

// FastAPI/Pydantic validation errors arrive as { detail: [{ loc, msg, type }, ...] }
function formatValidationDetail(detail) {
  if (!Array.isArray(detail)) return typeof detail === 'string' ? detail : 'Please check the values you entered.'
  return detail
    .map((item) => {
      const field = Array.isArray(item.loc) ? item.loc[item.loc.length - 1] : 'field'
      return `${field}: ${item.msg}`
    })
    .join(' · ')
}

/**
 * POSTs the exact StudentData payload to /predict and returns
 * { predicted_mental_health_score }.
 */
export async function predictMentalHealth(payload) {
  let response
  try {
    response = await fetch(PREDICT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch (networkErr) {
    throw new PredictionError(
      "Can't reach the BrainRot Index API. Make sure the FastAPI server is running on 127.0.0.1:8000.",
      'network'
    )
  }

  if (response.status === 422) {
    const body = await response.json().catch(() => null)
    throw new PredictionError(formatValidationDetail(body?.detail), 'validation')
  }

  if (!response.ok) {
    const body = await response.json().catch(() => null)
    throw new PredictionError(
      body?.detail ? String(body.detail) : `The server returned an error (${response.status}).`,
      'server'
    )
  }

  const data = await response.json()
  if (typeof data.predicted_mental_health_score !== 'number') {
    throw new PredictionError('The server response was missing a valid score.', 'server')
  }
  return data
}
