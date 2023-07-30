// script.js dosyası

const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let counter = 0;
const slideWidth = slider.querySelector("img").clientWidth;

nextBtn.addEventListener("click", () => {
    counter++;
    if (counter >= slider.children.length) {
        counter = 0;
    }
    slider.style.transition = "transform 0.3s ease-in-out";
    slider.style.transform = `translateX(-${counter * slideWidth}px)`;
});

prevBtn.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
        counter = slider.children.length - 1;
    }
    slider.style.transition = "transform 0.3s ease-in-out";
    slider.style.transform = `translateX(-${counter * slideWidth}px)`;
});

