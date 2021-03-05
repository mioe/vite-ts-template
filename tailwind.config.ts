import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: false, // or 'media' or 'class'
  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
})
