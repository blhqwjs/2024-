<template>
	<view class="layout">
		<z-paging class="z-paging" ref="paging" :auto="false" v-model="dataList" @query="queryList"
			:auto-hide-loading-after-first-loaded="false">
			<!-- 自定义顶部tabs -->
			<template #top>
				<uv-tabs @change="clickTab" :list="list" lineWidth="30" lineColor="#f56c6c" :activeStyle="{
							color: '#303133',
							fontWeight: 'bold',
							transform: 'scale(1.05)'
				    	}" :inactiveStyle="{
							color: '#606266',
							transform: 'scale(1)'
						}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;">
				</uv-tabs>
			</template>
			<!-- 全屏loading -->
			<template #loading>
				<uv-skeletons :loading="loading" :skeleton="skeleton"></uv-skeletons>
			</template>
			<!-- 自定义刷新 -->
			<template #refresher="{refresherStatus}">
				<custom-refresher :status="refresherStatus" />
			</template>
			<!-- z-paging默认铺满全屏，此时页面所有view都应放在z-paging标签内，否则会被盖住 -->
			<!-- 需要固定在页面顶部的view请通过slot="top"插入，包括自定义的导航栏 -->
			<view class="scro_class">
				<view class="scr_item" v-for="item in dataList" :key="item.class_id" @click="selectItem(item.class_id)">
					<image class="image" :src="item.image"></image>
					<text class="text">{{item.name}}</text>
					<view class="info">
						<text class="free">{{item.price}}</text>
						<text class="watchTime">{{item.watchTime}}</text>
					</view>
				</view>
			</view>
		</z-paging>
	</view>
</template>

<script>
	import {
		listGroup
	} from '@/api/summer/group.js';
	import {
		listSummer_Class
	} from '@/api/summer/summer_Class.js';

	export default {
		data() {
			return {
				// v-model绑定的这个变量不要在分页请求结束中自己赋值，直接使用即可
				dataList: [],
				// 请求参数
				queryParams: {
					pageNum: 1,
					pageSize: 10,
					class_id: null,
					class_group_id: null
				},
				// 骨架屏设置
				loading: true,
				skeleton: [{
					type: 'flex',
					num: 5,
					style: {
						justifyContent: 'space-between'
					},
					children: [{
						type: 'custom',
						style: {
							marginTop: '20rpx',
							width: '48vw',
							height: '40vw',
							marginBottom: '15rpx'
						}
					}, {
						type: 'custom',
						style: {
							marginTop: '20rpx',
							width: '48vw',
							height: '40vw',
							marginBottom: '15rpx'
						}
					}]
				}],
				// 分类列表
				list: [],
				// 课程列表
				classList: [],
				// 当前分类id
				current: null,
				// 当前分类课程列表
				currentClassList: []
			};
		},
		methods: {
			// @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用this.$refs.paging.reload()即可
			async queryList(pageNo, pageSize) {
				await this.getListSummerClass();
				this.filterClass();
				// 将请求结果通过complete传给z-paging处理，同时也代表请求结束，这一行必须调用
				this.$refs.paging.complete(this.currentClassList);
			},

			// 点击分类按钮
			clickTab(e) {
				this.current = e.class_group_id;
				this.$refs.paging.reload();
			},

			// 点击单个课程
			selectItem(index) {
				const item = this.scrollItems[index];
				console.log(item);
			},

			// 获取课程
			async getListSummerClass() {
				const res = await listSummer_Class({
					pageSize: 999999999
				});
				this.classList = res.rows.map(item => {
					return {
						class_id: item.class_id,
						class_group_id: item.class_group_id,
						statue: item.statue,
						image: item.file_url,
						name: item.name,
						price: item.price + '元',
						watchTime: item.watchTime
					}
				})
			},

			// 筛选课程
			filterClass() {
				this.currentClassList = this.classList.filter(item => {
					return item.class_group_id === this.current && item.statue == 1;
				})
			}
		},
		async mounted() {
			const res = await listGroup({
				pageSize: 999999
			});
			this.list = res.rows.map(item => {
				return {
					class_group_id: item.class_group_id,
					name: item.class_group_name
				}
			});
			this.current = this.list[0].class_group_id;
			this.$refs.paging.reload();
		}
	};
</script>

<style scoped lang="scss">
	.layout {
		.z-paging {
			.scro_class {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

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
			}
		}
	}
</style>