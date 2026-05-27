import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Features from './components/Features'
import Stats from './components/Stats.jsx'
import Testimonials from './components/Testimonials'
import CTA from './components/Cta'
import Footer from './components/Footer'
import PaqueteFamiliar from './pages/PaqueteFamiliar'
import PaqueteMedico from './pages/PaqueteMedico'
import PaqueteVIP from './pages/PaqueteVIP'
import PaqueteElite from './pages/PaqueteElite'
import Radiologia from './pages/Radiologia'
import Dermatologia from './pages/Dermatologia'
import Optometria from './pages/Optometria'
import Ginecologia from './pages/Ginecologia'

function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/paquete-familiar" element={<PaqueteFamiliar />} />
          <Route path="/paquete-medico" element={<PaqueteMedico />} />
          <Route path="/paquete-vip" element={<PaqueteVIP />} />
          <Route path="/paquete-elite" element={<PaqueteElite />} />
          <Route path="/servicios/radiologia" element={<Radiologia />} />
          <Route path="/servicios/dermatologia" element={<Dermatologia />} />
          <Route path="/servicios/optometria" element={<Optometria />} />
          <Route path="/servicios/ginecologia" element={<Ginecologia />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
