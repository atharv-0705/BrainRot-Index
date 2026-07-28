import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import './ThemeToggle.css'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      aria-pressed={isLight}
    >
      <span className={`theme-toggle__icon theme-toggle__icon--sun ${isLight ? 'is-active' : ''}`}>
        <Sun size={16} strokeWidth={2.25} />
      </span>
      <span className={`theme-toggle__icon theme-toggle__icon--moon ${isLight ? '' : 'is-active'}`}>
        <Moon size={16} strokeWidth={2.25} />
      </span>
    </button>
  )
}
