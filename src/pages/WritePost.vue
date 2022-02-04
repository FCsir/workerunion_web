<template>
  <div>
    <div>
      <n-input size="large" round placeholder="标题" v-model:value="title"/>
      <div class="ckeditor-container">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @input="onEditorInput"></ckeditor>
      </div>
      <div class="post-info-container">
        <div>
          <div class="post-anonymous">
            <n-checkbox v-model:checked="isAnonymous">是否匿名发布</n-checkbox>
          </div>
          <div class="post-tags-container">
            <div class="post-tags-title">标签</div>
            <n-dynamic-tags v-model:value="tags" :max="4" />
          </div>
          <div class="post-status">
            <div class="post-status-title">状态</div>
            <n-select v-model:value="postStatus" :options="postStatusOptions" />
          </div>
        </div>
        <div class="post-actions">
          <n-button type="primary" @click="savePost">保存</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ref } from 'vue'
import { workerUnionInstance } from '@/request'
import { useMessage } from 'naive-ui'

export default {
  name: 'WritePost',
  setup() {
    return {
      messageUtil: useMessage(),
      tags: ref([]),
      title: ref(''),
      postStatus: ref('draft'),
      postStatusOptions: [
        {label: "发布", value: "publish"},
        {label: "草稿", value: "draft"},
      ],
      isAnonymous: ref(false),
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
          // The configuration of the editor.
      }
    }
  },
  methods: {
    onEditorInput(data, event, editor) {
      console.log( editor.editing.view );
    },
    savePost() {
      const postId = this.$route.params.postid 
      if (!postId) {
        this.createPost()
      }
    },
    createPost() {
      let vm = this
      workerUnionInstance.post('/post/add', {
        content: vm.editorData,
        title: vm.title,
        status: vm.postStatus,
        is_anymous: vm.isAnonymous,
        tags: vm.tags.join(',')
      }).then(response => {
        console.log("save post ", response)
      }).catch(error => {
        console.log(error)
        this.messageUtil.error("保存失败，注意保存内容")
      })
    }
  }
}
</script>

<style>
.ckeditor-container .ck-editor__editable {
    min-height: 700px;
    max-height: 700px;
}
</style>

<style scoped>

.ckeditor-container {
  margin-top: 10px;
}

.post-tags-title {
  font-size: 16px;
  margin-right: 20px;
}
.post-anonymous {
  margin-top: 15px;
  display: flex;
}

.post-tags-container {
  display: flex;
  margin-top: 15px;
}

.post-info-container {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  margin-top: 20px;
  display: flex;
}

.post-status {
  margin-top: 15px;
  display: flex;
  width: 240px;
}

.post-status-title {
  margin-right: 20px;
  width: 40px;
  height: 34px;
  line-height: 34px;
}

.post-actions {
  display: flex;
  justify-content: flex-end;
  flex: 1;
  align-self: end;
}
</style>