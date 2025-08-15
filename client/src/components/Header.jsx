import React, { useState } from 'react'

export default function Header({refs}){
  const [open, setOpen] = useState(false)
  const scrollTo = (ref) => ref?.current?.scrollIntoView({behavior:'smooth', block:'start'})

  return (
    <header>
      <nav className="container nav">
        <div className="brand">
          <a href="#home" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>
            SenDevOps <span>Services</span>
          </a>
        </div>
        <div className="menu">
          <a href="#our-work" onClick={(e)=>{e.preventDefault();scrollTo(refs.workRef)}}>Our Work</a>
          <div className={"dropdown " + (open ? "open" : "")}>
            <div className="dropdown-btn" onClick={()=>setOpen(!open)}>
              Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9l6 6 6-6"/></svg>
            </div>
            <div className="dropdown-menu" onMouseLeave={()=>setOpen(false)}>
              <a href="#services" onClick={(e)=>{e.preventDefault();scrollTo(refs.servicesRef)}}>Linux Administration</a>
              <a href="#services" onClick={(e)=>{e.preventDefault();scrollTo(refs.servicesRef)}}>Git & CI/CD</a>
              <a href="#services" onClick={(e)=>{e.preventDefault();scrollTo(refs.servicesRef)}}>Docker & Containers</a>
              <a href="#services" onClick={(e)=>{e.preventDefault();scrollTo(refs.servicesRef)}}>Kubernetes</a>
              <a href="#services" onClick={(e)=>{e.preventDefault();scrollTo(refs.servicesRef)}}>Terraform (IaC)</a>
              <a href="#services" onClick={(e)=>{e.preventDefault();scrollTo(refs.servicesRef)}}>Monitoring & Observability</a>
            </div>
          </div>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo(refs.contactRef)}}>Contact</a>
        </div>
      </nav>
    </header>
  )
}