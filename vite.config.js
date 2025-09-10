import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Caminho base para GitHub Pages (use o nome do repositório)
export default defineConfig({
  plugins: [react()],
  base: '/COGEC/', 
  root: '.', // raiz do projeto
  build: {
    outDir: 'dist', // saída da build
  },
})
