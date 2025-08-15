import React from "react";

const skills = [
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Ansible", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
  { name: "Jenkins", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Terraform", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Prometheus", img: "https://avatars.githubusercontent.com/u/3380462?s=200&v=4" },
  { name: "Grafana", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Trivy", img: "https://avatars.githubusercontent.com/u/68371604?s=200&v=4" },
  { name: "SonarQube", img: "https://avatars.githubusercontent.com/u/4467045?s=200&v=4" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Maven", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
];

export default function Skills() {
  return (
    <section className="bg-[#181a20] py-16">
      <h3 className="text-center text-3xl font-bold mb-10">🛠 My Skills</h3>
      <div className="flex flex-wrap justify-center items-center gap-8 px-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center w-24 hover:scale-110 transition-transform duration-300"
          >
            <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-2 object-contain" />
            <span className="text-center font-bold text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
