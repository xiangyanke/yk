// 间接更新状态
import {RECEIVE_CATEGORYS,HOME_DATA,RECEIVE_RECMANUAL,RECEIVE_TOP,RECEIVE_SEARCH,RECEIVE_SEARCH_RESULT} from './mutations-name'
import {recategoryList,reqHome,reqRecommendData,reqTabs,reqInitSearch,reqSearchResult} from '../api/index'

const actions = {
  async getcategoryList({commit}){
    const result = await recategoryList()
     // console.log(result)
    if(result.code===0){
      const categorydata = result.data.categoryL1List
      console.log(categorydata)
      // 成功提交mutations
      commit(RECEIVE_CATEGORYS,categorydata)
    }
  },
  async gethomedata({commit}){
    const result = await reqHome()
    if(result.code===0){
      const homeData = result.data
      // console.log(result)
      commit(HOME_DATA,{homeData})
    }
  },
  async getrecommendData({commit}){
    const result =await reqRecommendData()
      if(result.code==='200'){
        const recommendData = result.data
        // console.log(recommendData)
        commit(RECEIVE_RECMANUAL,{recommendData})
      }
    },
    //顶部
  async gettopData({commit}){
    const result =await reqTabs()
    if(result.code==='200'){
      const topData = result.data
      console.log(topData)
      commit(RECEIVE_TOP,topData)
    }
  },
  async getsearch({commit}){
    const result =await reqInitSearch()
    if(result.code==='200'){
      const searchData = result.data
      // console.log(searchData)
      commit(RECEIVE_SEARCH,{searchData})
    }
  },
  async getsearchresult({commit},keywordPrefix){

    const result =await reqSearchResult(keywordPrefix)
    if(result.code==='200'){
      const searchResult = result.data
      // console.log(searchResult)
      commit(RECEIVE_SEARCH_RESULT,{searchResult})
    }
  },


}
export default actions
