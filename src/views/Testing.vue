<template>
  <main class="relative">
    <div class="container mx-auto px-4">
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
    </div>
  </main>
</template>
