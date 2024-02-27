document.querySelector(".fade-layer").addEventListener("click", showMenu)

document.querySelector(".menu-button").addEventListener("click", showMenu)

document.querySelector("material-symbols-outlined").addEventListener("click", hideMenu)

document.querySelector(".fade-layer").addEventListener("click", hideMenu)

function showMenu(){
    let menu = document.querySelector("nav.menu")
    menu.classList.toggle("show")

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}

function hideMenu(){
    let menu = document.querySelector("nav.menu")
    menu.classList.toggle("hide")

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("invisible")
}