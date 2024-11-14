// Lấy dữ liệu từ localStorage và hiển thị lên trang evaluate.html
document.getElementById('displayName').textContent = localStorage.getItem('name') || "No data";
document.getElementById('displayEmail').textContent = localStorage.getItem('email') || "No data";
document.getElementById('displayMessage').textContent = localStorage.getItem('message') || "No data";

// Tùy chọn: Xóa dữ liệu khỏi localStorage sau khi hiển thị (nếu muốn)
localStorage.removeItem('name');
localStorage.removeItem('email');
localStorage.removeItem('message');
