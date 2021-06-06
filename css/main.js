const gotop = document.querySelector(".gotop");

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 200){
        gotop.classList.add("active");
    }else{
            gotop.classList.remove("active");
        }
    
})