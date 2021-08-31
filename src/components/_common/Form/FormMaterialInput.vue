<script setup lang="ts" >
import { ref, Ref, computed, ComputedRef } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
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
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void,
}>()

const isFocus: Ref<boolean> = ref(false)

const valueIsNotEmpty: ComputedRef<boolean> = computed(() =>
  props.modelValue
    ? props.modelValue.length > 0
    : false,
)

const onFocus = (): void => { isFocus.value = true }
const onBlur = (): void => { isFocus.value = false }
const onInput = (ev: any): void => { emit('update:modelValue', ev.target.value) }
</script>

<template>
  <label
    :for="id"
    class="relative inline-block w-full border bg-$primary"
    :class="{'border-$rare': isFocus && !disabled}"
  >
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      placeholder=""
      class="clear w-full min-h-[34px] px-[10px] pt-[16px] pb-[2px] text-[16px] focus:outline-none bg-transparent"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    >
    <span
      class="absolute inline-block top-0 left-[10px] text-[16px] transform"
      :class="isFocus || valueIsNotEmpty
        ? 'translate-y-[2px] scale-70'
        : 'translate-y-[10px] scale-100'
      "
      style="transition: transform var(--transition); transform-origin: top left;"
    >
      {{ placeholder }}
    </span>
  </label>
</template>



