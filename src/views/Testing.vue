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

    <TestingVitePluginIcons />
  </div>
</template>
