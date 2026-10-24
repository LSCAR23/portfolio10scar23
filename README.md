# Oscar — Portfolio

Personal portfolio: projects, tech stack, and contact. Live at
[portfolio10scar23.netlify.app](https://portfolio10scar23.netlify.app).

Built with React 19, Vite and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploy

Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`).

## Structure

```
src/
  App.jsx              dark/light theme + page layout
  components/          one file per section (Navbar, Hero, Metrics, Projects, Stack, About, Contact)
  mocks/               SVG previews for projects without screenshots
public/projects/       project screenshots
```
