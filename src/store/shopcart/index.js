import { reqCartList } from "@/api";
const state = {
  cartList:[]

};
const actions = {
  //获取购物车列表数据
  async getCartList({commit}){
    let result = await reqCartList();
    if(result.code == 200){
      commit("GETCARTLIST",result.data)
    }

  }
};
const mutations = {
  GETCARTLIST(state,cartList){
    state.cartList = cartList;
  }
};
const getters = {
  cartList(state){
    return state.cartList[0]||{}
  },
  //计算出来的购物车数据
  // cartInfoList(state){
  //   return state.
  // }
};

export default {
  state,
  mutations,
  actions,
  getters
}