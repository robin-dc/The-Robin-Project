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

const projects = document.querySelector(".btn-project")
var mq = window.matchMedia('(max-width:1000px)')

function render(e){
    if(e.matches){
        projects.innerHTML = `<i class="fa-solid fa-diagram-project"></i>PROJECTS`
    }
    else{
        projects.innerText = "RECENT PROJECTS"
    }
}
render(mq)
mq.addEventListener('change', render)
