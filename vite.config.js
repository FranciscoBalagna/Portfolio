import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' funciona en cualquier repo de GitHub Pages sin tocar nada.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
