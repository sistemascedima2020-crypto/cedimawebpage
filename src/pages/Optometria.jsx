import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '👁️', bg: '#dbeafe', title: 'Examen visual completo', desc: 'Evaluación integral de la agudeza visual, refracción y salud ocular para determinar tu prescripción exacta.' },
  { icon: '🔭', bg: '#d0f4ea', title: 'Fondo de ojo', desc: 'Revisión de la retina, nervio óptico y vasos sanguíneos para detectar enfermedades oculares y sistémicas.' },
  { icon: '📏', bg: '#fef9c3', title: 'Topografía corneal', desc: 'Mapeo detallado de la superficie de la córnea, esencial para diagnóstico de queratocono y adaptación de lentes.' },
  { icon: '💧', bg: '#fde8ee', title: 'Evaluación de glaucoma', desc: 'Medición de la presión intraocular y análisis del nervio óptico para diagnóstico temprano del glaucoma.' },
  { icon: '👓', bg: '#d4f0df', title: 'Adaptación de lentes', desc: 'Prescripción de gafas y lentes de contacto blandas, rígidas y de diseño especial según tu necesidad.' },
  { icon: '👦', bg: '#ede9fe', title: 'Optometría pediátrica', desc: 'Evaluación visual temprana en niños para detectar y corregir problemas que puedan afectar su aprendizaje.' },
]

const SERVICES = [
  { servicio: 'Examen visual completo', tiempo: '45 min', descuento: 'Hasta 50%' },
  { servicio: 'Fondo de ojo con dilatación', tiempo: '60 min', descuento: 'Hasta 45%' },
  { servicio: 'Topografía corneal', tiempo: '20 min', descuento: 'Hasta 40%' },
  { servicio: 'Tonometría (presión ocular)', tiempo: '15 min', descuento: 'Hasta 45%' },
  { servicio: 'Adaptación lentes de contacto', tiempo: '45 min', descuento: 'Hasta 35%' },
  { servicio: 'Examen visual pediátrico', tiempo: '45 min', descuento: 'Hasta 50%' },
  { servicio: 'Campo visual computarizado', tiempo: '30 min', descuento: 'Hasta 40%' },
  { servicio: 'Paquimetría corneal', tiempo: '15 min', descuento: 'Hasta 35%' },
]

const FAQS = [
  { q: '¿Cada cuánto tiempo debo hacerme un examen visual?', a: 'Se recomienda un examen visual completo una vez al año. Si usas gafas o lentes de contacto, o tienes antecedentes de enfermedades oculares como glaucoma o diabetes, la frecuencia puede ser mayor según indicación del optómetra.' },
  { q: '¿A qué edad deben hacerse los niños su primer examen visual?', a: 'El primer examen visual se recomienda entre los 6 meses y el año de vida, luego a los 3 años y antes de iniciar la etapa escolar. Detectar problemas a tiempo evita dificultades en el aprendizaje.' },
  { q: '¿El examen con dilatación pupilar afecta mi visión temporalmente?', a: 'Sí. Las gotas para dilatar la pupila pueden causar visión borrosa de cerca y sensibilidad a la luz por 4 a 6 horas. Se recomienda venir acompañado y no conducir ese día.' },
  { q: '¿Puedo adaptar lentes de contacto si tengo astigmatismo?', a: 'Sí. Existen lentes de contacto tóricas diseñadas específicamente para corregir el astigmatismo. El optómetra evaluará si eres candidato y qué tipo de lente se adapta mejor a tu caso.' },
  { q: '¿El descuento Cedima aplica también en monturas y lentes ópticos?', a: 'El descuento aplica en los servicios de optometría clínica. Para monturas y lentes ópticos en nuestra óptica aliada, los miembros Elite y VIP tienen descuentos adicionales. Consulta con tu asesor Cedima.' },
]

export default function Optometria() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className="pkg-hero" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #faf8f3 100%)' }}>
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#93c5fd' }} />
          <div className="pkg-hero__blob pkg-hero__blob--2" style={{ background: '#a8e0bf' }} />
        </div>
        <div className="container">
          <Link to="/" className="pkg-hero__back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Volver al inicio
          </Link>
          <div className="pkg-hero__inner">
            <div>
              <div className="pkg-hero__badge">
                <div className="pkg-hero__icon" style={{ background: '#dbeafe' }}>👁️</div>
                <span className="tag" style={{ background: '#dbeafe', color: '#1e40af' }}>Servicio</span>
              </div>
              <h1 className="pkg-hero__title">
                <em>Optometría</em> y Salud Visual
              </h1>
              <p className="pkg-hero__desc">
                Tu visión es invaluable. Nuestros optómetras certificados realizan evaluaciones visuales completas con equipos de última tecnología para garantizar la salud de tus ojos y la calidad de tu visión a cualquier edad.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">Agendar cita</a>
                <a href="#servicios" className="btn btn-outline">Ver servicios</a>
              </div>
            </div>
            <div className="pkg-price-card" style={{ borderColor: '#93c5fd' }}>
              <div className="pkg-price-card__header">
                <span className="pkg-price-card__label">Descuento con plan Cedima</span>
                <span className="pkg-price-card__badge tag" style={{ background: '#dbeafe', color: '#1e40af' }}>Miembros</span>
              </div>
              <div className="pkg-price-card__amount">
                <span className="pkg-price-card__number" style={{ fontSize: '2.5rem', color: '#1e40af' }}>Hasta 50%</span>
              </div>
              <div className="pkg-price-card__divider" />
              <p className="pkg-price-card__includes">Destacados</p>
              {['Examen visual completo', 'Fondo de ojo y topografía corneal', 'Adaptación de lentes de contacto', 'Evaluación de glaucoma', 'Optometría pediátrica especializada'].map(f => (
                <div key={f} className="pkg-price-card__feature">
                  <div className="pkg-price-card__check" style={{ background: '#dbeafe' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#1e40af" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
          <h2 className="pkg-section__title">Cuidado visual para toda la familia</h2>
          <p className="pkg-section__sub">Evaluaciones visuales completas y tratamientos especializados para niños, adultos y adultos mayores con la tecnología más avanzada.</p>
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
          <h2 className="pkg-section__title">Exámenes y procedimientos</h2>
          <p className="pkg-section__sub">Todos los servicios de optometría con descuentos exclusivos para miembros de los planes Cedima.</p>
          <div className="pkg-table-wrap">
            <table className="pkg-table">
              <thead>
                <tr><th>Servicio</th><th>Duración aprox.</th><th>Descuento miembros</th></tr>
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
          <p className="pkg-section__sub">Todo lo que necesitas saber antes de tu consulta de optometría.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">¿Cuándo fue tu último examen visual?</h3>
            <p className="pkg-cta__sub">Agenda hoy y cuida la salud de tus ojos con nuestros especialistas.</p>
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
