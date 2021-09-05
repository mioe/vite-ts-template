<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LocaleButton from '@/components/_common/Buttons/LocaleButton.vue'
const { t } = useI18n()
</script>

<template>
  <section>
    <h2>TestingVueI18n</h2>
    <p>Hello: {{ t('hello') }}</p>
    <LocaleButton />
  </section>
</template>
