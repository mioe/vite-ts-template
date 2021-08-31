<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { useStore } from '@/stores/main'
const store = useStore()
const {
  changeName,
} = store

const name: ComputedRef<string> = computed(() => store.name)
const greetings: ComputedRef<string> = computed(() => store.greetings)
const handleInput = (ev: any) => changeName(ev.target.value)
</script>

<template>
  <section>
    <h2>TestingPinia</h2>
    <div class="space-y-[5px]">
      <label for="hello">
        <p>greetings = <b>{{ greetings }}</b></p>
        <input
          id="hello"
          type="text"
          :value="name"
          @input="handleInput"
        >
      </label>
    </div>
  </section>
</template>
