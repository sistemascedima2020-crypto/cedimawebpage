import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '👤', bg: '#d4f0df', title: 'Plan individual', desc: 'Diseñado para una sola persona que quiere acceso a salud de calidad con un único pago anual.' },
  { icon: '🩺', bg: '#d0f4ea', title: '2 consultas incluidas', desc: 'Dos consultas de medicina general incluidas sin ningún costo adicional durante el año.' },
  { icon: '💊', bg: '#e0f7ef', title: 'Hasta 50% de descuento', desc: 'Descuento en consultas de especialidades, laboratorio e imágenes diagnósticas en toda la red Cedima.' },
  { icon: '📋', bg: '#fde8ee', title: 'Tarifas preferenciales', desc: 'Accede a tarifas especiales para miembros en procedimientos y servicios de la red aliada Cedima.' },
  { icon: '🚀', bg: '#ede9fe', title: 'Activación inmediata', desc: 'Tu plan queda activo desde el momento del pago. Carnés digitales en menos de 24 horas hábiles.' },
  { icon: '🔒', bg: '#fef9c3', title: 'Beneficios exclusivos', desc: 'Acceso a campañas de salud preventiva, jornadas de vacunación y descuentos especiales en óptica.' },
]

const SERVICES = [
  { servicio: 'Consulta medicina general', incluido: true, descuento: '2 consultas gratis' },
  { servicio: 'Consulta especialista', incluido: true, descuento: 'Hasta 50%' },
  { servicio: 'Laboratorio clínico', incluido: true, descuento: 'Hasta 40%' },
  { servicio: 'Imágenes diagnósticas', incluido: true, descuento: 'Hasta 45%' },
  { servicio: 'Odontología general', incluido: true, descuento: 'Hasta 30%' },
  { servicio: 'Óptica', incluido: true, descuento: 'Hasta 20%' },
  { servicio: 'Beneficiarios adicionales', incluido: false, descuento: '—' },
  { servicio: 'Hospitalización', incluido: false, descuento: '—' },
]

const FAQS = [
  { q: '¿Este plan es solo para el titular?', a: 'Sí, el Paquete Médico es un plan individual pensado para una sola persona. Si necesitas cubrir a tu familia, te recomendamos el Paquete Familiar o el Paquete VIP.' },
  { q: '¿Puedo pasar a un plan familiar en el futuro?', a: 'Sí. Al renovar tu plan puedes hacer un upgrade al Paquete Familiar o VIP. El equipo de Cedima te ayudará a gestionar la transición sin inconvenientes.' },
  { q: '¿Las consultas incluidas tienen alguna restricción?', a: 'Las 2 consultas de medicina general incluidas no tienen restricción de especialidad dentro de la medicina general. Puedes usarlas cuando lo necesites durante la vigencia del plan.' },
  { q: '¿El descuento aplica en todos los especialistas?', a: 'El descuento aplica en todas las especialidades disponibles en la red Cedima. La disponibilidad puede variar según la ciudad o sede.' },
  { q: '¿Cómo presento el beneficio al momento de la consulta?', a: 'Simplemente identifícate con tu documento de identidad en cualquier sede Cedima. También puedes mostrar tu carné digital desde el correo de confirmación que recibes al adquirir el plan.' },
]

export default function PaqueteMedico() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className="pkg-hero section--cream">
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#a8e0bf' }} />
          <div className="pkg-hero__blob pkg-hero__blob--2" style={{ background: '#c8e6d0' }} />
        </div>
        <div className="container">
          <Link to="/" className="pkg-hero__back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Volver a programas
          </Link>
          <div className="pkg-hero__inner">
            <div>
              <div className="pkg-hero__badge">
                <div className="pkg-hero__icon" style={{ background: '#d4f0df' }}>👩‍⚕️</div>
                <span className="tag">Plan Individual</span>
              </div>
              <h1 className="pkg-hero__title">
                Paquete <em>Cedima Médico</em>
              </h1>
              <p className="pkg-hero__desc">
                El plan individual ideal para quienes quieren acceso ágil a servicios de salud de calidad. Un único pago anual con consultas incluidas y descuentos en toda la red Cedima.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">Adquirir plan</a>
                <a href="#servicios" className="btn btn-outline">Ver servicios</a>
              </div>
            </div>
            <div className="pkg-price-card">
              <div className="pkg-price-card__header">
                <span className="pkg-price-card__label">Valor del plan</span>
                <span className="pkg-price-card__badge tag">Individual</span>
              </div>
              <div className="pkg-price-card__amount">
                <span className="pkg-price-card__currency">$</span>
                <span className="pkg-price-card__number">150.000</span>
                <span className="pkg-price-card__period">/ año</span>
              </div>
              <div className="pkg-price-card__divider" />
              <p className="pkg-price-card__includes">Incluye</p>
              {['Solo para el titular', '2 consultas de medicina general', 'Hasta 50% de descuento', 'Tarifas preferenciales', 'Vigencia de 12 meses'].map(f => (
                <div key={f} className="pkg-price-card__feature">
                  <div className="pkg-price-card__check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="var(--green-600)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {f}
                </div>
              ))}
              <a href="#contacto" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '4px' }}>Adquirir ahora</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pkg-section">
        <div className="container">
          <p className="pkg-section__label">Beneficios</p>
          <h2 className="pkg-section__title">Lo que obtienes con tu plan</h2>
          <p className="pkg-section__sub">El Paquete Médico te da todo lo que necesitas para cuidar tu salud personal con acceso prioritario y precios accesibles.</p>
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
          <p className="pkg-section__label">Cobertura</p>
          <h2 className="pkg-section__title">Servicios y descuentos</h2>
          <p className="pkg-section__sub">Todos los servicios disponibles para ti con el Paquete Médico.</p>
          <div className="pkg-table-wrap">
            <table className="pkg-table">
              <thead>
                <tr><th>Servicio</th><th>Incluido</th><th>Descuento / Beneficio</th></tr>
              </thead>
              <tbody>
                {SERVICES.map(s => (
                  <tr key={s.servicio}>
                    <td>{s.servicio}</td>
                    <td>{s.incluido ? <span className="pkg-table__yes">✓ Sí</span> : <span className="pkg-table__no">—</span>}</td>
                    <td>{s.descuento}</td>
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
          <h2 className="pkg-section__title">¿Tienes dudas?</h2>
          <p className="pkg-section__sub">Todo lo que necesitas saber sobre el Paquete Médico Individual.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">Comienza a cuidar tu salud hoy</h3>
            <p className="pkg-cta__sub">Adquiere el plan y accede a servicios de salud de calidad desde el primer día.</p>
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
