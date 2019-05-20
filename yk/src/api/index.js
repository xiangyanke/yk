import ajax from './axios'
// let BASE = '/api'
//获取分类列表
export const recategoryList = () => ajax('/categorylist')
