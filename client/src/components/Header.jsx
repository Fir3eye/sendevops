import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">SendDevOps</h1>
      <nav className="space-x-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#work" className="hover:underline">Our Work</a>
        <div className="inline-block relative group">
          <button className="hover:underline">Services ▾</button>
          <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg">
            <a href="#linux" className="block px-4 py-2 hover:bg-gray-200">Linux</a>
            <a href="#docker" className="block px-4 py-2 hover:bg-gray-200">Docker</a>
            <a href="#k8s" className="block px-4 py-2 hover:bg-gray-200">Kubernetes</a>
            <a href="#terraform" className="block px-4 py-2 hover:bg-gray-200">Terraform</a>
          </div>
        </div>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}
