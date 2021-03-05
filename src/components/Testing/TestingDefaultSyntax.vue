<template>
  <div>
    <h2>TestingDefaultSyntax [logPrefix: default-syntax]</h2>
    <button
      class="bg-gray-200 px-2 py-1 rounded"
      @click="toggleBtn"
    >
      toggleBtn()
    </button>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestingDefaultSyntax', // если не указан ставит name как название файла
  props: {
    testProps: {
      type: Object,
      default: () => ({
        foo: true,
        bar: 'gg',
      }),
    },
    testRequiredProp: {
      type: String,
      required: true,
      validator: (value: string) => {
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      },
    },
    testBoolProp: {
      type: Boolean,
      default: false,
    },
    testNumProp: {
      type: Number,
      default: null,
    },
  },
  data: () => ({
    testData: 'vue-default-syntax',
    num: 1,
    bool: false,
    arr: ['a', 'b', 'c'],
    arrDeep: [1, 2, 3],
  }),
  computed: {
    testComputed(): number {
      return this.num + 5 // output 6
    },
  },
  watch: {
    bool(val: boolean) {
      if (val === true) {
        this.num = this.num * 2
      } else {
        this.num = this.num / 2
      }
    },
    arr(newVal, oldVal) {
      console.log('🐹 array is updated', newVal, oldVal)
    },
    arrDeep: {
      handler(newVal, oldVal) {
        console.log('🐹 array is updated', newVal, oldVal)
      },
      deep: true,
    },
  },
  beforeCreate() {
    console.log('🦊 vue-default-syntax/beforeCreate', this.$root, this.$route)
  },
  created() {
    console.log('🦊 vue-default-syntax/created', this.$root, this.$route)
  },
  beforeMount() {
    console.log('🦊 vue-default-syntax/beforeMount', this.$root, this.$route)
  },
  mounted() {
    console.log('🦊 vue-default-syntax/mounted', this.$root, this.$route)
  },
  beforeUnmount() {
    console.log('🦊 vue-default-syntax/beforeUnmount (beforeDestoy)', this.$root, this.$route)
  },
  unmounted() {
    console.log('🦊 vue-default-syntax/unmounted (destroyed)', this.$root, this.$route)
  },
  methods: {
    toggleBtn() {
      console.log('🐹 toggleBtn')
    },
  },
})
</script>
