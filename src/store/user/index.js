import {reqGetCode,reqUserRegister} from '@/api';
//登陆与注册的模块
const state = {
  code:''
};
const mutations = {
  GETCODE(state,code){
    state.code = code;
  }
};
const actions = {
  //获取验证码
  async getCode({commit},phone){
    //获取验证码这个接口:把验证码返回,但正常情况下,后台把验证码发到用户手机上[省钱]
   let result  = await reqGetCode(phone);
   console.log(result);
  if(result.code==200){
    commit("GETCODE",result.data);
    return 'ok'
  }else{
    return Promise.reject(new Error('faile'));
  }
  },
  //用户注册
  async userRegister({commit},user){
     let result = await reqUserRegister(user);
    //  console.log(result);
     if(result.code==200){
      return 'ok';
     }else{
      return Promise.reject(new Error('faile'));
     }
  },
};
const getters = {};
export default{
  state,
  mutations,
  actions,
  getters
}