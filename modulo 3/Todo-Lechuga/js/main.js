// despliegue del menu responsive
let ham=document.querySelector('.ham');
let links=document.querySelector('#links');
ham.addEventListener('click', ()=>{
    links.classList.toggle('activado');
});
