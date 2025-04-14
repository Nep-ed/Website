document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider-track");
    const images = document.querySelectorAll(".slider-track img");
    let index = 0;

    function slideImages() {
        index++;
        if (index >= images.length) {
            index = 0; // Reset to first image
        }
        const offset = -index * 310; // 300px width + 10px gap
        slider.style.transform = `translateX(${offset}px)`;
    }

    setInterval(slideImages, 2000); // Auto scroll every 2 sec
});
