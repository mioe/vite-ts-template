<template>
  <div>
    <h2>TestingForm</h2>
    <div class="space-y-[5px]">
      <FormInput
        v-model="text"
        placeholder="FormInput"
      />
      <FormTextarea
        v-model="text"
        placeholder="FormTextarea"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, Ref } from 'vue'

const text: Ref<string> = ref('')
</script>
