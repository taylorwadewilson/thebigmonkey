var express = require('express');
var router = express.Router();

console.log('setup index router');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('got a request on index router');
  res.render(__dirname + 'src/index.html');
});

module.exports = router;
