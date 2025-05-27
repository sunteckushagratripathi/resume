import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this to your desired port
    host: true,  // Optional: allows access from network
    open: true,   // Optional: automatically opens browser
    allowedHosts: ['sbstjwsvm1151']  // Allow access from specific hostname
  }
})
