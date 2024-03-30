import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@configs": path.resolve(__dirname, "./src/configs"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@graphql": path.resolve(__dirname, "./src/graphql"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [react()],
  build: {
    outDir: "./dist",
  },
});
