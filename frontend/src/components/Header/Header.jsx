import { Activity } from 'lucide-react'
import { APP_NAME } from '../../config'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="brand">
          <span className="brand__mark">
            <Activity size={18} strokeWidth={2.5} />
          </span>
          <span className="brand__name">{APP_NAME}</span>
        </div>
        <div className="site-header__actions">
          <ThemeToggle />
          <a className="site-header__cta" href="#predict-form">
            Check my score
          </a>
        </div>
      </div>
    </header>
  )
}
