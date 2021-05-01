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
import 'windi.css' // tailwindcss demon
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
```ts
...
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    ...
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
})

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

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.
