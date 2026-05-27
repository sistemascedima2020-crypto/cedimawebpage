import React from 'react'
import { Link } from 'react-router-dom'
import './Programs.css'

const PROGRAMS = [
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Paquete Cedima Familiar',
    desc: 'Plan anual con un solo pago para 1 titular y hasta 8 beneficiarios, con consultas incluidas y hasta 50% de descuento en servicios médicos.',
    color: 'teal',
    to: '/paquete-familiar',
  },
  {
    icon: '👩‍⚕️',
    title: 'Paquete Cedima Médico',
    desc: 'Plan anual individual con un solo pago que incluye 2 consultas médicas y hasta 50% de descuento, además de acceso a tarifas preferenciales.',
    color: 'sage',
    to: '/paquete-medico',
  },
  {
    icon: '✨',
    title: 'Paquete Médico Familiar VIP',
    desc: 'Plan anual con un solo pago que cubre 1 titular y hasta 8 beneficiarios, con consultas de medicina general gratis todo el año y bonos de hasta 50%.',
    color: 'mint',
    to: '/paquete-vip',
  },
  {
    icon: '🤵',
    title: 'Paquete de Salud Elite',
    desc: 'Plan familiar financiable hasta en 24 cuotas que cubre 1 titular y hasta 8 beneficiarios, incluye $800.000 en servicios médicos y acceso preferencial por 2 años.',
    color: 'rose',
    to: '/paquete-elite',
  },
]

export default function Programs() {
  return (
    <section className="programs section section--cream" id="programs">
      <div className="container">
        <div className="programs__header">
          <span className="tag">Nuestros Programas</span>
          <h2 className="programs__title">
            Nos enfocamos en darte bienestar{' '}
            <span className="text-green italic">sin romper tu bolsillo</span>
          </h2>
          <p className="text-soft" style={{ maxWidth: 520, fontSize: '1.05rem', lineHeight: 1.7 }}>
            Nuestros programas son flexibles y se ajustan a cualquier estilo de vida y necesidad que tengas!
          </p>
        </div>

        <div className="programs__grid">
          {PROGRAMS.map((p, i) => (
            <Link
              key={p.title}
              to={p.to}
              className={`program-card program-card--${p.color} anim-fadeup`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="program-card__icon">{p.icon}</div>
              <h3 className="program-card__title">{p.title}</h3>
              <p className="program-card__desc">{p.desc}</p>
              <span className="program-card__cta">
                Ver más
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
