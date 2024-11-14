// Chọn tất cả các mục bên trái
const menuItems = document.querySelectorAll('.menu-item');

// Chọn tất cả các nội dung bên phải
const contents = document.querySelectorAll('.content');

// Thêm sự kiện "click" cho từng mục
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Xóa lớp 'active' từ tất cả các mục và nội dung
        menuItems.forEach(i => i.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Thêm lớp 'active' cho mục và nội dung được chọn
        item.classList.add('active');
        contents[index].classList.add('active');
    });
});

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

// Chức năng hiển thị nội dung bên phải khi chọn mục bên trái
function showContent(contentId) {
    // Ẩn tất cả các nội dung
    const contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        content.style.display = 'none'; // Ẩn tất cả
    });

    // Hiển thị nội dung đã chọn
    document.getElementById(contentId).style.display = 'block';
}

// Hiển thị nội dung đầu tiên khi tải trang
document.addEventListener('DOMContentLoaded', function () {
    showContent('content1');
});
