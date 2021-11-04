var express = require('express');
var router = express.Router();
var prodModel=require('../models/productos');

router.get('/', async function(req, res, next){
  var prods=await prodModel.getProd();
  var tipos=await prodModel.getProdType();
  res.render('menu', { 
    title: 'Todo Lechuga',
    username: req.session.username,
    conocido: req.session.conocido,
    admin: req.session.admin,
    error1: req.session.error1,
    prods,
    tipos
  });
});



module.exports = router;