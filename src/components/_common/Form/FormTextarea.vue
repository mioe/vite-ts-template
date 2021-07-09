<template>
  <div
    class="relative border rounded bg-$background-primary"
    :class="{'border-$rare': isFocus && !disabled}"
  >
    <textarea
      :id="id"
      :value="modelValue"
      :disabled="disabled"
      placeholder=""
      class="w-full min-h-[34px] px-[10px] pt-[16px] pb-[2px] text-[16px] focus:outline-none bg-transparent"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    />
    <label
      :for="id"
      class="absolute inline-block top-0 left-[10px] text-[16px] transform"
      :class="isFocus || valueIsNotEmpty
        ? 'translate-y-[2px] scale-70'
        : 'translate-y-[10px] scale-100'
      "
      style="transition: transform var(--transition); transform-origin: top left;"
    >
      {{ placeholder }}
    </label>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, Ref, computed, ComputedRef } from 'vue'

const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: generateId(),
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const isFocus: Ref<boolean> = ref(false)

    const valueIsNotEmpty: ComputedRef<boolean> = computed(() =>
      props.modelValue
        ? props.modelValue.length > 0
        : false,
    )

    const onFocus = () => {
      isFocus.value = true
    }

    const onBlur = () => {
      isFocus.value = false
    }

    const onInput = (ev: any) => {
      emit('update:modelValue', ev.target.value)
    }

    return {
      isFocus,
      valueIsNotEmpty,
      onFocus,
      onBlur,
      onInput,
    }
  },
})
</script>
