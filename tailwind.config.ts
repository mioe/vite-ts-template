import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class', // or 'media' or 'class'
  plugins: [],
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
      borderColor: {
        'btn-default': '#e1e4e8',
        'btn-primary': '#2b9048',
        dark: {
          'btn-default': '#444c56',
          'btn-primary': '#46954a',
        },
      },
      backgroundColor: {
        card: '#ffffff',
        'btn-default': '#fafbfc',
        'btn-primary': '#2ea44f',
        dark: {
          card: '#22272e',
          'btn-default': '#373e47',
          'btn-primary': '#347d39',
        },
      },
      textColor: {
        default: '#24292e',
        secondary: '#586069',
        primary: '#0366d6',
        danger: '#cb2431',
        success: '#22863a',
        warning: '#b08800',
        dark: {
          default: '#adbac7',
          secondary: '#768390',
          primary: '#539bf5',
          danger: '#e5534b',
          success: '#6bc46d',
          warning: '#daaa3f',
        },
      },
    },
  },
})
