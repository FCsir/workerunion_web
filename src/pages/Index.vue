<template>
<div>
  <post-list :posts="posts"/>
  
</div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import {workerUnionInstance} from '@/request'

export default {
  name: 'Index',
  components: {
    PostList,
  },
  setup() {
    return {
      posts: [
        {"id": 1, "content": "content", "title": "title"},
        {"id": 2, "content": "content", "title": "title"},
        {"id": 3, "content": "content", "title": "title"}
      ]
    }
  },
  mounted() {
    // this.$store.commit('auth/setAccessToken', "")
    let response = workerUnionInstance.get("/home/latest", {"tset": "test"})
    console.log("response--------", response)
  }
}
</script>

<style>

</style>

