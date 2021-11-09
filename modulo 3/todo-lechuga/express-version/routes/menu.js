var express = require('express');
var router = express.Router();
var prodModel=require('../models/productos');

router.get('/', async function(req, res, next){
  var prods=await prodModel.getProd();
  var tipos=await prodModel.getProdType();
  var listaTipos=[];
  tipos.forEach(tipo => {
    var coincidenciaTipo=[];
    prods.forEach(prod =>{
      if(prod.tipo_de_producto==tipo.tipo){
        coincidenciaTipo.push({
          nombre:prod.nombre,
          descripcion:prod.cuerpo,
          tipo:prod.tipo_de_producto,
          precio:prod.precio,
          imagen:prod.imagen
        });
      }
    })
    listaTipos.push({tipos:tipo.tipo,productos:coincidenciaTipo});
  });

  res.render('menu', { 
    title: 'Todo Lechuga',
    username: req.session.username,
    conocido: req.session.conocido,
    admin: req.session.admin,
    error1: req.session.error1,
    listaTipos
  });
});



module.exports = router;