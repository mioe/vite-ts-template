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
    <h2>TestingColors - Buttons Classes</h2>
    <div>
      <button class="mr-[16px] mb-[8px]">
        Testing button-default
      </button>
    </div>
    <h2>TestingColors - Text Classes</h2>
    <p
      v-for="color in colors2"
      :key="color"
      :style="`color: var(${color});`"
    >
      [{{ color }}] - Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eius, rerum repellat quam tenetur earum repudiandae iusto enim temporibus libero aliquam adipisci quod. Dolores velit nam itaque ea ullam sed.
    </p>
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
      '--border-default',
    ])

    const colors2 = ref([
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

    return {
      colors,
      colors2,
    }
  },
})
</script>
