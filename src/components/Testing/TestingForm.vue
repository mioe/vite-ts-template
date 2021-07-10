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
      <template v-for="f in fields" :key="f">
        <FormCheckbox
          v-model="testArray"
          :value="f"
        />
      </template>
      {{ testArray }}
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import FormCheckbox from '../_common/Form/FormCheckbox.vue'

export default defineComponent({
  setup() {
    const text: Ref<string> = ref('')
    const fields: Ref<Array<string>> = ['Vue', 'Vue3', 'Windicss']
    const testArray: Ref<Array<string>> = ref([])

    return {
      text,
      fields,
      testArray,
    }
  },
})
</script>
