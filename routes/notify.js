var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('notify', { title: 'Cox Automotive Total Solutions' });
});

module.exports = router;