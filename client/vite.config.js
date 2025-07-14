import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ Use the Vite plugin
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  root: "client", // Set to where your index.html lives
  build: {
    outDir: "dist", // Or whichever output dir you want
  },
});
