<template>
  <button
    class="w-8.5 h-8.5 inline-flex justify-center items-center rounded-full border overflow-hidden focus:outline-none"
    :class="currentClass"
  >
    <slot />
  </button>
</template>


<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (val: string) => ['default', 'primary'].indexOf(val) !== -1,
    },
  },
  setup(props) {
    const variants = reactive({
      default: 'bg-btn-default dark:bg-dark-btn-default border-btn-default dark:border-dark-btn-default',
      primary: 'text-white bg-btn-primary dark:bg-dark-btn-primary border-btn-primary dark:border-dark-btn-primary',
    })

    const currentClass = computed(() => variants[props.variant])

    return {
      variants,
      currentClass,
    }
  },
})
</script>
