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
        <n-form-item label="邮箱" path="email">
          <n-input placeholder="邮箱" v-model:value="formValue.email" disabled />
        </n-form-item>
        <n-form-item label="昵称" path="nickname">
          <n-input placeholder="昵称" v-model:value="formValue.nickname" disabled/>
        </n-form-item>
        <n-form-item label="电话号码" path="phone">
          <n-input placeholder="电话号码" v-model:value="formValue.phone" />
        </n-form-item>
        <n-form-item label="生日" path="birth">
          <n-date-picker type="date" v-model:value="formValue.birth" value-format="yyyy-MM-dd"/>
        </n-form-item>
        <n-form-item label="性别" path="gender">
          <n-select
            placeholder="性别"
            :options="generalOptions"
            v-model:value="formValue.gender"
          />
        </n-form-item>
        <n-form-item class="workerunion-profile-buttons">
          <n-button @click="saveProfile" attr-type="button">保存</n-button>
        </n-form-item>
      </n-form>
      </n-card>

    <div class="user-infos">
      <n-card title="动态" style="margin-bottom: 16px;">
        <n-tabs type="line">
          <n-tab-pane name="post" tab="帖子">
            <n-empty description="你什么也找不到">
              <template #extra>
                <n-button size="small">看看别的</n-button>
              </template>
            </n-empty>
          </n-tab-pane>
          <n-tab-pane name="answer" tab="回答">回答</n-tab-pane>
          <n-tab-pane name="comment" tab="评论">评论</n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import {workerUnionInstance} from '@/request'
import moment from 'moment'
import 'vue-advanced-cropper/dist/style.css';


export default {
  name: 'Profile',
  setup() {
    const formRef = ref(null)
    const message = useMessage()
    const formValue = ref({
        id: null,
        birth: null,
        phone: '',
        nickname: '',
        email: '',
        gender: '',
      })

    return {
      formRef,
      size: ref('medium'),
      generalOptions: [
        {label: "男", value: "male"},
        {label: "女", value: "female"},
        {label: "无", value: ""},
      ],
      formValue,
      rules: {
        nickname: {
          required: true,
          message: '请输入昵称',
          trigger: 'blur'
        },
        birth: {
          required: false,
          message: '请选择出生日期',
        },
        gender: {
          required: false,
          message: '请选择性别',
        },
        phone: {
          required: false,
          message: '请输入电话号码',
          validator: (rule, value) => {
            if (!value) {
              return true;
            }
            let result = /^1[0-9]{10}$|^[569][0-9]{7}$/.test(value)
            console.log('value', result);
            return result;
          },
          trigger: ['input']
        }
      },
      saveProfile () {
        formRef.value.validate((errors) => {
          if (!errors) {
            workerUnionInstance.post("/user/save_profile", {
              "id": formValue.value.id,
              "phone": formValue.value.phone,
              "birth": formValue.value.birth,
              "gender": formValue.value.gender
            }).then(response => {
              console.log("----response", response)
            })
          } else {
            console.log(errors)
            message.error("请正确填写信息")
          }
        })
      }
    }
  },
  methods: {
    loadUserProfile() {
      console.log("load user profile");
      let vm = this
      workerUnionInstance.get('/user/profile').then(response => {
        console.log("response---", response)
        const responsedata = response.data;
        const data = responsedata.data
        console.log("data---", moment(data.birth).unix())
        vm.formValue = {
        id: data.id,
        birth: data.birth ? moment(data.birth).unix() * 1000: null,
        phone: data.phone,
        nickname: data.nickname,
        email: data.email,
        gender: data.gender,
        }
      }).catch(error => {
        console.log("erro---", error)
      })
    }
  },
  mounted() {
    this.loadUserProfile();
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

