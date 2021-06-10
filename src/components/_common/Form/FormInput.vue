<template>
  <div
    class="relative border rounded bg-$background-primary "
    :class="{'border-$rare': isFocus && !disabled}"
  >
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      placeholder=""
      class="w-full min-h-[34px] px-[10px] pt-[16px] pb-[2px] text-[16px] focus:outline-none bg-transparent"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    >
    <label
      :for="id"
      class="absolute inline-block top-0 left-0 text-[16px] transform "
      :class="isFocus || valueIsNotEmpty
        ? 'scale-70 -translate-x-[4px] translate-y-[2px] '
        : 'scale-100 translate-x-[10px] translate-y-[10px] '
      "
      style="transition: transform var(--transition), font-size var(--transition);"
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
    type: {
      type: String,
      default: 'text',
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
