<template>
  <label>
    <input
      type="checkbox"
      :checked="isChecked"
      @input="handleCheck()"
    >
    <span>
      {{ value }}
    </span>
  </label>
</template>


<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  emits: [
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const isChecked = computed(() => props.modelValue.includes(props.value))

    const handleCheck = () => {
      const values = [...props.modelValue]
      if (isChecked.value) {
        values.splice(values.indexOf(props.value), 1)
      } else {
        values.push(props.value)
      }
      emit('update:modelValue', values)
    }

    return {
      isChecked,
      handleCheck,
    }
  },
})
</script>
