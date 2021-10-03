let form=document.getElementsByClassName('alerta')[0]
let addBtn=document.getElementsByClassName('addBtn1')[0]
console.log(form, addBtn)
addBtn.addEventListener('click', function(){
    form.classList.toggle('activado')
})