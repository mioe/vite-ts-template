import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import { visualizer } from 'rollup-plugin-visualizer'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('🦕 vite.config.ts/defineConfig', command, mode)

  return {
    base: mode === 'development' ? './' : '/vite-ts-template/',

    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      vue(),

      // https://github.com/antfu/vite-plugin-windicss
      WindiCSS(),

      // https://github.com/intlify/vite-plugin-vue-i18n
      VueI18n({
        include: [path.resolve(__dirname, 'locales/**')],
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        // auto import icons
        resolvers: [
          // https://github.com/antfu/unplugin-icons
          IconsResolver({
            componentPrefix: 'icon',
          }),
        ],
      }),

      // https://github.com/antfu/unplugin-icons
      Icons(),

      // https://github.com/btd/rollup-plugin-visualizer
      visualizer(),
    ],
  }
})
