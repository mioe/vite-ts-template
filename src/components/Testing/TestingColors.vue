<template>
  <div>
    <h2>TestingColors</h2>
    <div class="flex flex-wrap">
      <div
        v-for="color in colors"
        :key="color"
        class="border rounded-full p-[4px] mr-[16px] mb-[8px]"
        :style="`background: var(${color});`"
      >
        {{ color }}
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const colors = ref([
      '--background-default',
      '--background-primary',
      '--background-secondary',
      '--color-default',
      '--border-default',
    ])

    return {
      colors,
    }
  },
})
</script>
