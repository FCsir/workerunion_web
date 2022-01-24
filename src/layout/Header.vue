<template>
  <div class="worker-header">
    <div class="nav-start">
      <Logo />
    </div>
    <div class="nav-content">
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
      <div class="nav-items">
        <n-auto-complete
          :input-props="{
            autocomplete: 'disabled'
          }"
          :options="options"
          v-model:value="searchValue"
          placeholder="搜索"
          class="nav-search-input"
        />
         <n-button type="primary" class="publish-button" @click="goToWrite">发布</n-button>
      </div>
    </div>
    <div class="nav-end">
      <Tips class="nav-tips"/>
      <ProfileMenuButton class="nav-profile"/>
    </div>
  </div>
</template>

<script>
import { computed, ref, h, resolveComponent} from 'vue'
import Logo from '@/components/Logo.vue'
import Tips from '@/components/Tips.vue'
import ProfileMenuButton from '@/components/ProfileMenuButton.vue'

const menuOptions = [
  {
    label: () =>
    h(
      resolveComponent('router-link'),
      {
        to: {
          name: "dailylaw",
        }
      },
      {default: () => "每日一法"}
    ),
    key: 'dailylaw',
  },
  {
    label: () =>
    h(
      resolveComponent('router-link'),
      {
        to: {
          name: "recommendation",
        }
      },
      {default: () => "推荐"}
    ),
    key: 'recommendation',
  },
  {
    label: () =>
    h(
      resolveComponent('router-link'),
      {
        to: {
          name: "hot",
        }
      },
      {default: () => "最热"}
    ),
    key: 'hot',
  },
  {
    label: () =>
    h(
      resolveComponent('router-link'),
      {
        to: {
          name: "new",
        }
      },
      {default: () => "最新"}
    ),
    key: 'new',
  },
]

export default {
  name: 'Header',
  components: {
    Logo,
    Tips,
    ProfileMenuButton,
  },
  setup() {
    const valueRef = ref('')
    return {
      activeactiveKey: ref(null),
      menuOptions,
      searchValue: valueRef,
      options: computed(() => {
        return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
          const prefix = valueRef.value.split('@')[0]
          return {
            label: prefix + suffix,
            value: prefix + suffix
          }
          })
      })
    }
  },
  methods: {
    goToWrite() {
      this.$router.push({name: "write-post"})
    }
  }
}
</script>

<style>
.worker-header {
  display: flex;
  align-items: center;
  padding: 10px 0;
  width: 1000px;
  margin: auto;
}

.nav-items, .nav-content{
  align-items: center;
  display: flex;
}

.nav-end, .nav-start {
  display: flex;
  align-items: center;
}

.nav-items {
  margin-left: 20px;
}

.nav-start {
  margin-right: 20px;
}

.publish-button {
  margin-left: 15px;
}

.nav-tips {
  margin-right: 20px;
}

.nav-profile {
  display: flex;
  align-items: center;
}

.nav-search-input {
  width: 300px;
}

.nav-end {
  margin-left: auto;
}

@media screen and (max-width: 1024px) {
  .worker-header {
    padding-left: 10px;
    padding-right: 10px;
  }
}

</style>