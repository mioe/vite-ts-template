<script setup lang="ts">
import { watch, computed, ComputedRef } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void,
}>()

const onToggleModal = (bool: boolean) => {
  emit('update:modelValue', bool)
}

const isShow: ComputedRef<boolean> = computed(() => props.modelValue)
watch(isShow, (val) => {
  if (val) {
    document.body.classList.add('is-blocked')
  } else {
    document.body.classList.remove('is-blocked')
  }
})
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <section v-if="modelValue" class="fixed z-11 top-0 left-0 w-full h-full bg-[rgba(0,0,0,.9)]">
        <button class="absolute top-[2px] right-[2px] w-[50px] h-[50px] p-0 grid place-items-center ring-2 ring-$poor text-[30px] focus:ring-$rare" @click="onToggleModal(false)">
          <icon-carbon:close />
        </button>
        <div class="h-[30px]" />
        <slot />
        <div class="h-[30px]" />
      </section>
    </transition>
  </teleport>
</template>
