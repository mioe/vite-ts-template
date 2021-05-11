# Vue 3 + Typescript + Vite
> This template should help get you started developing with Vue 3 and Typescript in Vite.

## init vite-ssg
Install package:
```bash
yarn add @vue/server-renderer vite-ssg --dev
```

Change `src/main.ts`:
```ts
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from './router/routes' // via vite-ssg

/**
 * Styles
 */
import 'virtual:windi.css' // tailwindcss demon
import '@/assets/sass/main.sass'

/**
 * via vite-ssg: https://github.com/antfu/vite-ssg
 */
// `export const createApp` is required
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, isClient }) => {
    // install plugins etc.
  }
)
```

Add `vite.config.ts`:
```diff
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
     ...
    ],
+   ssgOptions: {
+     script: 'async',
+     formatting: 'minify',
+   },
  }
})
```

Change `package.json`:
```diff
{
  "scripts": {
    "dev": "vite",
-   "build": "vite build"
+   "build": "vite-ssg build"
  }
}
```

# remove vue-i18n
Remove packages:
```bash
yarn remove vue-i18n @intlify/vite-plugin-vue-i18n
```

Remove locales folder:
```bash
rm -rf ./locales
```

Remove file `src/plugin/vuei-18n.ts`:
```bash
rm ./src/plugin/vuei-18n.ts
```

Change `src/App.vue`:
```diff
<script lang="ts">
- import { defineComponent, computed } from 'vue'
- import { useI18n } from 'vue-i18n'
- import { useHead } from '@vueuse/head'
+ import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
- setup() {
-   const { t } = useI18n()
-
-   useHead({
-     // Can be static or computed
-     title: computed(() => t('hello')),
-     meta: [
-       {
-         name: 'description',
-         content: computed(() => t('hello')),
-       },
-     ],
-   })
-
-   return {}
- },
})
</script>
```

Change `src/components/App/AppHeader.vue`:
```diff
...
<!-- toggle-settings -->
<div class="flex space-x-4">
- <div class="flex items-center">
-   <span>t('hello'): </span>
-   <span>{{ t('hello') }}</span>
-   <div class="ml-4 flex space-x-4">
-     <button
-       v-for="(lng, idx) in availableLocales"
-       :key="idx"
-       class="cursor-pointer"
-       :class="{'font-bold': locale === lng}"
-       @click="toggleLocales(lng)"
-     >
-       {{ lng }}
-     </button>
-   </div>
- </div>
  <DarkModeButton />
</div>
<!-- /toggle-settings -->
...
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import routes from '@/router/routes'
- import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
-   const { t, availableLocales, locale } = useI18n()

-   const toggleLocales = (langCode: string) => {
-     locale.value = langCode
-   }
-
    const routesList = reactive(routes)

    return {
-     t,
-     availableLocales,
-     locale,
-     toggleLocales,
      routesList,
    }
  },
...
```

Change `main.js`:
```diff
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * Plugins
 */
- import i18n from '@/plugins/vue-i18n'
import head from '@/plugins/vueuse-head'

/**
 * Styles
 */
import 'virtual:windi.css' // tailwindcss demon
import '@/assets/sass/main.sass'

/**
 * init app
 */
createApp(App)
  .use(router)
- .use(i18n)
  .use(head)
  .mount('#app')
```

Change `vite.config.ts`:
```diff
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
- import VueI18n from '@intlify/vite-plugin-vue-i18n'
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
      ...
-     // https://github.com/intlify/vite-plugin-vue-i18n
-     VueI18n({
-       include: [path.resolve(__dirname, 'locales/**')],
-     }),
      ...
    ],
  }
})
```
