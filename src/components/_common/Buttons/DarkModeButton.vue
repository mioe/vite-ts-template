<template>
  <button
    class="min-h-7.5 inline-flex items-center space-x-1 px-3 py-1 bg-hex-fafbfc dark:bg-hex-373e47 border rounded-md border-hex-e1e4e8 dark:border-hex-444c56 focus:outline-none"
    @click="toggleDark"
  >
    <icon-carbon-moon v-if="isDark" />
    <icon-carbon-sun v-else />
    <span v-if="withLabels" class="capitalize">
      {{ isDark ? labelDark : labelLight }}
    </span>
  </button>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { isDark, toggleDark } from '@/plugins/dark-mode'

export default defineComponent({
  props: {
    withLabels: {
      type: Boolean,
      default: false,
    },
    labelDark: {
      type: String,
      default: 'Dark',
    },
    labelLight: {
      type: String,
      default: 'Light',
    },
  },
  setup() {
    return {
      isDark,
      toggleDark,
    }
  },
})
</script>
