<script setup lang="ts">
import { ref, Ref } from 'vue'

const isShow: Ref<boolean> = ref(false)
</script>

<template>
  <section>
    <h2>TestingModals</h2>
    <div class="space-y-[5px]">
      <button @click="isShow = true">
        Open Modal
      </button>
      <ModalDefault v-model="isShow">
        <section>
          Hello world
        </section>
      </ModalDefault>
    </div>
  </section>
</template>
