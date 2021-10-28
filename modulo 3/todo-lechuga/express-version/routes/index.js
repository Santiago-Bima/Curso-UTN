var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    layout: 'layout',
    title: 'Todo Lechuga',
    usuario: req.session.username,
    conocido: req.session.conocido,
    admin: req.session.admin,
    error1: req.session.error1
  });
});
module.exports = router;
