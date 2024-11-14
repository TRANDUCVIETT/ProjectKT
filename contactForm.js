document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

    // Lấy dữ liệu từ các trường của form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Lưu dữ liệu vào localStorage để có thể sử dụng trên trang evaluate.html
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    // Chuyển hướng sang trang evaluate.html
    window.location.href = 'evaluate.html';
});
