import request from '@/utils/request'

// 查询标签列表
export function listTag(query) {
  return request({
    url: '/summer/tag/list',
    method: 'get',
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    params: query
  })
}

// 查询标签详细
export function getTag(tag_id) {
  return request({
    url: '/summer/tag/' + tag_id,
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    method: 'get'
  })
}

// 新增标签
export function addTag(data) {
  return request({
    url: '/summer/tag',
    method: 'post',
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    data: data
  })
}

// 修改标签
export function updateTag(data) {
  return request({
    url: '/summer/tag',
    method: 'put',
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    data: data
  })
}

// 删除标签
export function delTag(tag_id) {
  return request({
    url: '/summer/tag/' + tag_id,
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    method: 'delete'
  })
}
