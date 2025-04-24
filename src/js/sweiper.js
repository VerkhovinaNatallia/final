let swiperPrice;
let swiperBrand;
let swiperTechnique;

const initSwipers = () => {
    if (window.innerWidth <= 700 && !swiperPrice) {
        document.querySelectorAll(".service-pricing__pagination").forEach(el => el.style.display = "block");
        swiperPrice = new Swiper(".service-pricing__container", {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: ".service-pricing__pagination",
                clickable: true,
            },
        });
    } else if (window.innerWidth > 700 && swiperPrice) {
        swiperPrice.destroy();
        swiperPrice = null;
        document.querySelectorAll(".service-pricing__pagination").forEach(el => el.style.display = "none");
    }

    if (window.innerWidth <= 700 && !swiperBrand) {
        document.querySelectorAll(".brand-slider__pagination").forEach(el => el.style.display = "block");
        swiperBrand = new Swiper(".brand-slider__container", {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: ".brand-slider__pagination",
                clickable: true,
            },
        });
    } else if (window.innerWidth > 700 && swiperBrand) {
        swiperBrand.destroy();
        swiperBrand = null;
        document.querySelectorAll(".brand-slider__pagination").forEach(el => el.style.display = "none");
    }

    if (window.innerWidth <= 700 && !swiperTechnique) {
        document.querySelectorAll(".repair-types__pagination").forEach(el => el.style.display = "block");
        swiperTechnique = new Swiper(".repair-types__slider", {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: ".repair-types__pagination",
                clickable: true,
            },
        });
    } else if (window.innerWidth > 700 && swiperTechnique) {
        swiperTechnique.destroy();
        swiperTechnique = null;
        document.querySelectorAll(".repair-types__pagination").forEach(el => el.style.display = "none");
    }

};

// Запускаем при загрузке страницы
document.addEventListener("DOMContentLoaded", initSwipers);

// Запускаем при изменении ширины экрана (без перезагрузки!)
window.addEventListener("resize", initSwipers);
