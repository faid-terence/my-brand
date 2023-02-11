/*--------------------Toggle dtyle switcher---------------------------*/

const styleSwitcherToggle= document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})


window.addEventListener("scroll", ()=>{
    if (document.querySelector(".style-switcher").classList.toggle("open"))
})












const dayNight=document.querySelector(".day-night");
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");

    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})