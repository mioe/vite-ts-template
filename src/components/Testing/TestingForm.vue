<template>
  <div>
    <h2>TestingForm</h2>
    <div>
      <FormInput
        v-model="text"
        placeholder="TestingInput"
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
