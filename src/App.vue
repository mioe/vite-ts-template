<template>
  <div
    class="relative min-h-screen flex flex-col text-hex-24292e dark:text-hex-adbac7"
  >
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
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
