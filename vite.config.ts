import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src",
      // Pre-render the (static) routes to HTML at build time so crawlers and
      // social scrapers get fully-rendered pages without executing JS.
      // crawlLinks stays OFF: this is a single page (nav is all in-page #
      // anchors), and crawling would follow the PDF links and re-emit them
      // through the text pipeline, corrupting the binaries. The index route
      // is prerendered regardless; public/ assets are copied verbatim.
      prerender: { enabled: true, crawlLinks: false },
    }),
    viteReact(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
