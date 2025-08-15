import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try{
      const res = await fetch('/api/contact', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      if(!res.ok) throw new Error('Request failed')
      setForm({name:'', email:'', message:''})
      setStatus('Thanks! We will get back to you shortly.')
    }catch(err){
      setStatus('Failed to send. Please try again.')
    }
  }

  return (
    <form onSubmit={submit}>
      <input placeholder="Your name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
      <input type="email" placeholder="Your email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
      <textarea rows="5" placeholder="Tell us about your needs..." value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required />
      <button type="submit">Send Message</button>
      <div className="status">{status}</div>
    </form>
  )
}