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
const getters = {
  categoryView(state){
    //比如:state.goodInfo初始状态空对象,空对象的categoryView属性值undefined
    //当前计算出的categoryView属性值至少是一个空对象,假的报错不会有了
    return state.goodInfo.categoryView||{};
  },
  skuInfo(state){
    return state.goodInfo.skuInfo||{};
  },

};
export default{
  state,
  actions,
  getters,
  mutations
}
