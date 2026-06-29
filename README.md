# Deepanshu Garg — Portfolio

A 3D, animated portfolio landing page for **Deepanshu Garg**, Software Developer.

Built with **React + Vite**, **Three.js** (via `@react-three/fiber` and `@react-three/drei`) for the interactive 3D hero scene, and **Framer Motion** for scroll animations.

## Features

- Interactive 3D hero scene (mouse-parallax, floating geometry, distortion material, starfield)
- Animated, tilt-on-hover project cards
- Sections: Hero, Stats, Projects, Skills, About, Contact
- Fully responsive + `prefers-reduced-motion` support
- Zero backend — static, deploy anywhere (Vercel, Netlify, GitHub Pages)

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # lint
```

## Customizing

All content (name, projects, skills, socials) lives in [`src/data.js`](src/data.js). Edit that file to make it yours.
