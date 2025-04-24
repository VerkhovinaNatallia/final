const aboutServiceVisibility= () => {  
    // const container = document.querySelector('.about-service__content')
    const openButton = document.querySelector(".about-service__btn-open");
    const textBlocks = document.querySelectorAll(".about-service__text");
    
   function open(){
        textBlocks.forEach((block, index) => {
            if(index===2){
                block.style.display = "inline";
                
            } else {
                block.style.display = "block";
                textBlocks[3].style.display = "none";
            }
        });
        openButton.style.display = "none";
    } 

    if(window.matchMedia("(max-width: 699px)").matches){
        textBlocks[0].style.display = "block";
        textBlocks[1].style.display = "none";
        textBlocks[3].style.display = "none";
        openButton.style.display='flex';
        // openButton.removeEventListener("click",open)
        openButton.addEventListener("click",open);
    }else if(window.matchMedia("(max-width: 1299px)").matches) {
        textBlocks[0].style.display = "block";
        textBlocks[1].style.display = "block";
        textBlocks[2].style.display = "none";
        textBlocks[3].style.display = "none";
        openButton.style.display = "flex";
        openButton.addEventListener("click",open);
    }else if(window.matchMedia("(min-width: 1300px)").matches){
        textBlocks[0].style.display = "block";
        textBlocks[1].style.display = "block";
        textBlocks[2].style.display = "inline";
        textBlocks[3].style.display='none';
        openButton.style.display = "flex";
        
        openButton.addEventListener("click", function () {

        openButton.style.display = "none";
        textBlocks[3].style.display='block';
    });
}
}
window.addEventListener("resize", aboutServiceVisibility);
window.addEventListener("load", aboutServiceVisibility);