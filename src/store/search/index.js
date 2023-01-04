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
    console.log(result);
    if(result.code==200){
      commit("GETSEARLIST",result.data);
    }
    
  }
}; 
const mutations = {
  GETSEARLIST(state,searchList){
    state.SearchList = searchList
  }
}; 
const getters = {}; 

export default {
  state,
  mutations,
  actions,
  getters
}
