document.querySelector(".fade-layer").addEventListener("click",toggleMenu);

document.querySelector(".menu-button").addEventListener("click",toggleMenu);

document.querySelector(".material-symbols-outlined").addEventListener("click",toggleMenu);

function toggleMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
}