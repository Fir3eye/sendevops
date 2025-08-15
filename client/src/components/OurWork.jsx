import React from 'react'

const items = [
  {
    title: 'E‑commerce CI/CD on AWS',
    desc: 'GitHub Actions → EC2 blue/green with Nginx, zero‑downtime deploys',
    tags: ['Git', 'Nginx', 'EC2', 'Blue/Green']
  },
  {
    title: 'Kubernetes on EKS',
    desc: 'Production‑grade cluster with Ingress, HPA, and GitOps',
    tags: ['K8s', 'EKS', 'ArgoCD']
  },
  {
    title: 'Terraform IaC',
    desc: 'Declarative AWS VPC, ALB, RDS with workspaces',
    tags: ['Terraform', 'AWS']
  },
  {
    title: 'Dockerization',
    desc: 'Multi‑stage Dockerfiles + compose for microservices',
    tags: ['Docker', 'Compose']
  },
  {
    title: 'Observability Stack',
    desc: 'Prometheus, Grafana, Loki, Alertmanager',
    tags: ['Monitoring', 'SLOs']
  },
  {
    title: 'Cost Optimization',
    desc: 'Autoscaling, spot instances, and right‑sizing',
    tags: ['FinOps', 'Autoscaling']
  }
]

export default function OurWork(){
  return (
    <div className="grid">
      {items.map((it, idx)=> (
        <article className="card" key={idx}>
          <h3>{it.title}</h3>
          <p>{it.desc}</p>
          <div style={{marginTop:10}}>
            {it.tags.map((t,i)=>(<span className="badge" key={i}>{t}</span>))}
          </div>
        </article>
      ))}
    </div>
  )
}