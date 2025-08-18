import React from "react";
import { Briefcase, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Content Creator",
    company: "YouTube · Self-employed",
    duration: "Jan 2023 - Present · 2 yrs 8 mos",
    location: "Sen DevOps",
    points: [
      "Created DevOps educational content.",
      "Grew online community and helped learners.",
    ],
    tools: ["Linux", "Docker", "Kubernetes", "Terraform", "GitHub"],
    icon: "🎥",
  },
  {
    role: "DevOps Engineer",
    company: "Goognu · Full-time",
    duration: "Nov 2024 - Present · 10 mos",
    location: "Gurugram, Haryana, India · On-site",
    points: [
      "Managed and automated cloud infrastructure for scalability and reliability.",
      "Troubleshot and resolved critical issues to minimize downtime.",
      "Hosted and optimized websites for performance and availability.",
      "Monitored systems using Grafana and Prometheus.",
      "Scaled resources and resized instances to meet performance demands.",
    ],
    tools: [
      "Linux",
      "Git",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Jenkins",
      "Grafana",
      "Prometheus",
      "AWS",
    ],
    icon: "💻",
  },
  {
    role: "DevOps Engineer Intern",
    company: "ByteToBrain · Internship",
    duration: "May 2023 - Nov 2023 · 7 mos",
    location: "Remote",
    points: [
      "Worked on Docker, Kubernetes, and CI/CD pipelines.",
      "Collaborated with developers to ensure smooth deployments.",
      "Implemented monitoring and alerting with Grafana & Prometheus.",
    ],
    tools: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Grafana",
      "Prometheus",
    ],
    icon: "🚀",
  },
  {
    role: "Linux Administrator",
    company: "Freelance · Part-time",
    duration: "2021 - 2022",
    location: "Remote",
    points: [
      "Configured and maintained Linux servers.",
      "Helped small businesses set up hosting and databases.",
      "Ensured security hardening and regular patch updates.",
    ],
    tools: ["Linux", "Apache", "Nginx", "MySQL", "Shell Scripting"],
    icon: "🐧",
  },
];

export default function Experience() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-gray-900">
      <h3 className="text-center text-4xl font-bold mb-14 flex justify-center items-center gap-2">
        <Briefcase className="w-8 h-8 text-indigo-600" />
        My Experience
      </h3>
      <div className="relative border-l-4 border-indigo-400/60 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group mb-12 ml-8 bg-white p-6 rounded-2xl shadow-md border border-gray-200 relative transition-transform transform hover:scale-[1.02] hover:shadow-lg"
          >
            {/* Left timeline icon */}
            <span className="absolute -left-11 top-4 text-3xl">{exp.icon}</span>

            {/* Job Role */}
            <h4 className="text-xl font-semibold text-indigo-700 group-hover:text-indigo-800 transition">
              {exp.role}
            </h4>

            {/* Company Info */}
            <p className="text-gray-700 text-sm">{exp.company}</p>
            <p className="text-gray-500 text-sm">{exp.duration}</p>
            <p className="text-gray-500 text-sm mb-4">{exp.location}</p>

            {/* Key Points */}
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Tools & Technologies */}
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full flex items-center gap-1 hover:bg-indigo-200 transition"
                >
                  <Wrench className="w-3 h-3" /> {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
