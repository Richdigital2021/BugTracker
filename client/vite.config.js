// client/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: resolve(__dirname, "."), // 👈 or just remove this line completely
  plugins: [react(), tailwindcss()],
  build: {
    outDir: resolve(__dirname, "../dist"),
    emptyOutDir: true,
  },
});
