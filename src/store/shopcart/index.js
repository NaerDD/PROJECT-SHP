import { reqCartList,reqDeleteCartById,reqUpdateCheckedById } from "@/api";
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

  },
  //删除购物车某一个产品
  async deleteCartListBySkuId({commit},skuId){
    let result = await reqDeleteCartById(skuId);
    if(result.code == 200){
      return 'ok'
    }else{
      //代表加入失败
      return Promise.reject(new Error('faile'));
    }
  },
  //修改购物车某一个产品的选中状态
  async reqUpdateCheckedById({commit},{skuId,isChecked}){
    let result = await reqUpdateCheckedById(skuId,isChecked);
    if(result.code == 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('faile'));
    }
  },
  //删除全部勾选的产品
  deleteAllCheckedCart({dispatch,getters}){
    //context:小仓库.commit[提交mutations修改state] getters计算属性 dispatch派发action state当前仓库数据
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach(element => {
      let promise = element.isChecked==1?dispatch('deleteCartListBySkuId',element.skuId):'';
      //将每一次返回的promise结果存到promiseAll中
      PromiseAll.push(promise);
    });
    //最后调用promise.all检测一波PromiseAll是不是全部都成功
    //如果有一个失败 就返回一个失败的结果
    return Promise.all(PromiseAll);
  },
  //修改全部产品的状态
  updateAllCartIsChecked({dispatch,state},isChecked){
    let promiseAll= [];
    state.cartList[0].cartInfoList.forEach(item=>{
      let promise = dispatch('reqUpdateCheckedById',{skuId:item.skuId,isChecked})
      promiseAll.push(promise);
    })
    return Promise.all(promiseAll);
  }};
const mutations = {
  GETCARTLIST(state,cartList){
    state.cartList = cartList;
  },
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