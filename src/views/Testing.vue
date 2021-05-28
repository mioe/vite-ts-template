<template>
  <main class="relative">
    <div class="container mx-auto pt-[10px] px-[16px]">
      <h1 class="text-xl mb-[20px]">
        Testing
      </h1>

      <div class="space-y-[20px]">
        <TestingColors />

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
