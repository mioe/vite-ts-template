<template>
  <div>
    <h2>TestingGetData</h2>
    <button
      class="bg-gray-200 px-2 py-1 rounded"
      @click="getData"
    >
      getData()
    </button>
    <p v-if="isLoading">
      Loading...
    </p>
    <ul v-else class="relative w-full h-24 overflow-y-auto border border-gray-200 rounded">
      <li
        v-for="(post, idx) in posts"
        :key="idx"
      >
        {{ post }}
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { fakeApi } from '@/plugins/axios'

export default defineComponent({
  data: () => ({
    isLoading: false,
    posts: [],
  }),
  async mounted() {
    await this.getData()
  },
  methods: {
    async getData() {
      this.isLoading = true
      try {
        const response = await fakeApi('/posts')
        this.posts = response.data
        this.isLoading = false
      } catch (err) {
        this.isLoading = false
        console.error('🐹 fakeApi', err)
      }
    },
  },
})
</script>


