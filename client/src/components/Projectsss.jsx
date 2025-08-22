import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Deploy Starbucks Application on Local | Nginx | Docker',
    desc: 'Immediate access to 120+ hours of content and 40+ real world projects. Highest package from previous batch: 40 LPA.',
    img: 'https://i.ytimg.com/vi/9nzeEmNAWVk/maxresdefault.jpg',
    tools: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Azure'],
    github: 'https://github.com/Fir3eye/sendevops.git',
    youtube: 'https://www.youtube.com/watch?v=-HyZesw78s0'
  },
  {
    id: 2,
    title: 'Batch-10 | DevSecOps & Cloud DevOps | Recorded',
    desc: '40 projects, DevSecOps & Azure DevOps, recorded batch starting 15th June.',
    img: 'https://i.ytimg.com/vi/9nzeEmNAWVk/maxresdefault.jpg',
    tools: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Azure'],
    github: 'https://github.com/Fir3eye/sendevops.git',
    youtube: 'https://www.youtube.com/watch?v=your-video2'
  },
  {
    id: 3,
    title: 'Zero To Hero | DevSecOps & Cloud DevOps | Pre-Recorded',
    desc: 'Immediate access to all content, 100+ hours, Batch-8.',
    img: 'https://i.ytimg.com/vi/9nzeEmNAWVk/maxresdefault.jpg',
    tools: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Azure'],
    github: 'https://github.com/Fir3eye/sendevops.git',
    youtube: 'https://www.youtube.com/watch?v=your-video3'
  },
  {
    id: 4,
    title: 'CI/CD Pipeline with Jenkins & Docker',
    desc: 'Automate your deployments using Jenkins and Docker. Hands-on pipeline setup and integration.',
    img: 'https://i.ytimg.com/vi/9nzeEmNAWVk/maxresdefault.jpg',
    tools: ['Jenkins', 'Docker', 'Git'],
    github: 'https://github.com/Fir3eye/jenkins-docker-pipeline',
    youtube: 'https://www.youtube.com/watch?v=your-video4'
  },
  {
    id: 5,
    title: 'Monitoring with Prometheus & Grafana',
    desc: 'Learn how to monitor applications and infrastructure using Prometheus and Grafana dashboards.',
    img: 'https://i.ytimg.com/vi/9nzeEmNAWVk/maxresdefault.jpg',
    tools: ['Prometheus', 'Grafana', 'Kubernetes'],
    github: 'https://github.com/Fir3eye/prometheus-grafana-monitoring',
    youtube: 'https://www.youtube.com/watch?v=your-video5'
  },
  {
    id: 6,
    title: 'Infrastructure as Code with Terraform',
    desc: 'Provision cloud resources using Terraform scripts. Includes AWS and Azure examples.',
    img: 'https://i.ytimg.com/vi/9nzeEmNAWVk/maxresdefault.jpg',
    tools: ['Terraform', 'AWS', 'Azure'],
    github: 'https://github.com/Fir3eye/terraform-iac',
    youtube: 'https://www.youtube.com/watch?v=your-video6'
  },
];

// 🔹 Reusable component for rendering project cards
function ProjectGrid({ title }) {
  return (
    <section className="p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative">
      <h3 className="text-center text-3xl font-bold mb-10">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 rounded-2xl shadow-2xl flex flex-col items-start hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4 w-full h-32 flex items-center justify-center bg-white rounded-lg overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h4 className="font-bold text-xl mb-2">{project.title}</h4>
            <p className="mb-4 text-gray-200">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map(tool => (
                <span key={tool} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">{tool}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold transition"
              >
                🔗 View Code
              </a>
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold transition"
              >
                ▶️ View Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <>
      <ProjectGrid title="💼 Client Projects" />
      <ProjectGrid title="💻 Latest Projects" />
    </>
  );
}
