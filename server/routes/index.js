var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//注册功能
router.post('/api/regist', function(req, res, next) {
  var username = this.body.username;
  var psw = this.body.psw;
  var result = {
    code : 1,
    message : "注册成功"
  }
  if(username&&psw) {
    res.json(result);
  } else {
    result.code = -110;
    result.message = "注册失败";
    res.json(result);
  }
});
module.exports = router;
