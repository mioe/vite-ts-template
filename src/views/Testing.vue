<template>
  <h1 class="text-xl font-bold">
    Testing
  </h1>

  <div class="space-y-5">
    <TestingDefaultSyntax
      test-required-prop="success"
      test-bool-prop
      :test-num-prop="20"
    />

    <TestingGetData />
  </div>
</template>


<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
import TestingDefaultSyntax from '@/components/Testing/TestingDefaultSyntax.vue'
import TestingGetData from '@/components/Testing/TestingGetData.vue'
/* eslint-enable @typescript-eslint/no-unused-vars */
</script>
