import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address */}
        <div>
          <h3 className="font-bold text-lg mb-2">
            <span className="text-orange-400 mr-2">📍</span>Address:
          </h3>
          <p>
            Saraswati Nagar, Near Water Tank,<br />
            Goragaon, Bhopal,<br />
            Madhya Pradesh, 462044
          </p>
          <div className="flex items-center mt-2 space-x-2">
            <span>
              <img src="https://img.icons8.com/color/24/000000/gmail.png" alt="Gmail" className="inline" />
            </span>
            <a href="mailto:info@sendevops.in" className="text-blue-400 hover:underline">info@sendevops.in</a>
          </div>
          <div className="flex items-center mt-2 space-x-2">
            <span>
              <img src="https://img.icons8.com/color/24/000000/whatsapp.png" alt="WhatsApp" className="inline" />
            </span>
            <a href="https://wa.me/918269028823" className="text-green-400 hover:underline">+91 82690 28823</a>
          </div>
          <p className="mt-2 text-sm">Office Hours: Mon–Sat, 10am – 7pm</p>
        </div>
        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-2">About SenDevOps</h3>
          <p>
            SenDevOps empowers your business with innovative digital solutions, design, and technology.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-4">
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Login</a></li>
            </ul>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Our Work</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Sign Up</a></li>
            </ul>
          </div>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-2">Social Media</h3>
          <div className="flex space-x-3 mb-2">
            <a href="#"><img src="https://img.icons8.com/color/32/000000/gmail.png" alt="Gmail" /></a>
            <a href="#"><img src="https://img.icons8.com/color/32/000000/linkedin.png" alt="LinkedIn" /></a>
            <a href="#"><img src="https://img.icons8.com/color/32/000000/whatsapp.png" alt="WhatsApp" /></a>
            <a href="#"><img src="https://img.icons8.com/color/32/000000/instagram-new.png" alt="Instagram" /></a>
            <a href="#"><img src="https://img.icons8.com/color/32/000000/facebook-new.png" alt="Facebook" /></a>
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col items-center">
        <p className="text-center text-sm">&copy; 2025 SenDevOps. All rights reserved.</p>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-600 text-sm">↑ Back to Top</a>
      </div>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9175xxxxxx"
        className="fixed bottom-8 right-8 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp.png"
          alt="WhatsApp"
          className="rounded-full shadow-lg"
        />
      </a>
    </footer>
  );
}