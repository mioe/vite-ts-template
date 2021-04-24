<template>
  <AppHeader />

  <main class="container mx-auto px-4">
    <router-view />
  </main>

  <AppFooter />
</template>


<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

export default defineComponent({
  name: 'App',
  setup() {
    const { t } = useI18n()

    useHead({
      // Can be static or computed
      title: computed(() => t('hello')),
      meta: [
        {
          name: 'description',
          content: computed(() => t('hello')),
        },
      ],
    })

    return {}
  },
})
</script>
