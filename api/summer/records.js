import request from '@/utils/request'

// 查询记录列表
export function listRecords(query) {
  return request({
    url: '/summer/records/list',
    method: 'get',
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    params: query
  })
}

// 查询记录详细
export function getRecords(user_id) {
  return request({
    url: '/summer/records/' + user_id,
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    method: 'get'
  })
}

// 新增记录
export function addRecords(data) {
  return request({
    url: '/summer/records',
    method: 'post',
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    data: data
  })
}

// 修改记录
export function updateRecords(data) {
  return request({
    url: '/summer/records',
    method: 'put',
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    data: data
  })
}

// 删除记录
export function delRecords(user_id) {
  return request({
    url: '/summer/records/' + user_id,
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    method: 'delete'
  })
}
