<template>
  <view class="container">
    <view class="search-bar">
      <uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @input="input"
        @cancel="cancel" @change="change" @clear="clear" @click="refresh">
      </uni-search-bar>
      <!-- 当前输入为：{{ searchValue }} -->
    </view>

    <scroll-view class="scroll" scroll-y>
      <view class="scro_class">
        <view class="scr_item" v-for="(item, index) in scrollItems" :key="index" @click="goToDetail(item)">
          <image class="image" :src="item.file_url"></image>
          <view class="text-container">
            <text class="text">{{ item.name }}</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import { listSummer_Class } from '@/api/summer/summer_Class.js'
export default {
  data() {
    return {
      searchValue: '',
      query: {
        pageSize: 1000,
        pageNum: 1,
        name: '',
      },
      scrollItems: [],
    }
  },
  methods: {
    refresh() {
      location.reload();
    },
    search(res) {
      uni.showToast({
        title: '搜索：' + res.value,
        icon: 'none'
      })
      this.reset();
      //关于输入后无法同步触发页面渲染，还需要切换分类才显示完整的问题。
      //这个其实只要把现有的数据，进行清空就好了，比如这个方法。
    },
    input(res) {
      // console.log('----input:', res)
    },
    clear(res) {
      uni.showToast({
        title: '啊，输入的" ' + res.value + ' "被清空啦(oﾟvﾟ)ノ',
        icon: 'none'
      })
    },
    blur(res) {
      this.getClassList();
      uni.showToast({
        title: '数据获取出来啦\(￣︶￣*\)) ',
        icon: 'none'
      })
    },
    cancel(res) {
      uni.showToast({
        title: '欢迎下次使用哦~~',
        icon: 'none'
      })
    },
    getClassList() {
      this.query.name = this.searchValue;
      // console.log(this.searchValue);
      listSummer_Class(this.query).then(res => {
        this.scrollItems = res.rows;
      })
    },
    goToDetail(item) {
      uni.navigateTo({
        url: "/pages/index/detail?item=" + JSON.stringify(item),
      })
    },
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20rpx;
  background-color: #f5f5f5;
}

.search-bar {
  width: 100%;
  margin-bottom: 20rpx;
}

.scroll {
  width: 100%;
  height: 70%;
  background-color: #ffffff;
  border-radius: 20rpx;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20rpx;
  overflow-y: auto;
}

.scro_class {
  display: flex;
  flex-direction: column;
  align-items: center;

  .scr_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 20rpx;
    padding: 20rpx;
    background-color: #ffffff;
    border-radius: 20rpx;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-10rpx);
    }

    .image {
      width: 100%;
      height: 200rpx;
      border-radius: 20rpx;
      object-fit: cover;
      margin-bottom: 10rpx;
    }

    .text-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 10rpx;
      padding: 10rpx;
    }

    .text {
      font-size: 27rpx;
      text-align: center;
      color: #333333;
      white-space: pre-wrap;
    }
  }
}
</style>
