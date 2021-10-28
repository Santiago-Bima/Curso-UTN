var express=require('express');
var router=express.Router();
var userModels=require('./../models/usuariosModel');

router.get('/', function(req, res, next) {
    res.render('login', {
        layout: 'layout', 
    });
});

router.post('/', async (req, res, next) => {
    try{
        var email=req.body.email;
        var psw=req.body.psw;

        var data=await userModels.getUsersByEmailAndPsw(email, psw);

        if (data!=undefined){
            req.session.id_user=data.id;
            req.session.username=data.user;
            req.session.email=data.email;
            res.redirect('/index');
        }else{
            res.render('login', {
                layout: 'layout', 
                error: true
            });
        }
    }catch(e){
        console.log(e);
    };
});

module.exports=router;