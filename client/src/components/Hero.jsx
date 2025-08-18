import React from 'react';
import './hero.css'; // Background animation styles

export default function Hero() {
  // Scroll to "Our Work" section
  const handleLatestProjectsClick = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to "Our Services" section
  const handleServicesClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 min-h-[80vh] animated-bg"
    >
      <div className="w-full md:w-2/3 space-y-4 sm:space-y-6 text-white z-10 text-center md:text-left">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">
          Empower Your Business with <span className="text-yellow-400">DevOps Excellence</span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-gray-200 mb-4">
          We provide end-to-end DevOps & Cloud services to help startups and enterprises scale faster, 
          reduce costs, and improve reliability.
        </p>

        {/* Services Highlights */}
        <ul className="mb-6 space-y-2 text-sm sm:text-base">
          <li className="flex items-start sm:items-center gap-2">
            <span className="text-green-400 text-lg sm:text-xl">✔</span>
            <span>
              <span className="font-bold">Cloud & Infrastructure Setup:</span> AWS, Azure, GCP, and Hybrid environments.
            </span>
          </li>
          <li className="flex items-start sm:items-center gap-2">
            <span className="text-green-400 text-lg sm:text-xl">✔</span>
            <span>
              <span className="font-bold">CI/CD Automation:</span> Jenkins, GitHub Actions, GitLab CI, ArgoCD pipelines.
            </span>
          </li>
          <li className="flex items-start sm:items-center gap-2">
            <span className="text-green-400 text-lg sm:text-xl">✔</span>
            <span>
              <span className="font-bold">Monitoring & Security:</span> Zabbix, Prometheus, Grafana, DevSecOps practices.
            </span>
          </li>
          <li className="flex items-start sm:items-center gap-2">
            <span className="text-green-400 text-lg sm:text-xl">✔</span>
            <span>
              <span className="font-bold">Cost Optimization:</span> Optimize infrastructure for performance and savings.
            </span>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center md:justify-start">
          <button
            className="px-6 sm:px-8 py-3 rounded font-semibold bg-gradient-to-r from-pink-500 to-yellow-400 text-white shadow-lg hover:scale-105 transition"
            onClick={handleLatestProjectsClick}
          >
            View Case Studies
          </button>
          <button
            className="px-6 sm:px-8 py-3 rounded font-semibold bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg hover:scale-105 transition"
            onClick={handleServicesClick}
          >
            Explore Our Services
          </button>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 rounded font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:scale-105 transition"
          >
            Book Free Consultation
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <a
            href="https://github.com/Fir3eye"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-700 text-white font-semibold shadow-lg transition"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" />
            View Code
          </a>
          <a
            href="https://www.youtube.com/channel/UCei8bLSt4oguTPdg408dPYA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-red-600 hover:bg-red-800 text-white font-semibold shadow-lg transition"
          >
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/575/original/youtube-logo-youtube-icon-transparent-free-png.png" alt="YouTube" className="w-6 h-6" />
            YouTube
          </a>
          <a
            href="https://www.linkedin.com/in/sudheer-sen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#0077b5] hover:bg-blue-900 text-white font-semibold shadow-lg transition"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

