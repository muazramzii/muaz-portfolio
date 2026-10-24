# Muaz Ramzi — Portfolio

A modern, animated personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for production
```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

## Deploy
- **Vercel / Netlify:** import the repo — framework auto-detects as Vite (`vercel.json` included). Build: `npm run build`, output: `dist`.
- **Hostinger (static):** run `npm run build`, then upload the **contents of `dist/`** to `public_html`.

## Customise (all in one place)
- **Content:** `src/data.js` — name, role, email, phone, projects, skills, experience, certs.
- **Resume:** drop `resume.pdf` into `public/` (the Download Resume button points to `/resume.pdf`).
- **Profile photo:** in `src/components/Hero.jsx`, replace the `<svg>` portrait with
  `<img src="/profile.jpg" alt="Muaz Ramzi" className="h-full w-full object-cover" />`
  and place `profile.jpg` in `public/`.
- **Project thumbnails:** swap the `<Thumb />` placeholders (in `src/components/Projects.jsx`
  and `ProjectModal.jsx`) for real screenshots if you want.
- **Contact form:** currently validates client-side only. To actually receive messages,
  connect a backend (Formspree, Web3Forms, or your own API) where the `NOTE:` comment is
  in `src/components/Contact.jsx`.
- **Colors / theme:** CSS variables in `src/index.css` (`html[data-theme='dark']` / `light`).

## Project structure
```
src/
  context/ThemeContext.jsx   # dark/light, persisted
  components/
    Navbar, Hero, About, Skills, Experience,
    Projects, ProjectModal, Certifications, Contact, Footer,
    ScrollProgress, ScrollToTop, Splash, Brand (icons), ui (Reveal/CountUp/Thumb)
  data.js                    # all editable content
  App.jsx                    # composition
  index.css                  # theme tokens + utilities
```

## Features
Dark/light toggle · scroll progress · active-section nav · animated reveals · count-up stats ·
animated gradient background · infinite skills marquee · filterable projects with spring modal ·
form validation + success toast · scroll-to-top · splash screen · SEO + JSON-LD · reduced-motion support · fully responsive.
