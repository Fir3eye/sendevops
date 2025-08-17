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
import Blog from "./components/Blog"; // adjust path if needed
import BlogDetails from "./components/BlogDetails";

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
                <Partners />
                <Services />
                <Projects />
                <Testimonials/>
                <Contact/>
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />  {/* Lowercase */}
          <Route path="/projects" element={<Projects />} /> {/* Lowercase */}
          <Route path="/experience" element={<Experience />} /> {/* Optional page route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} /> {/* New Testimonials page */}
          <Route path='/blog' element={<Blog />} /> {/* New Blog page */}
          <Route path="/blog/:id" element={<BlogDetails />} /> {/* ✅ new */}
        </Routes>
      </div>
    </Router>
  );
}
