var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.render('list/list', {
    title: 'List',
    items: [1991, 'byvoid', 'express', 'Node.js']
  });
});

module.exports = router;
