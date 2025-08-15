import React, { useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import OurWork from './components/OurWork'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const workRef = useRef(null)
  const servicesRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <>
      <Header refs={{workRef, servicesRef, contactRef}} />
      <main>
        <Hero contactRef={contactRef} />
        <section id="our-work" ref={workRef} className="container">
          <h2>Our Work</h2>
          <p className="subtitle">A few examples of how we help teams ship faster, safer, and cheaper.</p>
          <OurWork />
        </section>
        <section id="services" ref={servicesRef} className="container">
          <h2>Services</h2>
          <p className="subtitle">From Linux hardening to Kubernetes at scale—our DevOps toolbox is ready.</p>
          <Services />
        </section>
        <section id="contact" ref={contactRef} className="container">
          <h2>Contact</h2>
          <p className="subtitle">Tell us about your goals. We typically reply within one business day.</p>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}