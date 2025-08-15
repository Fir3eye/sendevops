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

export default function Projects() {
  return (
    <section id="work" className="p-8 bg-gray-50">
      <h3 className="text-center text-2xl font-bold mb-6">Latest Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 p-6 rounded-2xl shadow-lg flex flex-col items-start text-white"
          >
            <div className="mb-4 w-full h-32 flex items-center justify-center bg-white rounded-lg overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h4 className="font-bold text-lg mb-2">{project.title}</h4>
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
                <svg width="20" height="20" fill="currentColor" className="mr-1" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                View Code
              </a>
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold transition"
              >
                <svg width="20" height="20" fill="currentColor" className="mr-1" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.614 3.5 12 3.5 12 3.5s-7.614 0-9.386.574a2.994 2.994 0 00-2.112 2.112C0 7.958 0 12 0 12s0 4.042.502 5.814a2.994 2.994 0 002.112 2.112C4.386 20.5 12 20.5 12 20.5s7.614 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 16.042 24 12 24 12s0-4.042-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                View Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}