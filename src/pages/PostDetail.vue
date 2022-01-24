<template>
  <div>
    <div class="workerunion-post">
      <n-card title="卡片">卡片内容

        <template #action >
          <div class="workerunion-post-card-action">
            <n-button-group size="tiny" strong>
              <n-button :bordered="false" @click="scrollToAns">
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
                <n-button :bordered="false" @click="showModal=true">
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

    <div class="input-answers-form" ref="input-answer-form">
      <h3 class="input-answer-title">
        填写你的回答
      </h3>
      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      <div class="input-answer-buttons">
        <n-button type="primary">发布回答</n-button>
      </div>
    </div>

    <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      preset="dialog"
      title="评论"
      positive-text="发布"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
      negative-text="取消"
    >
      <n-input
        v-model:value="value"
        type="textarea"
        placeholder="请输入评论"
      />
    </n-modal>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ref } from 'vue'
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
  },
  setup() {
    const showModalRef = ref(false)
    return {
      showModal: showModalRef,
      onNegativeClick () {
        showModalRef.value = false
      },
      onPositiveClick () {
        showModalRef.value = false
      },
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
          // The configuration of the editor.
          height: 300,
      }
    }
  },
  methods: {
    scrollToAns () {
      let element = this.$refs['input-answer-form'];
      let top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
}
</script>

<style>
.input-answers-form .ck-editor__editable {
    min-height: 150px;
    max-height: 150px;
}
</style>
<style scoped>

.input-answer-buttons {
  margin-top: 10px;
  display: flex;
}

.input-answers-form {
  margin-top: 50px;
  margin-bottom: 30px;
  border-top: 1px solid rgb(223 225 227);
}

.workerunion-post-answers {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid rgb(223 225 227);
}

.workerunion-post-answer {
  border-top: 1px solid rgb(223 225 227);
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
  border-top: 1px solid rgb(223 225 227);
  margin-top: 15px;
}

.workerunion-post-comment {
  display: flex;
  margin-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.workerunion-post-comment:not(:first-child){
  border-top: 1px solid rgb(223 225 227);
}
</style>

