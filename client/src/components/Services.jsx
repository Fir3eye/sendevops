import React from 'react';

export default function Services() {
  const services = [
    { id: 'linux', name: 'Linux Administration', desc: 'Server setup, security hardening, automation.' },
    { id: 'docker', name: 'Docker', desc: 'Containerization and image optimization.' },
    { id: 'k8s', name: 'Kubernetes', desc: 'Cluster setup, scaling, and maintenance.' },
    { id: 'terraform', name: 'Terraform', desc: 'Infrastructure as Code for cloud platforms.' },
  ];

  return (
    <section id="services" className="p-8 bg-white">
      <h3 className="text-center text-2xl font-bold mb-6">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map(s => (
          <div key={s.id} className="bg-gray-50 p-4 rounded shadow hover:shadow-lg transition">
            <h4 className="font-semibold mb-2">{s.name}</h4>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
