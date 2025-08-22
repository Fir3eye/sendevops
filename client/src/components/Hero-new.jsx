import React from "react";
import "./hero.css";
import { FaDocker, FaAws, FaGithub, FaLinux, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="animated-bg relative flex flex-col items-center justify-center min-h-screen text-center text-white overflow-hidden">
      {/* Floating DevOps Icons */}
      <div className="floating-icons">
        <FaDocker className="icon docker" />
        <SiKubernetes className="icon k8s" />
        <FaAws className="icon aws" />
        <FaGithub className="icon github" />
        <FaLinux className="icon linux" />
        <SiTerraform className="icon terraform" />
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
          🚀 Welcome to <span className="gradient-text">SenDevOps</span>
        </h1>
        <p className="subtitle text-lg md:text-xl max-w-2xl mx-auto">
          Empowering Businesses with <strong>Cloud, DevOps, and Automation</strong>.
          <br /> We build scalable, secure, and high-performance solutions.
        </p>

        {/* Call-to-Action Button */}
        <div className="cta-buttons mt-6 flex flex-wrap justify-center gap-4">
          <a href="#contact" className="btn primary">⚡ Get My Services</a>
        </div>

        {/* Social Media Links */}
        <div className="social-links mt-8 flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down absolute bottom-6 z-10">
        <FiChevronDown className="text-3xl animate-bounce opacity-80" />
      </div>
    </section>
  );
}
