<template>
  <img class="block mx-auto" alt="Vue logo" src="@/assets/logo.png">
  <HelloWorld msg="Hello Vue 3 + Vite" />
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
