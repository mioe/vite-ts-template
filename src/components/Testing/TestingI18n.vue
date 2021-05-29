<template>
  <div>
    <h2>TestingI18n</h2>
    <p>t('hello'): {{ t('hello') }}</p>
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
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t, availableLocales, locale } = useI18n()

    const toggleLocales = (langCode: string) => {
      locale.value = langCode
    }

    return {
      t,
      availableLocales,
      locale,
      toggleLocales,
    }
  },
})
</script>
