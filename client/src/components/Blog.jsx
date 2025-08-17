import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "🚀 Setup Nginx with React & Node.js",
      date: "August 2025",
      excerpt: "Learn how to deploy a React frontend with a Node.js backend using NGINX as a reverse proxy.",
    },
    {
      id: 2,
      title: "🐳 Getting Started with Docker for Beginners",
      date: "August 2025",
      excerpt: "Docker allows you to containerize applications for easy deployment with simple steps.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">📖 Blog</h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            <Link to={`/blog/${post.id}`}>
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">{post.title}</h3>
            </Link>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
            <Link
              to={`/blog/${post.id}`}
              className="text-blue-600 font-medium mt-4 inline-block hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
