<template>
  <div class="container mx-auto py-2 flex justify-between text-gray-700 dark:text-gray-200">
    <nav class="space-x-4">
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

    <div>
      <button class="icon-btn mx-2 cursor-pointer" @click="toggleDark">
        <carbon-moon v-if="isDark" />
        <carbon-sun v-else />
      </button>
    </div>
  </div>

  <main class="container mx-auto mb-4 text-gray-700 dark:text-gray-200">
    <router-view />
  </main>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { isDark, toggleDark } from '@/plugins/dark-mode'

export default defineComponent({
  name: 'App',
  setup() {
    return {
      isDark,
      toggleDark,
    }
  },
})
</script>
