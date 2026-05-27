import React from 'react'
import './Cta.css'

export default function CTA() {
  return (
    <section className="cta-section section">
      <div className="container">
        <div className="cta__inner">
          <div className="cta__blob cta__blob--1" />
          <div className="cta__blob cta__blob--2" />
          <div className="cta__content">
            <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--white)' }}>Get started</span>
            <h2 className="cta__title">
              Bring your benefits into{' '}
              <span className="italic" style={{ color: 'var(--green-200)' }}>the future</span>
            </h2>
            <p className="cta__sub">
              Connect with our team and discover how our women's and family health benefits can work for you.
            </p>
            <div className="cta__actions">
              <a href="#demo" className="btn btn-white">For businesses</a>
              <a href="#employees" className="btn btn-ghost">For employees</a>
            </div>
          </div>
          <div className="cta__visual">
            <div className="cta__feature-list">
              {[
                '24/7 virtual care access',
                '30+ specialist types',
                'AI-powered health insights',
                'Global coverage in 175+ countries',
                '40+ peer-reviewed studies',
              ].map((f) => (
                <div key={f} className="cta__feature">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.15)"/>
                    <path d="M4.5 8l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}