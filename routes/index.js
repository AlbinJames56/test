var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const values=["albin","anes","joshua"]


  
  const person={name:"albin james", address:{house: "thannippara",place:"alakode"}}

  

  res.render('index', {values, person });
});

module.exports = router;
