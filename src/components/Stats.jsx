import React, { useEffect, useRef, useState } from 'react'
import './Stats.css'

const STATS = [
  { value: 27, suffix: '%', label: 'Lower NICU admissions', desc: 'Reducing costly interventions through proactive care' },
  { value: 57, suffix: '%', label: 'Return to work support', desc: 'Members who report Maven helped them return after baby' },
  { value: 30, suffix: '%', label: 'Natural pregnancy rate', desc: 'Fertility members achieving pregnancy without ART' },
  { value: 21, suffix: '%', label: 'Maternal mental health', desc: 'Members reporting improved mental wellbeing' },
]

function useCountUp(target, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1200
    const step = 16
    const inc = target / (duration / step)
    const timer = setInterval(() => {
      start += inc
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [active, target])
  return count
}

function StatCard({ value, suffix, label, desc, active }) {
  const count = useCountUp(value, active)
  return (
    <div className="stat-card">
      <div className="stat-card__number">
        {count}<span className="stat-card__suffix">{suffix}</span>
      </div>
      <div className="stat-card__divider" />
      <h3 className="stat-card__label">{label}</h3>
      <p className="stat-card__desc">{desc}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef()
  const [active, setActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="stats section section--dark" ref={ref}>
      <div className="container">
        <div className="stats__header">
          <span className="tag" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--green-100)' }}>Proven outcomes</span>
          <h2 className="stats__title">
            Lowering costs by{' '}
            <span className="italic" style={{ color: 'var(--green-200)' }}>improving care</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 500, fontSize: '1.05rem', lineHeight: 1.7 }}>
            By guiding members through more intuitive paths to health, we help reduce costly interventions and improve outcomes.
          </p>
        </div>
        <div className="stats__grid">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} active={active} />
          ))}
        </div>
        <div className="stats__footnote">
          Outcomes validated by Milliman and 40+ peer-reviewed studies
        </div>
      </div>
    </section>
  )
}