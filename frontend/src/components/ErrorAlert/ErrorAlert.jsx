import { WifiOff, ShieldAlert, TriangleAlert } from 'lucide-react'
import './ErrorAlert.css'

const KIND_META = {
  network: { icon: WifiOff, title: "Can't reach the server" },
  validation: { icon: ShieldAlert, title: 'Check your inputs' },
  server: { icon: TriangleAlert, title: 'Something went wrong' },
}

export default function ErrorAlert({ kind = 'server', message, onDismiss }) {
  const { icon: Icon, title } = KIND_META[kind] ?? KIND_META.server

  return (
    <div className={`error-alert error-alert--${kind} glass-panel fade-in`} role="alert">
      <span className="error-alert__icon">
        <Icon size={20} strokeWidth={2.25} />
      </span>
      <div className="error-alert__body">
        <p className="error-alert__title">{title}</p>
        <p className="error-alert__message">{message}</p>
      </div>
      <button className="error-alert__dismiss" type="button" onClick={onDismiss}>
        Try Again
      </button>
    </div>
  )
}
