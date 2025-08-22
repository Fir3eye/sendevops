import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-12 mt-auto shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Address */}
        <div>
          <h3 className="font-semibold text-xl mb-3 text-orange-400 flex items-center">
            📍 Address
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Emaar Digital Green Tower-A, <br />
            Sector 61, Gurugram, Haryana, 122018
          </p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <img src="https://img.icons8.com/color/24/000000/gmail.png" alt="Gmail" />
              <a
                href="mailto:info@sendevops.in"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                info@sendevops.in
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <img src="https://img.icons8.com/color/24/000000/whatsapp.png" alt="WhatsApp" />
              <a
                href="https://wa.me/91826xxx823"
                className="text-green-400 hover:text-green-300 transition"
              >
                +91 82690 2xxxx3
              </a>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-400">🕑 Mon–Sat, 10am – 7pm</p>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-xl mb-3 text-orange-400">About SenDevOps</h3>
          <p className="text-gray-300 leading-relaxed">
            🚀 SenDevOps empowers businesses with innovative cloud, DevOps, 
            and automation solutions to help you scale faster, smarter, and safer.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-xl mb-3 text-orange-400">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-6 text-gray-300">
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Services</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Login</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-400 transition">About</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Our Work</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-xl mb-3 text-orange-400">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#"><img src="https://img.icons8.com/color/32/000000/linkedin.png" alt="LinkedIn" className="hover:scale-110 transition" /></a>
            <a href="#"><img src="https://img.icons8.com/color/32/000000/whatsapp.png" alt="WhatsApp" className="hover:scale-110 transition" /></a>
            <a href="#"><img src="https://img.icons8.com/color/32/000000/instagram-new.png" alt="Instagram" className="hover:scale-110 transition" /></a>
            <a href="#"><img src="https://img.icons8.com/color/32/000000/facebook-new.png" alt="Facebook" className="hover:scale-110 transition" /></a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col items-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="text-orange-400">SenDevOps</span>. All rights reserved.
        </p>
        <a
          href="#"
          className="mt-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm shadow-md hover:scale-105 transition"
        >
          ↑ Back to Top
        </a>
      </div>
    </footer>
  );
}
