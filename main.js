const toggle = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('navigator')[0]
const togglebt = document.querySelector('.toggle-button');

toggle.addEventListener('click', () =>{
    navbar.classList.toggle('active')
})

// ========================= for hamburger animation  ========================= 
togglebt.addEventListener('click', function (){
    this.classList.toggle('is-active')
})

// ========================= hamburger disappear when scroll  ========================= 
window.addEventListener("scroll",() =>{ 
    navbar.classList.toggle('active', false)
    togglebt.classList.toggle('is-active',false)
});