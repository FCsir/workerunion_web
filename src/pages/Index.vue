<template>
    <n-space vertical>
      <n-card title="中卡片" size="small" > 
        <template #header-extra> #header-extra </template>
        卡片内容
        <template #action> #action </template>
      </n-card>
      <n-card title="中卡片" size="small" > 
        <template #header-extra> #header-extra </template>
        卡片内容
        <template #action> #action </template>
      </n-card>
    </n-space>
</template>

<script>

export default {
  name: 'Index',
  components: {
  },
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

