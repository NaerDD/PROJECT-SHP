//当前模块:API进行统一管理
import requests from "./request";
//三级联动接口
////api/product/getBaseCategoryList  GET 无参数
//发请求：axios发请求返回结果promise对象
export const reqCateGoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});