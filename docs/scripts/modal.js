document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const images = Array.from(document.querySelectorAll(".grid.container .img"));
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.classList.add("modal-trigger"); // Asegura que solo las imágenes del grid sean triggers
        img.addEventListener("click", function () {
            currentIndex = index;
            modalImg.src = this.src;
            modal.style.display = "flex";
        });
    });

    function changeImage(step) {
        currentIndex = (currentIndex + step + images.length) % images.length;
        modalImg.src = images[currentIndex].src;
    }

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    prevBtn.addEventListener("click", function () {
        changeImage(-1);
    });

    nextBtn.addEventListener("click", function () {
        changeImage(1);
    });

    document.addEventListener("keydown", function (event) {
        if (modal.style.display === "flex") {
            if (event.key === "ArrowLeft") changeImage(-1);
            if (event.key === "ArrowRight") changeImage(1);
            if (event.key === "Escape") modal.style.display = "none";
        }
    });
});