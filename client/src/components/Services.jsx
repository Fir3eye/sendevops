import React from 'react';

export default function Services() {
  const services = [
    {
      id: 'linux',
      name: 'Linux Administration',
      desc: 'Server setup, security hardening, automation.',
      tech: ['Linux', 'Git', 'Docker', 'Kubernetes', 'Terraform'],
      icon: 'https://img.icons8.com/color/48/000000/linux.png'
    },
    {
      id: 'docker',
      name: 'Docker',
      desc: 'Containerization and image optimization.',
      tech: ['Docker', 'Linux', 'Git'],
      icon: 'https://img.icons8.com/color/48/000000/docker.png'
    },
    {
      id: 'k8s',
      name: 'Kubernetes',
      desc: 'Cluster setup, scaling, and maintenance.',
      tech: ['Kubernetes', 'Docker', 'Linux'],
      icon: 'https://img.icons8.com/color/48/000000/kubernetes.png'
    },
    {
      id: 'terraform',
      name: 'Terraform',
      desc: 'Infrastructure as Code for cloud platforms.',
      tech: ['Terraform', 'Kubernetes', 'Docker'],
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg'
    },
  ];

  return (
    <section id="services" className="p-8 bg-white">
      <h3 className="text-center text-2xl font-bold mb-6">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(s => (
          <div
            key={s.id}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 p-6 rounded-2xl shadow-lg flex flex-col items-start text-white"
          >
            <img
              src={s.icon}
              alt={`${s.name} Icon`}
              className="mb-4 w-14 h-14 object-contain rounded-lg bg-white p-2"
            />
            <h4 className="font-bold text-lg mb-2">{s.name}</h4>
            <p className="mb-4 text-gray-200">{s.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {s.tech.map(tool => (
                <span key={tool} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">{tool}</span>
              ))}
            </div>
            <a
              href="https://github.com/Fir3eye/sendevops.git"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold transition"
            >
              <span role="img" aria-label="live">🔗</span> View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}