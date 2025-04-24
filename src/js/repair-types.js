const slides = document.querySelectorAll('.repair-types__slide');
const open = document.querySelector('.repair-types__btn--open');
let currentSlide=0;

function handleResize(){
    if (window.matchMedia("(max-width: 700px)").matches) {
        open.style.display="none";
    } else if (window.matchMedia("(max-width: 1300px)").matches) {
        open.style.display = "flex";
        slides.forEach((slide, index) => {
            slide.style.display='none';
            if (index < 3) {
                slide.style.display='flex';
            } 

            open.addEventListener("click", () => {
                open.style.display="none";
                slides.forEach((slide, index)=>{
                    if (index > 3) {
                        slide.style.display='flex';
                    } 
                })
            });
        });
    } else if (window.matchMedia("(min-width: 1300px)").matches){
        open.style.display="flex";
        slides.forEach((slide, index) => {
            slide.style.display='none';
            if (index < 4) {
                slide.style.display='flex';
            } 
            open.addEventListener("click", () => {
                open.style.display="none";
                slides.forEach((slide, index)=>{
                    if (index > 4) {
                        slide.style.display='flex';
                    } 
                })
            });
        });
    }
}

handleResize();

// Добавляем обработчик события resize
window.addEventListener("resize", handleResize);
