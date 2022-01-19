<template>
  <n-config-provider :theme-overrides="themeOverrides">
      <router-view></router-view>
  </n-config-provider>
</template>

<script>
import { NConfigProvider } from 'naive-ui'

  const themeOverrides = {
    common: {
      primaryColor: '#a7d7f9'
    },
    Button: {
      textColor: '#a7d7f9'
    },
    Select: {
      peers: {
        InternalSelection: {
          textColor: '#a7d7f9'
        }
      }
    }
    // ...
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

