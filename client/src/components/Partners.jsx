import React from 'react';

const clients = [
  { name: 'Linux', img: 'https://th.bing.com/th/id/R.3e5218f722f521a646263ac59b401efd?rik=Ncs3y8Jjuo1R1Q&riu=http%3a%2f%2fpngimg.com%2fuploads%2flinux%2flinux_PNG1.png&ehk=WnSApZQujaAZhbsANGv96vrNuGnwsqpuoic82QOxg3s%3d&risl=&pid=ImgRaw&r=0' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'GitLab', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Ansible', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
  { name: 'Jenkins', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Terraform', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'Prometheus', img: 'https://avatars.githubusercontent.com/u/3380462?s=200&v=4' },
  { name: 'Grafana', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
  { name: 'Trivy', img: 'https://dyltqmyl993wv.cloudfront.net/assets/stacks/trivy/img/trivy-stack-220x234.png' },
  { name: 'SonarQube', img: 'https://artifacthub.io/image/949a653d-9573-4e6f-8a20-443126e55656@3x' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Maven', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
  { name: 'AWS', img: 'https://www.pngall.com/wp-content/uploads/13/AWS-Logo-PNG-Images.png' },
  { name: 'Azure', img: 'https://www.pngmart.com/files/23/Azure-Logo-PNG-Clipart.png' },
  { name: 'GCP', img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/google-cloud-platform-gcp-small-square%20thumbnail.png' },
];

export default function Partners() {
  return (
    <section className="p-8 bg-white">
      <h3 className="text-center text-3xl font-bold mb-10">🛠️ My Skills</h3>
      <div className="overflow-hidden">
        <div className="flex items-center space-x-12 animate-scroll-x">
          {clients.map((client, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[120px]">
              <img
                src={client.img}
                alt={client.name}
                className="w-24 h-12 object-contain mb-2 rounded shadow bg-white"
                onError={e => { e.target.src = 'https://via.placeholder.com/96x48?text=Logo'; }}
              />
              <span className="text-sm font-medium">{client.name}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((client, idx) => (
            <div key={`dup-${idx}`} className="flex flex-col items-center min-w-[120px]">
              <img
                src={client.img}
                alt={client.name}
                className="w-24 h-12 object-contain mb-2 rounded shadow bg-white"
                onError={e => { e.target.src = 'https://via.placeholder.com/96x48?text=Logo'; }}
              />
              <span className="text-sm font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            animation: scroll-x 20s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </section>
  );
}
