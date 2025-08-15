import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import OurWork from './components/OurWork';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <OurWork />
      <Services />
      <Footer />
    </div>
  );
}
