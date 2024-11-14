document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("language-select");
    const prices = document.querySelectorAll(".price");
    const fromText = document.querySelectorAll(".from-text");

    // Hàm thay đổi ngôn ngữ cho giá tiền
    function updateLanguage() {
        const selectedLanguage = languageSelect.value;

        fromText.forEach(text => {
            text.textContent = selectedLanguage === "vie" ? "từ" : "from";
        });
    }

    // Lắng nghe sự kiện thay đổi ngôn ngữ
    languageSelect.addEventListener("change", updateLanguage);

    // Cập nhật ngôn ngữ ban đầu
    updateLanguage();
});
