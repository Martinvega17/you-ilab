import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Tamaño en kB
  },
  plugins: [
    react()],
  base: "/you-ilab/",
});
