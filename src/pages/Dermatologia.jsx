import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '🔍', bg: '#fde8ee', title: 'Dermatoscopia digital', desc: 'Análisis detallado de lunares y lesiones cutáneas con dermatoscopio digital de alta resolución para detección temprana.' },
  { icon: '✨', bg: '#fef9c3', title: 'Tratamientos estéticos', desc: 'Procedimientos para el rejuvenecimiento facial, eliminación de manchas, cicatrices y marcas de acné.' },
  { icon: '🧴', bg: '#d0f4ea', title: 'Dermatología clínica', desc: 'Diagnóstico y tratamiento de enfermedades de la piel como psoriasis, eczema, rosácea y dermatitis.' },
  { icon: '☀️', bg: '#fef3c7', title: 'Fotoprotección y daño solar', desc: 'Evaluación y tratamiento del daño solar acumulado, manchas y queratosis actínicas.' },
  { icon: '💉', bg: '#ede9fe', title: 'Procedimientos menores', desc: 'Extracción de quistes, verrugas, lunares y otras lesiones benignas en consulta ambulatoria.' },
  { icon: '👶', bg: '#d4f0df', title: 'Dermatología pediátrica', desc: 'Atención especializada para afecciones cutáneas en bebés, niños y adolescentes.' },
]

const SERVICES = [
  { servicio: 'Consulta dermatológica general', tiempo: '30 min', descuento: 'Hasta 50%' },
  { servicio: 'Dermatoscopia digital', tiempo: '30 min', descuento: 'Hasta 45%' },
  { servicio: 'Extracción de lesiones benignas', tiempo: '45 min', descuento: 'Hasta 40%' },
  { servicio: 'Tratamiento de acné', tiempo: '30 min', descuento: 'Hasta 45%' },
  { servicio: 'Peeling químico', tiempo: '45 min', descuento: 'Hasta 35%' },
  { servicio: 'Infiltración de corticoides', tiempo: '20 min', descuento: 'Hasta 40%' },
  { servicio: 'Biopsia de piel', tiempo: '30 min', descuento: 'Hasta 40%' },
  { servicio: 'Consulta pediátrica dermatológica', tiempo: '30 min', descuento: 'Hasta 50%' },
]

const FAQS = [
  { q: '¿Cuándo debo consultar a un dermatólogo?', a: 'Debes consultar si tienes lunares que cambian de forma, tamaño o color, manchas persistentes, erupciones inexplicables, acné severo, caída del cabello o cualquier lesión cutánea que te genere preocupación. También se recomienda una revisión anual preventiva.' },
  { q: '¿Debo llegar sin maquillaje a la consulta?', a: 'Sí, se recomienda asistir sin maquillaje ni cremas en las zonas que vas a consultar. Esto permite al dermatólogo hacer una evaluación más precisa de tu piel.' },
  { q: '¿Qué es la dermatoscopia y para qué sirve?', a: 'La dermatoscopia es un examen no invasivo que utiliza un dispositivo con luz y lente de aumento para analizar lunares y lesiones de la piel con más detalle que a simple vista. Es fundamental para la detección temprana del melanoma.' },
  { q: '¿Los tratamientos estéticos están cubiertos por el descuento Cedima?', a: 'Sí, los procedimientos estéticos realizados dentro de la red Cedima también aplican para los descuentos del plan. El porcentaje varía según el procedimiento.' },
  { q: '¿La consulta pediátrica la atiende el mismo dermatólogo?', a: 'Contamos con dermatólogos con formación específica en dermatología pediátrica. Al agendar la cita indica que es para un menor de edad para asignarte el especialista adecuado.' },
]

export default function Dermatologia() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className="pkg-hero" style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #faf8f3 100%)' }}>
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#fda4af' }} />
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
                <div className="pkg-hero__icon" style={{ background: '#fde8ee' }}>🔍</div>
                <span className="tag" style={{ background: '#fde8ee', color: '#9f1239' }}>Servicio</span>
              </div>
              <h1 className="pkg-hero__title">
                <em>Dermatología</em> Clínica y Estética
              </h1>
              <p className="pkg-hero__desc">
                Cuidamos la salud de tu piel con diagnóstico especializado y tratamientos modernos. Desde enfermedades cutáneas hasta procedimientos estéticos, nuestros dermatólogos certificados están listos para atenderte.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">Agendar cita</a>
                <a href="#servicios" className="btn btn-outline">Ver servicios</a>
              </div>
            </div>
            <div className="pkg-price-card" style={{ borderColor: '#fda4af' }}>
              <div className="pkg-price-card__header">
                <span className="pkg-price-card__label">Descuento con plan Cedima</span>
                <span className="pkg-price-card__badge tag" style={{ background: '#fde8ee', color: '#9f1239' }}>Miembros</span>
              </div>
              <div className="pkg-price-card__amount">
                <span className="pkg-price-card__number" style={{ fontSize: '2.5rem', color: '#9f1239' }}>Hasta 50%</span>
              </div>
              <div className="pkg-price-card__divider" />
              <p className="pkg-price-card__includes">Destacados</p>
              {['Dermatoscopia digital de lunares', 'Tratamientos para acné y manchas', 'Procedimientos estéticos', 'Dermatología pediátrica', 'Biopsias y diagnóstico histológico'].map(f => (
                <div key={f} className="pkg-price-card__feature">
                  <div className="pkg-price-card__check" style={{ background: '#fde8ee' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#9f1239" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
          <h2 className="pkg-section__title">Salud y bienestar para tu piel</h2>
          <p className="pkg-section__sub">Atención dermatológica integral para todas las edades, desde diagnóstico clínico hasta procedimientos estéticos avanzados.</p>
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
          <h2 className="pkg-section__title">Procedimientos disponibles</h2>
          <p className="pkg-section__sub">Descuentos exclusivos en todos los procedimientos dermatológicos para miembros Cedima.</p>
          <div className="pkg-table-wrap">
            <table className="pkg-table">
              <thead>
                <tr><th>Procedimiento</th><th>Duración aprox.</th><th>Descuento miembros</th></tr>
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
          <p className="pkg-section__sub">Todo lo que necesitas saber antes de tu consulta dermatológica.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">¿Lista para cuidar tu piel?</h3>
            <p className="pkg-cta__sub">Agenda tu consulta dermatológica hoy con nuestros especialistas certificados.</p>
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
