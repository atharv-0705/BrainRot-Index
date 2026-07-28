import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PredictionForm from './components/PredictionForm/PredictionForm'
import LoadingState from './components/LoadingState/LoadingState'
import ErrorAlert from './components/ErrorAlert/ErrorAlert'
import ResultCard from './components/ResultCard/ResultCard'
import Footer from './components/Footer/Footer'
import AuroraBackground from './components/AuroraBackground/AuroraBackground'
import { predictMentalHealth, PredictionError } from './utils/api'

// idle -> loading -> success | error
export default function App() {
  const [status, setStatus] = useState('idle')
  const [score, setScore] = useState(null)
  const [error, setError] = useState(null)

  async function handlePredict(payload) {
    setStatus('loading')
    setError(null)

    try {
      const data = await predictMentalHealth(payload)
      setScore(data.predicted_mental_health_score)
      setStatus('success')
    } catch (err) {
      const kind = err instanceof PredictionError ? err.kind : 'server'
      const message = err instanceof PredictionError ? err.message : 'An unexpected error occurred. Please try again.'
      setError({ kind, message })
      setStatus('error')
    }
  }

  function handleReset() {
    setStatus('idle')
    setScore(null)
    setError(null)
  }

  return (
    <>
      <AuroraBackground />
      <Header />
      <main>
        <Hero />
        <PredictionForm onSubmit={handlePredict} isLoading={status === 'loading'} />

        <div className="container">
          {status === 'loading' && <LoadingState />}
          {status === 'error' && error && (
            <ErrorAlert kind={error.kind} message={error.message} onDismiss={handleReset} />
          )}
          {status === 'success' && score !== null && <ResultCard score={score} onReset={handleReset} />}
        </div>
      </main>
      <Footer />
    </>
  )
}
