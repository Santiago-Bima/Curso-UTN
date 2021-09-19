// despliegue del menu responsive
let ham=document.querySelector('.ham');
let links=document.querySelector('#links');
ham.addEventListener('click', ()=>{
    links.classList.toggle('activado');
});

//  despliegue de menu lateral
let contenedor=document.querySelector('#flecha');
let menu=document.querySelector('.menu');
let flecha=document.querySelector('.flecha');
contenedor.addEventListener('click', ()=>{
    menu.classList.toggle('activado');
    flecha.classList.toggle('activado');
});
//metodo para cerrar menu al presionar un link
let prod=document.querySelectorAll('.linkprod').forEach(prod =>{
    prod.addEventListener('click', ()=>{
        menu.classList.remove('activado');
        flecha.classList.remove('activado');
    })
});
