const navbarEL = document.querySelector(".navbar")
const bottomContainerEl = document.querySelector(".bottom-container")

window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEL.offsetHeight - 50){
        navbarEL.classList.add("active")
    } else if (window.scrollY < bottomContainerEl.offsetTop){
        navbarEL.classList.remove("active")
    }
    
})
