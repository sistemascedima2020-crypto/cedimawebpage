import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '👨‍👩‍👧‍👦', bg: '#ede9fe', title: 'Hasta 8 beneficiarios', desc: '1 titular más hasta 8 beneficiarios cubiertos con todos los beneficios VIP del plan.' },
  { icon: '🩺', bg: '#d0f4ea', title: 'Medicina general gratis todo el año', desc: 'Consultas ilimitadas de medicina general sin costo adicional para el titular y beneficiarios.' },
  { icon: '💊', bg: '#e0f7ef', title: 'Hasta 50% en especialidades', desc: 'Bonos de descuento del 50% en consultas de especialidades médicas en toda la red Cedima.' },
  { icon: '⭐', bg: '#fef9c3', title: 'Tarifas VIP exclusivas', desc: 'Acceso a las tarifas más bajas de la red para procedimientos, laboratorios e imágenes diagnósticas.' },
  { icon: '🏥', bg: '#fde8ee', title: 'Red ampliada de clínicas', desc: 'Cobertura en todas las sedes Cedima y en una red ampliada de clínicas, laboratorios y especialistas aliados.' },
  { icon: '🎁', bg: '#d4f0df', title: 'Beneficios exclusivos VIP', desc: 'Acceso prioritario a jornadas de salud, descuentos en farmacia, óptica y medicina alternativa.' },
]

const SERVICES = [
  { servicio: 'Consulta medicina general', incluido: true, descuento: 'Gratis todo el año' },
  { servicio: 'Consulta especialista', incluido: true, descuento: 'Hasta 50%' },
  { servicio: 'Laboratorio clínico', incluido: true, descuento: 'Hasta 45%' },
  { servicio: 'Imágenes diagnósticas', incluido: true, descuento: 'Hasta 50%' },
  { servicio: 'Odontología', incluido: true, descuento: 'Hasta 35%' },
  { servicio: 'Óptica', incluido: true, descuento: 'Hasta 25%' },
  { servicio: 'Farmacia aliada', incluido: true, descuento: 'Hasta 20%' },
  { servicio: 'Hospitalización', incluido: false, descuento: '—' },
]

const FAQS = [
  { q: '¿Cuál es la diferencia entre el VIP y el plan Familiar estándar?', a: 'El plan VIP incluye consultas de medicina general gratis todo el año (sin límite), tarifas VIP exclusivas más bajas que el plan familiar, y beneficios adicionales en farmacia y óptica.' },
  { q: '¿Las consultas ilimitadas aplican para todos los beneficiarios?', a: 'Sí, las consultas de medicina general sin costo aplican para el titular y todos los beneficiarios registrados en el plan.' },
  { q: '¿Cómo se activan los bonos de descuento en especialidades?', a: 'Los bonos se activan automáticamente al momento de registrar tu cita. Solo necesitas indicar que eres miembro VIP Cedima y presentar tu documento de identidad.' },
  { q: '¿Puedo usar el plan en otra ciudad?', a: 'Sí. El plan VIP tiene cobertura en todas las sedes Cedima del país y en la red ampliada de aliados. Consulta la sede más cercana en nuestra web o línea de atención.' },
  { q: '¿El plan se puede financiar?', a: 'El Paquete VIP requiere pago único anual. Si prefieres un plan con opción de financiación, te recomendamos el Paquete Elite que es financiable hasta en 24 cuotas.' },
]

export default function PaqueteVIP() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className="pkg-hero" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #faf8f3 100%)' }}>
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#c4b5fd' }} />
          <div className="pkg-hero__blob pkg-hero__blob--2" style={{ background: '#a8e0bf' }} />
        </div>
        <div className="container">
          <Link to="/" className="pkg-hero__back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Volver a programas
          </Link>
          <div className="pkg-hero__inner">
            <div>
              <div className="pkg-hero__badge">
                <div className="pkg-hero__icon" style={{ background: '#ede9fe' }}>✨</div>
                <span className="tag" style={{ background: '#ede9fe', color: '#5b21b6' }}>Plan VIP</span>
              </div>
              <h1 className="pkg-hero__title">
                Paquete Médico <em>Familiar VIP</em>
              </h1>
              <p className="pkg-hero__desc">
                La experiencia premium de salud familiar. Consultas de medicina general gratuitas todo el año, tarifas VIP exclusivas y cobertura completa para hasta 8 beneficiarios.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">Adquirir plan VIP</a>
                <a href="#servicios" className="btn btn-outline">Ver cobertura</a>
              </div>
            </div>
            <div className="pkg-price-card" style={{ borderColor: '#c4b5fd' }}>
              <div className="pkg-price-card__header">
                <span className="pkg-price-card__label">Valor del plan</span>
                <span className="pkg-price-card__badge" style={{ background: '#ede9fe', color: '#5b21b6', padding: '3px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 500 }}>VIP ✨</span>
              </div>
              <div className="pkg-price-card__amount">
                <span className="pkg-price-card__currency">$</span>
                <span className="pkg-price-card__number">480.000</span>
                <span className="pkg-price-card__period">/ año</span>
              </div>
              <div className="pkg-price-card__divider" />
              <p className="pkg-price-card__includes">Incluye</p>
              {['1 titular + hasta 8 beneficiarios', 'Medicina general gratis todo el año', 'Bonos 50% en especialidades', 'Tarifas VIP exclusivas', 'Farmacia y óptica con descuento'].map(f => (
                <div key={f} className="pkg-price-card__feature">
                  <div className="pkg-price-card__check" style={{ background: '#ede9fe' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
          <p className="pkg-section__label">Beneficios VIP</p>
          <h2 className="pkg-section__title">La experiencia de salud más completa</h2>
          <p className="pkg-section__sub">Todo lo del plan familiar estándar, más consultas ilimitadas y beneficios exclusivos para toda la familia.</p>
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
          <h2 className="pkg-section__title">Servicios y descuentos VIP</h2>
          <p className="pkg-section__sub">La cobertura más amplia de la línea Cedima para toda tu familia.</p>
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
          <h2 className="pkg-section__title">¿Tienes dudas sobre el plan VIP?</h2>
          <p className="pkg-section__sub">Resolvemos las preguntas más comunes sobre el Paquete Médico Familiar VIP.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">Dale a tu familia la mejor atención ✨</h3>
            <p className="pkg-cta__sub">Activa tu plan VIP hoy y accede a consultas gratis todo el año.</p>
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
