<template>
  <header class="relative container mx-auto p-4 flex justify-between items-center">
    <!-- navigation -->
    <nav class="space-x-4">
      <router-link
        v-for="(route, idx) in routesList"
        :key="idx"
        :to="({name: route.name})"
        :class="{'font-bold': $route.name === route.name}"
      >
        {{ route.name }}
      </router-link>
    </nav>
    <!-- /navigation -->

    <!-- toggle-settings -->
    <div class="flex space-x-4">
      <div class="flex items-center">
        <span>t('hello'): </span>
        <span>{{ t('hello') }}</span>
        <div class="ml-4 flex space-x-4">
          <button
            v-for="(lng, idx) in availableLocales"
            :key="idx"
            class="cursor-pointer"
            :class="{'font-bold': locale === lng}"
            @click="toggleLocales(lng)"
          >
            {{ lng }}
          </button>
        </div>
      </div>
      <button
        class="px-3 py-1 grid place-items-center mx-2 cursor-pointer border rounded-full focus:outline-none"
        @click="toggleDark"
      >
        <carbon-moon v-if="isDark" />
        <carbon-sun v-else />
      </button>
    </div>
    <!-- /toggle-settings -->
  </header>
</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue'
import routes from '@/router/routes'
import { isDark, toggleDark } from '@/plugins/dark-mode'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t, availableLocales, locale } = useI18n()

    const toggleLocales = (langCode: string) => {
      locale.value = langCode
    }

    const routesList = reactive(routes)

    return {
      isDark,
      toggleDark,
      t,
      availableLocales,
      locale,
      toggleLocales,
      routesList,
    }
  },
})
</script>
