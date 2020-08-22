<template>
  <div id="app1">
    <div id="app">
        <img src="./assets/da.png"><br/>
        <div id="s1">
          捷稅宝基础支撑平台
        </div><br>
        <input type="text" id="inp1"/><br>
        <input type="password" id="inp2"/><br/>
        <span id="s2"><input type="checkbox">记住密码</span>
        <span id="s3"><a href="#">忘记密码?</a></span>
        <br>
        <div id="button">登录</div>
    </div>
    
    <p>COPYRIGHT © 2020 - 普道（上海）信息科技有限公司 沪ICP备10005376号-1 </p>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
#app {
   margin: 170px auto;

  width: 350px;
  height: 180px;
  /* /background: pink; */
  position: relative;
}
#app>img {
    width: 143px;
    height: 38px;
}
#app>#s1 {
  font-size: 14px;
  color: #aaa;
  margin-top: 10px;
}
#app>#inp1,#inp2 {
  width: 350px;
  height: 25px;
  background: #e8f0fe;
}
#app>#inp1{
  margin-top: 25px;
}
#app>#inp2{
  margin-top: 35px;
}
#app>#s2 {
  float: left;
  margin-top: 30px;
  font-size: 14px;
}
#app>#s3 {
  float: right;
  margin-top: 30px;
  font-size: 12px;
}
#app>#s3>a {
   text-decoration: none;
   color: blue;
}
#app>#button {
  width: 350px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  background: #007dfc;
  margin-top: 50px;
  color: white;
  cursor: pointer;
}
p {
  font-size: 14px;
}
</style>
