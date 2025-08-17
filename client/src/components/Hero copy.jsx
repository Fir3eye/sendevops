import React from 'react';
import './hero.css'; // We'll add background animation here

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
      className="relative flex flex-col md:flex-row items-center justify-between p-8 min-h-[80vh] animated-bg"
    >
      <div className="md:w-2/3 space-y-6 text-white z-10">
        <h2 className="text-5xl font-extrabold mb-2">
          Welcome to <span className="text-yellow-400">SenDevOps</span>
        </h2>
        <p className="text-lg text-gray-200 mb-4">
          Our training programs are designed with real-world scenarios to ensure you gain practical, job-ready skills.
        </p>
        <ul className="mb-6 space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✔</span>
            <span>
              <span className="font-bold">Expert-Led Training:</span> Learn from industry professionals with 35+ corporate projects.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✔</span>
            <span>
              <span className="font-bold">Real-Time Projects:</span> End-to-end DevSecOps CICD projects and practical assignments.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✔</span>
            <span>
              <span className="font-bold">Certification:</span> Showcase your expertise with a course completion certificate.
            </span>
          </li>
        </ul>
        <div className="flex gap-4 mb-6">
          <button
            className="px-8 py-3 rounded font-semibold bg-gradient-to-r from-pink-500 to-yellow-400 text-white shadow-lg hover:scale-105 transition"
            onClick={handleLatestProjectsClick}
          >
            Latest Projects
          </button>
          <button
            className="px-8 py-3 rounded font-semibold bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg hover:scale-105 transition"
            onClick={handleServicesClick}
          >
            Our Services
          </button>

        </div>
        <div className="flex gap-4 mt-6">
          <a
            href="https://github.com/Fir3eye"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-700 text-white font-semibold shadow-lg transition"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" />
            View Code
          </a>
          <a
            href="https://www.youtube.com/channel/UCei8bLSt4oguTPdg408dPYA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-600 hover:bg-red-800 text-white font-semibold shadow-lg transition"
          >
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/575/original/youtube-logo-youtube-icon-transparent-free-png.png" alt="YouTube" className="w-6 h-6" />
            YouTube
          </a>
          <a
            href="https://www.linkedin.com/in/sudheer-sen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#0077b5] hover:bg-blue-900 text-white font-semibold shadow-lg transition"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
