import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // assetFileNames: (assetInfo) => {
        //   if (assetInfo.name && assetInfo.name.endsWith(".css")) {
        //     return "assets/[name]-[hash][extname]";
        //   }
        //   return "assets/[name]-[hash][extname]";
        // },

        // This will emit entry JS at root 'index.js'
        entryFileNames: `[name].js`,
        chunkFileNames: `assets/chunk-[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    copyPublicDir: true,
  },
  assetsInclude: ["**/*.png", "**/*.ico", "**/*.txt"],
});
