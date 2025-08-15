import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} SendDevOps. All rights reserved.</p>
      </div>
    </footer>
  );
}
