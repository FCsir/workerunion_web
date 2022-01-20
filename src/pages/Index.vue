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

