import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import WhatsAppChat from "./components/WhatsAppChat";
import ClientProjects from "./components/ClientProjects";  // ✅ keep only this

// ✅ New component for Latest Projects
function LatestProjects() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-blue-700">Latest Projects</h1>
      <p className="mt-4 text-gray-600">
        Here are our most recent DevOps projects and case studies 🚀
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Partners />
                <Services />
                <ClientProjects/>
                <Testimonials/>
                <About/>
                <Contact />
                <WhatsAppChat />
                <Footer />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/latest" element={<Projects />} /> {/* ✅ Reuse Projects grid */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/client-projects" element={<ClientProjects />} />
          <Route path="/projects/client" element={<ClientProjects />} /> {/* ✅ Client Projects */}
        </Routes>
      </div>
    </Router>
  );
}
