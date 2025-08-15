import React from 'react'

const services = [
  { name: 'Linux Administration', points: ['Hardening & backups', 'Users, permissions, automation', 'HAProxy/Nginx/Apache setup']},
  { name: 'Git & CI/CD', points: ['GitHub/GitLab flows', 'Actions/Runners', 'Blue/green & canary deploys']},
  { name: 'Docker & Containers', points: ['Dockerfiles, Compose', 'Image scanning & SBOM', 'Local dev envs']},
  { name: 'Kubernetes', points: ['Ingress, HPA, Autoscaling', 'Helm/ArgoCD GitOps', 'EKS/AKS/GKE']},
  { name: 'Terraform (IaC)', points: ['Workspaces & modules', 'AWS/Azure provisioning', 'Policy as code']},
  { name: 'Monitoring & Observability', points: ['Prometheus/Grafana', 'Logs & traces', 'SLOs & alerts']},
]

export default function Services(){
  return (
    <div className="grid">
      {services.map((s, i)=> (
        <article className="card" key={i}>
          <h3>{s.name}</h3>
          <ul>
            {s.points.map((p, j)=>(<li key={j}>{p}</li>))}
          </ul>
        </article>
      ))}
    </div>
  )
}