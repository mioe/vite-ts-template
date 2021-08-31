<script setup lang="ts">
import { ref, Ref } from 'vue'
import axios from '@/plugins/axios'

const isLoading: Ref<boolean> = ref(false)
const posts: Ref<Array<any>> = ref([])

const getData = async() => {
  isLoading.value = true
  try {
    const response = await axios.get(import.meta.env.VITE_APP_FAKE_DATA + '/posts')
    posts.value = response.data
    isLoading .value= false
  } catch (err) {
    isLoading.value = false
    console.error('🐹 fakeApi', err)
  }
}
</script>
<template>
  <section>
    <div>
      <h2>TestingGetData</h2>
      <button @click="getData">
        getData()
      </button>
    </div>

    <p v-if="isLoading">
      Loading...
    </p>
    <ul v-else class="relative w-full h-24 overflow-y-auto border bg-$background-secondary rounded">
      <li
        v-for="(post, idx) in posts"
        :key="idx"
      >
        {{ post }}
      </li>
    </ul>
  </section>
</template>
