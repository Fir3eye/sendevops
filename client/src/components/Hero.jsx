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

  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-50">
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-4xl font-bold text-gray-800">End-to-End DevOps Solutions</h2>
        <p className="text-lg text-gray-600">
          We provide expert DevOps services for Linux, Docker, Kubernetes, Terraform, and more.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
      <form onSubmit={handleSubmit} className="md:w-1/3 bg-white shadow-lg p-6 rounded mt-8 md:mt-0">
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
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
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </section>
  );
}
