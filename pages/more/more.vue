<template>
	<view class="content">
		<scroll-view class="scroll" scroll-y>
			<view class="scro_class">
				<view class="scr_item" v-for="item in scrollItems" :key="item.class_id" @click="selectItem(item)">
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
			this.scrollItems=JSON.parse(this.scrollItem);
		},
		props:{
			scrollItem:{
				
			}	
		},
		data() {
			return {
				scrollItems: []
			};
		},
		methods: {
			selectItem(item) {
				console.log(item);
				uni.navigateTo({
					url:`/pages/index/detail?item=${JSON.stringify(item)}`,
				})
			}
		}
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
	
			.scroll {
				height: 70%;
				width: 730rpx;
	
				.scro_class {
					display: flex;
					flex-wrap: wrap;
					flex-direction: column;
					justify-content: space-between;
	
					.scr_item {
						display: flex;
						margin-top: 20rpx;
						width: 100%;
						height: auto;
						margin-bottom: 15rpx;
	
						.image {
							width: 50%;
							height: 200rpx;
						}
	
						.text {
							font-size: 20rpx;
							text-align: left;
							margin-top: 10rpx;
							margin-left: 2rpx;
							width: 80%;
							white-space: pre-wrap;
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
