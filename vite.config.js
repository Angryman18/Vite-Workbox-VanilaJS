import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import manifest from "./manifest.json";

export default defineConfig({
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      devOptions: {
        enabled: true,
      },
      manifest,
    }),
  ],
  server: {
    port: 3000,
  },
});
