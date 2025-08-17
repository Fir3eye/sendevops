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
          src="https://private-user-images.githubusercontent.com/93431222/478770623-c13de78e-69e7-4e14-99d7-a4bb5d45982c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU0MzE4OTEsIm5iZiI6MTc1NTQzMTU5MSwicGF0aCI6Ii85MzQzMTIyMi80Nzg3NzA2MjMtYzEzZGU3OGUtNjllNy00ZTE0LTk5ZDctYTRiYjVkNDU5ODJjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODE3VDExNTMxMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWViMzQ4ZGRkMzE1NDNiZWNmMzRiOTc0OWI0OWExYmFkNmJiMGUxZDk3Mzg4MTczNmFkOTkwNWExYTgyYTUwNTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.5jXyD6Zp5-2O43qOCKzMq8aMWY7ZNMSkxc0g0jjMaoU" 
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
