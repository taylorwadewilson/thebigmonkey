var express = require('express');
var router = express.Router();

console.log('set up golfers router');
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('got a request on /golfers');
	let golfers = [];
	let golfer1 = {firstName: "Taylorrr", lastName: "Wilson", score: "72"};
  	golfers[0] = golfer1;
  	console.log('sending back ' + golfers);
  	res.send(golfers);
});

module.exports = router;
