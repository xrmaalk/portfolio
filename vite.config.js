import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "@svgr/rollup" //add to support SVGs
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
})
