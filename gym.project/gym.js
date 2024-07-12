
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }


    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
    currentSlide = index;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

const slideInterval = setInterval(nextSlide, 3000);


const BTN = document.getElementById('btn');
BTN.addEventListener('click', () => {
    document.querySelector('.center').style.display="none";
    document.querySelector('.container11').style.display="flex";


})

document.addEventListener('DOMContentLoaded', () => {
    const textWrapper = document.querySelector('#fitnessText');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
        .add({
            targets: '#fitnessText .letter',
            translateY: [100, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: (el, i) => 550 * i,
            offset: '+=500'
        });
});



