import React, { useState } from 'react'
import './Footer.css'

const FOOTER_LINKS = [
  {
    heading: 'Join CarePath',
    links: [
      { label: 'Employers', href: '#employers' },
      { label: 'Health Plans', href: '#health-plans' },
      { label: 'Consultants', href: '#consultants' },
      { label: 'Individuals', href: '#individuals' },
      { label: 'Become a Provider', href: '#providers' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { label: 'Fertility & Family Building', href: '#fertility' },
      { label: 'Maternity & Newborn Care', href: '#maternity' },
      { label: 'Parenting & Pediatrics', href: '#parenting' },
      { label: 'Menopause & Midlife Health', href: '#menopause' },
      { label: 'CarePath Wallet', href: '#wallet' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers', badge: 'Hiring' },
      { label: 'Press', href: '#press' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Book a Demo', href: '#demo' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Resource Center', href: '#resources' },
      { label: 'Clinical Research', href: '#research' },
      { label: 'Webinars', href: '#webinars' },
      { label: 'Blog', href: '#blog' },
      { label: 'Case Studies', href: '#cases' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <footer className="footer">
      <div className="container">
        {/* Top row */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#1d7a4a"/>
                <path d="M10 22 L16 10 L22 22 M12.5 18 H19.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="footer__brand-name">CarePath</span>
            </a>
            <p className="footer__tagline">
              Evidence-based women's &amp; family healthcare. Trusted by 2,000+ employers worldwide.
            </p>

            {/* Newsletter */}
            <div className="footer__newsletter">
              <p className="footer__newsletter-label">Stay in the loop</p>
              {submitted ? (
                <p className="footer__newsletter-thanks">Thanks for subscribing! ✓</p>
              ) : (
                <form className="footer__newsletter-form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="footer__input"
                    required
                  />
                  <button type="submit" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Social */}
            <div className="footer__social">
              {[
                { label: 'LinkedIn', icon: 'in', href: '#' },
                { label: 'Facebook', icon: 'f', href: '#' },
                { label: 'Instagram', icon: '◎', href: '#' },
              ].map(s => (
                <a key={s.label} href={s.href} className="footer__social-icon" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <nav className="footer__links">
            {FOOTER_LINKS.map(col => (
              <div key={col.heading} className="footer__col">
                <h4 className="footer__col-heading">{col.heading}</h4>
                <ul>
                  {col.links.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className="footer__link">
                        {link.label}
                        {link.badge && <span className="footer__badge">{link.badge}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="footer__bottom">
          <p className="footer__copy">© 2026 CarePath Co. All rights reserved.</p>
          <div className="footer__legal">
            {['Terms', 'Privacy', 'Security', 'Cookie Policy', 'Notice of Privacy Practices'].map(l => (
              <a key={l} href="#" className="footer__legal-link">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}