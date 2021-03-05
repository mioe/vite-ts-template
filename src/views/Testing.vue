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

    <TestingCompositionApiSyntax
      test-required-prop="success"
      test-bool-prop
      :test-num-prop="20"
    />
  </div>
</template>


<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
import TestingDefaultSyntax from '@/components/Testing/TestingDefaultSyntax.vue'
import TestingGetData from '@/components/Testing/TestingGetData.vue'
import TestingCompositionApiSyntax from '@/components/Testing/TestingCompositionApiSyntax.vue'
/* eslint-enable @typescript-eslint/no-unused-vars */
</script>
