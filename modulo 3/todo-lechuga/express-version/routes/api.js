var express = require('express');
var router = express.Router();
var novedadesModels = require('../models/novedades');
var prodModels = require('../models/productos');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModels.getNovedades();

    res.json(novedades);
})

router.get('/productos', async function (req, res, next) {
    let prods = await prodModels.getProd();
    prods=prods.map(prod=>{
        const imagen=cloudinary.image(prod.imagen,{
          width: 200,
          height: 170,
          crop: 'fill'
        });
        return{
          ...prod,imagen
        }
    })

    res.json(prods);
})

module.exports = router;