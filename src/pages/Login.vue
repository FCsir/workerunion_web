<template>
  <div class="login-container">
    <div class="login-form-container">
      <n-card title="登录">
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
          <n-form-item label="密码" path="password">
            <n-input placeholder="密码" type="password" v-model:value="formValue.password" />
          </n-form-item>
          <n-form-item class="workerunion-profile-buttons">
            <n-button type="primary" @click="login" attr-type="button" block >登录</n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </div>
    <div>
      没有账号，请
       <n-button
        text
        tag="a"
        href="/register"
        target="_blank"
        type="primary"
        >注册</n-button
      >
      <n-button
        text
        tag="a"
        href="/register"
        target="_blank"
        type="primary"
        >忘记密码</n-button
      >

    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import {workerUnionInstance} from '@/request'
import { useMessage } from 'naive-ui'

export default {
  name: 'Login',
  setup() {
    const formRef = ref(null)
    const formValue =  ref({
        password: null,
        email: '',
      });

    
    return {
      formRef,
      size: ref('medium'),
      formValue,
      messageUtil: useMessage(),
      rules: {
        email: {
          required: true,
          message: '请输入邮箱',
          trigger: 'blur'
        },
        password: [
          {
            required: true,
            message: '请输入密码'
          }
        ],
      },
    }
  },
  methods: {
    login() {
      this.formRef.validate(async (errors) => {
        if (!errors) {
          workerUnionInstance.post("/auth/login", {
            email: this.formValue.email,
            password: this.formValue.password,
          }).then((response) => {
            if (response.status == 200) {
              const accessToken = response.data.token 
              localStorage.setItem("accessToken", accessToken)
              this.$router.push("/");
            }
          }).catch(error => {
            const data = error.response.data.message;
            this.messageUtil.error(data, {duration: 3000})
          })
           
        }
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  height: 100vh;
  align-items: center; 
  justify-content: center;
  flex-direction: column;
  background-image: url('~@/assets/background.jpg');
  background-size: cover;
}

.login-form-container {
  width: 400px;
}
</style>