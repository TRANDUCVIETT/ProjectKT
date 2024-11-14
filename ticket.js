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


// Lấy phần tử select để chọn ngôn ngữ
const languageSelect = document.getElementById('language-select');

// Lắng nghe sự kiện thay đổi ngôn ngữ
languageSelect.addEventListener('change', function () {
    const selectedLang = languageSelect.value; // Lấy ngôn ngữ được chọn

    // Tìm tất cả các phần tử có thuộc tính data-lang-eng và data-lang-vie
    const langElements = document.querySelectorAll('[data-lang-eng]');

    // Thay đổi nội dung của từng phần tử dựa trên ngôn ngữ được chọn
    langElements.forEach(function (element) {
        if (selectedLang === 'eng') {
            element.textContent = element.getAttribute('data-lang-eng');
        } else {
            element.textContent = element.getAttribute('data-lang-vie');
        }
    });
});