import request from '@/utils/request'

// 查询课程组列表
export function listGroup(query) {
	return request({
		url: '/summer/group/list',
		method: 'get',
		header: {
			"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImI2MGE5YmIxLTFjODEtNDYwYy05NDU3LWU2MDViM2U5OTcyOSJ9.Zun_3SfIfTwoicjPLlzSYbuAMY1pTgBmUOXZigP_ZHWLPLeeBfFegQPR_VqklqsiACXV_i-RGYnINjnnybmcQA"
		},
		params: query
	})
}

// 查询课程组详细
export function getGroup(class_group_id) {
	return request({
		url: '/summer/group/' + class_group_id,
		method: 'get',
		header: {
			"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImI2MGE5YmIxLTFjODEtNDYwYy05NDU3LWU2MDViM2U5OTcyOSJ9.Zun_3SfIfTwoicjPLlzSYbuAMY1pTgBmUOXZigP_ZHWLPLeeBfFegQPR_VqklqsiACXV_i-RGYnINjnnybmcQA"
		},
	})
}

// 新增课程组
export function addGroup(data) {
	return request({
		url: '/summer/group',
		method: 'post',
		header: {
			"Authorization": getApp().globalData.Authorization
		},
		data: data
	})
}

// 修改课程组
export function updateGroup(data) {
	return request({
		url: '/summer/group',
		method: 'put',
		header: {
			"Authorization": getApp().globalData.Authorization
		},
		data: data
	})
}

// 删除课程组
export function delGroup(class_group_id) {
	return request({
		url: '/summer/group/' + class_group_id,
		header: {
			"Authorization": getApp().globalData.Authorization
		},
		method: 'delete'
	})
}