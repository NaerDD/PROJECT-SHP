<template>
  <div class="pagination">
      <button>1</button>
      <button>上一页</button>
      <button>···</button>

      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>

      <button>···</button>
      <button>{{ totalPage }}</button>
      <button>上一页</button>

      <div>{{ start}}</div>

      <button style="margin-left: 30px">共 {{total}} 条</button>
      <h1>{{ startNumAndEndNum }}----{{ pageNo }}</h1>

  </div>
</template>

<script>
  export default {
      name: "Pagination",
      props:['pageNo','pageSize','total','continues'],
      computed:{
        //总共多少页
        totalPage(){
          //向上取整
          return Math.ceil(this.total/this.pageSize);
        },
        //计算出连续的页码的起始数字与结束数字[连续页码的数字:至少是5]
        startNumAndEndNum(){
          //解构
          const {continues,pageNo,totalPage} = this;
          //先定义两个变量存储起始数字与结束数字
          let start = 0,end = 0;
          //连续页码数字5[就是至少五页],如果出现不正常的现象[不够5页]
          //不正常现象[总页数小于连续页码]
          if(continues > totalPage){
            start = 1; end= totalPage
          }else{
            //正常现象[连续页码5,但是总页数一定是大于5的]
            start = pageNo - Math.floor(continues/2)
            //结束数字
            end = pageNo + Math.floor(continues/2)
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
          }
          return {start,end}
          

        }
      }
  }
</script>

<style lang="less" scoped>
  .pagination {
    text-align: center;
      button {
          margin: 0 5px;
          background-color: #f4f4f5;
          color: #606266;
          outline: none;
          border-radius: 2px;
          padding: 0 4px;
          vertical-align: top;
          display: inline-block;
          font-size: 13px;
          min-width: 35.5px;
          height: 28px;
          line-height: 28px;
          cursor: pointer;
          box-sizing: border-box;
          text-align: center;
          border: 0;

          &[disabled] {
              color: #c0c4cc;
              cursor: not-allowed;
          }

          &.active {
              cursor: not-allowed;
              background-color: #409eff;
              color: #fff;
          }
      }
  }
</style>