// Lấy tất cả các phần tử <p> trong .text1 và .text2
const titleItems1 = document.querySelectorAll('.text1 p');
const titleItems2 = document.querySelectorAll('.text2 p');

// Thêm sự kiện click cho mỗi phần tử trong .text1
titleItems1.forEach(item => {
    item.addEventListener('click', () => {
        // Xóa class 'active' khỏi tất cả các phần tử trong .text1
        titleItems1.forEach(el => el.classList.remove('active'));
        // Thêm class 'active' vào phần tử hiện tại
        item.classList.add('active');
    });
});

// Thêm sự kiện click cho mỗi phần tử trong .text2
titleItems2.forEach(item => {
    item.addEventListener('click', () => {
        // Xóa class 'active' khỏi tất cả các phần tử trong .text2
        titleItems2.forEach(el => el.classList.remove('active'));
        // Thêm class 'active' vào phần tử hiện tại
        item.classList.add('active');
    });
});

// Hàm xử lý khi thay đổi ngôn ngữ từ dropdown
document.querySelector('select').addEventListener('change', function () {
    const selectedLanguage = this.value;
    if (selectedLanguage === "EN") {
        alert("Ngôn ngữ đã chuyển sang Tiếng Anh");
    } else if (selectedLanguage === "Vi") {
        alert("Ngôn ngữ đã chuyển sang Tiếng Việt");
    }
});

// Hàm xử lý khi nhấn nút đăng ký (hình ảnh)
document.querySelector('.signup img').addEventListener('click', function () {
    window.location.href = 'signup.html'; // Chuyển hướng đến trang đăng ký
});