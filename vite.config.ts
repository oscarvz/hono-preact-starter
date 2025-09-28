import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import ssrComponents from "vite-ssr-components/plugin";

export default defineConfig({
  plugins: [cloudflare(), react(), ssrComponents()],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      "react-dom/client": "preact/compat",
    },
  },
});
