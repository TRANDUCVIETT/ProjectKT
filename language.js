// Lấy phần tử select để chọn ngôn ngữ
const languageSelect = document.getElementById('language-select');

// Hàm để thay đổi ngôn ngữ trên trang
function changeLanguage(lang) {
    // Tìm tất cả các phần tử có thuộc tính data-lang-eng và data-lang-vie
    const langElements = document.querySelectorAll('[data-lang-eng]');

    // Thay đổi nội dung của từng phần tử dựa trên ngôn ngữ được chọn
    langElements.forEach(function (element) {
        element.textContent = lang === 'eng' 
            ? element.getAttribute('data-lang-eng') 
            : element.getAttribute('data-lang-vie');
    });

    // Lưu ngôn ngữ đã chọn vào localStorage để dùng cho lần tải trang tiếp theo
    localStorage.setItem('selectedLanguage', lang);
}

// Lắng nghe sự kiện thay đổi ngôn ngữ
languageSelect.addEventListener('change', function () {
    const selectedLang = languageSelect.value; // Lấy ngôn ngữ được chọn
    changeLanguage(selectedLang);
});

// Kiểm tra nếu ngôn ngữ đã được lưu trước đó trong localStorage
const savedLanguage = localStorage.getItem('selectedLanguage') || 'eng';
languageSelect.value = savedLanguage; // Đặt giá trị cho ô chọn ngôn ngữ
changeLanguage(savedLanguage); // Thay đổi nội dung trang theo ngôn ngữ đã lưu


document.querySelector('.view-tour').addEventListener('click', function() {
    window.location.href = 'URL_mới';
});
