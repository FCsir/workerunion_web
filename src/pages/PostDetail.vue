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
    </div>

    <div class="workerunion-post-answers">
        <div class="workerunion-post-answer">
          <div class="workerunion-post-answer-content">
            content
          </div>
          <div class="workerunion-post-answer-footer">
            <div class="workerunion-post-answer-action">
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
                      <share-icon />
                    </n-icon>
                  </template>
                  分享
                </n-button>
              </n-button-group>
            </div>
            <div class="workerunion-post-answer-user">
              user
            </div>
          </div>
          <div class="workerunion-post-comments">
            <div class="workerunion-post-comment">
              <div class="workerunion-post-comment-content">comment content</div>
              <div class="workerunion-post-comment-user">comment user</div>
            </div>
            <div class="workerunion-post-comment">
              <div class="workerunion-post-comment-content">comment content</div>
              <div class="workerunion-post-comment-user">comment user</div>
            </div>
          </div>
        </div>
        <div class="workerunion-post-answer">
          <div class="workerunion-post-answer-content">
            content
          </div>
          <div class="workerunion-post-answer-footer">
            <div class="workerunion-post-answer-action">
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
                      <share-icon />
                    </n-icon>
                  </template>
                  分享
                </n-button>
              </n-button-group>
            </div>
            <div class="workerunion-post-answer-user">
              user
            </div>
          </div>
          <div class="workerunion-post-comments">
            <div class="workerunion-post-comment">
              <div class="workerunion-post-comment-content">comment content</div>
              <div class="workerunion-post-comment-user">comment user</div>
            </div>
            <div class="workerunion-post-comment">
              <div class="workerunion-post-comment-content">comment content</div>
              <div class="workerunion-post-comment-user">comment user</div>
            </div>
          </div>
        </div>

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
.workerunion-post-answers {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid rgb(241 242 243);
}

.workerunion-post-answer {
  border-top: 1px solid rgb(241 242 243);
  margin-top: 30px;
}

.workerunion-post-answer-content {
  margin-top:20px;
  margin-bottom: 20px;
}
.workerunion-post-answer-footer {
  display: flex;
  justify-content: space-between;
}

.workerunion-post-comments {
  border-top: 1px solid rgb(241 242 243);
  margin-top: 15px;
}

.workerunion-post-comment {
  display: flex;
  margin-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.workerunion-post-comment:not(:first-child){
  border-top: 1px solid rgb(241 242 243);
}
</style>

