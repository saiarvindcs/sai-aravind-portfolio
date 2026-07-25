# Sai Aravind Portfolio

Responsive multi-page portfolio built with React, Vite and React Icons.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Replace your details

Edit `src/data/portfolioData.js`:

- Email and phone
- GitHub and LinkedIn URLs
- Repository URLs
- About/project content if needed

Replace:

- `public/avatar-placeholder.svg` with your real photo (and update `avatar` path)
- `public/resume/Sai-Aravind-Resume.pdf` with your resume
- Add screenshots under `public/project-images/`

## Deployment

The generated `dist` folder can be deployed to Vercel, Netlify, Cloudflare Pages or any static host.

For GitHub Pages with BrowserRouter, configure SPA fallback or switch to HashRouter.
