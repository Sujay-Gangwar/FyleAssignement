let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(index);
    });
});

showSlide(currentSlide);

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);
