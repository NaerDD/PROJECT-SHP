import { reqGoodsInfo } from "@/api";
const state = {
  goodInfo:{}
};
const actions= {
  //获取产品信息的action
  async getGoodInfo({commit},skuId){
    let result =  await reqGoodsInfo(skuId)
    if(result.code==200){
      commit("GETGOODINFO",result.data)
    }
  }
};
const mutations = {
  GETGOODINFO(state,goodInfo){
    state.goodInfo = goodInfo
  }
};
const getters = {};
export default{
  state,
  actions,
  getters,
  mutations
}
