<template>
	<view>
		<scroll-view v-show="isSearchResultsVisible2" class="scroll" scroll-y>
			<view class="card_tag" v-show="showTag">{{showTag}}      <span style="color:#5C6367; margin-left: 60%;">更多>></span>   </view>
			<view class="scro_class">
				<view class="scr_item" v-for="(item, index) in filteredItems" :key="index" @click="selectItem(index)">
					<image class="image" :src="item.file_url" @click="goToDetail(item)"></image>
					<text class="text">{{item.name}}</text>
					<view class="info">
						<text class="free" v-show="item.price === 0">免费课程</text>
						<text class="free" v-show="item.price !== 0">￥ {{item.price}} </text>
						<!-- <text class="watchTime">{{item.watchTime}}</text> -->
						<text class="watchTime">123</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "index_card",
		props: {
			scrollItems: {
				//滚动内容
				type: Array,
				default () {
					return []
				}
			},
			isSearchResultsVisible2: {
				//是否展示结果
				type: Boolean,
				default: true
			},
			showTag: {
				//tag分类
				type: String,
				default: ''
			},
		},
		data() {
			return {

			};
		},
		created() {
			// console.log(this.scrollItems);
		},
		computed:{
			 filteredItems() {
			      return this.scrollItems.filter((item) => item.tag_id === this.showTag);
			},
		},
		methods: {
			selectItem(index) {
				const item = this.scrollItems[index];
				this.selectedCategory = item.text;
			},
			goToDetail(item) {
				uni.navigateTo({
					url:"/pages/index/detail?item="+ JSON.stringify(item),
				})
			}
		},

	}
</script>

<style lang="scss">
	.scroll {
		// height: 70%;
		// width: 730rpx;
		// margin-top: 260rpx;
		height: 100%;
		/* 确保 scroll-view 填充父容器 */
		width: 100%;
		/* 确保 scroll-view 填充父容器 */
		.card_tag{
			font-size: 34rpx;
			color: #21252B;
			margin-bottom: 20rpx;
		}
		.scro_class {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.scr_item {
				display: flex;
				flex-direction: column;
				margin-top: 20rpx;
				align-items: center;
				width: 48%;
				height: auto;
				margin-bottom: 10rpx;

				.image {
					width: 100%;
					height: 200rpx;
				}

				.text {
					margin-top: 10rpx;
					font-size: 26rpx;
					text-align: center;
					width: 100%;
				}

				.info {
					display: flex;
					justify-content: space-between;
					width: 100%;
					padding: 0 10rpx;
					margin-top: 10rpx;

					.free,
					.watchTime {
						font-size: 15px;
					}
				}
			}
		}
	}
</style>