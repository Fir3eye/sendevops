import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1440] via-[#2d1b5a] to-[#4b2e8c] px-4 py-12">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Founder Section */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGG6dK6BfGmjQ/profile-displayphoto-shrink_800_800/B4DZN4Wv4wGUAc-/0/1732891052496?e=1758153600&v=beta&t=vv2I-qyaesyGte19P6L_XUjN0VtjNCld2FOht5feplw"
            alt="Sudheer Sen"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg mb-6"
          />
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center px-6 py-3 rounded-full font-bold text-lg shadow-lg">
            SUDHEER SEN
            <div className="text-xs font-medium mt-1">
              Founder of SenDevOps
            </div>
          </div>
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-pink-400 text-xl mb-2 font-medium">About us</h2>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
            Learn with Industry Experts in SenDevOps
          </h1>
          <p className="text-gray-200 text-lg mb-4">
            Welcome to Devops Shack, your go-to destination for mastering
            DevSecOps & Cloud DevOps. Our platform empowers individuals to excel
            in the dynamic world of technology through comprehensive courses
            designed for all skill levels.
          </p>
          <p className="text-gray-200 text-lg mb-4">
            Crafted by industry experts like Sudheer Sen, with over 30 corporate
            projects experience, our courses offer up-to-date knowledge and
            practical insights. We prioritize staying ahead in the rapidly
            evolving landscape by using the latest industry-oriented tools.
          </p>
          <p className="text-gray-200 text-lg">
            From mastering cloud computing concepts to learning advanced DevOps
            tools, our platform provides hands-on exercises and real-world
            projects to build your confidence and proficiency. Join us at
            Devopsshack and unlock your full potential as a Cloud DevOps
            Engineer. Let's shape the future of technology together, one
            innovation at a time.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-6xl w-full mt-16">
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Arjun Mehta",
              role: "Chief Technology Officer",
              img: "https://img.icons8.com/color/96/000000/administrator-male.png",
              desc: "Arjun leads the technical strategy and architecture, ensuring cutting-edge solutions in DevOps and Cloud technologies.",
            },
            {
              name: "Neha Sharma",
              role: "SEO & Marketing Head",
              img: "https://img.icons8.com/color/96/000000/administrator-female.png",
              desc: "Neha drives digital growth through SEO, branding, and marketing strategies, helping SenDevOps reach a global audience.",
            },
            {
              name: "Ravi Kumar",
              role: "Cloud Architect",
              img: "https://img.icons8.com/color/96/000000/cloud.png",
              desc: "Ravi designs scalable and secure cloud infrastructures, optimizing cost and performance for client projects.",
            },
            {
              name: "Priya Verma",
              role: "Lead DevOps Engineer",
              img: "https://img.icons8.com/color/96/000000/engineering.png",
              desc: "Priya specializes in CI/CD pipelines, automation, and Kubernetes orchestration with hands-on expertise.",
            },
            {
              name: "Karan Singh",
              role: "Security Specialist",
              img: "https://img.icons8.com/color/96/000000/security-checked.png",
              desc: "Karan ensures end-to-end security by implementing DevSecOps practices across all projects.",
            },
            {
              name: "Ananya Gupta",
              role: "UI/UX Designer",
              img: "https://img.icons8.com/color/96/000000/design.png",
              desc: "Ananya crafts intuitive and visually stunning user experiences, making technology accessible to everyone.",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white bg-opacity-10 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 border-4 border-purple-500"
              />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-pink-400 font-medium">{member.role}</p>
              <p className="text-gray-300 text-center mt-3">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
