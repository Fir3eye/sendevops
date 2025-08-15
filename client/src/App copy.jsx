import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Experience/>
                <Partners />
                <Services />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />  
          <Route path="/Services" element={<Services />} /> 
          <Route path="/Projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} /> {/* Optional page route */}


        </Routes>
      </div>
    </Router>
  );
}