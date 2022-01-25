<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <router-view></router-view>
      </n-message-provider>
  </n-config-provider>
</template>

<script>
import { NConfigProvider } from 'naive-ui'

  const themeOverrides = {
    common: {
      bodyColor: "#f6f6f6"
    },
    Button: {
    },
  }


export default {
  name: 'App',
  components: {
    NConfigProvider,
  },
  setup() {
    return {
      themeOverrides
    }
  },
   watch: {
      $route: {
        immediate: true,
        handler(to, from) {
          console.log("form--", from)
          document.title = to.meta.title || "打工者联合工会";
        }
      },
    }
}
</script>

<style>


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

