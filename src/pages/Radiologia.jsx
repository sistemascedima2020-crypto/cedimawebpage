import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '🫁', bg: '#d0f4ea', title: 'Radiografías digitales', desc: 'Imágenes de alta resolución con tecnología digital para diagnósticos más precisos y rápidos.' },
  { icon: '🧲', bg: '#d4f0df', title: 'Resonancia magnética', desc: 'Imágenes detalladas de tejidos blandos, articulaciones y órganos internos sin radiación.' },
  { icon: '🔬', bg: '#ede9fe', title: 'Tomografía computarizada', desc: 'Escaneos en cortes transversales del cuerpo para detectar anomalías con alta precisión.' },
  { icon: '📡', bg: '#fde8ee', title: 'Ecografía', desc: 'Imágenes en tiempo real usando ultrasonido, sin radiación, ideal para seguimiento de embarazo y órganos.' },
  { icon: '🦴', bg: '#fef9c3', title: 'Densitometría ósea', desc: 'Medición de la densidad mineral ósea para diagnóstico y seguimiento de osteoporosis.' },
  { icon: '⚡', bg: '#e0f7ef', title: 'Resultados en línea', desc: 'Accede a tus resultados e imágenes digitalmente desde cualquier dispositivo el mismo día.' },
]

const SERVICES = [
  { servicio: 'Radiografía simple', tiempo: '15 min', descuento: 'Hasta 50%' },
  { servicio: 'Ecografía abdominal', tiempo: '30 min', descuento: 'Hasta 45%' },
  { servicio: 'Ecografía obstétrica', tiempo: '30 min', descuento: 'Hasta 45%' },
  { servicio: 'Tomografía (TAC)', tiempo: '45 min', descuento: 'Hasta 40%' },
  { servicio: 'Resonancia magnética', tiempo: '60 min', descuento: 'Hasta 40%' },
  { servicio: 'Densitometría ósea', tiempo: '20 min', descuento: 'Hasta 35%' },
  { servicio: 'Mamografía', tiempo: '20 min', descuento: 'Hasta 50%' },
  { servicio: 'Fluoroscopía', tiempo: '30 min', descuento: 'Hasta 35%' },
]

const FAQS = [
  { q: '¿Necesito una orden médica para realizarme un examen radiológico?', a: 'La mayoría de los exámenes requieren una orden médica. Sin embargo, algunos como la ecografía abdominal pueden realizarse de forma particular sin orden. Consulta con nuestro equipo para más información.' },
  { q: '¿Cuánto tiempo tardan los resultados?', a: 'Las radiografías simples están disponibles en línea el mismo día. Las tomografías y resonancias tienen un tiempo de entrega de 24 a 48 horas hábiles.' },
  { q: '¿Los exámenes de radiología tienen algún riesgo?', a: 'Las radiografías y tomografías usan dosis muy bajas de radiación, consideradas seguras. La ecografía y resonancia magnética no usan radiación. Nuestros equipos cumplen con todos los estándares de seguridad internacionales.' },
  { q: '¿Cómo me preparo para una ecografía abdominal?', a: 'Para una ecografía abdominal debes estar en ayuno de mínimo 4 horas y tener la vejiga llena. Para otros tipos de ecografías la preparación puede variar — te indicaremos los pasos al agendar tu cita.' },
  { q: '¿Puedo llevar mis imágenes a otro médico?', a: 'Sí. Todas nuestras imágenes se entregan en formato digital (CD o descarga en línea) y pueden ser compartidas con cualquier especialista.' },
]

export default function Radiologia() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className="pkg-hero section--cream">
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#a8e0bf' }} />
          <div className="pkg-hero__blob pkg-hero__blob--2" style={{ background: '#d4f0df' }} />
        </div>
        <div className="container">
          <Link to="/" className="pkg-hero__back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Volver al inicio
          </Link>
          <div className="pkg-hero__inner">
            <div>
              <div className="pkg-hero__badge">
                <div className="pkg-hero__icon" style={{ background: '#d0f4ea' }}>🫁</div>
                <span className="tag">Servicio</span>
              </div>
              <h1 className="pkg-hero__title">
                <em>Radiología</em> e Imágenes Diagnósticas
              </h1>
              <p className="pkg-hero__desc">
                Diagnóstico preciso con tecnología de punta. Contamos con equipos de última generación para radiografías, ecografías, tomografías y resonancias magnéticas, con resultados disponibles en línea el mismo día.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">Agendar cita</a>
                <a href="#servicios" className="btn btn-outline">Ver servicios</a>
              </div>
            </div>
            <div className="pkg-price-card">
              <div className="pkg-price-card__header">
                <span className="pkg-price-card__label">Descuento con plan Cedima</span>
                <span className="pkg-price-card__badge tag">Miembros</span>
              </div>
              <div className="pkg-price-card__amount">
                <span className="pkg-price-card__number" style={{ fontSize: '2.5rem' }}>Hasta 50%</span>
              </div>
              <div className="pkg-price-card__divider" />
              <p className="pkg-price-card__includes">Destacados</p>
              {['Radiografías digitales de alta resolución', 'Ecografía y seguimiento obstétrico', 'Tomografía y resonancia magnética', 'Resultados digitales el mismo día', 'Radiólogos especializados certificados'].map(f => (
                <div key={f} className="pkg-price-card__feature">
                  <div className="pkg-price-card__check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="var(--green-600)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {f}
                </div>
              ))}
              <a href="#contacto" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '1rem' }}>Agendar ahora</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pkg-section">
        <div className="container">
          <p className="pkg-section__label">Nuestros servicios</p>
          <h2 className="pkg-section__title">Tecnología diagnóstica de primer nivel</h2>
          <p className="pkg-section__sub">Equipos de última generación operados por radiólogos certificados para garantizar diagnósticos precisos y oportunos.</p>
          <div className="pkg-benefits">
            {BENEFITS.map(b => (
              <div key={b.title} className="pkg-benefit-card">
                <div className="pkg-benefit-card__icon" style={{ background: b.bg }}>{b.icon}</div>
                <p className="pkg-benefit-card__title">{b.title}</p>
                <p className="pkg-benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pkg-section pkg-section--alt" id="servicios">
        <div className="container">
          <p className="pkg-section__label">Tarifas</p>
          <h2 className="pkg-section__title">Exámenes disponibles</h2>
          <p className="pkg-section__sub">Todos los procedimientos con descuentos exclusivos para miembros de los planes Cedima.</p>
          <div className="pkg-table-wrap">
            <table className="pkg-table">
              <thead>
                <tr><th>Examen</th><th>Duración aprox.</th><th>Descuento miembros</th></tr>
              </thead>
              <tbody>
                {SERVICES.map(s => (
                  <tr key={s.servicio}>
                    <td>{s.servicio}</td>
                    <td>{s.tiempo}</td>
                    <td><span className="pkg-table__yes">{s.descuento}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pkg-section">
        <div className="container">
          <p className="pkg-section__label">Preguntas frecuentes</p>
          <h2 className="pkg-section__title">Resolvemos tus dudas</h2>
          <p className="pkg-section__sub">Todo lo que necesitas saber antes de tu examen de radiología.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">¿Necesitas un examen radiológico?</h3>
            <p className="pkg-cta__sub">Agenda tu cita hoy y recibe tus resultados digitales el mismo día.</p>
          </div>
          <div className="pkg-cta__actions">
            <a href="tel:+57000000000" className="btn btn-white">Llamar ahora</a>
            <a href="https://wa.me/57000000000" className="btn btn-ghost">WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  )
}
