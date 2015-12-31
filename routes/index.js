var express = require('express');
var router = express.Router();

/* GET Home page */
router.get('/', function(req, res) {
	console.log("hitting index.js");
	res.render('index', {title: 'Cleric App'});
});

module.exports = router;