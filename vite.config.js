import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy: {
      '/api': {
           target: 'cip_url',//請自行置換
           changeOrigin: true,
           secure: true,
           rewrite: (path) => path.replace(/^\/api/, '')
       }
    }
  }
})
