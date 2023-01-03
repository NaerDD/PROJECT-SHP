//当前模块:API进行统一管理
import requests from "./request";
import mockRequests from "./mockAjax";

//三级联动接口
////api/product/getBaseCategoryList  GET 无参数
//发请求：axios发请求返回结果promise对象
export const reqCateGoryList = () => requests({url:'/product/getBaseCategoryList',method:'get'});

//获取banner (Home首页轮播图)
export const reqGetBannerList = ()=>mockRequests.get('/banner');