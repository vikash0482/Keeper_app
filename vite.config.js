import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(
  {
  plugins: [react()],
  preview: {
    
    allowedHosts: ['keeper-app-60qh.onrender.com'],
  },
})
