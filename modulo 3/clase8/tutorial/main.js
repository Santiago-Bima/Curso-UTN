const express=require('express');
const morgan=require('morgan');
const app=express();



//settings
app.set('appName', 'fazt express tutorial');
app.set('port', 3001);
app.set('view engine', 'ejs');


//middlewares

//este middleware a diferencia del .all, funciona para todas las rutas y no solo para una como /user
// function logger(req, res, next){
//     //va a registrar las peticiones que llegan al servidor
//     console.log(`Route received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// }

//para que express pueda entender los json
//otro middleware
app.use(express.json());
// app.use(logger);
app.use(morgan('dev'))



//routes

 
app.all('/user', (req, res, next)=>{
    console.log('Por aqui paso');
    next();
})

app.get('/', (req, res)=>{
    const data=[{name: 'jhon'}, {name: 'joe'}, {name: 'cameron'}]
    res.render('index.ejs', {people: data});
})

app.get('/user', (req, res)=>{
    res.json({
        userName: 'Santiago',
        lastName: 'Bima',
        age: 18,
        sign: 'Aries'
    });
})

app.get('/form', (req, res)=>{
    res.send('formulario*')
})//recivir cosas mediante url

//ruta dinamica para agregar un usuario con id variable
app.post('/user/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('usuario recivido')
})

app.post('/recivido', (req, res)=>{
    res.sende('recivido')
})//recivir cosas y guardarlas en bases de dato por ejemplo y luego hacer una cosa

app.put('/user/:id', (req,res)=>{
    console.log(req.body);
    res.send(`User ${req.params.id} updated`)
})//enciar datos para desp actualizarlos

app.delete('/user/:id', (req,res)=>{
    res.send(`User ${req.params.id} deleted`)
})//tomar la peticion y eliminar un dato en el servidor


app.use(express.static('public'));

app.listen(app.get('port'), ()=>{
    console.log(app.get('appName'));
    console.log('Server on port', app.get('port'));
})