function toggleDropdown() {
    document.getElementById("userDropdown").classList.toggle("show");
}

// Đóng dropdown nếu nhấn ra ngoài
window.onclick = function(event) {
    if (!event.target.matches('.profile-icon')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let currentIndex = 0;

function prevSlide() {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
}

function nextSlide() {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
}