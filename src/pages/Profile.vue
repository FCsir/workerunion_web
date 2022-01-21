<template>
  <div>
      <n-card title="基本信息" style="margin-bottom: 16px;">
        <n-form
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
        :model="formValue"
        :rules="rules"
        :size="size"
        class="workerunion-profile-form"
        ref="formRef"
        :style="{
          maxWidth: '640px'
        }"
      >
        <n-form-item label="邮箱" path="phone">
          <n-input placeholder="邮箱" v-model:value="formValue.phone" disabled />
        </n-form-item>
        <n-form-item label="电话号码" path="phone">
          <n-input placeholder="电话号码" v-model:value="formValue.phone" />
        </n-form-item>
        <n-form-item label="昵称" path="phone">
          <n-input placeholder="昵称" v-model:value="formValue.phone" />
        </n-form-item>
        <n-form-item label="年龄" path="user.age">
          <n-input placeholder="输入年龄" v-model:value="formValue.user.age" />
        </n-form-item>
        <n-form-item label="性别" path="user.age">
          <n-input placeholder="性别" v-model:value="formValue.user.age" />
        </n-form-item>
        <n-form-item class="workerunion-profile-buttons">
          <n-button @click="handleValidateClick" attr-type="button">验证</n-button>
        </n-form-item>
      </n-form>
      </n-card>

    <div class="user-infos">
      <n-card title="动态" style="margin-bottom: 16px;">
        <n-tabs type="line">
          <n-tab-pane name="oasis" tab="帖子">帖子</n-tab-pane>
          <n-tab-pane name="the beatles" tab="回答">回答</n-tab-pane>
          <n-tab-pane name="jay chou" tab="评论">评论</n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import 'vue-advanced-cropper/dist/style.css';


export default {
  name: 'Profile',
  setup() {
    const formRef = ref(null)
    const message = useMessage()

    return {
      formRef,
      size: ref('medium'),
      formValue: ref({
        user: {
          name: '',
          age: ''
        },
        phone: ''
      }),
      rules: {
        user: {
          name: {
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          },
          age: {
            required: true,
            message: '请输入年龄',
            trigger: ['input', 'blur']
          }
        },
        phone: {
          required: true,
          message: '请输入电话号码',
          trigger: ['input']
        }
      },
      handleValidateClick () {
        formRef.value.validate((errors) => {
          if (!errors) {
            message.success('Valid')
          } else {
            console.log(errors)
            message.error('Invalid')
          }
        })
      }
    }
  }

}
</script>

<style>
.workerunion-profile-buttons {
  justify-content: end;
}
.profile-container {
  padding: 20px 20px;
  box-shadow: 1px 1px 3px rgb(18 18 18 / 10%);
}
.user-infos {
  margin-top: 20px;
}
</style>

