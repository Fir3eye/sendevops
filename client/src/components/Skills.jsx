import React from 'react';

const skills = [
  { name: 'Grafana', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
  { name: 'Trivy', img: 'https://avatars.githubusercontent.com/u/68371604?s=200&v=4' },
  { name: 'Kubernetes', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'GitLab', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Terraform', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'SonarQube', img: 'https://avatars.githubusercontent.com/u/4467045?s=200&v=4' },
  { name: 'AWS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Renovate', img: 'https://avatars.githubusercontent.com/u/38656522?s=200&v=4' },
  { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Prometheus', img: 'https://avatars.githubusercontent.com/u/3380462?s=200&v=4' },
  { name: 'Jenkins', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Ansible', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
  { name: 'Maven', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
  // Add more skills as needed
];

export default function Skills() {
  return (
    <section className="bg-[#181a20] py-16">
      <h2 className="text-center text-2xl font-bold text-white mb-8">
        Learn Most Popular Tools with us
      </h2>
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {skills.map(skill => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center w-24 h-24 mb-2">
              <img src={skill.img} alt={skill.name} className="w-16 h-16 object-contain" />
            </div>
            <span className="text-white font-medium text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}