var express = require('express');
var router = express.Router();
var novedadesModel=require('../models/novedades');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var novedades=await novedadesModel.getNovedades();
  res.render('index', {
    layout: 'layout',
    title: 'Todo Lechuga',
    username: req.session.username,
    conocido: req.session.conocido,
    admin: req.session.admin,
    error1: req.session.error1,
    novedades
  });
});


router.get('/agregar', (req, res, next)=>{
  res.render('agregar', {
    layout: 'layout',
    title: 'Todo Lechuga',
    username: req.session.username,
    conocido: req.session.conocido,
    admin: req.session.admin
  });
})

router.post('/agregar', async(req, res, next)=>{
  try{
    titulo=req.body.nombre;
    cuerpo=req.body.contenido;
    if(titulo!='' && cuerpo!=''){
      await novedadesModel.insertNovedad(titulo, cuerpo);
      res.redirect('/');
    }else{
      res.render('agregar', {
        layout: 'layout',
        title: 'Todo Lechuga',
        username: req.session.username,
        conocido: req.session.conocido,
        admin: req.session.admin,
        error: true, message: 'todos los campos son requeridos'
      })
    }
  }catch(error){
    console.log(error);
    res.render('agregar', {
      layout: 'layout',
      title: 'Todo Lechuga',
      username: req.session.username,
      conocido: req.session.conocido,
      admin: req.session.admin,
      error: true, message: 'no se cargó la novedad'
    })
  }
})

module.exports = router;
