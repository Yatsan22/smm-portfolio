# SMM Portfolio 2026 — Anastasiia Riabchyi

A static, no-backend portfolio: plain HTML/CSS/JS, GSAP + ScrollTrigger (animation) and Lenis (smooth scroll) loaded from a CDN. No build step.

## Run locally
Needs Node.js 18+ (or any static server).
```
npm run dev      # serves the folder, open the printed URL
npm run check    # lists asset files that are still missing
```
Opening `index.html` directly may block ES modules; use the dev server.

## Assets
- `assets/vinyl/vinyl.png` — **required**: top-down electric-blue record, transparent background, 3000px+ wide. If your file is another colour, tune `--vinyl-filter` in `src/css/style.css` (e.g. `hue-rotate(...)`).
- `assets/images/about/portrait.jpg` — About portrait.
- `assets/images/case-0X-.../` — one folder per case. File names are listed in `src/js/content.js` (`media`).
- `assets/images/final/contact.jpg` — optional contact visual.
- Use lowercase file names (GitHub/Vercel/Netlify are case-sensitive). Missing files show a labelled empty frame instead of breaking.

To replace an asset, overwrite the file with the same name, or change the name in `content.js`.

## Edit content
All text, dates, stats and image lists are in `src/js/content.js`. Contact links go in `contacts` there. Colours and spacing: top of `src/css/style.css`.

## Deploy
- **GitHub Pages:** push to GitHub → Settings → Pages → Deploy from branch → `main` / root.
- **Vercel:** Add New Project → import the repo → Framework "Other", no build command, output directory `.`.
- **Netlify:** Add new site → import the repo → leave build command empty, publish directory `.`.

Accessibility: `prefers-reduced-motion` disables smooth scroll, vinyl rotation and scroll animations; theme changes become instant.
