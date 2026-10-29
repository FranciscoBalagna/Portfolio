# Portfolio · Francisco Martín Balagna

React 19 · Vite · Tailwind CSS 4 · Framer Motion · React Icons

## Ejecutar
```bash
npm install
npm run dev
```

## Personalizar
- Datos y email: `src/data/site.js` (**cambia el email**)
- Proyectos: `src/data/projects.js` (ejemplo comentado)
- Foto y avatar: `public/profile.jpg` y `public/avatar.png`
- CV: `public/cv.pdf`
- Sitemap: edita la URL en `public/sitemap.xml`

## Publicar gratis en GitHub Pages
1. Crea un repo en GitHub y sube el proyecto (rama `main`).
2. **Opción A (automática):** Settings → Pages → Source: **GitHub Actions**. Cada `git push` publica la web.
3. **Opción B (manual):** `npm run deploy` y en Settings → Pages elige la rama `gh-pages`.
4. Tu web quedará en `https://FranciscoBalagna.github.io/NOMBRE-DEL-REPO/`.
