const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    const translateXValue = -currentIndex * 100;
    slides.style.transform = `translateX(${translateXValue}%)`;
}

setInterval(nextSlide, 2000);