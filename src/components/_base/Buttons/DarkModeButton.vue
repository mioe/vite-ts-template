<template>
  <button class="min-h-7.5 inline-flex items-center space-x-1 px-3 py-1 bg-btn-default dark:bg-dark-btn-default border rounded-md shadow-lg border-btn-default dark:border-dark-btn-default focus:outline-none" style="line-height: 1;" @click="toggleDark">
    <icon-carbon-moon v-if="isDark" />
    <icon-carbon-sun v-else />
    <span v-if="withLabel" class="capitalize">
      {{ isDark ? t('themeDark') : t('themeLight') }}
    </span>
  </button>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { isDark, toggleDark } from '@/plugins/dark-mode'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    withLabel: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { t } = useI18n()

    return {
      isDark,
      toggleDark,
      t,
    }
  },
})
</script>
