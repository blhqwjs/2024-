<template>
	<view id="index">
		
		<view class="header-box">
			<view class="tabs-box">
				<view class="one-nav" :class="currentSwiperIndex === 0 ? 'nav-actived' : '' " @tap="swiperChange(0)" @click="getRecordsList()">观看历史</view>
				<view class="one-nav" :class="currentSwiperIndex === 1 ? 'nav-actived' : '' " @tap="swiperChange(1)" @click="getNews()">我的收藏</view>
			</view>
		</view>
	
		<swiper class="swiper-box" style="height: 1000rpx" :current="currentSwiperIndex">
			<swiper-item class="swiper-item">
			    <record-view v-show="isSearchResultsVisible2" class="record" record-y>
			        <view class="record_class">
			            <view class="record_item" v-for="(item, index) in recordList" :key="index">
			                <view class="createTime">{{item.createTime}}</view>
			                <image class="image" :src="item.image"></image>
			                <view class="text">{{item.text}}</view>
			            </view>
			        </view>
			    </record-view>
			</swiper-item>
			
			<swiper-item class="swiper-item">
					<collect-view v-show="isSearchResultsVisible2" class="collect" collect-y>
						<view class="collect_class">
							<view class="collect_item" v-for="(item, index) in collectList" :key="index" >
								<image class="image" :src="item.image"></image>
								<text class="text">{{item.text}}</text>
								<view class="info">
									<text class="free">{{item.free}}</text>
									<text class="watchTime">{{item.watchTime}}</text>
								</view>
							</view>
						</view>
					</collect-view>
			</swiper-item>
		</swiper>
	</view>
	
</template>

<script>
import { getRecords,listRecords } from '@/api/summer/records.js'
import { getSummer_Class } from '@/api/summer/summer_Class.js'
import { listChapter } from '@/api/summer/chapter.js'
	
	export default{
		
		data(){
			return{
				// 当前 观看历史 我的收藏 滑动位置
				currentSwiperIndex: 0,
				recordList:[],
				collectList:[],
				isSearchResultsVisible2: true,
			
				query:{
					pageSize:1000,
					pageNum:1,
				}
			}
		},
		onLoad(){
			this.getRecordsList()
		},
		methods: {
			swiperChange(index){
				this.currentSwiperIndex = index
			},
			
			getRecordsList(){
				const record = {
					user_id : getApp().globalData.user_id,
				}
				
				//获取观看历史
				listRecords(record).then(res => {
					//清空recordList
					this.recordList = [];
					
					//使用 Set 来确保 class_id 不重复
					const classIdList = new Set();
					//获取课程id
					res.rows.forEach(item =>{
						classIdList.add(item.class_id)
						
					});
					
					// 转换为数组并按顺序提取 creat_time 和 class_id
					const records = [...classIdList].map(classId => {
						const item = res.rows.find(record => record.class_id === classId);
						return {
							createTime: item?item.creat_time : null ,
							classId: classId,
						};
					})
					// console.log(records)
					//观看历史所需对象
					
					records.forEach(item =>{
						getSummer_Class(item.classId).then(res =>{
							this.recordList.push({
								classId: item.classId,
								createTime: item.createTime,
								image: res.data.file_url,
								text: res.data.name
							});
						})
					})
					// console.log(this.recordList)
					
				})
				.catch(error => {
				// 处理错误
				console.error(error);
				});
			},
			
			getNews(){
				
				//清空collectList
				this.collectList = [];
				
				const record = {
					user_id : getApp().globalData.user_id,
				}
				//获取我的收藏	
				listRecords(record).then(res => {
				// 处理返回的数据
				// console.log(res)
				//获取我收藏了的课程编号
				let classIds = [];
				res.rows.forEach(res =>{
					// console.log(res)
					if(res.type === 2 || res.type === 3){
						classIds.push(res.class_id)
					}
				})
				
				classIds.forEach(ids =>{
					getSummer_Class(ids).then(res =>{
						// console.log(res.data)
						
						listChapter(this.query).then(chapters =>{
							let sum = 0;
							chapters.rows.forEach(chapter =>{
								if(chapter.class_id === ids){
									sum += chapter.study_num;
									
								}
							})
						this.collectList.push({
							classId: ids,
							image: res.data.file_url,
							test: res.data.name,
							free: res.data.tag_id,
							watchTime: sum,
						})
						
							
						})
						
						
					})
				})
				// console.log(this.collectList)
				
				}).catch(error => {
				// 处理错误
				console.error(error);
				});
			}

			
		},
	}
</script>

<style lang="scss" scoped>
	#sns {
		background-color: #f1f1f1;
		height: 100%;
	}
	
	// 推荐、咨询 按钮样式
	.tabs-box {
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: var(--status-bar-height);
		width: 750upx;
	
		.one-nav {
			width: 50%;
			display: inline-block;
			font-size: 30rpx;
			line-height: 40rpx;
			text-align: center;
			padding: 44rpx 16rpx;
			box-sizing: border-box;
	
			&.nav-actived {
				color: #0050FF;
			}
		}
	}
	
	
	//静态数据展示样式
	.header-box{
		position: relative;
		left: 0;
		height: 100upx;
		background-color: #f1f1f1;
		z-index: 1;
	}
	
	.swiper-box{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		// background: linear-gradient(#E1E6F5, #FFFFFF, #c0bbff);
		height: 100%;
		
		.swiper-item{
			
			.collect {
				height: 100%;
				width: 730rpx;
				margin-top: 30rpx;
			
				.collect_class {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
			
					.collect_item {
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
			.record {
				height: 100%;
				width: 730rpx;
				margin-top: 3rpx;
				
				.record_class {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					
			
					.record_item {
						display: flex;
						flex-direction: row;
						margin-top: 20rpx;
						align-items: center;
						width: 100%;
						height: auto;
						margin-bottom: 15rpx;
						
						.createTime {
						  width: 150rpx;
						  color: #333;
						  margin-left: 10px;
						}
			
						.image {
						  width: 260rpx; /* 图像固定宽度 */
						  height: 175rpx; /* 图像固定高度 */
						  margin-left: 10px;
						  align-items: center;
						}
			
						.text {
						  width: 230rpx;
						  margin-left: 10px;
						  align-items: center;
						}
					}
				}
			}
			
		}
		
		
		
			
	}
	
	
</style>