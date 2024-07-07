<template>
	<view class="content">
		<!-- 搜索框 -->
		<view class="search-box">
			<input id="searchInput" class="search-input" placeholder="查找课程" @click="goToSearch">
		</view>
		
		<tn-swiper class="tn-swiper" :list="swiperImg" :title="true" :effect3d="true"></tn-swiper>

		<!-- 一行2个view -->
		<scroll-view v-show="isSearchResultsVisible2" class="scroll" scroll-y>
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
		created() {
			this.userId = getApp().globalData.userId;
		},
		data() {
			return {
				userId: 0,
				isSearchResultsVisible2: true,
				swiperImg: [
				  {image: 'https://resource.tuniaokj.com/images/swiper/spring.jpg', title: '春天'},
				  {image: 'https://resource.tuniaokj.com/images/swiper/summer.jpg', title: '夏天'},
				  {image: 'https://resource.tuniaokj.com/images/swiper/autumn.jpg', title: '秋天'},
				  {image: 'https://resource.tuniaokj.com/images/swiper/winter.jpg', title: '冬天'},
				],
				scrollItems: [{
						image: '/static/images/index1.png',
						text: '宇哥带你学Java之消息队列MO',
						free: "免费",
						watchTime: 100,
					},
					{
						image: '/static/images/index1.png',
						text: '宇哥带你学Java之消息队列MO',
						free: "免费",
						watchTime: 100,
					},
					{
						image: '/static/images/index1.png',
						text: '宇哥带你学Java之消息队列MO',
						free: "免费",
						watchTime: 100,
					},
					{
						image: '/static/images/index1.png',
						text: '宇哥带你学Java之消息队列MO',
						free: "免费",
						watchTime: 100,
					},
					{
						image: '/static/images/index1.png',
						text: '宇哥带你学Java之消息队列MO',
						free: "免费",
						watchTime: 100,
					},
					{
						image: '/static/images/index1.png',
						text: '宇哥带你学Java之消息队列MO',
						free: "免费",
						watchTime: 100,
					},
				],
			};
		},
		methods: {
			goToSearch() {
				uni.navigateTo({
					url: '/pages/index/search/search'
				})
			},
			selectItem(index) {
				const item = this.scrollItems[index];
				this.selectedCategory = item.text;
			},
			getImagePath(imagePath) {
				return process.env.BASE_URL + imagePath; // Adjust this line based on your environment and configuration
			},
		},
	};
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: linear-gradient(#E1E6F5, #FFFFFF, #c0bbff);
		height: 100%;
		
		

		.search-box {
			width: 90%;
			margin-top: 8rpx;
			padding-left: 10rpx;
			text-align: center;
			position: fixed;
			top: 6.5%;
			height: 10%;
			z-index: 500;

			.search-input {
				width: 80%;
				height: 50rpx;
				border: 1rpx solid #000;
				border-radius: 20rpx;
				padding: 0 20rpx;
				box-sizing: border-box;
				font-size: 24rpx;
				background-image: url('/static/images/搜索.png');
				background-size: 20rpx;
				background-repeat: no-repeat;
				background-position: 5% 50%;
				text-indent: -70rpx;
			}
		}
		
		.tn-swiper{
			margin-top: 126rpx;
			margin-left: 20rpx;
			width: 90%;
			height: 200rpx;
		}

		.scroll {
			height: 70%;
			width: 730rpx;
			margin-top: 260rpx;

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
	}
</style>