<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { isDark, toggleDark } from '@/plugins/dark-mode'

const props = defineProps({
  labelDark: {
    type: String,
    default: null,
  },
  labelLight: {
    type: String,
    default: null,
  },
})

const withLabels: ComputedRef<boolean> = computed(() => !!props.labelDark && !!props.labelLight)
</script>

<template>
  <button
    class="inline-flex items-center px-[8px] space-x-[8px]"
    @click="toggleDark()"
  >
    <icon-carbon-moon v-if="isDark" />
    <icon-carbon-sun v-else />
    <span v-if="withLabels" class="capitalize">
      {{ isDark ? labelDark : labelLight }}
    </span>
  </button>
</template>
