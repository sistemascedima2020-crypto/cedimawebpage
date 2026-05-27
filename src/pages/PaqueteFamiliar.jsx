import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '👨‍👩‍👧‍👦', bg: '#d0f4ea', title: 'Hasta 8 beneficiarios', desc: 'Un titular principal más hasta 8 miembros del núcleo familiar cubiertos bajo el mismo plan.' },
  { icon: '🩺', bg: '#d4f0df', title: '2 consultas incluidas', desc: 'Consultas de medicina general incluidas en el plan para el titular y cada beneficiario.' },
  { icon: '💊', bg: '#e0f7ef', title: '50% descuento en servicios', desc: 'Descuento de hasta el 50% en consultas de especialidades, exámenes de laboratorio e imágenes diagnósticas.' },
  { icon: '🏥', bg: '#fde8ee', title: 'Red de clínicas Cedima', desc: 'Acceso a toda la red de sedes y clínicas aliadas con tarifas preferenciales exclusivas para miembros.' },
  { icon: '📅', bg: '#ede9fe', title: 'Plan anual un solo pago', desc: 'Sin mensualidades ni cobros recurrentes. Paga una vez y disfruta el beneficio todo el año.' },
  { icon: '📞', bg: '#fef9c3', title: 'Atención prioritaria', desc: 'Línea de atención exclusiva para miembros del plan con agendamiento preferencial y tiempos de espera reducidos.' },
]

const SERVICES = [
  { servicio: 'Consulta medicina general', incluido: true, descuento: '2 consultas gratis' },
  { servicio: 'Consulta especialista', incluido: true, descuento: 'Hasta 50%' },
  { servicio: 'Laboratorio clínico', incluido: true, descuento: 'Hasta 40%' },
  { servicio: 'Imágenes diagnósticas', incluido: true, descuento: 'Hasta 50%' },
  { servicio: 'Odontología general', incluido: true, descuento: 'Hasta 30%' },
  { servicio: 'Urgencias', incluido: true, descuento: 'Tarifa preferencial' },
  { servicio: 'Hospitalización', incluido: false, descuento: '—' },
  { servicio: 'Cirugías electivas', incluido: false, descuento: '—' },
]

const FAQS = [
  { q: '¿Quiénes pueden ser beneficiarios?', a: 'Pueden ser beneficiarios el cónyuge o compañero(a) permanente, hijos menores de 25 años, padres y hermanos dependientes económicamente del titular. Se admiten hasta 8 personas en total.' },
  { q: '¿Cuándo empieza a regir el plan?', a: 'El plan tiene vigencia inmediata desde el momento en que se confirma el pago. Recibirás tus carnés digitales en un plazo máximo de 24 horas hábiles.' },
  { q: '¿Puedo agregar más beneficiarios después?', a: 'Sí, puedes agregar beneficiarios adicionales durante la vigencia del plan pagando un costo proporcional al tiempo restante del año.' },
  { q: '¿El descuento aplica en todas las sedes?', a: 'El descuento aplica en todas las sedes Cedima y en la red de clínicas y laboratorios aliados en el país. Al momento de la consulta debes presentar tu carné o documento de identidad.' },
  { q: '¿Qué pasa si no uso las 2 consultas incluidas?', a: 'Las consultas incluidas no son acumulables para el siguiente año. Te recomendamos utilizarlas para chequeos preventivos de salud.' },
]

export default function PaqueteFamiliar() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      {/* Hero */}
      <section className="pkg-hero section--cream">
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#a8e0bf' }} />
          <div className="pkg-hero__blob pkg-hero__blob--2" style={{ background: '#d4f0df' }} />
        </div>
        <div className="container">
          <Link to="/" className="pkg-hero__back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Volver a programas
          </Link>
          <div className="pkg-hero__inner">
            <div>
              <div className="pkg-hero__badge">
                <div className="pkg-hero__icon" style={{ background: '#d0f4ea' }}>👨‍👩‍👧‍👦</div>
                <span className="tag">Plan Familiar</span>
              </div>
              <h1 className="pkg-hero__title">
                Paquete <em>Cedima Familiar</em>
              </h1>
              <p className="pkg-hero__desc">
                El plan diseñado para que toda tu familia acceda a servicios de salud de calidad con un único pago anual. Cubre al titular y hasta 8 beneficiarios con descuentos de hasta el 50%.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">Adquirir plan</a>
                <a href="#servicios" className="btn btn-outline">Ver servicios</a>
              </div>
            </div>
            <div className="pkg-price-card">
              <div className="pkg-price-card__header">
                <span className="pkg-price-card__label">Valor del plan</span>
                <span className="pkg-price-card__badge tag">Más popular</span>
              </div>
              <div className="pkg-price-card__amount">
                <span className="pkg-price-card__currency">$</span>
                <span className="pkg-price-card__number">320.000</span>
                <span className="pkg-price-card__period">/ año</span>
              </div>
              <div className="pkg-price-card__divider" />
              <p className="pkg-price-card__includes">Incluye</p>
              {['1 titular + hasta 8 beneficiarios', '2 consultas médicas incluidas', 'Hasta 50% de descuento', 'Vigencia de 12 meses', 'Carné digital inmediato'].map(f => (
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

      {/* Benefits */}
      <section className="pkg-section">
        <div className="container">
          <p className="pkg-section__label">Beneficios</p>
          <h2 className="pkg-section__title">Todo lo que incluye tu plan</h2>
          <p className="pkg-section__sub">Con el Paquete Familiar tienes acceso a una amplia red de servicios de salud para toda tu familia durante 12 meses.</p>
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

      {/* Services table */}
      <section className="pkg-section pkg-section--alt" id="servicios">
        <div className="container">
          <p className="pkg-section__label">Cobertura</p>
          <h2 className="pkg-section__title">Servicios y descuentos</h2>
          <p className="pkg-section__sub">Consulta qué servicios están cubiertos y los descuentos que aplican con tu plan.</p>
          <div className="pkg-table-wrap">
            <table className="pkg-table">
              <thead>
                <tr>
                  <th>Servicio</th>
                  <th>Incluido</th>
                  <th>Descuento / Beneficio</th>
                </tr>
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

      {/* FAQ */}
      <section className="pkg-section">
        <div className="container">
          <p className="pkg-section__label">Preguntas frecuentes</p>
          <h2 className="pkg-section__title">¿Tienes dudas?</h2>
          <p className="pkg-section__sub">Resolvemos las preguntas más comunes sobre el Paquete Familiar.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">¿Listo para proteger a tu familia?</h3>
            <p className="pkg-cta__sub">Adquiere el plan hoy y empieza a disfrutar los beneficios de inmediato.</p>
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
