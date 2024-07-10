import request from '@/utils/request'

// 查询章节列表
export function listChapter(query) {
  return request({
    url: '/summer/chapter/list',
    method: 'get',
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    params: query
  })
}

// 查询章节详细
export function getChapter(chapter_id) {
  return request({
    url: '/summer/chapter/' + chapter_id,
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    method: 'get'
  })
}

// 新增章节
export function addChapter(data) {
  return request({
    url: '/summer/chapter',
    method: 'post',
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    data: data
  })
}

// 修改章节
export function updateChapter(data) {
  return request({
    url: '/summer/chapter',
    method: 'put',
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    data: data
  })
}

// 删除章节
export function delChapter(chapter_id) {
  return request({
    url: '/summer/chapter/' + chapter_id,
	header: {
		"Authorization": getApp().globalData.Authorization
	},
    method: 'delete'
  })
}
