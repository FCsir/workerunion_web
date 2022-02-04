<template>
<div>
  <post-list :posts="posts"/>
</div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import {ref} from 'vue';
import {workerUnionInstance} from '@/request'

export default {
  name: 'Index',
  components: {
    PostList,
  },
  setup() {
    const postsRef = ref();
    return {
      posts: postsRef
    }
  },
  mounted() {
    let vm = this;
    // this.$store.commit('auth/setAccessToken', "")
    workerUnionInstance.get("/home/recommend").then(response => {
      const data = response.data;
      const posts = data.data;
      vm.posts = posts;
    })
  }
}
</script>

<style>

</style>

