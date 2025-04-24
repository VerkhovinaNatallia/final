document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.querySelector(".modal-call__open");
    const closeButton = document.querySelector(".modal-call__close");
    const modal = document.querySelector(".modal-call");
    const overlay = document.querySelector(".overlay");

    // Функция открытия модального окна
    function openModal() {
        modal.style.display = "block";
        overlay.style.display = "block";
        overlay.style.zIndex = "200";
        
    }

    // Функция закрытия модального окна
    function closeModal() {
        modal.style.display = "none";
        overlay.style.display = "none";
        overlay.style.zIndex = "99";
    }

    // Слушатели событий для кнопок
    openButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);

    // Закрытие модалки при клике на затемнение (overlay)
    overlay.addEventListener("click", closeModal);
    closeModal();
});
