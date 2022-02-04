<template>
<div>
  <post-list :posts="posts"/>
  
</div>
</template>

<script>
import {ref} from 'vue'
import PostList from '@/components/PostList.vue'
import {workerUnionInstance} from '@/request'

export default {
  name: 'HotPage',
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
    workerUnionInstance.get("/home/popular").then(response => {
      const data = response.data;
      const posts = data.data;
      vm.posts = posts;
    })
  }
}
</script>

<style>

</style>

