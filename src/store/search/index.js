import { reqGetSearchInfo } from "@/api";
//search模块的小仓库
const state = {
  //数组初始的状态
  searchList:{}
}; 

const actions = {
  //获取search模块数据
  async getSearchList({commit},params={}){
    //reqGetSearchInfo这个函数调用获取服务器数据的时候,至少传递一个参数(空对象)
    //params形参 是当用户派发action的时候,第二个参数传递过来的 至少是一个对象
    let result =  await reqGetSearchInfo(params)
    // console.log(result);
    if(result.code==200){
      commit("GETSEARLIST",result.data);
    }
  }
}; 
const mutations = {
  GETSEARLIST(state,searchList){
    state.searchList = searchList
  }
}; 
//计算属性
//简化仓库中的数据 可以把我们将来在组件当中需要用的数据简化一下 将来获取的时候方便
const getters = {
  goodsList(state){
   //state 当前仓库中的state 不是大仓库中的state
   //[]没网返回空数组
    return state.searchList.goodsList||[];
  },
  trademarkList(state){
    return state.searchList.trademarkList||[];
  },
  attrsList(state){
    return state.searchList.attrsList||[];
  },
}; 

export default {
  state,
  mutations,
  actions,
  getters
}
