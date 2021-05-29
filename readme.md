# Vue 3 + Typescript + Vite
> This template should help get you started developing with Vue 3 and Typescript in Vite.

## requires:
- nodejs >= 14

## recomentded ide:
- vscode

## install project:
```bash
yarn
yarn dev # dev-serve
yarn build # generate SPA
yarn serve # show SPA
```

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

Remove file `src/plugins/vue-i18n.ts`:
```bash
rm ./src/plugins/vue-i18n.ts
rm ./src/components/Testing/TestingI18n.vue
```

Change `./src/views/Testing.vue`:
```diff
<template>
  <main class="relative">
    <div class="container mx-auto pt-[10px] px-[16px]">
      <h1 class="text-xl mb-[20px]">
        Testing
      </h1>

      <div class="space-y-[20px]">
-       <TestingI18n />

        <TestingColors />

        <TestingDefaultSyntax
          test-required-prop="success"
          test-bool-prop
          :test-num-prop="20"
        />

        <TestingGetData />

        <TestingCompositionApiSyntax
          test-required-prop="success"
          test-bool-prop
          :test-num-prop="20"
        />

        <TestingVitePluginIcons />
      </div>
    </div>
  </main>
</template>
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

Change `tsconfig.json`:
```diff
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "types": [
-     "vite/client",
-     "@intlify/vite-plugin-vue-i18n/client"
+     "vite/client"
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["./src/**/*.ts", "./src/**/*.d.ts", "./src/**/*.tsx", "./src/**/*.vue"]
}
```
