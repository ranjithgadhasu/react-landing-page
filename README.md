# Nexova: React + Vite + Tailwind CSS (Pure JavaScript / JSX)

A fully responsive 8-section landing page. All source code is `.js` / `.jsx`. source.

## Tech Stack

- React 19 (JSX)
- Vite 7
- Tailwind CSS 4
- Pure JavaScript animations (IntersectionObserver and requestAnimationFrame)
- lucide-react (icons)
- clsx and tailwind-merge (class helpers)

## Project Structure

```
src/
  main.jsx
  App.jsx
  index.css
  components/
    Navbar.jsx, Hero.jsx, About.jsx, Features.jsx,
    HowItWorks.jsx, Testimonials.jsx, Pricing.jsx,
    CTA.jsx, Footer.jsx, BackToTop.jsx,
    Reveal.jsx, SectionHeading.jsx
  hooks/
    useCountUp.js, useInView.js
  utils/
    cn.js
  data/
    content.js
index.html    -> entry point: /src/main.jsx
jsconfig.json -> JSX and @/ alias config
```

## Replacing the line in package.json

On this platform `package.json` is locked, so apply this change on your computer.

Replace your whole `package.json` with the following:

```json
{
  "name": "react-vite-tailwind",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "clsx": "2.1.1",
    "lucide-react": "^1.55.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "tailwind-merge": "3.4.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.17",
    "@vitejs/plugin-react": "5.1.1",
    "react": "^19.2.6",
    "tailwindcss": "4.1.17",
    "vite": "7.3.2",
    "vite-plugin-singlefile": "2.3.0"
  }
}
```

What changed:
- ADDED: `"react": "^19.2.6"` in `devDependencies`, 

Note: React is also listed in `dependencies`, which is where it belongs. The copy in `devDependencies` is redundant. It is harmless, but if you want a clean file, delete that one line.

Then run:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Build

```bash
npm run build
```

The output is written to `dist/index.html`.
