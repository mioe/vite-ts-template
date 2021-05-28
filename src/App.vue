<template>
  <div class="relative min-h-screen flex flex-col">
    <AppHeader />
    <router-view />
    <AppFooter class="mt-auto" />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
