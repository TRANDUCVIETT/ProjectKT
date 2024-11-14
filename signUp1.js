function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var toggleIcon = document.getElementById("toggle-password-icon");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash"); // Đổi icon thành mắt đóng
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye"); // Đổi icon thành mắt mở
    }
}

function validateForm() {
    // Lấy các giá trị từ form
    const name = document.getElementById("name_and_surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const agree = document.getElementById("agree").checked;

    if (name && email && password && agree) {
        // Lưu thông tin vào localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        // Chuyển hướng sang trang đăng nhập
        window.location.href = "Login.html";
        return false;
    } else {
        alert('Please fill out all fields and agree to the terms.');
        return false;
    }
}
