import React from "react";

const experiences = [
  {
    id: 1,
    title: "Cloud Infrastructure Engineer",
    company: "SendDevOps",
    duration: "Jan 2023 - Present",
    desc: "Designed and automated scalable cloud infrastructure on AWS & GCP using Terraform and Kubernetes.",
    icon: "☁️"
  },
  {
    id: 2,
    title: "DevOps Consultant",
    company: "TechStartups",
    duration: "Jun 2021 - Dec 2022",
    desc: "Implemented CI/CD pipelines, containerized workloads with Docker, and optimized cloud costs for startups.",
    icon: "🛠️"
  },
  {
    id: 3,
    title: "Infrastructure Automation Engineer",
    company: "GlobalSoft",
    duration: "Mar 2020 - May 2021",
    desc: "Automated server provisioning and monitoring with Ansible and Prometheus, improving uptime by 30%.",
    icon: "⚡"
  },
];

export default function Experience() {
  return (
    <section id="experience" className="p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative">
      <h3 className="text-center text-3xl font-bold mb-10">💼 My Experience</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiences.map(exp => (
          <div
            key={exp.id}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 rounded-2xl shadow-2xl flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4 text-yellow-400">{exp.icon}</div>
            <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
            <p className="mb-2">
              <span className="font-semibold text-blue-400">{exp.company}</span> | <span className="text-gray-400">{exp.duration}</span>
            </p>
            <p className="text-gray-200">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
