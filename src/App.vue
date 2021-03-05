<template>
  <nav class="flex py-2 justify-center space-x-4">
    <router-link
      :to="({name: 'Home'})"
      :class="{'font-bold': $route.name === 'Home'}"
    >
      Home
    </router-link>
    <router-link
      :to="({name: 'About'})"
      :class="{'font-bold': $route.name === 'About'}"
    >
      About
    </router-link>
    <router-link
      :to="({name: 'Testing'})"
      :class="{'font-bold': $route.name === 'Testing'}"
    >
      Testing
    </router-link>
  </nav>

  <main class="container mx-auto mb-4">
    <router-view />
  </main>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
