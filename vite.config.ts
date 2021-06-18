import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('🦕 vite.config.ts/defineConfig', command, mode)

  return {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      vue(),

      // https://github.com/antfu/vite-plugin-windicss
      WindiCSS(),

      // https://github.com/antfu/vite-plugin-components
      ViteComponents({
        // auto import icons
        customComponentResolvers: [
          // https://github.com/antfu/vite-plugin-icons
          ViteIconsResolver({
            componentPrefix: 'icon',
          }),
        ],
      }),

      // https://github.com/antfu/vite-plugin-icons
      ViteIcons(),
    ],
  }
})
