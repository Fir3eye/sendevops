import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="footgrid">
          <div>
            <h3>SenDevOps</h3>
            <p>Reliable pipelines, secure infra, and fewer 3am pages.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <p><a href="#our-work">Our Work</a></p>
            <p><a href="#services">Services</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
          <div>
            <h4>Contact</h4>
            <p><a href="mailto:hello@sendevops.example">hello@sendevops.example</a></p>
            <p>India • Remote</p>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} SenDevOps. All rights reserved.</div>
      </div>
    </footer>
  )
}