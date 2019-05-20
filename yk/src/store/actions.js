// 间接更新状态
import {RECEIVE_CATEGORYS} from './mutations-name'
import {recategoryList} from '../api/index'

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
  }
}
export default actions
