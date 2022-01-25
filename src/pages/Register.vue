<template>
  <div class="register-container">
    <div class="register-form-container">
      <n-card title="注册">
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
          <n-form-item label="邮箱" path="email">
            <n-input placeholder="邮箱" v-model:value="formValue.email" />
          </n-form-item>
          <n-form-item label="昵称" path="nickname">
            <n-input placeholder="昵称" v-model:value="formValue.nickname" />
          </n-form-item>
          <n-form-item label="密码" path="password">
            <n-input placeholder="密码" type="password" v-model:value="formValue.password" />
          </n-form-item>
          <n-form-item
            first
            path="reenteredPassword"
            label="重复密码"
            ref="rPasswordFormItemRef"
          >
            <n-input
              :disabled="!formValue.password"
              v-model:value="formValue.reenteredPassword"
              type="password"
              placeholder="重复密码"
              @keydown.enter.prevent
            />
          </n-form-item>
          <n-form-item label="验证码" path="code">
            <n-input-group>
            <n-input placeholder="验证码" v-model:value="formValue.code">
            </n-input>
             <n-button type="primary" ghost>发送验证码</n-button>
            </n-input-group>
          </n-form-item>
          <n-form-item label="协议" path="agreement">
            <n-checkbox v-model:checked="formValue.agreement">用户协议</n-checkbox>
          </n-form-item>
          <n-form-item class="workerunion-profile-buttons">
            <n-button type="primary" @click="handleValidateClick" attr-type="button" block>注册</n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </div>
    <div>
      已有账号，请
       <n-button
        text
        tag="a"
        href="/login"
        target="_blank"
        type="primary"
        >登录</n-button
      >
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'Register',
  setup() {
    const formRef = ref(null)
    const rPasswordFormItemRef = ref(null)
    const formValue =  ref({
        password: null,
        reenteredPassword: null,
        nickname: '',
        agreement: null,
        code: '',
        email: '',
      });

    function validatePasswordStartWith (rule, value) {
      return (
        formValue.value.password &&
        formValue.value.password.startsWith(value) &&
        formValue.value.password.length >= value.length
      )
    }
    function validatePasswordSame (rule, value) {
      return value === formValue.value.password
    }
    return {
      formRef,
      size: ref('medium'),
      formValue,
      rPasswordFormItemRef ,
      rules: {
        nickname: {
          required: true,
          message: '请输入昵称',
          trigger: 'blur'
        },
        agreement: {
          required: true,
          message: '请同意用户协议',
        },
        code: {
          required: true,
          message: '请输入验证码',
        },
        email: {
          required: true,
          message: '请输入邮箱',
          trigger: 'blur'
        },
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 8,
            trigger: ['input'],
            message: '密码最少8位'
          }
        ],
        reenteredPassword: [
          {
            required: true,
            message: '请再次输入密码',
            trigger: ['input', 'blur']
          },
          {
            validator: validatePasswordStartWith,
            message: '两次密码输入不一致',
            trigger: 'input'
          },
          {
            validator: validatePasswordSame,
            message: '两次密码输入不一致',
            trigger: ['blur', 'password-input']
          }
        ]
      },
    }
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  height: 100vh;
  align-items: center; 
  justify-content: center;
  flex-direction: column;
  background-image: url('~@/assets/background.jpg');
  background-size: cover;
}

.register-form-container {
  width: 400px;
}
</style>