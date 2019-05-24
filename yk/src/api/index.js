import ajax from './axios'
let BASE = '/api'
//获取分类列表
export const recategoryList = () => ajax('/categorylist')
//获取首页数据
export const reqHome = () => ajax('/home')
  // 识物-推荐 数据 ----
export const reqRecommendData = () => ajax(`${BASE}/topic/v1/find/recManual.json`)

// 识物-Tab 懒数据 ---- http://m.you.163.com/topic/v1/find/getTabs.json
export const reqTabs = () => ajax(`${BASE}/topic/v1/find/getTabs.json`)

// 识物-晒单 顶部数据 ---- http://m.you.163.com/topic/v1/look/getCollection.json?id=6
export const reqColection = (id) => ajax(`${BASE}/topic/v1/look/getCollection.json`, {id})

//根据关键字搜索  ----http://m.you.163.com/xhr/search/init.json
export const reqInitSearch = () =>ajax(`${BASE}/xhr/search/init.json`,'POST')

// 获取搜索结果.---http://localhost:8081/api/xhr/search/searchAutoComplete.json?keywordPrefix=
export const reqSearchResult = (keywordPrefix) => ajax(`${BASE}/xhr/search/searchAutoComplete.json`, {keywordPrefix})
