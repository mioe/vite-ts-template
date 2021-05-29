<template>
  <pre v-highlightjs><code :class="lang"><slot>{{ sourcecode }}</slot></code></pre>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    lang: {
      type: String,
      default: 'javascript',
    },
    sourcecode: {
      type: String,
      default: `/**
 * Enter the text.
 * This is a test in the subject field.
 */`,
    },
  },
})
</script>
