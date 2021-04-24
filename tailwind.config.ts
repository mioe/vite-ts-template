import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class', // or 'media' or 'class'
  plugins: [],
  theme: {
    colors: {
      gray: colors.trueGray,
    },
  },
})
