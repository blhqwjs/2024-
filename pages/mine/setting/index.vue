<template>
  <view class="setting-container" :style="{ height: windowHeight + 'px' }">
    <view class="menu-list">
      <view class="list-cell list-cell-arrow" @click="handleToPwd">
        <view class="menu-item-box">
          <view class="iconfont icon-password menu-icon"></view>
          <view class="menu-text">修改密码</view>
        </view>
      </view>
      <view class="list-cell list-cell-arrow" @click="handleToUpgrade">
        <view class="menu-item-box">
          <view class="iconfont icon-refresh menu-icon"></view>
          <view class="menu-text">检查更新</view>
        </view>
      </view>
      <view class="list-cell list-cell-arrow" @click="handleCleanTmp">
        <view class="menu-item-box">
          <view class="iconfont icon-clean menu-icon"></view>
          <view class="menu-text">清理缓存</view>
        </view>
      </view>
    </view>
    <view class="cu-list menu">
      <view class="cu-item item-box" @click="handleLogout">
        <text class="text-black">退出登录</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      windowHeight: uni.getSystemInfoSync().windowHeight
    }
  },
  methods: {
    handleToPwd() {
      this.$tab.navigateTo('/pages/mine/pwd/index')
    },
    handleToUpgrade() {
      this.$modal.showToast('功能正在建设中~')
    },
    handleCleanTmp() {
      this.$modal.showToast('功能正在建设中~')
    },
    handleLogout() {
      this.$modal.confirm('确定注销并退出系统吗？').then(() => {
        this.$store.dispatch('LogOut').then(() => {
          this.$tab.reLaunch('/pages/index')
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-container {
  background-color: #f8f8f8;
}

.menu-list {
  margin-top: 20px;
}

.list-cell {
  padding: 20rpx;
  border-bottom: 1px solid #eee;
}

.menu-item-box {
  display: flex;
  align-items: center;
}

.menu-icon {
  font-size: 36rpx;
  margin-right: 20rpx;
}

.menu-text {
  font-size: 32rpx;
  color: #303133;
}

.item-box {
  background-color: #fff;
  margin: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20rpx;
  border-radius: 8rpx;
  font-size: 32rpx;
  color: #303133;
}
</style>