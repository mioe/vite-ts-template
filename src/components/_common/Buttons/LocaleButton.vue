<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { availableLocales, locale } = useI18n()

const toggleLocales = (): void => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  localStorage.setItem('i18n', locale.value)
}
</script>

<template>
  <button
    class="justify-center uppercase"
    @click="toggleLocales()"
  >
    {{ locale }}
  </button>
</template>
