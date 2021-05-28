<template>
  <button
    class="inline-flex items-center space-x-[4px]"
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
