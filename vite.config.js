import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@images": "/src/assets/images",
      "@styles": "/src/assets/styles",
      "@sections": "/src/components/sections",
      "@shared": "/src/components/shared",
      "@pages": "/src/pages",
    },
  },
});
