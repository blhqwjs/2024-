<template>
  <view class="container">
    <view class="section">
      <view class="course-info">
        <button class="course-button">免费课程</button>
        <view class="course-description">
          {{ courseDescription }}
          <!-- <br /> -->
          <view class="learning-count"> 一般 2小时55分钟 {{ learningCount }}人学</view>
        </view>
      </view>
    </view>
    <view class="section">
      <view class="summary">
            <view class="summary-title">简介</view><br/>
            <view class="summary-content">
             {{coursejianjie}}
            </view>
          </view>
    </view>
    <view class="section">
		<view class="summary-title">章节</view><br/><br/>
      <view class="video-list">
              <view class="video-category" v-for="category in videoCategories" :key="category.title">
                <view class="video-category-title">
                 {{ category.title }}
                </view>
                <view class="video-item" v-for="video in category.videos" :key="video.id" @click="playVideo(video)">
                  <view class="play-button"></view>
                  <view class="video-title">
                    {{ video.title }} {{ video.duration }}
                  </view>
                </view>
              </view>
    </view>
  </view>
  </view>
</template>

<script>
	import {listChapter} from "@/api/summer/chapter.js"
// import { error } from "console";
export default {
	created() {
		this.getChapter();
	},
  data() {
    return {
      courseDescription: '宇哥带你学java',
      learningCount: 0,
	  coursejianjie:' 这是一个非常有趣的课程简介，内容可以根据实际情况填充。',
	   videoCategories: [
	          {
	            title: 'MQ',
	            videos: [
	              { id: 1, title: '1-1 MQ安装', duration: '(20分钟)' },
	              { id: 2, title: '1-2 MQ初识', duration: '(25分钟)' }
	            ]
	          },
	          {
	            title: 'MQ2',
	            videos: [
	              { id: 3, title: '2-1 上节总结', duration: '(15分钟)' },
	              { id: 4, title: '2-2 工作列表', duration: '(30分钟)' }
	            ]
	          }
	        ]
    };
  },
  
  methods: {
	getChapter(){
		listChapter().then(res=>{
			console.log(res)
		}).catch(error=>{
			console.log(error)
		})
	},
	  
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0; /* 灰色背景 */
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 每个部分之间的间隔 */
  padding: 20px;
}

.section {
  background-color: white; /* 每个部分的背景为白色 */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.course-info {
  position: relative; /* 修改为相对定位 */
  top: 0;
  left: 0;
}

.course-button {
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  height: 50px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center; 
  position: relative;
  top: 0;
  left:-100px;
}

.course-description {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}

.learning-count {
  margin-top: 5px;
  font-size: 13px;
  color: #939393;
}
.summary-title{
	font-size: 18px;
	font-weight: bold;
}
.video-list {
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px; /* 每个视频分类之间的间隔 */
}

.video-category {
  display: flex;
  flex-direction: column;
}

.video-category-title {
	
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  maigin-left:10px;
}

.mq-label {
  background-color: #ff0000;
  color: white;
  padding: 2px 5px;
  border-radius: 3px;
  margin-right: 5px;
}

.video-item {
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.video-item:hover {
  background-color: #f0f0f0;
}

.play-button {
  margin-right: 10px;
  font-size: 20px;
}

.video-title {
  font-size: 15px;
}
</style>
