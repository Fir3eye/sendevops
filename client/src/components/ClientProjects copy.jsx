import React from "react";

// ⭐ Add review and rating to each project
const clientProjects = [
  {
    title: "E-commerce Platform Optimization",
    description:
      "Improved CI/CD workflow and reduced downtime for a leading e-commerce client.",
    image: "https://img.icons8.com/color/96/000000/shopify.png",
    link: "https://example.com/client1",
    review: "The SendDevOps team streamlined our deployments — downtime is almost zero now!",
    rating: 5,
  },
  {
    title: "Healthcare Cloud Migration",
    description:
      "Migrated on-premises infrastructure to AWS Cloud for a healthcare company.",
    image: "https://img.icons8.com/color/96/000000/cloud.png",
    link: "https://example.com/client2",
    review: "Seamless migration with zero data loss. Highly professional team!",
    rating: 4,
  },
  {
    title: "Fintech Monitoring Setup",
    description:
      "Implemented Prometheus & Grafana dashboards for a fintech client.",
    image: "https://img.icons8.com/color/96/000000/combo-chart.png",
    link: "https://example.com/client3",
    review: "Real-time dashboards improved our monitoring significantly.",
    rating: 5,
  },
];

// ⭐ helper function to render stars
const renderStars = (rating) => {
  return [...Array(5)].map((_, i) => (
    <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
      ★
    </span>
  ));
};

function ClientProjects() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        Client Projects 🌟
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Here are some of the recent projects we have delivered for our clients.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {clientProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* ⭐ Client Review */}
            <p className="italic text-gray-500 mb-3">"{project.review}"</p>

            {/* ⭐ Star Rating */}
            <div className="mb-4">{renderStars(project.rating)}</div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientProjects;
