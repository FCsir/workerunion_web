<template>
  <div class="workerunion-content">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Content',
}
</script>

<style>
.workerunion-content {
  max-width: 1000px;
  margin: auto;
  margin-top: 20px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
}

</style>

