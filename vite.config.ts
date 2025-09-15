import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src/frontend',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/frontend/index.html'
      }
    },
    target: 'es2022',
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
