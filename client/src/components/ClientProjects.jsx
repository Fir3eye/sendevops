import React from "react";

// ⭐ Updated projects with client details
const clientProjects = [
  {
    title: "E-commerce Platform Optimization",
    description:
      "Improved CI/CD workflow and reduced downtime for a leading e-commerce client.",
    image: "https://img.icons8.com/color/96/000000/shopify.png",
    link: "https://example.com/client1",
    review:
      "The SendDevOps team streamlined our deployments — downtime is almost zero now!",
    rating: 5,
    client: {
      name: "Amit Sharma",
      role: "CTO, RetailX",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
  },
  {
    title: "Healthcare Cloud Migration",
    description:
      "Migrated on-premises infrastructure to AWS Cloud for a healthcare company.",
    image: "https://img.icons8.com/color/96/000000/cloud.png",
    link: "https://example.com/client2",
    review: "Seamless migration with zero data loss. Highly professional team!",
    rating: 4,
    client: {
      name: "Dr. Neha Verma",
      role: "Head IT, MediCare",
      avatar: "https://i.pravatar.cc/100?img=48",
    },
  },
  {
    title: "Fintech Monitoring Setup",
    description:
      "Implemented Prometheus & Grafana dashboards for a fintech client.",
    image: "https://img.icons8.com/color/96/000000/combo-chart.png",
    link: "https://example.com/client3",
    review: "Real-time dashboards improved our monitoring significantly.",
    rating: 5,
    client: {
      name: "Rahul Mehta",
      role: "VP Engineering, FinPay",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  },
  {
    title: "Banking Security Hardening",
    description:
      "Enhanced Kubernetes cluster security for a private bank.",
    image: "https://img.icons8.com/color/96/000000/security-checked.png",
    link: "https://example.com/client4",
    review: "Their DevSecOps practices gave us confidence in compliance audits.",
    rating: 5,
    client: {
      name: "Sanjay Kapoor",
      role: "CISO, SafeBank",
      avatar: "https://i.pravatar.cc/100?img=45",
    },
  },
  {
    title: "Travel Startup CI/CD",
    description:
      "Automated deployment pipelines for a growing travel booking platform.",
    image: "https://img.icons8.com/color/96/000000/airplane-take-off.png",
    link: "https://example.com/client5",
    review: "CI/CD speed improved — we can deploy 5x faster now!",
    rating: 4,
    client: {
      name: "Ananya Gupta",
      role: "Tech Lead, TripGo",
      avatar: "https://i.pravatar.cc/100?img=55",
    },
  },
  {
    title: "Retail AI Infrastructure",
    description:
      "Built scalable GPU clusters for AI model training in retail analytics.",
    image: "https://img.icons8.com/color/96/000000/artificial-intelligence.png",
    link: "https://example.com/client6",
    review: "Training time reduced by 60% — amazing infra setup!",
    rating: 5,
    client: {
      name: "Vikram Singh",
      role: "Head of Data, ShopAI",
      avatar: "https://i.pravatar.cc/100?img=28",
    },
  },
  {
    title: "Logistics Cloud Cost Optimization",
    description:
      "Optimized AWS infra and saved 40% monthly bills for logistics firm.",
    image: "https://img.icons8.com/color/96/000000/money-bag.png",
    link: "https://example.com/client7",
    review: "They cut our cloud bills massively while improving uptime.",
    rating: 5,
    client: {
      name: "Rohit Jain",
      role: "CFO, MoveIt",
      avatar: "https://i.pravatar.cc/100?img=64",
    },
  },
  {
    title: "Education SaaS Deployment",
    description:
      "Implemented zero-downtime deployments for an EdTech SaaS product.",
    image: "https://img.icons8.com/color/96/000000/graduation-cap.png",
    link: "https://example.com/client8",
    review: "No more downtime during product launches. Superb work!",
    rating: 4,
    client: {
      name: "Megha Sinha",
      role: "Product Manager, LearnHub",
      avatar: "https://i.pravatar.cc/100?img=18",
    },
  },
  {
    title: "Insurance Disaster Recovery",
    description:
      "Setup multi-region failover for insurance applications.",
    image: "https://img.icons8.com/color/96/000000/server.png",
    link: "https://example.com/client9",
    review: "Our DR drills passed 100% thanks to SendDevOps’ infra.",
    rating: 5,
    client: {
      name: "Arvind Kumar",
      role: "Ops Head, InsuraTech",
      avatar: "https://i.pravatar.cc/100?img=20",
    },
  },
  {
    title: "Media Streaming Scalability",
    description:
      "Scaled infra to handle 5M concurrent users during peak sports events.",
    image: "https://img.icons8.com/color/96/000000/play-button-circled.png",
    link: "https://example.com/client10",
    review: "Zero buffering experience for millions — mission accomplished!",
    rating: 5,
    client: {
      name: "Priya Nair",
      role: "Streaming Director, SportFlix",
      avatar: "https://i.pravatar.cc/100?img=50",
    },
  },
  {
    title: "Real Estate CRM Setup",
    description:
      "Deployed CRM system on Kubernetes for real estate company.",
    image: "https://img.icons8.com/color/96/000000/home.png",
    link: "https://example.com/client11",
    review: "Smooth rollout, scalable backend, and fast response times.",
    rating: 4,
    client: {
      name: "Kunal Patel",
      role: "CEO, BuildNest",
      avatar: "https://i.pravatar.cc/100?img=36",
    },
  },
  {
    title: "Gaming Backend Automation",
    description:
      "Automated server provisioning for online multiplayer games.",
    image: "https://img.icons8.com/color/96/000000/controller.png",
    link: "https://example.com/client12",
    review: "Player latency reduced drastically — gamers are happy!",
    rating: 5,
    client: {
      name: "Rishi Malhotra",
      role: "CTO, GameOn",
      avatar: "https://i.pravatar.cc/100?img=29",
    },
  },
  {
    title: "Food Delivery API Reliability",
    description:
      "Ensured 99.99% uptime for food delivery platform APIs.",
    image: "https://img.icons8.com/color/96/000000/food-bar.png",
    link: "https://example.com/client13",
    review: "Orders never fail now, uptime is rock-solid!",
    rating: 5,
    client: {
      name: "Sneha Roy",
      role: "Ops Manager, QuickBite",
      avatar: "https://i.pravatar.cc/100?img=39",
    },
  },
];


// ⭐ helper function to render stars
const renderStars = (rating) => {
  return [...Array(5)].map((_, i) => (
    <span
      key={i}
      className={`text-xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
    >
      ★
    </span>
  ));
};

function ClientProjects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-green-700 mb-6">
        Client Projects 🌟
      </h2>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Explore our successful collaborations where technology meets business
        impact 🚀
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {clientProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition duration-300 border border-gray-100"
          >
            {/* Project Logo */}
            <img
              src={project.image}
              alt={project.title}
              className="w-20 h-20 mx-auto mb-4"
            />

            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* Client Review Card */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-inner mb-4">
              <div className="flex items-center mb-2">
                <img
                  src={project.client.avatar}
                  alt={project.client.name}
                  className="w-10 h-10 rounded-full mr-3 border"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-700">
                    {project.client.name}
                  </p>
                  <p className="text-sm text-gray-500">{project.client.role}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="italic text-gray-500 mb-2">"{project.review}"</p>

              {/* Stars */}
              <div>{renderStars(project.rating)}</div>
            </div>

            {/* View Project Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-gradient-to-r from-green-500 to-green-700 text-white font-medium px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-800 transition"
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientProjects;
