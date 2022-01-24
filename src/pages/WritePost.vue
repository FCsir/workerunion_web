<template>
  <div>
    <div>
      <n-input size="large" round placeholder="标题" />
      <div class="ckeditor-container">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
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
          <n-button type="primary">保存</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ref } from 'vue'

export default {
  name: 'WritePost',
  setup() {
    return {
      tags: ref([]),
      postStatus: 'draft',
      postStatusOptions: [
        {label: "发布", value: "publish"},
        {label: "草稿", value: "draft"},
      ],
      isAnonymous: false,
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
          // The configuration of the editor.
      }
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