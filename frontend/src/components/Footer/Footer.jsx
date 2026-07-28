import { APP_NAME } from '../../config'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>{APP_NAME} predictions are estimates for reflection, not a medical or clinical assessment.</p>
        <p className="site-footer__credit">Built by Atharv Gupta</p>
      </div>
    </footer>
  )
}
