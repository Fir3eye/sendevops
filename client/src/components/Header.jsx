import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white py-4 px-8 flex items-center justify-between relative z-50">
      {/* Logo + Name */}
      <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
        <img
          src={logo}
          alt="SenDevOps Logo"
          className="w-10 h-10 rounded-full"
        />
        <span>SenDevOps</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="hover:underline text-lg font-medium">
          Home
        </Link>
        <Link to="/services" className="hover:underline text-lg font-medium">
          Services
        </Link>

        {/* Projects Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
            className="flex items-center space-x-1 hover:underline text-lg font-medium"
          >
            <span>Projects</span>
            <ChevronDown size={18} />
          </button>

          {isProjectsOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
              <Link
                to="/projects/client"
                className="block px-4 py-2 hover:bg-blue-100"
                onClick={() => setIsProjectsOpen(false)}
              >
                Client Projects
              </Link>
              <Link
                to="/projects/latest"
                className="block px-4 py-2 hover:bg-blue-100"
                onClick={() => setIsProjectsOpen(false)}
              >
                Latest Projects
              </Link>
            </div>
          )}
        </div>

        <Link to="/experience" className="hover:underline text-lg font-medium">
          Experience
        </Link>
        <Link to="/about" className="hover:underline text-lg font-medium">
          About
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-800 flex flex-col items-start space-y-4 p-6 md:hidden z-50">
          <Link
            to="/"
            className="hover:underline text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:underline text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>

          {/* Projects Submenu in Mobile */}
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className="flex items-center space-x-1 text-lg font-medium"
            >
              <span>Projects</span>
              <ChevronDown size={18} />
            </button>

            {isProjectsOpen && (
              <div className="ml-4 flex flex-col space-y-2">
                <Link
                  to="/projects/client"
                  className="hover:underline text-base"
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setIsOpen(false);
                  }}
                >
                  Client Projects
                </Link>
                <Link
                  to="/projects/latest"
                  className="hover:underline text-base"
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setIsOpen(false);
                  }}
                >
                  Latest Projects
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/experience"
            className="hover:underline text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="/about"
            className="hover:underline text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
