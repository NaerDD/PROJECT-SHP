import { reqAddressInfo,reqOrderInfo } from "@/api";
const state = {
  address:[],
  orderInfo:{}
};
const actions = {
  //获取用户地址信息
  async getUserAddress({commit}){
    let result  = await reqAddressInfo();
    console.log(result);
    if(result.code == 200){
      commit('GETUSERADDRESS',result.data)
    }
  },
  //获取商品清单
  async getOrderInfo({commit}){
    let result  = await reqOrderInfo();
    console.log(result);
    if(result.code == 200){
      commit('GETORDERINFO',result.data)
    }
  },

};
const mutations = {
  GETUSERADDRESS(state,address){
    state.address= address;
  },
  GETORDERINFO(state,orderInfo){
    state.orderInfo= orderInfo;
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}