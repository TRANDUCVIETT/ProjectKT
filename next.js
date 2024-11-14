const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollPosition = 0;
const cardWidth = 300 + 16; // Width of each card plus gap

// Next Button Event
nextBtn.addEventListener('click', () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (scrollPosition < maxScroll) {
        scrollPosition += cardWidth;
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
});

// Previous Button Event
prevBtn.addEventListener('click', () => {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
});
