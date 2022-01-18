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
        />
         <n-button type="primary" class="publish-button">发布</n-button>
      </div>
    </div>
    <div class="nav-end">
      <Tips class="nav-tips"/>
      <ProfileMenuButton class="nav-profile"/>
    </div>
  </div>
</template>

<script>
import { computed, h, ref } from 'vue'
import Logo from '@/components/Logo.vue'
import Tips from '@/components/Tips.vue'
import ProfileMenuButton from '@/components/ProfileMenuButton.vue'

const menuOptions = [
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        '每日一法'
      ),
    key: 'hear-the-wind-sing',
  },
  {
    label: '推荐',
    key: 'pinball',
  },
  {
    label: '最热',
    key: 'pinball-1973',
  },
  {
    label: '最新',
    key: 'a-wild-sheep-chase',
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
  }
}
</script>

<style>
.worker-header {
  display: flex;
  align-items: center;
  padding: 10px 10%;
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

.nav-end {
  margin-left: auto;
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

@media screen and (max-width: 1024px) {
  .worker-header {
    padding-left: 10px;
    padding-right: 10px;
  }
}

</style>