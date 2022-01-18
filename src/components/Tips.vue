<template>
  <div>
    <n-badge :value="value" :max="15">
      <n-avatar />
    </n-badge>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'Tips',
  setup() {
    return {
      value: ref(5)
    }
  }
}
</script>

<style>

</style>

