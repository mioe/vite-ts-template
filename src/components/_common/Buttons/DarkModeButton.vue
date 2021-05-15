<template>
  <button class="min-h-7.5 inline-flex items-center space-x-1 px-3 py-1 bg-btn-default dark:bg-dark-btn-default border rounded-md border-btn-default dark:border-dark-btn-default focus:outline-none" style="line-height: 1;" @click="toggleDark">
    <icon-carbon-moon v-if="isDark" />
    <icon-carbon-sun v-else />
    <span v-if="withLabel" class="capitalize">
      {{ isDark ? labelDark : labelLight }}
    </span>
  </button>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { isDark, toggleDark } from '@/plugins/dark-mode'

export default defineComponent({
  props: {
    withLabel: {
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
