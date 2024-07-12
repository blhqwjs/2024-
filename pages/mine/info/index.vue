<template>
  <view class="container">
    <uni-list>
      <uni-list-item 
        showExtraIcon="true" 
        :extraIcon="{type: 'person-filled'}" 
        title="昵称" 
        :rightText="user.nickName" 
        class="list-item"
      />
      <uni-list-item 
        showExtraIcon="true" 
        :extraIcon="{type: 'phone-filled'}" 
        title="手机号码" 
        :rightText="user.phonenumber" 
        class="list-item"
      />
      <uni-list-item 
        showExtraIcon="true" 
        :extraIcon="{type: 'email-filled'}" 
        title="邮箱" 
        :rightText="user.email" 
        class="list-item"
      />
      <uni-list-item 
        showExtraIcon="true" 
        :extraIcon="{type: 'auth-filled'}" 
        title="岗位" 
        :rightText="postGroup" 
        class="list-item"
      />
      <uni-list-item 
        showExtraIcon="true" 
        :extraIcon="{type: 'staff-filled'}" 
        title="角色" 
        :rightText="roleGroup" 
        class="list-item"
      />
      <uni-list-item 
        showExtraIcon="true" 
        :extraIcon="{type: 'calendar-filled'}" 
        title="创建日期" 
        :rightText="user.createTime" 
        class="list-item"
      />
    </uni-list>
  </view>
</template>

<script>
import { getUserProfile } from "@/api/system/user"

export default {
  data() {
    return {
      user: {},
      roleGroup: "",
      postGroup: ""
    }
  },
  onLoad() {
    this.getUser()
  },
  methods: {
    getUser() {
      getUserProfile().then(response => {
        this.user = response.data
        this.roleGroup = response.roleGroup
        this.postGroup = response.postGroup
      })
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 20rpx;
  background-color: #f5f5f5;
}

.uni-list {
  border-radius: 12rpx;
  overflow: hidden;
  box-shadow: 0 2px 8rpx rgba(0, 0, 0, 0.1);
}

.list-item {
  background-color: #ffffff;
  padding: 20rpx;
  font-size: 28rpx;
  color: #303133;
  border-bottom: 1rpx solid #ebeef5;
}

.list-item:last-child {
  border-bottom: none;
}

.uni-list-item .uni-list-item__title {
  font-weight: bold;
  color: #409EFF;
}

.uni-list-item .uni-list-item__right-text {
  color: #606266;
}
</style>
