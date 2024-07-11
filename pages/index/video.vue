<template>
	<view>
		<videoPlayer :title="title" videoSrc="https://www.bilibili.com/video/BV15b4y1a7yG"></videoPlayer>
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
