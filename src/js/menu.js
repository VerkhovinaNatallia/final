const updateMenuVisibility= () => {
    const burger = document.querySelector(".header__burger");
    const close = document.querySelector(".menu__btn--close");
    const block = document.querySelector(".menu-container");
    const overlay = document.querySelector(".overlay");
    if (window.matchMedia("(max-width: 1299px)").matches) {
        block.style.display = "none";
        overlay.style.display = "none";
            burger.addEventListener("click", () => {
                block.style.display = "flex";
                overlay.style.display = "block";
            });

            close.addEventListener("click", () => {
                block.style.display = "none";
                overlay.style.display = "none";
            });
            overlay.addEventListener("click", ()=>{
                block.style.display = "none";
                overlay.style.display = "none"; 
            });
}else{
    block.style.display = "flex";
    overlay.style.display = "none";
}
}

window.addEventListener("resize", updateMenuVisibility);
window.addEventListener("load", updateMenuVisibility);
