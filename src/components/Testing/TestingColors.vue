<script setup lang="ts">
import { ref, Ref } from 'vue'

const bgColors: Ref<Array<string>> = ref([
  '--document',
  '--primary',
  '--secondary',
  '--default',
])

const TextColors = ref([
  '--danger',
  '--poor',
  '--common',
  '--uncommon',
  '--rare',
  '--epic',
  '--legendary',
  '--artifact',
  '--heirloom',
])
</script>

<template>
  <div>
    <h2>TestingColors</h2>
    <div class="flex flex-wrap">
      <div
        v-for="color in bgColors"
        :key="color"
        class="border p-[4px] mr-[16px] mb-[8px]"
        :style="`background: var(${color});`"
      >
        {{ color }}
      </div>
    </div>
    <h2>TestingColors - Text Classes</h2>
    <p
      v-for="color in TextColors"
      :key="color"
      :style="`color: var(${color});`"
    >
      [{{ color }}] - Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eius, rerum repellat quam tenetur earum repudiandae iusto enim temporibus libero aliquam adipisci quod. Dolores velit nam itaque ea ullam sed.
    </p>
  </div>
</template>
