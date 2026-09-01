import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  ssgOptions: {
    // "nested" -> /blog/index.html (URL limpia /blog), como ya sirve
    // Vercel por defecto para un directorio estático. Con "flat" (el valor
    // por defecto del plugin) generaría /blog.html, que no coincide con
    // las URLs que ya usa la web ni con lo que espera vercel.json.
    dirStyle: "nested",
  },
}));