// 直接更新状态
import {RECEIVE_CATEGORYS} from './mutations-name'
const mutations = {
  //获取分类列表
[RECEIVE_CATEGORYS] (state,categorydata){
  state.categorydata = categorydata
 }
}

export default mutations
