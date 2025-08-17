import React from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();

  const posts = {
    1: {
      title: "🚀 Setup Nginx with React & Node.js",
      date: "August 2025",
      image: "/assets/blog-diagram.png", // ✅ Diagram for this blog
      content: `
        In this guide, we’ll learn how to serve a React frontend with Node.js backend using NGINX.
        
        1️⃣ Install NGINX  
        2️⃣ Configure server block for React build files  
        3️⃣ Setup reverse proxy for Node.js API (e.g., /api → localhost:5000)  
        4️⃣ Restart NGINX and test.  

        This ensures React serves on the same domain, while API requests forward to Node.js.
      `,
    },
    2: {
      title: "🐳 Getting Started with Docker for Beginners",
      date: "August 2025",
      image: "/assets/blog-diagram.png", // ✅ Same diagram for now
      content: `
        Docker makes app deployment simple and portable.

        Steps:  
        1️⃣ Install Docker on your system.  
        2️⃣ Write a Dockerfile (FROM node:18, COPY ., RUN npm install, CMD ["npm","start"]).  
        3️⃣ Build image → docker build -t myapp .  
        4️⃣ Run → docker run -p 3000:3000 myapp  

        Now your app runs inside a container 🚀.
      `,
    },
  };

  const post = posts[id];

  if (!post) {
    return <h2 className="text-center text-red-600 mt-10">❌ Blog not found</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>

      {/* ✅ Blog Diagram */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-lg shadow-md mb-6"
      />

      <div className="text-gray-700 whitespace-pre-line leading-relaxed">
        {post.content}
      </div>

      <Link to="/blog" className="text-blue-600 font-medium mt-8 inline-block hover:underline">
        ← Back to Blog
      </Link>
    </div>
  );
}
