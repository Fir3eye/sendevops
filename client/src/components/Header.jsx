import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install: npm i lucide-react

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white py-4 px-8 flex items-center justify-between relative">
      {/* Logo + Name */}
      <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
        <img 
          src="/assets/logo.png" 
          alt="SenDevOps Logo" 
          className="w-10 h-10 rounded-full"
        />
      {/* Channel Name */}
        <span></span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="hover:underline text-lg font-medium">Home</Link>
        <Link to="/services" className="hover:underline text-lg font-medium">Services</Link>
        <Link to="/projects" className="hover:underline text-lg font-medium">Projects</Link>
        <Link to="/experience" className="hover:underline text-lg font-medium">Experience</Link>
        <Link to="/blog" className="hover:underline text-lg font-medium" onClick={() => setIsOpen(false)}>Blog</Link> {/* ✅ new */}
        <Link to="/about" className="hover:underline text-lg font-medium">About</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-800 flex flex-col items-start space-y-4 p-6 md:hidden z-50">
          <Link to="/" className="hover:underline text-lg font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="hover:underline text-lg font-medium" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/projects" className="hover:underline text-lg font-medium" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/experience" className="hover:underline text-lg font-medium" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link to="/blog" className="hover:underline text-lg font-medium" onClick={() => setIsOpen(false)}>Blog</Link> {/* ✅ new */}
          <Link to="/about" className="hover:underline text-lg font-medium" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
}
