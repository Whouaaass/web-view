import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vike(), react(), tailwindcss()],
  base: "/web-view/",
  build: {
    target: "es2022",
    outDir: "dist", // default
    emptyOutDir: true, // clear dist/ before build, that's okay
  },
  resolve: {
    alias: {
      "#root": __dirname,
      "@": __dirname,
    },
  },
});
