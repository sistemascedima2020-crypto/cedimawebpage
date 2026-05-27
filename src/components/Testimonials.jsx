import React, { useState } from 'react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    quote: "We had amazing emotional support and saved around £30,000 we were going to spend on IVF. The only difference was CarePath. We didn't do anything else, and now we're pregnant.",
    name: 'Han',
    role: 'Member via Microsoft',
    initials: 'H',
    color: '#1d7a4a',
  },
  {
    quote: "This is by far the easiest access to services and specialists I've experienced in seven years of my family-building journey. I feel very supported and never have to wait weeks for a next appointment.",
    name: 'Sarah',
    role: 'Member via Amazon',
    initials: 'S',
    color: '#0ea5e9',
  },
  {
    quote: "CarePath is deeply personal to me. From second opinions on fertility treatment to nutrition advice during IVF, and childbirth education — it's been the constant and trusted companion through a challenging time.",
    name: 'Mairead',
    role: 'Head of Talent, Vynamic',
    initials: 'M',
    color: '#7c3aed',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = TESTIMONIALS[active]

  return (
    <section className="testimonials section section--cream" id="stories">
      <div className="container">
        <div className="testimonials__header">
          <span className="tag">Member stories</span>
          <h2>
            Real <span className="text-green italic">stories</span> from our members
          </h2>
          <p className="text-soft" style={{ maxWidth: 480, fontSize: '1.05rem', lineHeight: 1.7 }}>
            Discover how our personalized healthcare platform has transformed the lives of women and families worldwide.
          </p>
        </div>

        <div className="testimonials__body">
          {/* Main quote */}
          <div className="testimonial__card" key={active}>
            <div className="testimonial__quote-mark">"</div>
            <blockquote className="testimonial__text">{t.quote}</blockquote>
            <div className="testimonial__author">
              <div className="testimonial__avatar" style={{ background: t.color + '22', color: t.color }}>
                {t.initials}
              </div>
              <div>
                <p className="testimonial__name">{t.name}</p>
                <p className="testimonial__role">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Selector */}
          <div className="testimonials__nav">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={i}
                className={`testimonials__dot${active === i ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Side cards */}
          <div className="testimonials__side">
            {TESTIMONIALS.filter((_, i) => i !== active).map((item, i) => (
              <button
                key={i}
                className="testimonial__side-card"
                onClick={() => setActive(TESTIMONIALS.indexOf(item))}
              >
                <div className="testimonial__avatar testimonial__avatar--sm" style={{ background: item.color + '22', color: item.color }}>
                  {item.initials}
                </div>
                <div>
                  <p className="testimonial__name">{item.name}</p>
                  <p className="testimonial__role">{item.role}</p>
                  <p className="testimonial__preview">"{item.quote.slice(0, 60)}…"</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}