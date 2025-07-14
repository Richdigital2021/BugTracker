// client/vite.config.js  ← file sits inside /client
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // root: resolve(__dirname, 'client'),   ← ❌ remove this
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist", // /client/dist
    emptyOutDir: true,
  },
});
