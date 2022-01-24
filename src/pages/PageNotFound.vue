<template>
  <div class="not-found">
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
      <template #footer>
        <n-button @click="goHome">主页</n-button>
      </template>
    </n-result>
  </div>
</template>

<script>

export default {
  name: 'PageNotFound',
  methods: {
    goHome () {
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

.not-found {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

