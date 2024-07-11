<template>
	<view>
		<videoPlayer :title="title" :videoSrc="url"></videoPlayer>
		<text>正在播放：{{title}}</text>
		<!-- <iframe src="//player.bilibili.com/player.html?bvid=BV1ym421G7Ru&cid=1610924151&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="95%" height="450"></iframe> -->
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
			},
			url:{
				type:String,
			},
			
			
		},
		created() {
			// this.video=JSON.parse(this.item);
			// console.log(this.video);
		},
		data() {
			return {
				video:{},
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
