# SenDevOps — Single‑Page DevOps Services Site (React + Node)

A clean, modern single-page site with a blue header, services dropdown, Our Work section, and Contact form.

## Prereqs
- Node.js 18+ and npm

## Run locally
```bash
cd server
npm install
npm run dev
# server on http://localhost:4000

# in another terminal:
cd ../client
npm install
npm run dev
# open the URL that Vite prints (usually http://localhost:5173)
```

The frontend proxies `/api/*` to the backend (configured in `vite.config.js`). The contact form saves messages to `server/contacts.json`.

## Build for production
```bash
# build static files
cd client
npm run build
# files will be in client/dist/
```

## Deploy ideas
- Frontend: S3/CloudFront, Netlify, Vercel, or Nginx on EC2  
- Backend API: EC2, Render, Railway, Fly.io, or as a Docker container
```bash
# Example Dockerfile ideas (not included): multistage for client, slim node for server
```