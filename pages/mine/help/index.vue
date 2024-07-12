<template>
  <view class="help-container">
    <view v-for="(item, findex) in list" :key="findex" :title="item.title" class="list-title">
      <view class="text-title">
        <view :class="item.icon"></view>{{ item.title }}
      </view>
      <view class="childList">
        <view v-for="(child, zindex) in item.childList" :key="zindex" class="question" hover-class="hover"
          @click="handleText(child)">
          <view class="text-item">{{ child.title }}</view>
          <view class="line" v-if="zindex !== item.childList.length - 1"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          icon: 'iconfont icon-github',
          title: '本软件开源吗',
          childList: [
            { title: '本软件开源吗？', content: '开源' },
            { title: '本软件可以商用吗？', content: '请联系开发者' },
            { title: '本软件官网地址多少？', content: 'https://github.com/blhqwjs/2024-' },
            { title: '本软件文档地址多少？', content: 'https://github.com/blhqwjs/2024-' }
          ]
        },
        {
          icon: 'iconfont icon-help',
          title: '其他问题',
          childList: [
            { title: '如何退出登录？', content: '请点击[我的] - [应用设置] - [退出登录]即可退出登录' },
            { title: '如何修改用户头像？', content: '请点击[我的] - [选择头像] - [点击提交]即可更换用户头像' },
            { title: '如何修改登录密码？', content: '请点击[我的] - [应用设置] - [修改密码]即可修改登录密码' }
          ]
        }
      ]
    };
  },
  methods: {
    handleText(item) {
      this.$tab.navigateTo(`/pages/common/textview/index?title=${item.title}&content=${item.content}`);
    }
  }
};
</script>

<style lang="scss" scoped>
page {
  background-color: #f5f5f5;
}

.help-container {
  margin-bottom: 100rpx;
  padding: 30rpx;
}

.list-title {
  margin-bottom: 20rpx;
  background: #fff;
  padding: 20rpx;
  border-radius: 16rpx;
  box-shadow: 0 2px 8rpx rgba(0, 0, 0, 0.1);
}

.text-title {
  display: flex;
  align-items: center;
  font-size: 32rpx;
  font-weight: bold;
  color: #303133;
  padding: 10rpx 0;

  .iconfont {
    font-size: 36rpx;
    margin-right: 15rpx;
    color: #409EFF;
  }
}

.childList {
  margin-top: 10rpx;
}

.text-item {
  font-size: 28rpx;
  color: #606266;
  padding: 20rpx;
}

.line {
  width: 100%;
  height: 1rpx;
  background-color: #ebeef5;
}

.question {
  transition: background-color 0.3s, color 0.3s;
  border-radius: 12rpx;
  padding: 20rpx;

  &:hover {
    background-color: #e6f7ff;
    color: #409EFF;
  }
}
</style>
