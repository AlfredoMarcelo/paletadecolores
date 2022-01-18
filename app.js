const inputColor = document.querySelector('#inputColor');
const btnVisualizar = document.querySelector('#btnVisualizar');
const textColor = document.querySelector('.lead');
const cardColor = document.querySelector('.card');

btnVisualizar.addEventListener("click", ()=>{
    a = inputColor.value
    textColor.textContent = a
    cardColor.style.backgroundColor = a
    
})
