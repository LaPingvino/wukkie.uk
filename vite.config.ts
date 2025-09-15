import { defineConfig } from "vite";

export default defineConfig({
  root: "src/frontend",
  publicDir: "../../static",
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "src/frontend/index.html",
      },
    },
    target: "es2018",
    sourcemap: true,
    minify: "esbuild",
  },
  esbuild: {
    target: "es2018",
    format: "esm",
    keepNames: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
