<template>
  <div>
    <div class="workerunion-post">
      <n-card title="卡片">卡片内容

        <template #action >
          <div class="workerunion-post-card-action">
            <n-button-group size="tiny" strong>
              <n-button :bordered="false">
                <template #icon>
                  <n-icon>
                    <chat-icon />
                  </n-icon>
                </template>
                评论
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
    </div>

    <div class="workerunion-post-answers">
      answers
    </div>
  </div>
</template>

<script>
import { 
  ChatbubbleOutline as ChatIcon,
  ShareSocialOutline as ShareIcon,
  StarOutline as StarIcon
  } from '@vicons/ionicons5'



export default {
  name: 'PostDetail',
  components: {
    StarIcon,
    ChatIcon,
    ShareIcon,
  }
}
</script>

<style>
</style>

