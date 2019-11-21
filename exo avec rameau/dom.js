let input=document.querySelector('input[type="text"]')
let view=document.querySelector('.voir');

input.addEventListener('keyup',(e)=>{
view.textContent=input.value
})