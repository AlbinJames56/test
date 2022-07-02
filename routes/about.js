var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', {value:"this is about page"});
});

module.exports = router;
// function a(){
//   return 'Alma Better'
//   }
//   function b(x,y){
//   console.log(this.a+ ' ' + x + ' ' + y)
//   }
  
//   b.call(a(),"is a ","Edtech Company")