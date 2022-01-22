<template>
  <div>
    <div>
      <n-input size="large" round placeholder="标题" />
      <div class="ckeditor-container">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      </div>
      <div>
        <div>
          <div>标签</div>
          <n-dynamic-tags v-model:value="tags" :max="4" />
        </div>
        <div>
          <n-checkbox v-model:checked="isAnonymous">是否匿名发布</n-checkbox>
        </div>
        <div>
          <div>状态</div>
          <n-select v-model:value="postStatus" :options="postStatusOptions" />
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
      postStatus:'draft',
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
.ck-editor__editable {
    min-height: 700px;
    max-height: 700px;
}

.ckeditor-container {
  margin-top: 10px;
}
</style>