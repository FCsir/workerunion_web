<template>
<div>
  <post-list :posts="posts"/>
  
</div>
</template>

<script>
import PostList from '@/components/PostList.vue'

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
  }
}
</script>

<style>

</style>

