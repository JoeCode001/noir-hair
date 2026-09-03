# Noir Hair Co. — Hair Extensions

A professional, responsive portfolio site built with **React + Vite + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc).

## Pages

- `/` — Home
- `/shop` — Product listing with category filtering
- `/product/:id` — Product detail page
- `/about` — Brand story
- `/contact` — Contact form

## Notes

- Product photography is sourced from Unsplash (free license) for demo purposes — swap in real product photos in `src/data/products.js` before using commercially.
- Colors and fonts are defined in `tailwind.config.js` — change them there to re-theme the whole site.
