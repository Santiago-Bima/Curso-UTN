var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contactanos', { title: 'Todo Lechuga' });
});

module.exports = router;