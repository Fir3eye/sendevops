import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const serviceOptions = [
  'Linux Administration',
  'Docker',
  'Kubernetes',
  'Terraform',
  'Jenkins CI/CD',
  'Ansible Automation',
  'Monitoring & Alerting',
  'AWS Cloud Services',
  'GitLab CI/CD',
  'Azure DevOps',
  'Grafana Dashboards',
  'SonarQube Code Quality',
  'HashiCorp Vault',
  'Nginx Reverse Proxy'
];

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service && serviceOptions.includes(service)) {
      setFormData(f => ({ ...f, service }));
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    alert('Message sent!');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="p-8 bg-white">
      <h3 className="text-center text-2xl font-bold mb-6">Contact Us</h3>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-100 p-8 rounded-xl shadow">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 mb-3 rounded"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <select
          className="w-full border p-2 mb-3 rounded"
          value={formData.service}
          onChange={e => setFormData({ ...formData, service: e.target.value })}
          required
        >
          <option value="">Select Service</option>
          {serviceOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <textarea
          placeholder="Message"
          className="w-full border p-2 mb-3 rounded"
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold">
          Send
        </button>
      </form>
    </section>
  );
}