import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Unocss(), react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#12766e',
          dark: true,
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: '',
      },
    ],
  },
})
