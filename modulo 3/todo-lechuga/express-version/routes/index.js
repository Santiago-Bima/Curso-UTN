var express = require('express');
var router = express.Router();
var novedadesModel=require('../models/novedades');
var prodModel=require('../models/productos');
const multer = require('multer');
const mimeTypes=require('mime-types');

secured=async(req, res, next)=>{
  try{
    console.log(req.session.username);
    if(req.session.username) next();
    else res.redirect('/login');
  }catch(e){
    console.log(e);
  }
}

const storage = multer.diskStorage({
  destination:function(req, file, cb){
    cb(null, './public/images/')
  },
  filename: function (req, file, cb) {
    cb("",file.originalname+ '.'+mimeTypes.extension(file.mimetype));
  }
})
 
const upload=multer({storage: storage});

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


router.get('/agregar', secured, (req, res, next)=>{
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

router.get('/newProd', secured, async function(req, res, next){
  var tipos=await prodModel.getProdType();
  res.render('newProd', {
    layout: 'layout',
    title: 'Todo Lechuga',
    username: req.session.username,
    conocido: req.session.conocido,
    admin: req.session.admin,
    tipos
  });
})

router.post('/newProd',upload.single('img'), async(req, res, next)=>{
  try{
    titulo=req.body.nombre;
    cuerpo=req.body.contenido;
    img=req.file;
    tipo=req.body.tipos;
    precio=req.body.precio;
    if(titulo!='' && cuerpo!='' && img!=null && tipo!='' && precio!=''){
      if(img.mimetype=='image/jpeg' || img.mimetype=='image/png' || img.mimetype=='image/jpg'){
        if(img.size<=1000000){
          var path='/images/'+img.originalname+'.'+mimeTypes.extension(img.mimetype);
          await prodModel.insertProd(titulo, cuerpo, tipo, precio, path, false);
          res.redirect('/menu');
        }else{
          res.render('newProd', {
            layout: 'layout',
            title: 'Todo Lechuga',
            username: req.session.username,
            conocido: req.session.conocido,
            admin: req.session.admin,
            error: true, message: 'la imagen es muy pesada'
          })
        }
      }else{
        res.render('newProd', {
          layout: 'layout',
          title: 'Todo Lechuga',
          username: req.session.username,
          conocido: req.session.conocido,
          admin: req.session.admin,
          error: true, message: 'el archivo no es una imagen'
        })
      }
    }else{
      res.render('newProd', {
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
    res.render('newProd', {
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
