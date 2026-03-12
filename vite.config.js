import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
plugins: [
react(),
VitePWA({
registerType: "autoUpdate",


  includeAssets: [
    "icon-192.png",
    "icon-512.png",
    "apple-touch-icon.png"
  ],

  manifest: {
    name: "Partha Gayen Portfolio",
    short_name: "Partha",

    description: "Full Stack Developer Portfolio",

    start_url: "/",
    scope: "/",

    display: "standalone",
    orientation: "portrait",

    theme_color: "#000000",
    background_color: "#000000",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  },

  workbox: {
    cleanupOutdatedCaches: true,
    clientsClaim: true,
    skipWaiting: true
  },

  devOptions: {
    enabled: true
  }
})


]
});
