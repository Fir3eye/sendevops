import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  const services = [
    {
      id: 'linux',
      name: 'Linux Administration',
      desc: 'Server setup, security hardening, automation.',
      tech: ['Linux', 'Git', 'Docker', 'Kubernetes', 'Terraform'],
      icon: 'https://img.icons8.com/color/48/000000/linux.png'
    },
    {
      id: 'docker',
      name: 'Docker',
      desc: 'Containerization and image optimization.',
      tech: ['Docker', 'Linux', 'Git'],
      icon: 'https://img.icons8.com/color/48/000000/docker.png'
    },
    {
      id: 'k8s',
      name: 'Kubernetes',
      desc: 'Cluster setup, scaling, and maintenance.',
      tech: ['Kubernetes', 'Docker', 'Linux'],
      icon: 'https://img.icons8.com/color/48/000000/kubernetes.png'
    },
    {
      id: 'terraform',
      name: 'Terraform',
      desc: 'Infrastructure as Code for cloud platforms.',
      tech: ['Terraform', 'Kubernetes', 'Docker'],
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg'
    },
    {
      id: 'jenkins',
      name: 'Jenkins CI/CD',
      desc: 'Automate build, test, and deployment pipelines.',
      tech: ['Jenkins', 'Docker', 'Git', 'Kubernetes'],
      icon: 'https://img.icons8.com/color/48/000000/jenkins.png'
    },
    {
      id: 'ansible',
      name: 'Ansible Automation',
      desc: 'Configuration management and orchestration.',
      tech: ['Ansible', 'Linux', 'AWS', 'Terraform'],
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg'
    },
    {
      id: 'prometheus',
      name: 'Monitoring & Alerting',
      desc: 'Application and infrastructure monitoring.',
      tech: ['Prometheus', 'Grafana', 'Kubernetes'],
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg'
    },
    {
      id: 'aws',
      name: 'AWS Cloud Services',
      desc: 'Cloud infrastructure setup and management.',
      tech: ['AWS', 'Terraform', 'Linux', 'Docker'],
      icon: 'https://img.icons8.com/color/48/000000/amazon-web-services.png'
    },
    {
      id: 'gitlab',
      name: 'GitLab CI/CD',
      desc: 'Automate and manage your CI/CD pipelines with GitLab.',
      tech: ['GitLab', 'CI/CD', 'Docker'],
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'
    },
    {
      id: 'azure',
      name: 'Azure DevOps',
      desc: 'End-to-end DevOps solutions on Microsoft Azure.',
      tech: ['Azure', 'Pipelines', 'Repos', 'Boards'],
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
    },
    {
      id: 'grafana',
      name: 'Grafana Dashboards',
      desc: 'Custom dashboards for monitoring and visualization.',
      tech: ['Grafana', 'Prometheus', 'Kubernetes'],
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg'
    },
    {
      id: 'sonarqube',
      name: 'SonarQube Code Quality',
      desc: 'Automated code analysis and quality gates for CI/CD.',
      tech: ['SonarQube', 'Jenkins', 'GitLab'],
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg'
    },
    {
      id: 'vault',
      name: 'HashiCorp Vault',
      desc: 'Secrets management and encryption for DevOps workflows.',
      tech: ['Vault', 'Terraform', 'Kubernetes'],
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vault/vault-original.svg'
    },
    {
      id: 'nginx',
      name: 'Nginx Reverse Proxy',
      desc: 'Load balancing, SSL termination, and reverse proxy setup.',
      tech: ['Nginx', 'SSL', 'Docker'],
      icon: 'https://img.icons8.com/color/48/000000/nginx.png'
    },
  ];

  const handleContactClick = (serviceName) => {
    navigate(`/contact?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <section id="services" className="p-8 bg-white">
      <h3 className="text-center text-2xl font-bold mb-6">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(s => (
          <div
            key={s.id}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 p-6 rounded-2xl shadow-lg flex flex-col items-start text-white"
          >
            <img
              src={s.icon}
              alt={`${s.name} Icon`}
              className="mb-4 w-14 h-14 object-contain rounded-lg bg-white p-2"
            />
            <h4 className="font-bold text-lg mb-2">{s.name}</h4>
            <p className="mb-4 text-gray-200">{s.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {s.tech.map(tool => (
                <span key={tool} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">{tool}</span>
              ))}
            </div>
            <a
              href="https://github.com/Fir3eye/sendevops.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold transition"
            >
              <span role="img" aria-label="live">🔗</span> View Code
            </a>
            <button
              onClick={() => handleContactClick(s.name)}
              className="mt-2 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition"
            >
              <span role="img" aria-label="contact">📩</span> Contact About This Service
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}