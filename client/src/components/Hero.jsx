import React, { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

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
      className="flex flex-col md:flex-row items-center justify-between p-8 min-h-[80vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
    >
      <div className="md:w-2/3 space-y-6 text-white">
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
            title="GitHub"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" />
            View Code
          </a>
          <a
            href="https://www.youtube.com/channel/UCei8bLSt4oguTPdg408dPYA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-600 hover:bg-red-800 text-white font-semibold shadow-lg transition"
            title="YouTube"
          >
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/575/original/youtube-logo-youtube-icon-transparent-free-png.png" alt="YouTube" className="w-6 h-6" />
            YouTube
          </a>
          <a
            href="https://www.linkedin.com/in/sudheer-sen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#0077b5] hover:bg-blue-900 text-white font-semibold shadow-lg transition"
            title="LinkedIn"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
            LinkedIn
          </a>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/3 bg-white shadow-2xl p-8 rounded-xl mt-8 md:mt-0"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h3>
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 mb-3 rounded"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          className="w-full border p-2 mb-3 rounded"
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold">
          Send
        </button>
      </form>
    </section>
  );
}