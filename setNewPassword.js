function togglePasswordVisibility(inputId, iconId) {
    const passwordField = document.getElementById(inputId);
    const eyeIcon = document.getElementById(iconId);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash"); // Đổi icon thành mắt đóng
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye"); // Đổi icon thành mắt mở
    }
}


// Kiểm tra tính hợp lệ của mật khẩu
document.getElementById("new-password-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định

    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match. Please re-enter.");
    } else {
        // Chuyển hướng sang trang passwordReset.html khi mật khẩu hợp lệ
        window.location.href = "passwordReset.html";
    }
});
