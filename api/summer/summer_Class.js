import request from '@/utils/request'

// 查询课程列表
export function listSummer_Class(query) {
  return request({
    url: '/summer/summer_Class/list',
    method: 'get',
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    params: query
  })
}

// 查询课程详细
export function getSummer_Class(class_id) {
  return request({
    url: '/summer/summer_Class/' + class_id,
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    method: 'get'
  })
}

// 新增课程
export function addSummer_Class(data) {
  return request({
    url: '/summer/summer_Class',
    method: 'post',
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    data: data
  })
}

// 修改课程
export function updateSummer_Class(data) {
  return request({
    url: '/summer/summer_Class',
    method: 'put',
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    data: data
  })
}

// 删除课程
export function delSummer_Class(class_id) {
  return request({
    url: '/summer/summer_Class/' + class_id,
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    method: 'delete'
  })
}
