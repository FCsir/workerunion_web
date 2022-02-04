<template>
    <n-space vertical>
      <n-empty class="workerunion-posts-empty" v-if="!posts || posts.length == 0" description="你什么也找不到">
        <template #extra>
          <n-button size="small">发布</n-button>
        </template>
      </n-empty>

      <n-card 
      :key="post.id"
      v-for="post in posts"
      size="small"
      class="workerunion-post-card"
      > 
        <template #header> 
          <div
            class="workerunion-post-card-title"
            @click="goToDetail(post.id)"
          >
            {{post.title}}
          </div>
        </template>
        <div
            class="workerunion-post-card-content"
            v-html="post.content"
            @click="goToDetail(post.id)"
        >
        </div>
        <template #action >
          <div class="workerunion-post-card-action">
            <n-button-group size="tiny" strong>
              <n-button :bordered="false">
                <template #icon>
                  <n-icon>
                    <chat-icon />
                  </n-icon>
                </template>
                回答
              </n-button>
              <n-button :bordered="false">
                <template #icon>
                  <n-icon>
                    <star-icon />
                  </n-icon>
                </template>
                收藏
              </n-button>
              <n-button :bordered="false">
                <template #icon>
                  <n-icon>
                    <share-icon />
                  </n-icon>
                </template>
                分享
              </n-button>
            </n-button-group>
          </div>
        </template>
      </n-card>
    </n-space>
</template>

<script>
import { 
  ChatbubbleOutline as ChatIcon,
  ShareSocialOutline as ShareIcon,
  StarOutline as StarIcon
  } from '@vicons/ionicons5'

export default {
  name: 'PostList',
  props: {
    posts: Array
  },
  components: {
    ChatIcon,
    StarIcon,
    ShareIcon,
  },
  methods: {
    goToDetail (postId) {
      console.log("go to dtail", postId)
      this.$router.push({name: "postdetail", params: {postid: postId}})
    }
  }
}
</script>

<style>
.workerunion-post-card-title {
  cursor: pointer;
}

.workerunion-post-card-content {
  cursor: pointer;
}

.workerunion-post-card-action {
  display: flex;
  justify-content: flex-end;
}

.workerunion-posts-empty {
  margin-top: 90px;
}
</style>
