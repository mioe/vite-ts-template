<template>
  <main class="relative">
    <div class="container mx-auto px-4">
      <img class="block mx-auto" alt="Vue logo" src="@/assets/logo.png">
      <HelloWorld msg="Hello Vue 3 + Vite" />
    </div>
  </main>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld,
  },
})
</script>
