var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('chat', { title: 'Cox Automotive Total Solutions' });
});

module.exports = router;