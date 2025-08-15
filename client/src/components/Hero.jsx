import React from 'react'

export default function Hero({contactRef}){
  return (
    <section className="hero">
      <div className="container">
        <h1>Ship faster with <span style={{color:'var(--blue)'}}>battle-tested DevOps</span></h1>
        <p>Linux, Git, Docker, Kubernetes, Terraform, CI/CD — we build reliable pipelines and scalable infra that just works.</p>
        <a className="cta" href="#contact" onClick={(e)=>{e.preventDefault();contactRef?.current?.scrollIntoView({behavior:'smooth'})}}>Get a free consultation</a>
      </div>
    </section>
  )
}