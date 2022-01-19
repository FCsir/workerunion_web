<template>
  <n-space vertical size="large" class="workerunion">
    <n-layout class="workerunion-main">
      <n-layout-header class="layout-header"><Header/></n-layout-header>
      <n-layout-content class="layout-content"><Content/></n-layout-content>
      <n-layout-footer class="layout-footer"><Footer/></n-layout-footer>
    </n-layout>
  </n-space>
</template>

<script>
import Header from '@/layout/Header.vue'
import Content from '@/layout/Content.vue'
import Footer from '@/layout/Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Content,
    Footer,
  },
  setup() {
    console.log("layout")
    return {}
  }
}
</script>

<style>
.workerunion {
  min-width: 1000px;
}

.workerunion-main {
  position: relative;
  min-height: 100vh;

}

.layout-content {
  padding-bottom: 2.5rem;
}

.layout-footer {
  position: absolute;
  bottom: 0;
  height: 2.5rem;
  width: 100%;
}

.layout-header {
  background: white;
  z-index: 10;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  position: relative;

}
</style>

