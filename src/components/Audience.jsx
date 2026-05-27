import React, { useState } from 'react'
import './Audience.css'

const AUDIENCES = [
  {
    id: 'employers',
    label: 'Employers',
    emoji: '🏢',
    headline: 'Reduce healthcare spend while improving employee wellbeing',
    body: "CarePath helps you offer a comprehensive women's and family health benefit that attracts top talent, reduces absenteeism, and lowers total healthcare costs through better care navigation.",
    benefits: [
      'Lower NICU and C-section rates',
      'Reduced fertility treatment costs',
      'Improved return-to-work rates',
      'Employer dashboard & analytics',
    ],
    cta: 'Explore employer solutions',
    href: '#employers',
  },
  {
    id: 'health-plans',
    label: 'Health Plans',
    emoji: '🏥',
    headline: 'Drive better outcomes and lower medical costs for your members',
    body: 'Partner with CarePath to offer your plan members best-in-class virtual care for fertility, maternity, and beyond — validated by Milliman and backed by claims-based outcomes data.',
    benefits: [
      'Milliman-validated cost savings',
      'Claims-based outcomes reporting',
      'Seamless benefits integration',
      'Population health insights',
    ],
    cta: 'Partner with us',
    href: '#health-plans',
  },
  {
    id: 'consultants',
    label: 'Consultants',
    emoji: '🤝',
    headline: 'Help your clients offer the most competitive family benefits',
    body: `CarePath gives benefits consultants the data, tools, and support to confidently recommend and implement women's and family health programs that deliver measurable ROI.'`,
    benefits: [
      'ROI calculators & reporting tools',
      'Dedicated consultant support',
      'Co-branded client resources',
      'Implementation & onboarding help',
    ],
    cta: 'Become a consulting partner',
    href: '#consultants',
  },
  {
    id: 'employees',
    label: 'Employees',
    emoji: '💚',
    headline: 'Expert care whenever you need it, wherever you are',
    body: 'Access 24/7 virtual care from specialists in fertility, maternity, pediatrics, and menopause. CarePath is your trusted companion through every stage of life.',
    benefits: [
      '24/7 access to specialists',
      'Personalized care plans',
      'Confidential & secure',
      'Available in 175+ countries',
    ],
    cta: 'Check your eligibility',
    href: '#eligibility',
  },
]

export default function Audience() {
  const [active, setActive] = useState(0)
  const a = AUDIENCES[active]

  return (
    <section className="audience section section--sand" id="solutions">
      <div className="container">
        <div className="audience__header">
          <span className="tag">Who we serve</span>
          <h2>
            Making healthcare work{' '}
            <span className="text-green italic">for all of us</span>
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="audience__tabs">
          {AUDIENCES.map((aud, i) => (
            <button
              key={aud.id}
              className={`audience__tab${active === i ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span>{aud.emoji}</span>
              {aud.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="audience__panel" key={a.id}>
          <div className="audience__text">
            <h3 className="audience__headline">{a.headline}</h3>
            <p className="audience__body">{a.body}</p>
            <ul className="audience__benefits">
              {a.benefits.map(b => (
                <li key={b} className="audience__benefit">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="9" fill="var(--green-100)"/>
                    <path d="M5 9l3 3 5-6" stroke="var(--green-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
            <a href={a.href} className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
              {a.cta} →
            </a>
          </div>

          <div className="audience__visual">
            <div className="audience__visual-card">
              <span className="audience__visual-emoji">{a.emoji}</span>
              <h4 className="audience__visual-label">{a.label}</h4>
              <p className="audience__visual-sub">CarePath solutions</p>
              <div className="audience__visual-divider" />
              {a.benefits.map(b => (
                <div key={b} className="audience__visual-item">
                  <span className="audience__visual-dot" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}