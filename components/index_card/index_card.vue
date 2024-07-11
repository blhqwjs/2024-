<template>
	<view>
		<scroll-view v-show="isSearchResultsVisible2" class="scroll" scroll-y>
			<view class="card_tag" v-show="showTag">  </view>
			<view class="scro_class">
				<view class="scr_item" v-for="(item, index) in scrollItems" :key="index" @click="selectItem(index)">
					<image class="image" :src="item.image"></image>
					<text class="text">{{item.text}}</text>
					<view class="info">
						<text class="free">{{item.free}}</text>
						<text class="watchTime">{{item.watchTime}}</text>
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
				//是否开启tag
				type: Boolean,
				default: false
			},
		},
		data() {
			return {

			};
		},
		created() {
			console.log(this.scrollItems);
		},
		methods: {
			selectItem(index) {
				const item = this.scrollItems[index];
				this.selectedCategory = item.text;
			},
		},

	}
</script>

<style lang="scss">
	.scroll {
		// height: 70%;
		// width: 730rpx;
		// margin-top: 260rpx;
		height: 100%; /* 确保 scroll-view 填充父容器 */
		width: 100%; /* 确保 scroll-view 填充父容器 */

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
				margin-bottom: 15rpx;

				.image {
					width: 100%;
					height: 200rpx;
				}

				.text {
					margin-top: 10rpx;
					font-size: 30rpx;
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