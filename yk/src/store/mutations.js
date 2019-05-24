// 直接更新状态
import {RECEIVE_CATEGORYS,HOME_DATA,RECEIVE_RECMANUAL,RECEIVE_TOP,RECEIVE_SEARCH,RECEIVE_SEARCH_RESULT} from './mutations-name'
const mutations = {
  //获取分类列表
[RECEIVE_CATEGORYS] (state,categorydata){
  state.categorydata = categorydata
 },
  //首页
  [HOME_DATA](state,{homeData}){
  state.homeData = homeData
  },
//获取推荐
  [RECEIVE_RECMANUAL](state,{recommendData}){
    state.recommendData = recommendData
  },
  //获取顶部
  [RECEIVE_TOP](state,topData){
    state.topData = topData
  },
    //搜索 关键字
  [RECEIVE_SEARCH](state,{searchData}){
    state.searchData = searchData
  },
  // 获取搜索结果
  [RECEIVE_SEARCH_RESULT](state,{searchResult}){
    state.searchResult = searchResult
  }
}

export default mutations
