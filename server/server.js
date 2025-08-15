import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import morgan from 'morgan'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Health check
app.get('/api/health', (req,res)=> res.json({status:'ok'}))

// Contact endpoint
app.post('/api/contact', (req, res)=>{
  const { name, email, message } = req.body || {}
  if(!name || !email || !message){
    return res.status(400).json({error:'Missing fields'})
  }
  const record = { name, email, message, at: new Date().toISOString() }
  const file = path.join(__dirname, 'contacts.json')
  try {
    const existing = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8') || '[]') : []
    existing.push(record)
    fs.writeFileSync(file, JSON.stringify(existing, null, 2))
  } catch (e){
    console.error('Failed to write contacts.json', e)
  }
  res.json({ok:true})
})

app.listen(PORT, ()=>{
  console.log('API listening on http://localhost:'+PORT)
})