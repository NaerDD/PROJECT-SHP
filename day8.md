1:分页器 封装的原理
当前第几页 pageNo
分页器一共要展示多少条数据:total
分页器一页要展示多少条数据:pageSize ---[得到总共多少页]
知道连续的页码数5/7

2:对于分页器
当前5
3 4 5 6 7 
当前8
6 7 8 9 10 

3:分页器情况需要考虑?
连续的页码数5 (暗含条件:分页器最少5页)

4:特殊情况考虑
pageNo:1
-1 0 1 2 3 ------> 1 2 3 4 5 
pageNo:2
0 1 2 3 4  ------> 1 2 3 4 5
start = pageNo - Math.floor(continues/2)
end = pageNo + Math.floor(continues/2)
结果start=-1 end=2
//把出现不正常的现象[start数字出现0|负数]纠正
if(start<1){
    start = 1;
    end = continues;
  }
  //把出现不正常的现象[end数字大于总页码]纠正
  if(end>totalPage){
    end = totalPage;
    start = totalPage-continues+1;
  }

  pageNo: 33 ---[一共33]
  31 32 33 34 35 ---------> 29 30 31 32 33
  pageNo: 32 ---[一共33]
  30 31 32 33 34 ---------> 29 30 31 32 33

5)数据解释?----售卖属性
[
  {
    attr:'颜色',
    attrValue:['粉色','天蓝色']
  },
  {
        attr:'版本',
    attrValue:['16G','32G']
  }
]