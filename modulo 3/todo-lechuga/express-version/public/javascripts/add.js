let form=document.getElementsByClassName('alerta')
let addBtn=document.getElementsByClassName('addBtn1')
console.log(form, addBtn)
addBtn.addEventListener('click', function(){
    form.classList.toggle('activado')
})