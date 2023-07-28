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

// script.js dosyası

// Diğer kodlar

const bulletsContainer = document.querySelector(".slider-bullets");
const imagesCount = slider.children.length;

// Bullet'ları oluştur ve ekranı yükle
for (let i = 0; i < imagesCount; i++) {
  const bullet = document.createElement("span");
  bullet.classList.add("slider-bullet");
  if (i === counter) {
    bullet.classList.add("active");
  }
  bulletsContainer.appendChild(bullet);
}

function updateBullets() {
  const bullets = document.querySelectorAll(".slider-bullet");
  bullets.forEach((bullet, index) => {
    if (index === counter) {
      bullet.classList.add("active");
    } else {
      bullet.classList.remove("active");
    }
  });
}

nextBtn.addEventListener("click", () => {
  counter++;
  if (counter >= imagesCount) {
    counter = 0;
  }
  slider.style.transition = "transform 0.3s ease-in-out";
  slider.style.transform = `translateX(-${counter * slideWidth}px)`;
  updateBullets();
});

prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = imagesCount - 1;
  }
  slider.style.transition = "transform 0.3s ease-in-out";
  slider.style.transform = `translateX(-${counter * slideWidth}px)`;
  updateBullets();
});
