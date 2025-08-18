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
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // ✅ Prefill service from query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service && serviceOptions.includes(service)) {
      setFormData(f => ({ ...f, service }));
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="p-8 bg-white">
      <h3 className="text-center text-3xl font-bold mb-6">Get in Touch</h3>
      <form 
        onSubmit={handleSubmit} 
        className="max-w-lg mx-auto bg-gray-100 p-8 rounded-xl shadow space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone (WhatsApp preferred)</label>
          <input
            type="tel"
            className="w-full border p-2 rounded"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            pattern="[0-9+ -]{8,15}"
            placeholder="+91-9876543210"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Service</label>
          <select
            className="w-full border p-2 rounded"
            value={formData.service}
            onChange={e => setFormData({ ...formData, service: e.target.value })}
            required
          >
            <option value="">Select Service</option>
            {serviceOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            className="w-full border p-2 rounded"
            rows={4}
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className={`w-full py-2 rounded font-semibold text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-center mt-2">✅ Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center mt-2">❌ Failed to send, try again.</p>
        )}
      </form>
    </section>
  );
}

