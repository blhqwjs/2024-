<template>
  <view class="container">
    <view class="example">
      <uni-forms ref="form" :model="user" labelWidth="80px">
        <uni-forms-item label="用户昵称" name="nickName">
          <uni-easyinput v-model="user.nickName" placeholder="请输入昵称" />
        </uni-forms-item>
        <uni-forms-item label="手机号码" name="phonenumber">
          <uni-easyinput v-model="user.phonenumber" placeholder="请输入手机号码" />
        </uni-forms-item>
        <uni-forms-item label="邮箱" name="email">
          <uni-easyinput v-model="user.email" placeholder="请输入邮箱" />
        </uni-forms-item>
        <uni-forms-item label="性别" name="sex" required>
          <uni-data-checkbox v-model="user.sex" :localdata="sexs" />
        </uni-forms-item>
      </uni-forms>
      <button type="primary" @click="submit">提交</button>
    </view>
  </view>
</template>

<script>
import { getUserProfile } from "@/api/system/user";
import { updateUserProfile } from "@/api/system/user";

export default {
  data() {
    return {
      user: {
        nickName: "",
        phonenumber: "",
        email: "",
        sex: ""
      },
      sexs: [
        { text: '男', value: "0" },
        { text: '女', value: "1" }
      ],
      rules: {
        nickName: {
          rules: [{ required: true, errorMessage: '用户昵称不能为空' }]
        },
        phonenumber: {
          rules: [
            { required: true, errorMessage: '手机号码不能为空' },
            { pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/, errorMessage: '请输入正确的手机号码' }
          ]
        },
        email: {
          rules: [
            { required: true, errorMessage: '邮箱地址不能为空' },
            { format: 'email', errorMessage: '请输入正确的邮箱地址' }
          ]
        }
      }
    };
  },
  onLoad() {
    this.getUser();
  },
  onReady() {
    this.$refs.form.setRules(this.rules);
  },
  methods: {
    getUser() {
      getUserProfile().then(response => {
        this.user = response.data;
      });
    },
    submit(ref) {
      this.$refs.form.validate().then(res => {
        updateUserProfile(this.user).then(response => {
          this.$modal.msgSuccess("修改成功");
        });
      });
    }
  }
};
</script>

<style lang="scss">
.container {
  background-color: #f5f5f5;
  min-height: vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.example {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 0 2px;
}

.uni-forms-item {
  margin-bottom: 15px;
}

.uni-easyinput {
  padding: 10px;
  font-size: 14px;
}

button[type="primary"] {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="primary"]:hover {
  background-color: #0056b3;
}
</style>
