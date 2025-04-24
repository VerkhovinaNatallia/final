const slides = document.querySelectorAll('.brand-slider__slide');
// const slides_content=document.querySelectorAll('.brand-slider__slide');
// const hide = document.querySelector('.slider__button--hide');
const open = document.querySelector('.brand-slider__button--open');
let currentSlide=0;

function handleResize(){
    if (window.matchMedia("(max-width: 700px)").matches) {
        open.style.display="none";

        // hide.style.display='none';
    } else if (window.matchMedia("(min-width: 700px) and (max-width: 1300px)").matches) {
        open.style.display="flex";
        slides.forEach((slide, index) => {
            slide.style.display='none';
            if (index < 6) {
                slide.style.display='flex';;
            } 

            open.addEventListener("click", () => {
                open.style.display="none";
                slides.forEach((slide, index)=>{
                    if (index > 6) {
                        slide.style.display='flex';;
                    } 
                })
            });
            //     hide.addEventListener("click", () => {
            //         open.style.display="block";
            //         hide.style.display='none';
            //         slides.forEach((slide, index)=>{
            //             if (index > 6) {
            //                 slide.style.display='none';;
            //             } 
            //         })
 
                
            // });  

        });
    } else if (window.matchMedia("(min-width: 1300px)").matches){
        open.style.display="flex";
        slides.forEach((slide, index) => {
            slide.style.display='none';
            if (index < 8) {
                slide.style.display='flex';
            } 
            open.addEventListener("click", () => {
                open.style.display="none";
                slides.forEach((slide, index)=>{
                    if (index > 8) {
                        slide.style.display='flex';
                    } 
                })
            });
            // hide.addEventListener("click", () => {
            //     open.style.display="flex";
            //     hide.style.display='none';
            //     slides.forEach((slide, index)=>{
            //             if (index > 8) {
            //                 slide.style.display='none';
            //             } 
            // })
            //     });
        });
    }
}

handleResize();

// Добавляем обработчик события resize
window.addEventListener("resize", handleResize);
