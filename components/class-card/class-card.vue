<template>
	<view class="scr_item" @click="clickSkip">
		<image class="image" :src="item.image"></image>
		<text class="text">{{item.name}}</text>
		<view class="info">
			<text class="free" v-if="item.price == 0">免费课程</text>
			<text class="free" v-else>￥ {{item.price}}</text>
			<text class="watchTime">{{item.watchTime}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "class-card",
		props: {
			item: {
				type: Object,
				default: null
			}
		},
		data() {
			return{}
		},
		methods: {
			clickSkip() {
				console.log("跳转",this.item.class_id);
			}
		}
	}
</script>

<style scoped lang="scss">
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
</style>