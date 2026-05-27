import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '🌸', bg: '#fde8ee', title: 'Consulta ginecológica', desc: 'Atención preventiva y diagnóstica integral para la salud femenina en todas las etapas de la vida.' },
  { icon: '🤰', bg: '#d0f4ea', title: 'Control prenatal', desc: 'Seguimiento completo del embarazo con ecografías, controles periódicos y acompañamiento personalizado.' },
  { icon: '🔬', bg: '#d4f0df', title: 'Citología cervicovaginal', desc: 'Examen de Papanicolau para detección temprana del cáncer de cuello uterino. Recomendado anualmente.' },
  { icon: '💊', bg: '#ede9fe', title: 'Planificación familiar', desc: 'Asesoría y gestión de métodos anticonceptivos adaptados a tu situación de vida y necesidades.' },
  { icon: '🌡️', bg: '#fef9c3', title: 'Menopausia y climaterio', desc: 'Manejo integral de los síntomas de la menopausia con tratamientos hormonales y no hormonales.' },
  { icon: '🩺', bg: '#e0f7ef', title: 'Colposcopía', desc: 'Examen visual del cuello uterino con colposcopio para evaluación de lesiones anormales detectadas en citología.' },
]

const SERVICES = [
  { servicio: 'Consulta ginecológica general', tiempo: '30 min', descuento: 'Hasta 50%' },
  { servicio: 'Citología cervicovaginal', tiempo: '20 min', descuento: 'Hasta 50%' },
  { servicio: 'Control prenatal', tiempo: '30 min', descuento: 'Hasta 45%' },
  { servicio: 'Ecografía obstétrica', tiempo: '30 min', descuento: 'Hasta 45%' },
  { servicio: 'Colposcopía', tiempo: '30 min', descuento: 'Hasta 40%' },
  { servicio: 'Inserción de DIU', tiempo: '30 min', descuento: 'Hasta 40%' },
  { servicio: 'Consulta de menopausia', tiempo: '40 min', descuento: 'Hasta 45%' },
  { servicio: 'Biopsia endometrial', tiempo: '30 min', descuento: 'Hasta 35%' },
]

const FAQS = [
  { q: '¿Desde qué edad debo visitar al ginecólogo?', a: 'Se recomienda la primera visita ginecológica entre los 13 y 15 años, o al inicio de la actividad sexual. A partir de los 21 años se recomienda una consulta anual con citología cervicovaginal.' },
  { q: '¿Cómo debo prepararme para la consulta ginecológica?', a: 'Evita relaciones sexuales 48 horas antes si se va a realizar citología. No uses cremas vaginales ni duchas vaginales los días previos. Trata de no estar en periodo menstrual para la citología.' },
  { q: '¿Con qué frecuencia debo hacerme la citología?', a: 'Se recomienda una vez al año para mujeres entre 21 y 65 años. Si tienes resultados normales continuos, tu ginecólogo puede indicar realizarla cada 3 años con citología sola o cada 5 años con cotesting (citología más VPH).' },
  { q: '¿El control prenatal está cubierto por los planes Cedima?', a: 'Sí. Las consultas de control prenatal y las ecografías obstétricas tienen descuentos de hasta el 45% para miembros de todos los planes Cedima. El plan Elite incluye además $800.000 en servicios que pueden usarse para el control prenatal.' },
  { q: '¿Atienden partos en Cedima?', a: 'Actualmente Cedima ofrece consultas, controles prenatales y procedimientos ambulatorios ginecológicos. Para la atención del parto, trabajamos con clínicas aliadas donde nuestros descuentos también aplican. Consulta con tu ginecóloga sobre las opciones disponibles.' },
]

export default function Ginecologia() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className="pkg-hero" style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #faf8f3 60%, #f0faf4 100%)' }}>
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#fda4af' }} />
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
                <div className="pkg-hero__icon" style={{ background: '#fde8ee' }}>🌸</div>
                <span className="tag" style={{ background: '#fde8ee', color: '#9f1239' }}>Servicio</span>
              </div>
              <h1 className="pkg-hero__title">
                <em>Ginecología</em> y Salud Femenina
              </h1>
              <p className="pkg-hero__desc">
                Acompañamos a la mujer en cada etapa de su vida. Desde la adolescencia hasta la menopausia, nuestras ginecólogas certificadas ofrecen atención preventiva, diagnóstica y de seguimiento con calidez y profesionalismo.
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
              {['Consulta ginecológica integral', 'Citología y colposcopía', 'Control prenatal y ecografías', 'Planificación familiar', 'Manejo de menopausia y climaterio'].map(f => (
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
          <h2 className="pkg-section__title">Salud femenina en cada etapa de tu vida</h2>
          <p className="pkg-section__sub">Atención ginecológica completa con enfoque preventivo, diagnóstico y de bienestar para mujeres de todas las edades.</p>
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
          <h2 className="pkg-section__title">Servicios disponibles</h2>
          <p className="pkg-section__sub">Todos los procedimientos ginecológicos con descuentos para miembros de los planes Cedima.</p>
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
          <p className="pkg-section__sub">Información importante antes de tu consulta ginecológica.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">Tu salud femenina es prioridad 🌸</h3>
            <p className="pkg-cta__sub">Agenda tu consulta ginecológica con nuestras especialistas certificadas.</p>
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
