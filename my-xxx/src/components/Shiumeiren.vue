<template>
   <div class="shuimeiren">
      <div id="header">
        <span id="s1">段晨曦</span>
        <div id="yuan"></div>
        <div id="s2">发起协作</div>
        <div id="img"> <img src="../assets/da.png"></div>
        <div id="gang">〓</div>
      </div>
      <div id="dleft">
          <div id="kehu">
              <span>客户服务</span><span id="dayu"> > </span>
          </div>
           <div id="sheli">
              <span>设立管理</span><span id="dayu"> > </span>
          </div>
           <div id="kaipiao">
              <span>开票管理</span><span id="dayu"> > </span>
          </div>
           <div id="tongji">
              <span>统计查询</span><span id="dayu"> > </span>
          </div>
      </div>
   </div> 
</template>

<script>
export default {
    name: "Shuimeiren",
    data: function() {
        return {

        }
    }
}
</script>

<style>
.shuimeiren>#header {
    width: 100%;
    height: 60px;
    background: white;
    box-shadow: 0px 5px 10px #c5bcbc;
}

#header>#s1 {
    float: right;
    line-height: 60px;
    font-size: 16px;
    color: #A3A4A6;
    cursor: pointer;
    padding-right: 20px;
}
#header>#yuan {
    width: 30px;
    height: 30px;
    background: darkcyan;
    border-radius: 50%;
    float: right;
    margin: 15px;
}
#header>#s2 {
    border: 1px solid gray;
    width: 80px;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    color: #606266;
    float: right;
    margin-top: 14px;
    cursor: pointer;
}
#header>#img {
    width: 230px;
    height: 60px;       
    float: left;
    box-shadow: 5px 0px 5px #ebe4e4;
}
#header>#img>img {
    width: 117px;
    height: 30px;
    margin-top: 15px;

}
#header>#gang {
    float: left;
    margin: 28px 10px;
    cursor: default;
}
.shuimeiren>#dleft {
    width: 230px;
    height: 550px;
    background: white;
    box-shadow: 5px 0px 5px #ebe4e4;
}
#dleft>#kehu {
    width: 230px;
    height: 60px;
    font-size: 14px;
    cursor: default;
}
#dleft>#sheli {
    width: 230px;
    height: 56px;
    font-size: 14px;
    line-height: 56px;
    cursor: default;
}
#dleft>#kaipiao {
    width: 230px;
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    cursor: default;
}
#dleft>#tongji {
    width: 230px;
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    cursor: default;
}
#dleft #dayu{
    float: right;
    padding-right: 20px;
    cursor: default;
}
</style>