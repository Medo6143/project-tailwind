let button =document.getElementById("button")
 let mobilmenu = document.getElementById("mobile-menu")


button.addEventListener("click",open)

function open () {
    mobilmenu.classList.toggle("hidden")

}