<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import routesConfig from '@/router/routes'

const routes = reactive(routesConfig)
const route = useRoute()
</script>

<template>
  <header class="sticky top-0 z-90 border-b bg-$secondary">
    <div class="container mx-auto px-[16px] py-[8px] flex items-center justify-between">
      <nav class="space-x-[16px]">
        <router-link
          v-for="(r, idx) in routes"
          :key="idx"
          :to="{ name: r.name }"
          :class="{'text-$vue': r.name === route.name}"
        >
          {{ r.name }}
        </router-link>
      </nav>
      <div class="flex items-center">
        <DarkModeButton with-labels />
      </div>
    </div>
  </header>
</template>
