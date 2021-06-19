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


<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'

export default defineComponent({
  setup() {
    const text: Ref<string> = ref('')

    return {
      text,
    }
  },
})
</script>
