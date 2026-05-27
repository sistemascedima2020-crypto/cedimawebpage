import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '💰', bg: '#fef9c3', title: '$800.000 en servicios médicos', desc: 'Crédito médico de $800.000 para gastar en cualquier servicio de la red Cedima durante la vigencia del plan.' },
  { icon: '📆', bg: '#d4f0df', title: 'Financiable hasta 24 cuotas', desc: 'El único plan Cedima que puedes pagar en cuotas mensuales, con plazos de 6, 12 o 24 meses.' },
  { icon: '👨‍👩‍👧‍👦', bg: '#d0f4ea', title: 'Hasta 8 beneficiarios', desc: '1 titular más hasta 8 beneficiarios disfrutando de todos los beneficios Elite por 2 años completos.' },
  { icon: '🩺', bg: '#ede9fe', title: 'Medicina general gratis todo el año', desc: 'Consultas ilimitadas de medicina general sin costo para el titular y todos los beneficiarios.' },
  { icon: '⭐', bg: '#fde8ee', title: 'Tarifas preferenciales por 2 años', desc: 'Vigencia de 24 meses con acceso a las mejores tarifas y el mayor nivel de descuento en toda la red.' },
  { icon: '🏆', bg: '#fef3c7', title: 'Beneficios exclusivos Elite', desc: 'Acceso prioritario, gestor de salud personal, descuentos en farmacia, óptica, odontología estética y más.' },
]

const SERVICES = [
  { servicio: 'Consulta medicina general', incluido: true, descuento: 'Gratis todo el año' },
  { servicio: 'Consulta especialista', incluido: true, descuento: 'Hasta 50%' },
  { servicio: 'Laboratorio clínico', incluido: true, descuento: 'Hasta 50%' },
  { servicio: 'Imágenes diagnósticas', incluido: true, descuento: 'Hasta 50%' },
  { servicio: 'Odontología general y estética', incluido: true, descuento: 'Hasta 40%' },
  { servicio: 'Óptica', incluido: true, descuento: 'Hasta 30%' },
  { servicio: 'Farmacia aliada', incluido: true, descuento: 'Hasta 25%' },
  { servicio: 'Medicina alternativa', incluido: true, descuento: 'Hasta 30%' },
  { servicio: 'Crédito en servicios médicos', incluido: true, descuento: '$800.000 COP' },
  { servicio: 'Hospitalización', incluido: false, descuento: '—' },
]

const CUOTAS = [
  { plazo: '6 cuotas', cuota: '$~155.000', total: '$930.000' },
  { plazo: '12 cuotas', cuota: '$~82.000', total: '$984.000' },
  { plazo: '24 cuotas', cuota: '$~44.000', total: '$1.056.000' },
]

const FAQS = [
  { q: '¿Cómo funciona el crédito de $800.000 en servicios?', a: 'El crédito se carga a tu cuenta al activar el plan. Puedes utilizarlo en cualquier servicio de la red Cedima durante los 24 meses de vigencia. El saldo disponible se actualiza con cada uso.' },
  { q: '¿Cuáles son las opciones de financiación?', a: 'Puedes pagar en 6, 12 o 24 cuotas mensuales. El plan se activa desde el primer pago y el crédito médico queda disponible en su totalidad desde el inicio.' },
  { q: '¿Qué pasa si termino de pagar las cuotas antes de 2 años?', a: 'El plan tiene vigencia de 24 meses independientemente del plazo de financiación. Una vez pagues todas las cuotas, el plan continúa activo hasta cumplir los 2 años.' },
  { q: '¿Los beneficiarios también acceden al crédito médico?', a: 'Sí. El crédito de $800.000 puede ser utilizado por el titular y cualquiera de los beneficiarios registrados. El saldo es compartido entre todos.' },
  { q: '¿Puedo renovar el plan Elite al vencer?', a: 'Sí. Al vencer los 24 meses puedes renovar con condiciones preferenciales de fidelización. El equipo Cedima te contactará con anticipación para gestionar la renovación.' },
  { q: '¿Hay algún examen médico previo para ingresar al plan?', a: 'No. El plan Elite no requiere exámenes previos ni declaración de salud. La afiliación es inmediata al formalizar el acuerdo de pago.' },
]

