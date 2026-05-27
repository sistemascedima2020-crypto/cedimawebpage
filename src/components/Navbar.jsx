import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  {
    label: '¿Por qué Cedima?',
    children: [
      { label: 'Nosotros', href: '/' },
      { label: 'Precios', href: '#programs' },
    ],
  },
  {
    label: 'Programas',
    children: [
      { label: 'Cedima Familiar', href: 'paquete-familiar' },
      { label: 'Cedima Medico', href: 'paquete-medico' },
      { label: 'Medico Familiar VIP', href: 'paquete-vip' },
      { label: 'Salud Elite', href: 'paquete-elite' },
    ],
  },
  {
    label: 'Servicios',
    children: [
      { label: 'Radiologia', href: '/servicios/radiologia' },
      { label: 'Dermatologia', href: '/servicios/dermatologia' },
      { label: 'Optometria', href: '/servicios/optometria' },
      { label: 'Ginecologia', href: '/servicios/ginecologia' },
    ],
  }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a className="navbar__logo">
          <img src="\images\cedimaLogo.jpg" alt="Cedima IPS" height="40" style={{ width: 'auto' }} />
          <span className="navbar__brand">Cedima IPS</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links" onMouseLeave={() => setOpen(null)}>
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className={`navbar__item navbar__item--dropdown${open === link.label ? ' is-open' : ''}`}
                onMouseEnter={() => setOpen(link.label)}
              >
                <button className="navbar__link">
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                </button>
                <div className="navbar__dropdown">
                  {link.children.map((c) => (
                    c.href.startsWith('/') ? (
                      <Link key={c.label} to={c.href} className="navbar__dropdown-link">
                        {c.label}
                      </Link>
                    ) : (
                      <a key={c.label} href={c.href} className="navbar__dropdown-link">
                        {c.label}
                      </a>
                    )
                  ))}
                </div>
              </div>
            ) : (
              <a key={link.label} href={link.href} className="navbar__link">
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTAs */}
        <div className="navbar__ctas">
        </div>

        {/* Mobile burger */}
        <button
          className={`navbar__burger${mobileOpen ? ' is-open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="navbar__mobile">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="navbar__mobile-group">
                <span className="navbar__mobile-label">{link.label}</span>
                {link.children.map((c) => (
                  c.href.startsWith('/') ? (
                    <Link key={c.label} to={c.href} className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
                      {c.label}
                    </Link>
                  ) : (
                    <a key={c.label} href={c.href} className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
                      {c.label}
                    </a>
                  )
                ))}
              </div>
            ) : (
              <a key={link.label} href={link.href} className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  )
}