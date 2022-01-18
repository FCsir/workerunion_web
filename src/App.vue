<template>
  <n-space vertical size="large" class="workerunion">
    <n-layout>
      <n-layout-header><Header/></n-layout-header>
      <n-layout-content><Content/></n-layout-content>
      <n-layout-footer><Footer/></n-layout-footer>
    </n-layout>
  </n-space>
</template>

<script>
import Header from '@/layout/Header.vue'
import Content from '@/layout/Content.vue'
import Footer from '@/layout/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
  }
}
</script>

<style>
.workerunion {
  min-width: 900px;
}
</style>

