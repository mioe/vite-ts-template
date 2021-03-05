<template>
  <div>
    <h2>TestingCompositionApiSyntax [logPrefix: composition-api-syntax]</h2>
    <button
      class="bg-gray-200 px-2 py-1 rounded"
      @click="toggleBtn"
    >
      toggleBtn()
    </button>
  </div>
</template>


<script lang="ts">
import { defineComponent, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate,
  onDeactivated, onErrorCaptured, onMounted, onUnmounted, onUpdated, onRenderTracked, onRenderTriggered, ref, computed, watch } from 'vue'

export default defineComponent({
  name: 'TestingCompositionApiSyntax', // если не указан ставит name как название файла
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
  setup() {
    onBeforeMount(() => console.log('before mount'))
    onMounted(() => console.log('mounted'))
    onBeforeUpdate(() => console.log('before update'))
    onUpdated(() => console.log('updated'))
    onBeforeUnmount(() => console.log('before unmount'))
    onUnmounted(() => console.log('unmounted'))
    onActivated(() => console.log('activated'))
    onDeactivated(() => console.log('deactivated'))
    onErrorCaptured(() => console.error('error captured'))
    onRenderTracked(() => console.log('render tracked'))
    onRenderTriggered(() => console.log('render triggered'))

    // methods
    const toggleBtn = () => {
      console.log('🐹 toggleBtn')
    }

    // data
    const testData = ref('vue-default-syntax')
    const num = ref(1)
    const bool = ref(false)
    const arr = ref(['a', 'b', 'c'])
    const arrDeep = ref([1, 2, 3])

    // computed
    const testComputed = computed(() => num.value + 5 )

    // watch
    watch(bool, (val: boolean) => num.value = val ? num.value * 2 :  num.value / 2)
    watch(arr, (newVal, oldVal) => console.log('🐹 array is updated', newVal, oldVal))
    watch(arrDeep, (newVal, oldVal) => console.log('🐹 array is updated', newVal, oldVal), { deep: true })

    return {
      toggleBtn,
      testData,
      num,
      bool,
      arr,
      arrDeep,
      testComputed,
    }
  },
})
</script>
