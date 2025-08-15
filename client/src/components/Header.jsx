import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 px-8 flex items-center justify-between">
      <h1 className="text-2xl font-bold">SenDevOps</h1>
      <nav className="flex items-center space-x-8">
        <Link to="/" className="hover:underline text-lg font-medium">Home</Link>
        <Link to="/skills" className="hover:underline text-lg font-medium">Skills</Link>
        <Link to="/services" className="hover:underline text-lg font-medium">Services</Link>
        <Link to="/projects" className="hover:underline text-lg font-medium">Projects</Link>
        <Link to="/about" className="hover:underline text-lg font-medium">About</Link>
        <a href="#contact" className="hover:underline text-lg font-medium">Contact</a>
      </nav>
    </header>
  );
}