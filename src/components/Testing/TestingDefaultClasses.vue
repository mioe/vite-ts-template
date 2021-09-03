<script setup lang="ts">
import { ref, Ref } from 'vue'
const setClear: Ref<boolean> = ref(false)
</script>

<template>
  <section>
    <h2>TestingDefaultClasses</h2>
    <!-- eslint-disable vuejs-accessibility/form-control-has-label -->
    <label>
      <input v-model="setClear" type="checkbox">
      <span class="ml-[10px]">set clear class</span>
    </label>
    <div class="space-y-[10px]">
      <label class="block">
        <p>input:</p>
        <input type="text" :class="{'clear': setClear}">
      </label>
      <label class="block">
        <p>textarea:</p>
        <textarea :class="{'clear': setClear}" />
      </label>
      <label class="block">
        <p>select:</p>
        <select :class="{'clear': setClear}">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
      <div class="inline-flex flex-wrap">
        <button :class="{'clear': setClear}">
          Button
        </button>
        <button :class="{'clear': setClear}">
          My button
        </button>
        <button :class="{'clear': setClear}">
          <span>My</span>
          <span>button</span>
        </button>
        <button :class="{'clear': setClear}">
          <icon-carbon-dicom-overlay />
          <span>Button</span>
        </button>
        <button :class="{'clear': setClear}">
          <icon-carbon-dicom-overlay />
        </button>
        <button :class="[{'clear': setClear}, 'success']">
          My success button
        </button>
        <button :class="[{'clear': setClear}, 'danger']">
          My danger button
        </button>
      </div>
    </div>
    <!-- eslint-enable vuejs-accessibility/form-control-has-label -->
  </section>
</template>
