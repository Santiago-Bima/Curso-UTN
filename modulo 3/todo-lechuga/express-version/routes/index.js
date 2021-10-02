var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Todo Lechuga',
    usuario: req.session.user,
    conocido: req.session.conocido,
    admin: req.session.admin,
    error1: req.session.error1
  });
});
module.exports = router;
