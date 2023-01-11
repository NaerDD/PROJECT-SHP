//对axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";
// console.log(nprogress);
//start done 进度条开始 结束

//在当前模块中引入store
import store from '@/store';



//1.利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
  //配置对象
  //基础路径 发请求的路径都带上/api
  baseURL:"/api",
  //请求超时时间
  timeout:5000,
});

//请求拦截器:在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
  //config:配置对象，对象里面有一个属性很重要，header请求头
  //将uuid带过去
  if(store.state.detail.uuid_token){
    //请求头添加一个字段(userTempId):不能乱写 和后台商量好
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  //需要携带token带给服务器
  if(store.state.user.token){
    config.headers.token = store.state.user.token;
  }
  //进度条开始动
  nprogress.start();
  return config;
})

//响应拦截器
requests.interceptors.response.use((res)=>{
  //成功的回调 服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
  //进度条结束
  nprogress.done();
  return res.data;
},()=>{
  //响应失败的回调
  return Promise.reject(new Error('faile'));
})

//对外暴露
export default requests;