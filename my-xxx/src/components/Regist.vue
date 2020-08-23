
<template>
  <div class="regist">
    <div id="app">
       <img src="../assets/da.png">
        <div id="s1">
              捷稅宝基础支撑平台
        </div><br>
        <input type="text" id="inp1" v-model= "username"/><br>
        <input type="password" id="inp2" v-model= "psw"/><br/>
        <span id="s2"><input type="checkbox">记住密码</span>
        <span id="s3"><a href="#">忘记密码?</a></span> <br>
        <div id="button" @click="regist()">登录</div>
    </div>  
    <p> COPYRIGHT © 2020 - 普道（上海）信息科技有限公司 沪ICP备10005376号-1 </p>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Regist',
  data () {
    return {
      username : "",
      psw : ""
    }
  },
  methods : {
    regist: function() {
      axios.post('/api/regist',{
        username: this.username,
        psw: this.psw
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
img {
  width: 143px;
  height: 38px;
  margin-top: 100px;
}
#app {
    margin: 10px auto;
    width: 350px;
   
    position: relative;
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
    margin-top: 50px;
    font-size: 14px;
  }
</style>

