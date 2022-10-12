const toggle = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navigator');

toggle.addEventListener('click', function(){
    navbar.classList.toggle("nav-active")
    toggle.classList.toggle("toggle-active")
})

window.addEventListener("scroll",() =>{ 
    navbar.classList.remove("nav-active")
    toggle.classList.remove("toggle-active")
});
