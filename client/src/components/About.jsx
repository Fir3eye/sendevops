import React from 'react';

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1440] via-[#2d1b5a] to-[#4b2e8c] px-4 py-12">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 flex flex-col items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGG6dK6BfGmjQ/profile-displayphoto-shrink_800_800/B4DZN4Wv4wGUAc-/0/1732891052496?e=1758153600&v=beta&t=vv2I-qyaesyGte19P6L_XUjN0VtjNCld2FOht5feplw"
            alt="Sudheer Sen"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg mb-6"
          />
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center px-6 py-3 rounded-full font-bold text-lg shadow-lg">
            SUDHEER SEN
            <div className="text-xs font-medium mt-1">WORKING IN GOOGNU</div>
          </div>
        </div>
        <div>
          <h2 className="text-pink-400 text-xl mb-2 font-medium">About us</h2>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
            Learn with Industry Experts in SenDevOps
          </h1>
          <p className="text-gray-200 text-lg mb-4">
            Welcome to Devops Shack, your go-to destination for mastering DevSecOps & Cloud DevOps. Our platform empowers individuals to excel in the dynamic world of technology through comprehensive courses designed for all skill levels.
          </p>
          <p className="text-gray-200 text-lg mb-4">
            Crafted by industry experts like Sudheer Sen, with over 30 corporate projects experience, our courses offer up-to-date knowledge and practical insights. We prioritize staying ahead in the rapidly evolving landscape by using the latest industry-oriented tools.
          </p>
          <p className="text-gray-200 text-lg">
            From mastering cloud computing concepts to learning advanced DevOps tools, our platform provides hands-on exercises and real-world projects to build your confidence and proficiency. Join us at Devopsshack and unlock your full potential as a Cloud DevOps Engineer. Let's shape the future of technology together, one innovation at a time.
          </p>
        </div>
      </div>
    </section>
  );
}