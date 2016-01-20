var express = require('express');
var router = express.Router();
	var cities = [
		{
			name: "London",
			pop: 11000000,
			country: 'UK'
		},
		{
			name: "New York",
			pop: 17800000,
			country: "US"
		},
		{
			name: "Sao Paulo",
			pop: 17700000,
			country: "Brazil",
			extra: "Home of the 2016 olympics"
		},
		{
			name: "Mexico City",
			pop: 174000000,
			country: "Mexico",
			extra: "Place where Americans vaca."
		}

	];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cities', function(req, res, next){
	res.json(cities);
});




module.exports = router;
