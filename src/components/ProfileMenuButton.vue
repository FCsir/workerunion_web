<template>
  <div class="workerunion-profile-icon">
      <n-avatar
      size="small"
      @click="goToProfile"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
  </div>
</template>

<script>
export default {
  name: 'ProfileMenuButton',
  methods: {
    goToProfile() {
      this.$router.push({"name": "profile", params: {"userid": 1}})
    }
  }
}
</script>

<style>
.workerunion-profile-icon {
  cursor: pointer;
}

</style>

