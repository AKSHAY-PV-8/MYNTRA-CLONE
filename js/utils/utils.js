
const sidebar = document.getElementById("filter-section");
const stickPoint = 100;

window.addEventListener("scroll", () =>{
    if(window.scrollY >= stickPoint){
        sidebar.classList.add("fixed")
    }else{
        sidebar.classList.remove("fixed")
    }
})