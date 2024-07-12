<template>
    <view class="container">
        <view class="section">
            <view class="course-info">
                <button class="course-button" v-show="items.price === 0">免费课程</button>
                <button class="course-button" v-show="items.price !== 0">￥{{items.price}}</button>
                <view class="course-description">
                    {{ items.name }}
                    <view class="learning-count"> 一般 2小时55分钟 {{ learningCount }} 人学</view>
                </view>
            </view>
        </view>
        <view class="section">
            <view class="summary">
                <view class="summary-title">简介</view><br />
                <view class="summary-content">
                    {{items.intro}}
                </view>
            </view>
        </view>
        <view class="section">
            <view class="summary-title">章节</view><br /><br />
            <view class="video-list">
                <view class="video-category" v-for="category in characterList" :key="category.id">
                    <view class="video-category-title">
                        {{ category.title }}
                    </view>
                    <view class="video-item" v-for="video in category.videos" :key="video.id" @click="playVideo(video)">
                        <view class="play-button">▶️</view>
                        <view class="video-title" @click="goToMv(video.url,video.title)">
                            {{ video.title }} {{ video.duration }}
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="bottom-bar">
            <view class="bottom-item" @click="collectCourse">收藏</view>
            <view class="separator"></view>
            <view class="bottom-item">分享</view>
            <view class="separator"></view>
            <view class="bottom-item large">立即学习</view>
        </view>
    </view>
</template>

<script>
    import { listChapter } from "@/api/summer/chapter.js"

    export default {
        created() {
            this.items = JSON.parse(this.item);
            this.query.class_id = this.items.class_id;
            this.getChapter();
        },
        props: {
            item: {
                default: [],
            }
        },
        data() {
            return {
                courseDescription: '宇哥带你学java',
                learningCount: 0,
                items: [],
                coursejianjie: ' 这是一个非常有趣的课程简介，内容可以根据实际情况填充。',
                query: {
                    pageNum: 1,
                    pageSize: 100,
                    class_id: 0,
                },
                characterList: [],
                videoCategories: [{
                        title: 'MQ',
                        videos: [{
                                id: 1,
                                title: '1-1 MQ安装',
                                duration: '(20分钟)'
                            },
                            {
                                id: 2,
                                title: '1-2 MQ初识',
                                duration: '(25分钟)'
                            }
                        ]
                    },
                    {
                        title: 'MQ2',
                        videos: [{
                                id: 3,
                                title: '2-1 上节总结',
                                duration: '(15分钟)'
                            },
                            {
                                id: 4,
                                title: '2-2 工作列表',
                                duration: '(30分钟)'
                            }
                        ]
                    }
                ]
            };
        },
        methods: {
            organizeChapters(chapters) {
                let firstindex = 0;
                let secendindex = 0;
                this.characterList = [];

                chapters.forEach(chapter => {
                    if (chapter.father_chapter_id === null) {
                        this.characterList.push({
                            id: chapter.chapter_id,
                            title: chapter.name,
                            videos: [],
                        });
                        firstindex++;
                    } else {
                        let parentIndex = this.characterList.findIndex(item => item.id === chapter.father_chapter_id);
                        if (parentIndex !== -1) {
                            this.characterList[parentIndex].videos.push({
                                id: chapter.chapter_id,
                                title: chapter.name,
                                duration: '(' + chapter.duration + '分钟)',
                                url: chapter.file_url,
                            });
                        }
                    }
                });

                // console.log(this.characterList);
            },
			goToMv(URL,Title){
				uni.navigateTo({
					url:"/pages/index/video?title="+Title + "&url="+URL
				})
			},
            getChapter() {
                listChapter(this.query).then(res => {
                    this.organizeChapters(res.rows);
                }).catch(error => {
                    console.log(error)
                })
            },
            collectCourse() {
                uni.showToast({
                    title: '收藏成功',
                    icon: 'success',
                    duration: 2000
                });
            },
            playVideo(video) {
                // console.log('播放视频：', video);
            }
        }
    };
</script>

<style lang="scss">
	body {
		margin: 0;
		padding: 0;
		background-color: #f0f0f0;
		/* 灰色背景 */
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 20px;
		/* 每个部分之间的间隔 */
		padding: 20px;
	}

	.section {
		background-color: white;
		/* 每个部分的背景为白色 */
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.course-info {
		position: relative;
		/* 修改为相对定位 */
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
		left: -100px;
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

	.summary-title {
		font-size: 18px;
		font-weight: bold;
	}

	.video-list {
		margin-top: 5px;
		margin-left: 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		/* 每个视频分类之间的间隔 */
	}

	.video-category {
		display: flex;
		flex-direction: column;
	}

	.video-category-title {

		font-size: 18px;
		font-weight: bold;
		margin-bottom: 10px;
		maigin-left: 10px;
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

	.bottom-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		background-color: white;
		box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
		border-top: 1px solid #ddd;
		height: 60px;
	}

	.bottom-item {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		cursor: pointer;
	}

	.bottom-item.large {
		flex: 2;
		background-color: #ff0000;
		color: white;
		border-radius: 0 0 0 10px;
		/* 修正为左下角圆角 */
	}

	.separator {
		width: 1px;
		background-color: #ddd;
	}
</style>