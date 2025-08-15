import React from 'react';

export default function OurWork() {
  return (
    <section id="work" className="p-8 bg-gray-50">
      <h3 className="text-center text-2xl font-bold mb-6">Our Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Project {item}</h4>
            <p className="text-gray-600">Description of project {item} showcasing our DevOps expertise.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
