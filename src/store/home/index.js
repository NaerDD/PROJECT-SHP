import {reqCateGoryList} from '@/api'
//home模块的小仓库
const state = {
  //默认初始值别乱写,服务器返回对象/数组[根据接口返回值]
  categoryList:[],
}; 

const actions = {
  //通过api里面的接口函数调用,向服务器发送请求,获取服务器的数据
  async categoryList({commit}){
      let result = await reqCateGoryList();
      if(result.code==200){
        commit("CAREGORYLIST",result.data.slice(0,16))
      }
      // console.log(result);
      
  }
}; 
const mutations = {
  CAREGORYLIST(state,categoryList){
    state.categoryList = categoryList;
  }
}; 
const getters = {}; 

export default {
  state,
  mutations,
  actions,
  getters
}