export default function PaqueteElite() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className="pkg-hero" style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #faf8f3 60%, #f0faf4 100%)' }}>
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#fcd34d' }} />
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
                <div className="pkg-hero__icon" style={{ background: '#fef9c3' }}>🤵</div>
                <span className="tag" style={{ background: '#fef3c7', color: '#92400e' }}>Plan Elite — 2 años</span>
              </div>
              <h1 className="pkg-hero__title">
                Paquete de <em>Salud Elite</em>
              </h1>
              <p className="pkg-hero__desc">
                El plan más completo de Cedima. Fináncialo hasta en 24 cuotas, accede a $800.000 en servicios médicos, consultas gratis todo el año y beneficios exclusivos por 2 años para toda tu familia.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">Adquirir plan Elite</a>
                <a href="#financiacion" className="btn btn-outline">Ver cuotas</a>
              </div>
            </div>
            <div className="pkg-price-card" style={{ borderColor: '#fcd34d' }}>
              <div className="pkg-price-card__header">
                <span className="pkg-price-card__label">Valor del plan</span>
                <span className="pkg-price-card__badge" style={{ background: '#fef3c7', color: '#92400e', padding: '3px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 500 }}>Elite 🏆</span>
              </div>
              <div className="pkg-price-card__amount">
                <span className="pkg-price-card__currency" style={{ color: '#b45309' }}>$</span>
                <span className="pkg-price-card__number" style={{ color: '#92400e' }}>800.000</span>
                <span className="pkg-price-card__period">/ 2 años</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-soft)', marginTop: -8 }}>O financiable desde $44.000/mes</p>
              <div className="pkg-price-card__divider" />
              <p className="pkg-price-card__includes">Incluye</p>
              {['1 titular + hasta 8 beneficiarios', '$800.000 en servicios médicos', 'Medicina general gratis todo el año', 'Hasta 50% en especialidades', 'Vigencia de 24 meses', 'Financiable en 6, 12 o 24 cuotas'].map(f => (
                <div key={f} className="pkg-price-card__feature">
                  <div className="pkg-price-card__check" style={{ background: '#fef3c7' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
          <p className="pkg-section__label">Beneficios Elite</p>
          <h2 className="pkg-section__title">Todo lo que obtienes por 2 años</h2>
          <p className="pkg-section__sub">El plan más completo de Cedima pensado para familias que quieren la mejor cobertura con flexibilidad de pago.</p>
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

      {/* Financiación table */}
      <section className="pkg-section pkg-section--alt" id="financiacion">
        <div className="container">
          <p className="pkg-section__label">Opciones de pago</p>
          <h2 className="pkg-section__title">Elige tu plazo de financiación</h2>
          <p className="pkg-section__sub">El plan Elite es el único plan Cedima que puedes pagar en cuotas. Tu cobertura inicia desde el primer pago.</p>
          <div className="pkg-table-wrap" style={{ marginBottom: 48 }}>
            <table className="pkg-table">
              <thead>
                <tr><th>Plazo</th><th>Cuota mensual aprox.</th><th>Total a pagar</th></tr>
              </thead>
              <tbody>
                {CUOTAS.map(c => (
                  <tr key={c.plazo}>
                    <td style={{ fontWeight: 500 }}>{c.plazo}</td>
                    <td>{c.cuota}</td>
                    <td>{c.total}</td>
                  </tr>
                ))}
                <tr>
                  <td style={{ fontWeight: 500 }}>Pago único</td>
                  <td>—</td>
                  <td style={{ fontWeight: 500, color: 'var(--green-600)' }}>$800.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="pkg-section__label">Cobertura completa</p>
          <h2 className="pkg-section__title" style={{ marginBottom: 12 }}>Servicios incluidos</h2>
          <p className="pkg-section__sub">La cobertura más amplia de toda la línea de planes Cedima.</p>
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
          <h2 className="pkg-section__title">Todo sobre el Plan Elite</h2>
          <p className="pkg-section__sub">Resolvemos tus dudas sobre el plan más completo de Cedima.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">Invierte en la salud de tu familia 🏆</h3>
            <p className="pkg-cta__sub">2 años de cobertura completa, financiable desde $44.000 al mes.</p>
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
