import React, { useState } from 'react'
import './Features.css'

const FEATURES = [
  {
    id: 'network',
    label: 'Virtual care network',
    stat: '28M lives',
    title: 'The largest virtual care network, supporting 28 million lives worldwide',
    body: 'Access to 30+ provider specialties including OB-GYNs, nutritionists, doulas, lactation consultants, mental health therapists, and more — all available 24/7/365.',
    pills: ['OB-GYN', 'Nutritionist', 'Doula', 'Lactation Consultant', 'Therapist', 'Pediatrician'],
    icon: '🌐',
  },
  {
    id: 'research',
    label: 'Clinical research',
    stat: '40+ studies',
    title: 'Backed by 40+ peer-reviewed studies on our care model',
    body: 'Our outcomes are Milliman-validated and proven through employer and health plan claims-based studies — giving you confidence in every benefit dollar spent.',
    pills: ['Milliman validated', 'Claims-based', 'Peer-reviewed', 'Evidence-based'],
    icon: '🔬',
  },
  {
    id: 'global',
    label: 'Global coverage',
    stat: '175+ countries',
    title: 'Global care, coverage, and reimbursement across 175+ countries',
    body: 'Whether your employees are in New York, London, or Tokyo — they get the same high-quality, consistent care experience with local reimbursement support.',
    pills: ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East'],
    icon: '🗺️',
  },
  {
    id: 'ai',
    label: 'AI-powered insights',
    stat: 'Real-time',
    title: '24/7 virtual care, predictive insights, and employee benefit details — all in one place',
    body: 'AI-native technology surfaces predictive health insights and administrative ease for HR teams, so you can act before small issues become costly interventions.',
    pills: ['Predictive analytics', 'AI triage', 'Admin dashboard', 'Benefits integration'],
    icon: '⚡',
  },
]

export default function Features() {
  const [active, setActive] = useState(0)
  const f = FEATURES[active]

  return (
    <section className="features section" id="platform">
      <div className="container">
        <div className="features__header">
          <span className="tag">The platform</span>
          <h2>
            24/7 virtual care &amp; predictive insights,{' '}
            <span className="text-green italic">all in one place</span>
          </h2>
          <p className="text-soft" style={{ maxWidth: 520, fontSize: '1.05rem', lineHeight: 1.7 }}>
            Meet the world's most innovative healthcare platform, combining clinical precision, administrative ease, and AI-native technology.
          </p>
        </div>

        <div className="features__body">
          {/* Tab nav */}
          <div className="features__tabs">
            {FEATURES.map((feat, i) => (
              <button
                key={feat.id}
                className={`features__tab${active === i ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="features__tab-icon">{feat.icon}</span>
                <span className="features__tab-label">{feat.label}</span>
                <span className="features__tab-stat">{feat.stat}</span>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="features__panel" key={f.id}>
            <div className="features__panel-content">
              <h3 className="features__panel-title">{f.title}</h3>
              <p className="features__panel-body">{f.body}</p>
              <div className="features__pills">
                {f.pills.map(p => (
                  <span key={p} className="features__pill">{p}</span>
                ))}
              </div>
              <a href="#demo" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
                Learn more →
              </a>
            </div>

            {/* Visual side */}
            <div className="features__panel-visual">
              <div className="features__icon-display">
                <span>{f.icon}</span>
              </div>
              <div className="features__visual-stat">
                <span className="features__visual-stat-num">{f.stat}</span>
                <span className="features__visual-stat-label">{f.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}