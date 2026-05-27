import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Background shapes */}
      <div className="hero__bg">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content anim-fadeup">
          <span className="tag">Conoce nuestros beneficios</span>
          <h1 className="hero__title">
            Cuidamos lo más valioso, {' '}
            <span className="hero__title-em">tu salud</span>
          </h1>
          <p className="hero__sub">
            Conoce nuestros beneficios y encuentra el paquete que se ajuste a tus necesidades.
          </p> 
        </div>

        <div className="hero__visual anim-fadeup anim-delay-2">
          <div className="hero__card-stack">
            {/* Primary app card */}
            <div className="hero__card hero__card--main">
              <div className="hero__card-header">
                <div className="hero__avatar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="#1d7a4a" strokeWidth="1.8"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#1d7a4a" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="hero__card-name">Dra. Sara Hidalgo</p>
                  <p className="hero__card-role">Specialista en Radiografía</p>
                </div>
                <span className="hero__online-dot" />
              </div>
              <p className="hero__card-msg">
                "Your latest results look great! Let's schedule a follow-up to discuss your care plan."
              </p>
              <div className="hero__card-time">Just now · Video call available</div>
            </div>

            {/* Floating stat card */}
            <div className="hero__card hero__card--stat hero__card--stat-1">
              <div className="hero__stat-icon">↓</div>
              <div>
                <strong>27% lower</strong>
                <span>NICU admissions</span>
              </div>
            </div>

            {/* Floating stat card 2 */}
            <div className="hero__card hero__card--stat hero__card--stat-2">
              <div className="hero__stat-icon hero__stat-icon--purple">★</div>
              <div>
                <strong>4.9 / 5</strong>
                <span>member satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}