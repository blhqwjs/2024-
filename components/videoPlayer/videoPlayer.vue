<template>
    <view name="videoPlayer" class="flex flex-direction">
        <video id="myVideo" 
            class="response" 
            :src="videoUrl"
            :title="videoTitle"
            controls="true"
            page-gesture="true"
            object-fit="contain"
            show-mute-btn="true"
            enable-play-gesture="true"
            vslide-gesture="true"
			vslide-gesture-in-fullscreen="true"
            @error="videoErrorCallback" 
            @waiting="videoWaiting"
            @loadedmetadata="videoLoadOk"
        ></video>
    </view>
</template>
 
<script>
export default {
    name: 'videoPlayer',
    props: {
        title: {
            type: String,
            default: ''
        },
        firstPic: {
            type: String,
            default: ''
        },
        videoType: {
            type: String,
            default: ''
        },
        videoSrc: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            videoUrl: this.videoSrc,
            firstImg: this.firstPic,
            videoTitle: this.title
        };
    },
    watch: {
        videoSrc() {
            this.setVideoUrl();
        }
    },
    mounted() {
        this.setVideoUrl();
    },
    onReady() {
        // #ifndef MP-ALIPAY
        this.videoContext = uni.createVideoContext('myVideo');
        // #endif
    },
    methods: {
        setVideoUrl() {
            console.log('Video URL:', this.videoSrc);
            this.videoUrl = this.videoSrc;
            this.firstImg = this.firstPic;
            this.videoTitle = this.title;
        },
        videoErrorCallback(e) {
            console.error('Video error:', e);
            uni.showModal({
                content: e.detail.errMsg || 'Failed to load video',
                showCancel: false
            });
        },
        videoWaiting() {
            // uni.showLoading({
            //     title: '加载中'
            // });
        },
        videoLoadOk() {
            uni.hideLoading();
        }
    }
};
</script>
 
<style scoped>
/* Add your styles here */
</style>
