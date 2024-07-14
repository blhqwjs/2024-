<template>
	<view class="content">
		<scroll-view v-show="isSearchResultsVisible2" class="scroll" scroll-y>
			<view class="scro_class">
				<view class="scr_item" v-for="(item, index) in scrollItems" :key="index" @click="selectItem(index)">
					<image class="image" :src="item.file_url"></image>
					<text class="text">
						课程名称：{{item.name}}\n课程价格：{{item.price}}元\n
					</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {

		created() {
			// this.userId = getApp().globalData.userId;
			this.scrollItems=JSON.parse(this.scrollItem);
		},
		props:{
			scrollItem:{
				
			}	
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
				scrollItems: [],
				query:{
					pageSize:100,
					pageNum:1,
					statue:1,
				},
				
			};
		},
		methods: {
			goToSearch() {
				uni.navigateTo({
					url: '/pages/index/search/search'
				})
			},
			// getClassList(){
			// 	listSummer_Class(this.query).then(res=>
			// 	{
			// 		// console.log("class: ",res.rows);
			// 		// this.scrollItems=res.rows;
			// 	})
			// },
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

		
	}
</style>
