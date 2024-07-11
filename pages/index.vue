<template>
	<view class="content">
		<!-- 搜索框 -->
		<view class="search-box">
			<input id="searchInput" class="search-input" placeholder="查找课程" @click="goToSearch">
		</view>
		
		<tn-swiper class="tn-swiper" :list="swiperImg" :title="true" :effect3d="true"></tn-swiper>

		<!-- 一行2个view -->
		<index_card :scrollItems="scrollItems" isSearchResultsVisible2="true" class="scroll"></index_card>

	</view>
</template>

<script>
	import {listGroup } from '@/api/summer/group'
	export default {

		created() {
			this.userId = getApp().globalData.userId;
			
			listGroup().then(res=>{
				console.log(res);
			}).catch(error=>{
				console.log(error);
			})
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
			margin-top: 100rpx;
			padding-left: 45rpx;
			text-align: center;
			// position: fixed;
			top: 6.5%;
			height: 10%;
			z-index: 500;

			.search-input {
				width: 75%;
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
			margin-top: 26rpx;
			margin-left: 20rpx;
			width: 90%;
			height: 200rpx;
		}
		
		.scroll {
			margin-top: 100rpx;
			margin-left: 20rpx;
			width: 90%;
			flex: 1; /* 添加 flex 属性 */
		}
		

	}
</style>