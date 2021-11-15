var express = require('express');
var router = express.Router();
var novedadesModel=require('../models/novedades');
var prodModel=require('../models/productos');
const multer = require('multer');
const mimeTypes=require('mime-types');

secured=async(req, res, next)=>{
  try{
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
  var prods=await prodModel.getProd();
  res.render('index', {
    layout: 'layout',
    title: 'Todo Lechuga',
    username: req.session.username,
    conocido: req.session.conocido,
    admin: req.session.admin,
    error1: req.session.error1,
    novedades,
    prods
  });
});







// news

router.get('/agregar', secured, (req, res, next)=>{
  res.render('agregar', {
    layout: 'layout',
    title: 'Todo Lechuga',
    username: req.session.username,
    conocido: req.session.conocido,
    admin: req.session.admin
  });
})

router.post('/agregar', secured, async(req, res, next)=>{
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

router.get('/deleteNew/:id', secured, async(req, res, next)=>{
  var id=req.params.id;
  await novedadesModel.deleteNovedad(id);
  res.redirect('/');
})

router.get('/editNew/:id', secured, async(req, res, next)=>{
  let id=req.params.id;
  let noticia= await novedadesModel.getNovedadById(id);
  res.render('editNew', {
    layout: 'layout',
    title: 'Todo Lechuga',
    username: req.session.username,
    conocido: req.session.conocido,
    admin: req.session.admin,
    noticia
  });
})

router.post('/editNew', secured, async(req, res, next)=>{
  try{
    let obj={
      titulo: req.body.nombre,
      cuerpo: req.body.contenido
    }

    await novedadesModel.updateNovedad(obj, req.body.id);
    res.redirect('/');
  }catch(error){
    console.log(error);
    res.render('editNew', {
      layout: 'layout',
      title: 'Todo Lechuga',
      username: req.session.username,
      conocido: req.session.conocido,
      admin: req.session.admin,
      error: true, message: 'no se cargó la novedad'
    })
  }
})










// prods
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

router.post('/newProd',upload.single('img'), secured, async(req, res, next)=>{
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

router.post('/destacarProd',secured, async function(req, res, next){
  try{
    var checks=req.body.check;
    checks.forEach(async (check) => {
      await prodModel.destacarProd(check);
    });
    res.redirect('/menu');
  }catch(error){
    console.log(error);

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
            imagen:prod.imagen,
            id:prod.id,
            destacado: prod.destacado
          });
        }
      })
      listaTipos.push({tipos:tipo.tipo,productos:coincidenciaTipo});
    });

    res.render('menu', {
      layout: 'layout',
      title: 'Todo Lechuga',
      username: req.session.username,
      conocido: req.session.conocido,
      admin: req.session.admin,
      error: true, message: 'no se pudo destacar la novedad',
      listaTipos
    })
  }

});

router.get('/deleteProd/:id', secured, async(req, res, next)=>{
  var id=req.params.id;
  await prodModel.deleteProd(id);
  res.redirect('/menu');
})

router.get('/editProd/:id', secured, async(req, res, next)=>{
  let id=req.params.id;
  let prod= await prodModel.getProdById(id);
  var tipos=await prodModel.getProdType();
  res.render('editProd', {
    layout: 'layout',
    title: 'Todo Lechuga',
    username: req.session.username,
    conocido: req.session.conocido,
    admin: req.session.admin,
    prod,
    tipos
  });
})

router.post('/editProd',upload.single('img'), secured, async(req, res, next)=>{
  try{
    
    let img=req.file;
    console.log(img);

    let obj={
      nombre: req.body.nombre,
      cuerpo: req.body.contenido,
      tipo_de_producto: req.body.tipos,
      precio: req.body.precio,
      imagen: '/images/'+img.originalname+'.'+mimeTypes.extension(img.mimetype),
      destacado: req.body.destacado
    }

    await prodModel.updateProd(obj, req.body.id);
    res.redirect('/');
    
  }catch(error){
    console.log(error);
    res.render('editProd', {
      layout: 'layout',
      title: 'Todo Lechuga',
      username: req.session.username,
      conocido: req.session.conocido,
      admin: req.session.admin,
      error: true, message: 'no se pudo actualizar el producto'
    })
  }
})


module.exports = router;
