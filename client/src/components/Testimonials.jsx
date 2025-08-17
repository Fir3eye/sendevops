import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarfraz Ahmad",
    company: "Girnar Education Software Private Limited",
    review:
      "Goognu team is professional and technical as well. We migrated our in production environment with the help of goognu team almost without any downtime. They guide us in the migration and provide insightful recommendations.",
    rating: 5,
    img: "https://cdn-icons-png.flaticon.com/512/1999/1999625.png",
  },
  {
    name: "Mr. Ajay Kumar",
    company: "Resonance Edu-venture Ltd",
    review:
      "I am extremely impressed and satisfied with the expertise and commitment Goognu brought. Their proactive approach and prompt response time minimized downtime completely.",
    rating: 5,
    img: "https://cdn-icons-png.flaticon.com/512/1999/1999625.png",
  },
  {
    name: "Mr. Nikunj Bhatter",
    company: "GirnarSoft Education Services Pvt. Ltd.",
    review:
      "Goognu has been very professional regarding the migration of our infrastructure to AWS. The transition was smooth with 0 downtime and great attention to detail.",
    rating: 5,
    img: "https://cdn-icons-png.flaticon.com/512/1999/1999625.png",
  },
  {
    name: "Priya Sharma",
    company: "Tech Innovators Pvt. Ltd.",
    review:
      "Amazing support team! They handled our migration and provided 24x7 monitoring. We are extremely happy with the results.",
    rating: 5,
    img: "https://cdn-icons-png.flaticon.com/512/1999/1999625.png",
  },
  {
    name: "Rahul Verma",
    company: "NextGen Solutions",
    review:
      "Very professional and knowledgeable team. Their AWS expertise saved us cost and improved performance drastically.",
    rating: 5,
    img: "https://cdn-icons-png.flaticon.com/512/1999/1999625.png",
  },
  {
    name: "Anita Desai",
    company: "CloudEra Pvt. Ltd.",
    review:
      "We highly recommend Goognu for AWS consulting and support. Their work ethic and technical skills are outstanding.",
    rating: 5,
    img: "https://cdn-icons-png.flaticon.com/512/1999/1999625.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden" id="testimonials">
      <h2 className="text-center text-4xl font-bold mb-12">
        Customer Testimonials
      </h2>

      <div className="relative w-full">
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 30, // speed of scroll
            repeat: Infinity,
          }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg min-w-[350px] max-w-[350px]"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-gray-600 text-sm">{t.company}</p>
                </div>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border"
                />
              </div>
              <div className="flex mb-3 text-yellow-500">
                {Array.from({ length: t.rating }, (_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 text-sm">{t.review}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
