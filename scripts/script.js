const button = document.querySelector('.burger') 
const nav = document.querySelector('.nav')
const burger = document.querySelector('#burger')

button.addEventListener('click', () =>{
    nav.classList.toggle('active')
})
burger.addEventListener('click', () =>{
    burger.classList.toggle('active')
})

